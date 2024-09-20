import "./index.scss"

export default function Cabecalho() {
  return (
    <div className="comp-cabecalho">
      <img src="/assets/images/logo.svg" alt="" />
      <div>
        <nav>
          <p>Projetos</p>
          <p>Fale Conosco</p>
          <p>Serviços</p>
        </nav>
      </div>
    </div>
  )
}