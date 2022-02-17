interface tipagemUser {
  [key:string]:string
}


export interface User extends tipagemUser {
  name:string,
  email:string,
  password:string
}

interface tipagemProduct {
  [key:string]:string | number
}


export interface Product extends tipagemProduct {
  name:string,
  price:number,
  image_url:string
}
  
interface tipagemPurchases {
  [key:string]: number
}


export interface Purchase extends tipagemPurchases {
  user_id:number,
  product_id:number,
  quantity:number
}