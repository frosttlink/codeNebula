import { Link } from "react-router-dom"
import "./index.scss"

export default function Cabecalho() {
  return (
    <div className="comp-cabecalho">
      <Link to='/'><img src="/assets/images/logo.svg" alt="" /></Link>
      <div>
        <nav>
          <Link to='/' className="cab-link">Projetos</Link>
          <Link to='/' className="cab-link">Serviços</Link>
          <Link to='/' className="cab-link">Fale Conosco</Link>
        </nav>
      </div>
    </div>
  )
}