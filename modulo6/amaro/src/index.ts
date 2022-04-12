import app from "./app";
import ControllerProducts from "./Controller/ControllerProducts";


app.post("/insert", ControllerProducts.insertProduct)
app.get("/search/id", ControllerProducts.searchProductById)
app.get("/search/name", ControllerProducts.searchProductByName)
app.get("/search/tag", ControllerProducts.searchProductByTag)

/*
CREATE TABLE amaro_products(  
    id int NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE amaro_tags(
    product_id int NOT NULL,
    tag VARCHAR(255) NOT NULL,
    FOREIGN KEY (product_id) REFERENCES amaro_products(id)
)
*/