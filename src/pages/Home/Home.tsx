import { Link } from 'react-router-dom';

import GradImgCard from '../../components/GradImgCard/GradImgCard';
import NewsPreview from '../../components/NewsPreview/NewsPreview';

import './Home.scss';

import heritageImg from '../../assets/home/heritage.jpg';
import researchesImg from '../../assets/home/researches.jpg';
import careerImg from '../../assets/home/career.jpg';

import contestImg from '../../assets/home/contest.jpg'

import techParkImg from '../../assets/home/partners/tech-park-logo.png';
import devUniversityImg from '../../assets/home/partners/development-university.png';
import ecologyCenterImg from '../../assets/home/partners/ecology-center.png';
import minobrImg from '../../assets/home/partners/minobr.jpg';
import rikzImg from '../../assets/home/partners/rikz.png';

function Home() {
    return (<div className="column chem-bg home-page">
        <header className="logo">
            <h1>Диалог поколений</h1>
        </header>
        <div className="row column-stretch scrollable">
            <aside className="column row-stretch column-stretch home-page__side-menu">
                <GradImgCard imgSrc={heritageImg} 
                title='Наследие' 
                subtitle='(история и архивы)'>
                    <ul>
                        <li><Link to="/docs/heritage/biography">Биография</Link></li>
                        <li><Link to="/">Артефакты</Link></li>
                        <li><Link to="/">Карта открытий (виртуальный музей)</Link></li>
                        <li><Link to="/">Трудовые династии</Link></li>
                    </ul>
                </GradImgCard>

                <GradImgCard imgSrc={researchesImg} 
                title='Цифровая химия'>
                    <ul>
                        <li><Link to="/">Виртуальный практикум (лаборатория)</Link></li>
                        <li><Link to="/docs/researches/digital-tools">Цифровые инструменты</Link></li>
                        <li><Link to="/">Проекты молодых учёных</Link></li>
                        <li><Link to="/">Технологии ИИ</Link></li>
                    </ul>
                </GradImgCard>

                <GradImgCard imgSrc={careerImg} title='Профессии будущего'>
                    <ul>
                        <li><Link to="/">Атлас профессий будущего</Link></li>
                        <li><Link to="/">Образовательная траектория (рынок труда)</Link></li>
                    </ul>
                </GradImgCard>
            </aside>
            <main className="column row-stretch">
                <p><b>Традиция в химии - это не музей, а инфраструктура будущего. Без традиции невозможно будущее,</b> 
                    потому что именно она задаёт критерии истины, язык, методы, этику и преемственность, без которых 
                    цифровые технологии превращаются в инструмент без основания.
                </p>
                <p>
                    Химия - одна из немногих наук, где теоретические представления, экспериментальное мастерство и 
                    технологическая практика соединены в единую традицию. Эта традиция включает не только знания, но и 
                    способ их получения, проверки и передачи. Она формировалась поколениями учёных: от атомно-молекулярного 
                    учения и периодического закона Д. И. Менделеева до теории химического строения А. М. Бутлерова, 
                    физической химии, квантовой химии, катализа, биохимии и нанохимии.
                </p>
                <p>
                    Традиция учит:
                </p>
                <ul>
                    <li>чистоте эксперимента;</li>
                    <li>контролю условий;</li>
                    <li>калибровке приборов;</li>
                    <li>статистической обработке;</li>
                    <li>честному описанию методик;</li>
                    <li>проверке артефактов.</li>
                </ul>
                <p>
                    Традиция воспроизводимости – не прошлое, а фундамент цифровой химии. Цифровая революция не отменяет 
                    эту традицию, а проверяет её на прочность. Искусственный интеллект, машинное обучение, 
                    автоматизированные лаборатории, цифровые двойники и квантовые вычисления не могут существовать в 
                    вакууме. Им нужны:
                </p>
                <ul>
                    <li>достоверные экспериментальные данные;</li>
                    <li>воспроизводимые протоколы;</li>
                    <li>стандартизированные номенклатуры и онтологии;</li>
                    <li>понимание физико-химических механизмов;</li>
                    <li>этические и безопасностные  нормы;</li>
                    <li>научные школы, способные передать неявное знание.</li>
                </ul>
                <p>
                    Именно это даёт традиция фундаментальной науки. Поэтому диалог поколений – не метафора, а условие 
                    развития химии в эпоху цифровых исследований. Традиции химической науки важны и актуальны потому, 
                    что они:
                </p>
                <ul>
                    <li>задают критерии научной истины;</li>
                    <li>обеспечивают воспроизводимость и надёжность данных;</li>
                    <li>сохраняют теоретический каркас;</li>
                    <li>передают неявное экспериментальное знание;</li>
                    <li>формируют этику и безопасность;</li>
                    <li>создают основу для цифровых методов;</li>
                    <li>обеспечивают преемственность инноваций.</li>
                </ul>
                <p>
                    Цифровые исследования и профессии будущего не отменяют фундаментальную химию. Они требуют её больше, 
                    чем когда-либо. Без традиции невозможно будущее, потому что будущее – это не отказ от корней, а рост 
                    из них.
                </p>
                <p>
                    Химия будущего будет гибридной: экспериментальной и вычислительной, рукотворной и автоматизированной, 
                    человеческой и машинной. Но её ядро останется научным – и это ядро передаётся через диалог поколений.
                </p>

                <p className="spacer"></p>

                <h2>Календарь событий</h2>
                <NewsPreview title="Первый этап республиканской олимпиады по химии" 
                    date="2026-10-15"
                    link="/"
                    imgSrc={contestImg}/>
            </main>

            <aside className="column row-stretch column-stretch home-page__side-partners-list">
                <a href="https://mgtp.by/" target="_blank" className="partner-link">
                    <img src={techParkImg} />
                </a>

                <a href="https://rcek.by/" target="_blank" className="partner-link">
                    <img src={ecologyCenterImg} />
                </a>

                <a href="https://mgiro.minsk.edu.by/" target="_blank" className="partner-link">
                    <img src={devUniversityImg} />
                </a>

                <a href="https://edu.gov.by/" target="_blank" className="partner-link">
                    <img src={minobrImg} />
                </a>

                <a href="https://rikc.by/" target="_blank" className="partner-link">
                    <img src={rikzImg} />
                </a>
            </aside>
        </div>
    </div>);
}

export default Home