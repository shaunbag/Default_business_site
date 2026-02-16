import { useMemo, useState } from "react";
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import { useShopStore } from "../store";
import ItemView from "../shopComponents/ItemView";
import "../styles/shop.css";

export default function Shop() {

    const { items } = useShopStore();
    const [query, setQuery] = useState("");

    const maxValue = useMemo(() => {
        return Math.max(...items.map(i => i.price));
    }, [items]);
    
    const [value , setValue] = useState(maxValue);

    const filtered = useMemo(() => {
        return items.filter(i => {
            const queryMatches = i.title.toLowerCase().includes(query.toLowerCase());
            const priceMatches = i.price <= value;
            return queryMatches && priceMatches;
        });
    }, [items, query, value]);

    return(
        <main>
            <NavBar shopNav={true} />
            <div className="items-search">
                Search:
                <input type="text" value={query} onChange={(e) => {
                setQuery(e.target.value)}}/>
                Price: 
                <input type="range" step={0.01} value={value} min="0" max={maxValue} onChange={(e) => setValue(Number(e.target.value))}/>
                <p>${value}</p>
            </div>
           
            <section className="items-container">
            {
                filtered.map(item => {
                    return <ItemView key={item.id} item={item} />
                })
            }
            </section>
           
            <Footer />
        </main>
    )
}