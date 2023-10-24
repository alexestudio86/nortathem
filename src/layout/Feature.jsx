import { Features } from '../components/feature/Features.jsx';
import { features } from '../components/feature/features.js';


export function Feature ( ){
    return (
        <div className='container py-4'>
            <div className='w3-row'>
                { features.map( (feature, index) => <Features key={index} bodyFeature={feature} /> ) }
            </div>
        </div>
    )
}