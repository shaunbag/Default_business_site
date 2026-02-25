export type Item = {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
}

export type Address = {
    street: string;
    city: string;
    county: string;
    postcode: string;
    country: string;
}

export type Order = {
    cart: Item[];
    shippingAddress: Address | null;
    billingAddress: Address | null;
}