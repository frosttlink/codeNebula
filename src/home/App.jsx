import "./App.scss";
import Cabecalho from "../components/cabecalho";
import { Laptop } from "lucide-react";
import Rodape from "../components/rodape";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="pagina-home">
      <Cabecalho />

      <section className="primeira">
        <div className="intro">
          <div className="propaganda">
            <h1> DIGITAL TWIN</h1>
            <h1> OF REVOLUTION </h1>
            <p className="prop-tex">
            Codenebula é uma empresa de tecnologia que desenvolve soluções digitais personalizadas, focando em software, design responsivo e otimização de sistemas. Nossa equipe talentosa transforma ideias em produtos inovadores, garantindo alto desempenho e segurança. 
            </p>
          </div>
          <img src="/assets/images/hexagon.svg" alt="" />
        </div>
        <img className="line" src="/assets/images/line_two.svg" alt="" />
      </section>
      <section className="segunda">
        <h1>Serviços</h1>
        <p className="into">
        Transformando Ideias em Soluções Tecnológicas que Potencializam Seu Negócio e Enriquecem a Experiência do Usuário.
        </p>

        <div className="cards">
          <div className="card">
            <Laptop className="icon-laptop" />
            <h3>Website</h3>
            <p>
            Nosso serviço de criação de websites oferece soluções digitais personalizadas, com design responsivo e otimização para todos os dispositivos. Garantimos uma experiência de usuário intuitiva, além de implementar práticas de SEO para melhorar a visibilidade online. Entregamos sites que atendem às necessidades dos clientes e superam suas expectativas.
            </p>
          </div>
          <div className="card">
            <Laptop className="icon-laptop" />
            <h3>Desenvolvimento de Aplicativos Móveis</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Pharetra tincidunt enim
              mauris eget amet at proin. Gravida augue interdum nullam laoreet
              convallis urna. Enim commodo egestas pulvinar accumsan risus non.
              Ac id adipiscing ut velit.
            </p>
          </div>
          <div className="card">
            <Laptop className="icon-laptop" />
            <h3>Website</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Pharetra tincidunt enim
              mauris eget amet at proin. Gravida augue interdum nullam laoreet
              convallis urna. Enim commodo egestas pulvinar accumsan risus non.
              Ac id adipiscing ut velit.
            </p>
          </div>
        </div>

        <button>
          <Link to="/" className="link-cards-geral">
            Contatar
          </Link>
        </button>

        <img className="line" src="/assets/images/line_two.svg" alt="" />
      </section>
      <section className="terceira">
        <h1>Projetos</h1>
        <p className="into">
          Lorem ipsum dolor sit amet consectetur. Pharetra tincidunt enim mauris
          eget amet at proin. Gravida augue interdum nullam laoreet convallis
          urna. Enim commodo egestas pulvinar accumsan risus non. Ac id
          adipiscing ut velit.
        </p>

        <div className="cards">
          <div className="card">
            <Laptop className="icon-laptop" />
            <h3>Rafaella Designers</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Pharetra tincidunt enim
              mauris eget amet at proin. Gravida augue interdum nullam laoreet
              convallis urna. Enim commodo egestas pulvinar accumsan risus non.
              Ac id adipiscing ut velit.
            </p>
            <div className="square" />
            <center>
              <button>
                <Link to="/" className="link-cards-geral">
                  Ver Link
                </Link>
              </button>
            </center>
          </div>
          <div className="card">
            <Laptop className="icon-laptop" />
            <h3>Rafaella Designers</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Pharetra tincidunt enim
              mauris eget amet at proin. Gravida augue interdum nullam laoreet
              convallis urna. Enim commodo egestas pulvinar accumsan risus non.
              Ac id adipiscing ut velit.
            </p>
            <div className="square" />
            <center>
              <button>
                <Link to="/" className="link-cards-geral">
                  Ver Link
                </Link>
              </button>
            </center>
          </div>
        </div>
      </section>

      <Rodape />
    </div>
  );
}
