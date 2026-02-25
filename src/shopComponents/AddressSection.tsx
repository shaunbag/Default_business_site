import { useShopStore } from "../store";
import type { Address, Order } from "../utils/types";

type Props = {
    addressType: "shipping" | "billing";
}

export default function AddressSection({ addressType }: Props) {

    const { placeOrder, order } = useShopStore();

    function handleSaveAddress(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const address: Address = {
            street: formData.get("street") as string,
            city: formData.get("city") as string,
            county: formData.get("county") as string,
            postcode: formData.get("postcode") as string,
            country: formData.get("country") as string
        }
        const newOrder: Order = {
            cart: order?.cart || [],
            shippingAddress: addressType === "shipping" ? address : order?.shippingAddress || null,
            billingAddress: addressType === "billing" ? address : order?.billingAddress || null
        } 
        placeOrder(newOrder);
    }

    return (
        <div className="checkout-address">
            <h2>{addressType === "shipping" ? "Shipping Address" : "Billing Address"}</h2>
            <form onSubmit={handleSaveAddress}>
                <label>Address Line 1</label>
                <input type="text" placeholder="Address Line 1" name="street" />
                <label>City</label>
                <input type="text" placeholder="City" name="city" />
                <label>County</label>
                <input type="text" placeholder="County" name="county" />
                <label>Postcode</label>
                <input type="text" placeholder="Postcode" name="postcode" /> 
                <button type="submit">Save Address</button>
            </form>
        </div>
    )
}