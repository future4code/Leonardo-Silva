import { BaseDatabase } from "../Data/Connection";
import { Request, Response } from "express";
import BussinessProducts from "../Bussiness/BussinessProducts";

class ProductController {

    async insertProduct(req: Request, res: Response): Promise<void> {
      try {
        const { products } = req.body;
       
        const message:string = await BussinessProducts.insertProduct(products);
        res.status(200).send({ message });
      } catch (error: any) {
        res.status(400).send({
          message: error.message,
        });
      } finally {
        await BaseDatabase.destroyConnection();
      }
    }

    async searchProductById(req: Request, res: Response): Promise<void> {
      try {
        let search = ""
        let nameSearch = ""
        if(req.query.search){
          search = req.query.search as string;
          nameSearch = "id"
        }
        
       
        const result = await BussinessProducts.searchProductById(search, nameSearch);
        res.status(200).send({ result });
      } catch (error: any) {
        res.status(400).send({
          message: error.message,
        });
      } finally {
        await BaseDatabase.destroyConnection();
      }
    }

     async searchProductByName(req: Request, res: Response): Promise<void> {
      try {
        console.log(req.query.search)
        let search = ""
        let nameSearch = ""
        if(req.query.search){
          search = req.query.search as string;
          nameSearch = "name"
        }
        
       
        const result = await BussinessProducts.searchProductByName(search, nameSearch);
        res.status(200).send({ result });
      } catch (error: any) {
        res.status(400).send({
          message: error.message,
        });
      } finally {
        await BaseDatabase.destroyConnection();
      }
    }

    async searchProductByTag(req: Request, res: Response): Promise<void> {
      try {
 
        let search = ""
        let nameSearch = ""
        if(req.query.search){
          search = req.query.search as string;
          nameSearch = "tag"
        }
        
       
        const products = await BussinessProducts.searchProductByTag(search, nameSearch);
        res.status(200).send({ products });
      } catch (error: any) {
        res.status(400).send({
          message: error.message,
        });
      } finally {
        await BaseDatabase.destroyConnection();
      }
    }

}

export default new ProductController();