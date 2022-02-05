### Exercicio 1

a) Deletar a coluna de salario

b) Trocaria o nome da coluna gender para sex e o tipo para varchar(6)

c) Trocaria sommente o tipo da coluna gender para varchar(255)

d)ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

### Exercicio 2

a) UPDATE Actor SET name = "Moacyr Franco", birth_date = "2020-02-10" WHERE id = "003";

b) UPDATE Actor SET name = "JULIANA PÃES" WHERE name = "Juliana Paes";

c) UPDATE Actor SET name = "Moacyr Franco", birth_date = "2020-02-10", salary = 600000, gender = "male" WHERE id = "005";

d) A query funciona e não da erro, porém como o parâmetro não é encontrado ele não altera nada da tabela.

### Exercicio 3

a) DELETE FROM Actor WHERE name = "Fernanda Montenegro";

b) DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

### Exercicio 4

a) SELECT MAX(salary) FROM Actor;

b) SELECT MIN(salary) FROM Actor WHERE gender = "female";

c) SELECT COUNT(*) FROM Actor WHERE gender = "female";

d) SELECT SUM(salary) FROM Actor;

### Exercicio 5

a) Mostra o total de atores agrupados pelo gênero.

b) SELECT id, name FROM Actor ORDER BY name DESC;

c) SELECT * FROM Actor ORDER BY salary;

d) SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

e) SELECT AVG(salary), gender FROM Actor GROUP BY gender;

### Exercicio 6

a) ALTER TABLE Movie ADD playing_limit_date DATE;

b) ALTER TABLE Movie CHANGE avaliacao avaliacao FLOAT;

c) UPDATE Movie SET playing_limit_date = "2020-12-31" WHERE id = "001";

d) DELETE FROM Movie WHERE id = "001";