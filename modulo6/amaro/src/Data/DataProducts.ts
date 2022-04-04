import { BaseDatabase } from "./Connection";
import { product } from "../types";

class ProductDatabase extends BaseDatabase {

  public async InsertProduct(id: Number, name:string): Promise<void> {
    try {
      await this.getConnection()
      .insert({
        id:id,
        name:name
      })
      .into("amaro_products");
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async InsertTags(id:Number, tag:string): Promise<void> {
    try {
      await this.getConnection()
      .insert({
        product_id:id,
        tag:tag
      })
      .into("amaro_tags");
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async searchProductById(search:string): Promise<any> {
    try {
      const result = await this.getConnection()
      .select()
      .from("amaro_products")
      .where({id: search});
      return result;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async searchProductByName(search:string): Promise<any> {
    try {
      const result = await this.getConnection()
      .select()
      .from("amaro_products")
      .whereLike("name", `%${search}%`);
      return result;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async searchProductByTag(search:string): Promise<any> {
    try {
      const result = await this.getConnection()
      .select("product_id")
      .from("amaro_tags")
      .where({tag: search});
      return result;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async searchProductByNametag(id:string): Promise<any> {
    try {
      const result = await this.getConnection()
      .select("tag")
      .from("amaro_tags")
      .where({product_id: id});
      return result;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}

export default new ProductDatabase();
