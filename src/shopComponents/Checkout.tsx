import { useEffect } from "react";
import { useShopStore } from "../store";
import type { Order } from "../utils/types";
import AddressSection from "./AddressSection";
import Cart from "./Cart";

export default function Checkout() { 

    const { placeOrder, order, cart } = useShopStore();

    useEffect(() => {
        console.log("Current Order: ", order);
    }, [order])

    function handlePlaceOrder(){
        if(order?.shippingAddress === null || order?.billingAddress === null || order === null){
            alert("Please fill in both shipping and billing addresses before placing your order.");
            return;
        } else {
            const newOrder: Order = {
                cart: cart,
                shippingAddress: order.shippingAddress,
                billingAddress: order.billingAddress    
            }
            placeOrder(newOrder);
        }
    }

    return (
        <section className="checkout-container">
            <h1>Checkout</h1>
            <Cart className="checkout-cart"/>
            <AddressSection addressType="shipping" />
            <AddressSection addressType="billing" />
            <button className="checkout-submit" onClick={handlePlaceOrder}>Place Order</button>

        </section>
    )
}