import './DigitalTools.scss';

import moleviewImg from '../../../assets/digital-tools/moleview-demo.png';
import avogadroImg from '../../../assets/digital-tools/avogadro-demo.png';

function DigitalTools() {
  return (<>
    <h1>Цифровые инструменты</h1>
    <div className="row tools-list">
        <section className="column tools-list__item">
            <h2>MolView</h2>
            <img src={moleviewImg}/>
            <p><a href='https://molview.org' target="_blank">MolView</a> - бесплатное веб-приложение для интуитивного 
                рисования химических формул и их одновременной визуализации в трёхмерном (3D) пространстве</p>
        </section>
        <section className="column tools-list__item">
            <h2>Avogadro</h2>
            <img src={avogadroImg}/>
            <p><a href='https://avogadro.cc' target="_blank">Avogadro</a> - бесплатная десктоп-программа с открытым 
                исходным кодом для визуализации, моделирования и редактирования трехмерных структур молекул</p>
        </section>
    </div>
  </>);
}

export default DigitalTools