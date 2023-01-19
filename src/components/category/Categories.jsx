export function Categories ( { bodyArticle } ) {
    return (
        <figure className='w3-quarter w3-hover-opacity w3-center p-0 m-0'>
            <div className="w3-container w3-center">
                <figcaption>{ bodyArticle.title  }</figcaption>
            </div>
            <div className="w3-padding-large">
                <img className='w3-circle' height='200px' width='200px' alt={ bodyArticle.title } src={ bodyArticle.imgUrl } style={ {objectFit: 'cover'} } />
            </div>
        </figure>
    )
}