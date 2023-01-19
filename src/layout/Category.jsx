import { Categories } from '../components/category/Categories';
import { categories } from '../components/category/categories'

export function Category () {
    return (
        <div className='container py-4'>
            <div className='w3-row'>
                { categories.map( (categoria, index) => <Categories key={index} bodyArticle={categoria} /> ) }
            </div>
        </div>
    )
}