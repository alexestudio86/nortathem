export function Items ( { bodyItem } ){
    return(
        <article className="w3-half w3-padding">
            <div className="w3-white w3-card">
                <div className="w3-cell-row w3-padding">
                    <div className="w3-cell w3-cell-middle">
                        <img src={ bodyItem.itemImage } alt={ bodyItem.itemTitle } />
                    </div>
                    <div className="w3-cell w3-cell-middle w3-padding">{ bodyItem.itemDescription }</div>
                </div>
                <div className="w3-cell-row w3-cell-middle w3-light-gray">
                    <h1 className="w3-large w3-center w3-padding">{ bodyItem.itemTitle }</h1>
                </div>
            </div>
        </article>
    )
}