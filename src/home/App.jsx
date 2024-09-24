import './App.scss';
import Cabecalho from '../components/cabecalho';
import { Laptop } from 'lucide-react';
import Rodape from '../components/rodape';

export default function App() {
  return (
    <div className="pagina-home">
      <Cabecalho />

      <section className="primeira">
        <div className="intro">
          <div className="propaganda">
            <h1> DIGITAL TWIN</h1>
            <h1> OF REVOLUTION </h1>
            <p className='prop-tex'>
              Lorem ipsum dolor sit amet consectetur. Pharetra tincidunt enim mauris eget amet at proin. Gravida augue interdum nullam laoreet convallis urna. Enim commodo egestas pulvinar accumsan risus non. Ac id adipiscing ut velit.
            </p>
          </div>
          <img src="/assets/images/hexagon.svg" alt="" />
        </div>
        <img className='line' src="/assets/images/line_two.svg" alt="" />
      </section>
      <section className='segunda'>
        <h1>Serviços</h1>
        <p className='into'>Lorem ipsum dolor sit amet consectetur. Pharetra tincidunt enim mauris eget amet at proin. Gravida augue interdum nullam laoreet convallis urna. Enim commodo egestas pulvinar accumsan risus non. Ac id adipiscing ut velit.</p>

        <div className="cards">
          <div className="card">
            <Laptop className='icon-laptop' />
            <h3>Website</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Pharetra tincidunt enim mauris eget amet at proin. Gravida augue interdum nullam laoreet convallis urna. Enim commodo egestas pulvinar accumsan risus non. Ac id adipiscing ut velit.</p>
          </div>
          <div className="card">
            <Laptop className='icon-laptop' />
            <h3>Website</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Pharetra tincidunt enim mauris eget amet at proin. Gravida augue interdum nullam laoreet convallis urna. Enim commodo egestas pulvinar accumsan risus non. Ac id adipiscing ut velit.</p>
          </div>
          <div className="card">
            <Laptop className='icon-laptop' />
            <h3>Website</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Pharetra tincidunt enim mauris eget amet at proin. Gravida augue interdum nullam laoreet convallis urna. Enim commodo egestas pulvinar accumsan risus non. Ac id adipiscing ut velit.</p>
          </div>
        </div>

        <button>Contatar</button>

        <img className='line' src="/assets/images/line_two.svg" alt="" />


      </section>
      <section className='terceira'>
        <h1>Projetos</h1>
        <p className='into'>Lorem ipsum dolor sit amet consectetur. Pharetra tincidunt enim mauris eget amet at proin. Gravida augue interdum nullam laoreet convallis urna. Enim commodo egestas pulvinar accumsan risus non. Ac id adipiscing ut velit.</p>

        <div className="cards">
          <div className="card">
            <Laptop className='icon-laptop' />
            <h3>Rafaella Designers</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Pharetra tincidunt enim mauris eget amet at proin. Gravida augue interdum nullam laoreet convallis urna. Enim commodo egestas pulvinar accumsan risus non. Ac id adipiscing ut velit.</p>
            <div className='square'/>
            <center><button>Ver Link</button></center>
          </div>
          <div className="card">
            <Laptop className='icon-laptop' />
            <h3>Rafaella Designers</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Pharetra tincidunt enim mauris eget amet at proin. Gravida augue interdum nullam laoreet convallis urna. Enim commodo egestas pulvinar accumsan risus non. Ac id adipiscing ut velit.</p>
            <div className='square'/>
            <center><button>Ver Link</button></center>
          </div>
        </div>

      </section>

      <Rodape />
    </div>
  );
}


