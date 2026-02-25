import { useNavigate } from "react-router-dom";
import type { Item } from "../utils/types";

type Props = {
    item: Item; 
}

export default function ItemView({item}: Props) {

    const history = useNavigate();

    return (
        <section className="item-view" onClick={() => history(`/item/${item.id}`)}>
            <h3>{item.title}</h3>
            <img src={item.image} width={100} />
            <p>${item.price}</p>
        </section>
    )
}