import { Items } from "../components/item/Items.jsx";
import { items } from "../components/item/items.js";


export function Item ( ){
    return (
        <main className="container py-4">
            <div className="w3-row">
                { items.map( (item, idx) => <Items key={idx} bodyItem={item} /> ) }
            </div>
        </main>
    )
}