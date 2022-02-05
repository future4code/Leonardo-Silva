### Exercicio 1
a) VARCHAR(n) serve para declarar texto, e colocamos o número de caracteres que desejamos entre parentes na frente, ja o DATE serve para declararmos uma data.

b)O comando mostra todas as DATABESES, ou todas as Tabelas.

c)O comando mostra toda o esqueleto da tabela, com todas as informações e declarações de cada coluna.

### Exercicio 2

a) 
```INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
    "002", 
    "Glória Pires",
    1200000,
    "1963-08-23", 
    "female"
    );
```

b) Code: 1062. Duplicate entry '002' for key 'PRIMARY'	0.156 sec

Isso acontece porque a coluna ID esta definida como Primary key, ou seja, não é possível valores iguais nessa coluna, pois o ID é o identificador único

### Exercicio 3

a) ```SELECT * FROM Actor WHERE gender = "female";```

b) ```SELECT salary FROM Actor WHERE name = "Tony Ramos";```

c) O campo de genero está definido como VARCHAR, aceitando apenas textos, no caso ele aceita qualquer coisa e não somente "male" ou "female", mas precisa ser entre aspas

d) ```SELECT id, name, salary FROM Actor WHERE salary <= 500000;```

e)o campo "nome" não existe, o correto seria "name".

### Exercicio 4

a) "mostre todos os resultados da tabela atores, onde o nome comece com a Letra A ou com a letra J, e tenha o salario maior que 300.000"

b) ```SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000; ```

c)```SELECT * FROM Actor
WHERE (name LIKE "%G%") OR name LIKE "%g%";```

d)```SELECT * FROM Actor
WHERE (name LIKE "%G%") OR name LIKE "%g%" OR name like "%A%" OR name like "%a%" AND salary BETWEEN 350000 AND 900000; ```

### Exercicio 5

a)```CREATE TABLE Movie (
		id VARCHAR(255) PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        sinopse TEXT NOT NULL,
        data_lancamento DATE NOT NULL,
        avaliacao INT NOT NULL
);```

### Exercicio 6

a) ```SELECT id, nome, avaliacao FROM Movie
WHERE id = "002";```

b)```SELECT * FROM Movie
WHERE nome = "Doce de mãe";```

c)```SELECT id, nome, sinopse FROM Movie
WHERE avaliacao >= 7;```

### Exercicio 7

a)```SELECT * FROM Movie
WHERE nome LIKE "%vida%"; ```

b)```SELECT * FROM Movie
WHERE nome LIKE "%vida%" OR sinopse LIKE "%vida%"; ```

c)```SELECT * FROM Movie;```

d)```SELECT * FROM Movie
WHERE nome LIKE "%vida%" OR sinopse LIKE "%vida%" AND avaliacao > 7;```



