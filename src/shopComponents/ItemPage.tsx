import { useNavigate, useParams } from "react-router-dom";
import { useShopStore } from "../store"
import NavBar from "../components/NavBar";
import { useState } from "react";


export default function ItemPage() {

    const itemId = useParams().id;
    const { addToCart, items } = useShopStore();
    const [itemAdded, setItemAdded] = useState(false);
    const item = items.find(i => i.id === Number(itemId));
    const history = useNavigate();

    return (
        <section className="item-page-container">
            <NavBar shopNav={true} />
            <div className="item-details">
                <h2>{item?.title}</h2>
                <img src={item?.image} width={200} />
                <p>{item?.description}</p>
                <p>${item?.price}</p>

                <button onClick={() => {
                    if (item) {
                        
                        addToCart(item)
                        setItemAdded(true);
                        setTimeout(() => {
                            setItemAdded(false);
                        }, 2000);
                    }
                }}>Add to Cart</button>
                <button onClick={() => history("/shop")}>Continue Shopping</button>
                {
                    itemAdded && <p style={{color: "green"}}>Item added to cart!</p>
                }
            </div>
        </section>
    )
}