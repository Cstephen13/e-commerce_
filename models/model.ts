export type UUID = string;
export type String = string;
export type TProduct = {
    id?: UUID
    name: String
    description: String
    price: number
    image: String,
    category?: String,
    category_id?:String,
}

export type CartItemType = TProduct & { quantity: number }

export type CartState = {
    [key: String]: CartItemType
}

export type CartAction = {
    type: 'add' | 'remove'
    item: TProduct
    quantity?: number
}
export type DetailInvoice = {
    id?: UUID,
    quantity: number,
    product: String | TProduct,
    price_product: number
}
export type Invoice = {
    id?: UUID,
    user: String,
    number_invoice: number,
    total_sale: number,
    payment: number,
    payment_date: String,
    detail_products: DetailInvoice[]
}