import { BaseDatabase } from "./Connection";

class ProductDatabase extends BaseDatabase {

    public async InsertProduct(): Promise<void> {
        try {
         
        } catch (error: any) {
          throw new Error(error.sqlMessage || error.message);
        }
      }



}
