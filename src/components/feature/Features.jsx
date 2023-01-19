export function Features ( { bodyFeature } ){
    return(
        <div className='w3-third w3-padding'>
            <div className='w3-center w3-padding'>
                <i className={`w3-jumbo p-2 ${bodyFeature.icono}`} />
                <p className='w3-large'>{ bodyFeature.texto }</p>
            </div>
        </div>
    )
}