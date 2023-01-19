
import { Header } from '../layout/Header';
import { Item } from '../layout/Item';
import { Category } from '../layout/Category';
import { Feature } from '../layout/Feature';


export function HomeView ( ){
    return (
        <>
            <Header />
            <main>
                <Category />
                <Item />
                <Feature />
            </main>
        </>
    )
}