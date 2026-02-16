import NavBar from "../components/NavBar";
import { useShopStore } from "../store";

export default function Cart() {

    const { cart, removeFromCart } = useShopStore();    

    function handleRemoveFromCart(id: number){
        removeFromCart(id);
    }

    return(
        <section className="cart-container">
            <NavBar shopNav={true} />
            <h2>My Cart</h2>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td>${item.price}</td>
                                    <td><button onClick={() => handleRemoveFromCart(item.id)}>Remove</button></td>
                                </tr>
                            )
                        }
                    )
                    }
                    <tr><td colSpan={3}>Total: ${cart.reduce((sum, item) => sum + item.price, 0)}</td></tr>
                </tbody>
            </table>
        </section>
    )
}