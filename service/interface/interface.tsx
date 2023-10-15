export interface User{
    name: string,
    email: string,
    password: string,
    phonenumber: number,
}

export interface FoodItem {
    id: number,
    name: string,
    detail: string,
    price: string,
    uri: any,
    qty: number,        //Số lượng(quantity)
}