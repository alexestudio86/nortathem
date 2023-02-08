import { Link } from "react-router-dom";

export function Nortathem ( ) {
    return (
        <div className="d-flex justify-content-between py-2">
            <Link className="btn btn-primary" to={'evaluadores'}>Evaluadores</Link>
            <Link className="btn btn-primary" to={'franquicias'}>Franquicias</Link>
            <Link className="btn btn-primary" to={'eventos'}>Eventos Nortathem</Link>
        </div>
    )
}