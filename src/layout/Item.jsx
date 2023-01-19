import { Items } from "../components/item/Items";
import { items } from "../components/item/items";

export function Item ( ){
    return (
        <main className="container py-4">
            <div className="w3-row">
                { items.map( (item, idx) => <Items key={idx} bodyItem={item} /> ) }
            </div>
        </main>
    )
}