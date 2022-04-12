import DataProducts from "../Data/DataProducts";
import { product } from "../types";

class ProductBussiness {
  async insertProduct(products: Array<product>) {
    if (!products) {
      throw new Error("Não existe produtos");
    }

    for (let item of products) {
      await DataProducts.InsertProduct(item.id, item.name);

      let tags = item.tags;
      for (let tag of tags) {
        await DataProducts.InsertTags(item.id, tag);
      }
    }

    return "Products inserted successfully!";
  }

  async searchProductById(search: string, nameSearch:string) {
    if (!search) {
        throw new Error("Nenhum resultado");
    }

    const result = await DataProducts.searchProductById(search)
    if(!result[0]){
      throw new Error("Nenhum produto encontrado")
    }

    return result;
  }

  async searchProductByName(search: string, nameSearch:string) {
    if (!search) {
        throw new Error("Nenhum resultado");
    }

    const result = await DataProducts.searchProductByName(search.toUpperCase())
    if(!result[0]){
      throw new Error("Nenhum produto encontrado")
    }

    return result;
  }

  async searchProductByTag(search: string, nameSearch:string) {
    if (!search) {
        throw new Error("Nenhum resultado");
    }
    let products = []
    let tags = []
    const result = await DataProducts.searchProductByTag(search)
    if(!result[0]){
      throw new Error("Nenhum produto encontrado")
    }

    for(let item of result){
      products.push(await DataProducts.searchProductById(item.product_id))
      tags.push(await DataProducts.searchProductByNametag(item.product_id))
    }

    console.log(tags)

    return products;
  }
}  

export default new ProductBussiness();