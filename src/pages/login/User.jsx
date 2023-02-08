import { Link, useParams } from "react-router-dom"


export function User ( ) {
    const {userId} = useParams();

    return (
        <>
            <h1>Grecia Contreras</h1>
            { userId === '007' &&
                <>
                    <h2>Perfil</h2>
                    <div className="row py-4">
                        <div className="col-4">
                            <i class="fa-solid fa-user fa-6x"></i>
                        </div>
                        <div className="col">
                            <p>Matrícula: 007</p>
                            <p>p sherman wallaby 42 sidney</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <Link className="btn btn-primary" to={'.'}>Personas certificadas</Link>
                        <Link className="btn btn-primary" to={'.'}>Personas incorporadas</Link>
                        <Link className="btn btn-primary" to={'.'}>Franquicias</Link>
                        <Link className="btn btn-primary" to={'.'}>Reglamento</Link>
                        <Link className="btn btn-primary" to={'.'}>Solicitud de documentos</Link>
                    </div>
                </>
            }
        </>
    )
}