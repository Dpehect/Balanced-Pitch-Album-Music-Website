import "./Home.css";
import { useEffect } from "react";
import { Link } from "react-router";
import Footer from "../../components/Footer/Footer";
import Transition from "../../components/transition/Transition";
import ParallaxImage from "../../components/ParallaxImage/ParallaxImage";
import MusicPlayer from "../../components/MusicPlayer/MusicPlayer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";
import CtaButton from "../../components/CtaButton/CtaButton";
import AnimatedLink from "../../components/AnimatedLink/AnimatedLink";

const Home = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animação da fita cassete
    ScrollTrigger.create({
      trigger: ".mix-tape",
      start: "top bottom",
      end: "bottom bottom",
      onUpdate: (self) => {
        gsap.set(".strip", {
          x: self.progress * 300,
        });
      },
    });

    // Animação de entrada escalonada para os artigos de notícias
    gsap.from(".article", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".latest-updates",
        start: "top 70%", // Começa a animação quando 70% da seção estiver visível
        toggleActions: "play none none none",
      },
    });

    // Função de limpeza para remover os triggers ao desmontar o componente
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <ReactLenis root>
      <div className="page home">
        <section className="hero">
          <div className="hero-img">
            <ParallaxImage
              src="/home/hero.jpg"
              alt="Artista em estúdio musical"
            />
          </div>
          <div className="hero-header">
            <h1>
              Balanced
              <br />
              Pitch
            </h1>
            <p className="artist-support">supported by SoftBridge Solutions</p>
            <p>Moldando o Futuro da Música com IA</p>
            <div className="stickers">
              <img src="/stickers.png" alt="Adesivos decorativos" />
            </div>
            <CtaButton to="/contact">Entre em Contato</CtaButton>
          </div>
          <div className="news-article">
            <div className="news-article-title">
              <p className="primary">
                Disputas de IA se Acendem: SoftBridge
                <br />
                Solutions à Frente?
              </p>
            </div>
            <div className="news-article-info">
              <p>17.08.2025</p>
              <p>Notícias</p>
            </div>
          </div>
        </section>

        <section className="site-intro">
          <div className="intro-col">
            <p className="primary">
              Capacitando a Criatividade. Redefinindo o Som.
            </p>
            <p>Moldando o Futuro da Música com IA</p>
            <MusicPlayer />
          </div>
          <div className="intro-col">
            <p>A indústria musical encontra-se em uma encruzilhada crucial.</p>
            <h2>
              A Nova
              <br />
              Vanguarda Tech
            </h2>
            <h3>
              A inovação prospera, mas os artistas são deixados para trás.
            </h3>
            <p>
              A IA está remodelando o cenário, utilizando a arte na qual
              depositamos nossas almas — muitas vezes sem reconhecimento ou
              consentimento. Na SoftBridge Solutions, acreditamos em aproveitar o
              potencial da IA enquanto protegemos ferozmente os artistas em seu
              cerne. Ao colaborar com educadores, pioneiros jurídicos e líderes
              da indústria, estamos construindo um futuro onde a criatividade é
              respeitada e os direitos dos artistas são salvaguardados.
            </p>
            <div className="intro-img">
              <div className="intro-img-wrapper">
                <ParallaxImage
                  src="/home/site-intro.jpg"
                  alt="Equipamento de áudio"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="cover">
          <div className="cover-img">
            <ParallaxImage src="/home/cover.jpg" alt="Artista compondo" />
          </div>
          <div className="cover-copy">
            <h3>Comprometidos com uma</h3>
            <h2>IA Criativa</h2>
            <p>
              A SoftBridge Solutions atua como uma voz para os artistas, garantindo
              que seu legado criativo seja valorizado e protegido em um mundo
              impulsionado pela IA. Nossa missão é estabelecer uma integração
              justa e respeitosa da inteligência artificial na indústria
              musical, honrando o trabalho e os direitos dos criadores a cada
              passo.
            </p>
            <br />
            <br />
            <p>
              Ao trabalhar com educadores, especialistas jurídicos, inovadores
              da indústria e legisladores, estamos impulsionando a criação de
              padrões éticos e defendendo políticas robustas que protejam o
              futuro da arte na era da IA.
            </p>
            <div className="cover-cta">
              <CtaButton to="/">Nossa Missão</CtaButton>
            </div>
          </div>
        </section>

        <section className="mix-tape">
          <p className="primary">IA Responsável na Academia</p>
          <p>SoftBridge Solutions</p>
          <h1>
            Da Inovação
            <br />
            ao Icônico
          </h1>
          <div className="tape">
            <div className="strip">
              <img src="/home/strip.png" alt="Fita de rolo" />
            </div>
            <div className="tape-img">
              <img src="/home/tape.png" alt="Fita cassete" />
            </div>
          </div>
          <div className="tape-info">
            <p>
              A próxima geração de cientistas de dados e criadores de música
              está moldando as tecnologias de IA que definirão o futuro da
              indústria musical.
            </p>
            <br />
            <br />
            <p>
              A SoftBridge Solutions colabora com universidades e seus programas de
              música para promover a conscientização e estabelecer práticas
              éticas de IA. Também oferecemos oportunidades para artistas e
              engenheiros de dados aspirantes inovarem e prosperarem no cenário
              musical em evolução.
            </p>
            <div className="sticker">
              <img
                src="/stickers-dark.png"
                alt="Adesivos decorativos escuros"
              />
            </div>
          </div>
        </section>

        <section className="latest-updates">
          <h1>Últimas Novidades</h1>
          <p className="lp-tagline">
            Explore as últimas atualizações, diretrizes abrangentes e recursos
            valiosos na encruzilhada da inovação em IA e da indústria musical.
          </p>
          <div className="updates-page-link">
            <AnimatedLink to="/">Ver Todas as Novidades</AnimatedLink>
          </div>
          <div className="articles-row">
            <div className="article">
              <div className="article-img">
                <ParallaxImage
                  src="/updates/article1.jpg"
                  alt="Imagem do artigo 1"
                  speed={0.1}
                />
              </div>
              <div className="article-title">
                <h3>
                  A Luta pela Autenticidade: Combatendo Vozes Geradas por IA sem
                  Autorização
                </h3>
              </div>
              <div className="article-link">
                <p className="primary">
                  <AnimatedLink to="/">Leia Mais</AnimatedLink>
                </p>
              </div>
            </div>
            <div className="article">
              <div className="article-img">
                <ParallaxImage
                  src="/updates/article2.jpg"
                  alt="Imagem do artigo 2"
                  speed={0.1}
                />
              </div>
              <div className="article-title">
                <h3>
                  Protegendo Vozes Icônicas: A Luta Contra a Imitação por IA
                </h3>
              </div>
              <div className="article-link">
                <p className="primary">
                  <AnimatedLink to="/">Leia Mais</AnimatedLink>
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Transition(Home);
