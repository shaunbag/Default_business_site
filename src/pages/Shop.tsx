import { useEffect, useState } from "react";
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import { useShopStore } from "../store";
import ItemView from "../shopComponents/ItemView";
import "../styles/shop.css";

export default function Shop(){

    const { items, addItems } = useShopStore();
    const [query, setQuery] = useState("");


    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                if(!response.ok){
                    throw new Error("Failed to fetch items");
                }
                
                const data = await response.json();
                addItems(data);
            } catch(error){
                console.error("Error fetching items:", error);
            }
        }
        fetchItems();
    },[addItems])


    return(
        <main>
            <NavBar shopNav={true} />
            <div className="items-search">
                Search:
                <input type="text" value={query} onChange={(e) => {
                setQuery(e.target.value)}}/>
            </div>
           
            <section className="items-container">
            {
                items.filter(i => i.title.includes(query)).map(item => {
                    return <ItemView key={item.id} item={item} />
                })
            }
            </section>
           
            <Footer />
        </main>
    )
}