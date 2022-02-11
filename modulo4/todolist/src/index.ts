import express, { Request, Response } from 'express';
import connection from "./connection"
import cors from "cors";
import { AddressInfo } from "net";

const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

interface tipagemUser {
  [key:string]:string
}

interface tipagemTask {
  [key:string]:string | number
}


interface User extends tipagemUser {
  name:string,
  nickname:string,
  email:string
}

interface Task extends tipagemTask {
    title: string,
    description: string,
    status: string,
    limit_date: string,
    creator_user_id: number
}

interface Responsible extends tipagemTask{
  task_id:number,
  responsible_user_id:number
}

const createUser = async (
    name: string,
    nickname: string,
    email: string,
  ): Promise<void> => {
    await connection.raw(`
          INSERT INTO TodoListUser
            (name, nickname, email)
          VALUES (
          "${name}",
          "${nickname}",
          "${email}"
      );
  `);
};

const createTask = async (
    title: string,
    description: string,
    status: string,
    limit_date: string,
    creator_user_id: number,
  ): Promise<void> => {
    await connection.raw(`
          INSERT INTO TodoListTask
            (title, description, status, limit_date, creator_user_id)
          VALUES (
          "${title}",
          "${description}",
          "${status}",
          "${limit_date}",
          ${creator_user_id}
      );
  `);
};

const createTaskResponsible = async (
  task_id: number,
  responsible_user_id: number,
): Promise<void> => {
  await connection.raw(`
        INSERT INTO TodoListResponsibleUserTaskRelation
          (task_id, responsible_user_id)
        VALUES (
        ${task_id},
        ${responsible_user_id}
    );
`);
};

// ENDPOINT 1 OK-----------------------------------------------------------------------------------------------------------------------------------------------------------
app.post("/user", async (req:Request, res:Response):Promise<void> =>{
    try{
      const {name, nickname, email} = req.body
      const user: User = {name,nickname,email}
      Object.keys(user).forEach(function(item){
        if(!user[item] || user[item] === ""){
            throw new Error(`Tem um item vazio: ${item}`)
        }
      })
        await createUser(name,nickname,email)
        res.status(201).send("Usuário criado!");
    }
    catch(error:any){
      res.status(500).send(error.sqlMessage || error.message);
    }
})

//ENDPOINT 2 OK-----------------------------------------------------------------------------------------------------------------------------------------------------------
app.get("/user/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await connection.raw(`SELECT id, nickname FROM TodoListUser WHERE id = ${req.params.id};`)
    if(!result[0][0]){
      throw new Error("Usuário não encontrado")
      // res.status(200).send(console.log(result[0][0]))
    } else {
      res.status(200).send(result[0][0])
    }
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});

//ENDPOINT 3 -----------------------------------------------------------------------------------------------------------------------------------------------------------
app.put("/user/edit/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    await connection("TodoListUser")
      .update({
        name: req.body.name,
        nickname: req.body.nickname,
        email: req.body.email,
      })
      .where({ id: req.params.id });
    res.status(200).send("Usuário atualizado" );
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});

//ENDPOINT 4 -----------------------------------------------------------------------------------------------------------------------------------------------------------
app.post("/task", async (req:Request, res:Response):Promise<void> =>{
    try{
      const {title, description, status, limit_date, creator_user_id} = req.body
      const task: Task = {title, description, status, limit_date, creator_user_id}
      Object.keys(task).forEach(function(item){
        if(!task[item] || task[item] === ""){
            throw new Error(`Tem um item vazio: ${item}`)
        }
      })
        await createTask(title,description, status, limit_date, creator_user_id)
        res.status(201).send("Tarefa criada!");
    }
    catch(error:any){
      res.status(500).send(error.sqlMessage || error.message);
    }
})

//ENDPOINT 5 -----------------------------------------------------------------------------------------------------------------------------------------------------------
app.get("/task/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await connection.raw(`SELECT id, title, description, status, limit_date, creator_user_id FROM TodoListTask WHERE id = ${req.params.id};`)
    const result2 = await connection.raw(`SELECT id, nickname FROM TodoListUser JOIN 
    TodoListResponsibleUserTaskRelation ON 
    id = responsible_user_id WHERE task_id = ${req.params.id};`)
    const responsible_users = result2[0]
   
     
      let newResult = {...result[0][0], responsible_users}
      if(!result[0][0]){
        throw new Error("Tarefa não encontrada")
      } else {
        res.status(200).send(newResult)
      }
    
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});

//DESAFIO 6 -----------------------------------------------------------------------------------------------------------------------------------------------------------
app.get("/users", async (req: Request, res: Response): Promise<void> => {
  try {
    let result = await connection.raw(`SELECT id, nickname FROM TodoListUser ORDER BY id;`)
    const search: any = req.query.query

    if (search) {
      result = await connection.raw(`
      SELECT id, nickname FROM TodoListUser
      WHERE nickname like '%${search}%'
      `)
    } 

    const newResult = {users: result[0]}
    if(result[0] === []){
      throw new Error("Nenhum usuário encontrado")
    }
    res.status(200).send(newResult)
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});

//DESAFIO 7 -----------------------------------------------------------------------------------------------------------------------------------------------------------
app.get("/tasks", async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await connection.raw(`SELECT id, title, description, status, limit_date, creator_user_id FROM TodoListTask WHERE creator_user_id = ${req.query.creator_user_id};`)
    const newResult = {tasks: result[0]}
    res.status(200).send(newResult)
    
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});

//DESAFIO 8 -----------------------------------------------------------------------------------------------------------------------------------------------------------
//Ok -> Desafio 6

//DESAFIO 9 -----------------------------------------------------------------------------------------------------------------------------------------------------------
app.post("/task/responsible", async (req:Request, res:Response):Promise<void> =>{
  try{
    const {task_id, responsible_user_id} = req.body
    const responsible: Responsible = {task_id, responsible_user_id}
    Object.keys(responsible).forEach(function(item){
      if(!responsible[item] || responsible[item] === ""){
          throw new Error(`Tem um item vazio: ${item}`)
      }
    })
      await createTaskResponsible(task_id, responsible_user_id)
      res.status(201).send("Tarefa atribuída a um responsável!");
  }
  catch(error:any){
    res.status(500).send(error.sqlMessage || error.message);
  }
})

//DESAFIO 10 -----------------------------------------------------------------------------------------------------------------------------------------------------------
app.get("/task/:id/responsible", async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await connection.raw(`SELECT id, nickname FROM TodoListUser JOIN 
    TodoListResponsibleUserTaskRelation ON 
    id = responsible_user_id WHERE task_id = ${req.params.id};`)
    if(!result[0][0]){
      throw new Error("Nenhum usuário atribuído a esta tarefa")
    } else {
      res.status(200).send(result[0])
    }
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});

//DESAFIO 11
//Ok -> Endpoint 5

//DESAFIO 12
app.put("/task/status/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    await connection("TodoListTask")
      .update({
        status: req.body.status,
      })
      .where({ id: req.params.id });
    res.status(200).send("Status atualizado");
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});

//DESAFIO 13
app.get("/task", async (req: Request, res: Response): Promise<void> => {
  try {
    const search: any = req.query.status
    const result = await connection.raw(`SELECT id, title, description, limit_date, creator_user_id FROM TodoListTask WHERE status = "${search}";`)
    const newResult = {tasks: result[0]}
      if(!result[0][0]){
        throw new Error("Nenhuma tarefa não encontrada")
      } else {
        res.status(200).send(newResult)
      }
    
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});

//DESAFIO 14

//DESAFIO 15
app.delete("/task/:taskId/responsible/:responsibleUserId", async (req: Request, res: Response): Promise<void> => {
  try {
    if(!req.params.taskId || !req.params.responsibleUserId){
      throw new Error("Estão faltando parâmetros")
    }
    const result = await connection.raw(`DELETE FROM TodoListResponsibleUserTaskRelation WHERE task_id = ${req.params.taskId} AND responsible_user_id = ${req.params.responsibleUserId};`)
    console.log(result)
    if(result[0].affectedRows === 0){
      throw new Error("Não foi possível realizar a requisição") 
    } else {
      res.status(200).send("Usuário não é mais responsável pela tarefa!") 
    }
    
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});