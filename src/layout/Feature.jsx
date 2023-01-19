import { Features } from '../components/feature/Features';
import { features } from '../components/feature/features';


export function Feature ( ){
    return (
        <div className='container py-4'>
            <div className='w3-row'>
                { features.map( (feature, index) => <Features key={index} bodyFeature={feature} /> ) }
            </div>
        </div>
    )
}