export function Notices ( {noticeBody} ){
    return (
        <div className="w3-gray">
            <div id='notice' className='container py-2 text-center'>
                <span className="w3-text-white" >{ noticeBody }</span>
            </div>
        </div>
    )
}