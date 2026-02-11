import NavBar from "../components/NavBar";
import { useShopStore } from "../store";

export default function Cart() {

    const { cart } = useShopStore();    


    return(
        <section className="cart-container">
            <NavBar shopNav={true} />
            <h2>My Cart</h2>
            <ul>
                {
                    cart.map(item => {
                        return (
                            <li key={item.id}>
                                <h3>{item.title} ${item.price}</h3>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}