import './App.css';
import Header from './Header'
import Logo from './Logo'
import Video from './Video'
import Infografo from './infografo.png'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Logo></Logo>
      <Video></Video>
      <section className="infografo">
        <div>
          <h1>O que é o Letrada?</h1>
          <p>
            O Letrada é um projeto inspirado na tese de doutorado da professora coordenadora Tâmara Milhomem (idealizadora do projeto), é financiado pelo IFES (Instituto Federal do Espírito Santo) e realiza uma parceria entre o IFPI Campus Picos e a Secretaria Estadual de Educação do Piauí.
          O projeto possui como objetivo mapear e desenvolver habilidades dos alunos do ensino básico para o tratamento e comunicação da informação no contexto da economia 4.0. Para atingir essa finalidade, o projeto está dividido em 5 etapas, tais quais: I - planejamento e monitoramento, II - navegação, III - julgamento da informação, IV - integração da informação e V - comunicação da informação.
          O Letrada dispõe de ciclos de oficinas para atender cada etapa do letramento digital com o uso de materiais didáticos, informações relevantes, atualidades, memes, dicas para aplicação do conteúdo e muito mais. Todo esse conteúdo exclusivo juntamente com o acompanhamento durante todo o curso é 100% gratuito acrescido de um certificado de participação.
          </p>
          <span>Vem ser Letrada!</span>
          <button>Siga-nos</button>
        </div>
        <img src={Infografo} alt="infografo"/>
      </section>
    </div>
  );
}

export default App;
