import './App.scss';
import Cabecalho from '../components/cabecalho';

export default function App() {
  return (
    <div className="pagina-home">
      <Cabecalho/>
      <section className="primeira">
        <div className="propaganda">
          <h1> DIGITAL TWIN</h1>
          <h1> OF REVOLUTION </h1>
          <p className='prop-tex'>
            Lorem ipsum dolor sit amet consectetur. Pharetra tincidunt enim mauris eget amet at proin. Gravida augue interdum nullam laoreet convallis urna. Enim commodo egestas pulvinar accumsan risus non. Ac id adipiscing ut velit.
          </p>
        </div>
        <img src="/assets/images/hexagon.svg" alt="" />
      </section>
        <img className='line' src="/assets/images/line_one.svg" alt="" />
    </div>
  );
}


