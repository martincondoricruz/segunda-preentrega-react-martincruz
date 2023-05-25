import { Link } from "react-router-dom"
export const Secciones = () => {
  return (
    <>
        <li className="nav-item">
          <Link className="nav-link" to={'/'}><button className="btn btn-success">Inicio</button></Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Info</a>
        </li>
        <li>
        <a className="nav-link" href="#">Sucursales</a>
        </li>
    </>
  )
}
        
        
        
        
        
        
        
        
        
        
        



