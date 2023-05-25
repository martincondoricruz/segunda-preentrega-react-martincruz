import { Link } from "react-router-dom"
export const Categorias = () => {

  let categorias = [
    {
      nombre: "Cactus",
      id: 1
    },
    {
      nombre: "Interior",
      id: 2
    },
    {
      nombre: "Suculentas",
      id: 3
    },
  ]

  return (
     <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <button className="btn btn-success">Categorias</button>
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to= {`/`}>Todos</Link>
            </li>
          {
          categorias.map((el) => {
            return (
              <li key={el.id}>
                <Link className="dropdown-item" to={`/category/${el.nombre}`}>{el.nombre}</Link>
              </li>
            )
          })
        }
          </ul>
    </li>
  )
}