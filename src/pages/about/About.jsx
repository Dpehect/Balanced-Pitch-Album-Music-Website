import "./About.css";
import { useEffect } from "react";
import { Link } from "react-router";
import Footer from "../../components/Footer/Footer";
import Transition from "../../components/Transition/Transition";
import ParallaxImage from "../../components/ParallaxImage/ParallaxImage";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CtaButton from "../../components/CtaButton/CtaButton";
import AnimatedLink from "../../components/AnimatedLink/AnimatedLink";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  // Animação de entrada
  useEffect(() => {
    gsap.from(".team-player", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".team-list",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <ReactLenis root>
      <div className="page about">
        <section className="solutions-hero about-hero">
          <div className="solutions-hero-img">
            <ParallaxImage
              src="/about/hero.jpg"
              alt="Estúdio de música moderno"
            />
          </div>
          <div className="solutions-hero-header about-hero-header">
            <h1>Nossa História</h1>
            <div className="stickers">
              <img src="/stickers.png" alt="Adesivos decorativos" />
            </div>
          </div>
          <div className="about-hero-info">
            <p>
              Defendendo os Direitos dos Artistas e Definindo Padrões para uma
              IA Ética
            </p>
          </div>
        </section>

        <section className="about-us">
          <div className="about-us-col">
            <div className="sign-up-card">
              <div className="sign-up-img">
                <ParallaxImage
                  src="/about/sign-up-card.jpg"
                  alt="Pessoa assinando um documento"
                />
              </div>
              <div className="sign-up-card-header">
                <h3>
                  Junte-se a nós pela IA ética na música. Adicione seu nome
                  hoje!
                </h3>
                <p>Toda Voz Importa</p>
              </div>
              <div className="sign-up-cta">
                <button>
                  <CtaButton to="/">Inscreva-se</CtaButton>
                </button>
              </div>
            </div>
          </div>
          <div className="about-us-col">
            <h3>
              Como músicos e artistas, nossa missão é garantir que as futuras
              gerações possam prosperar em uma indústria musical moldada pela
              IA.
            </h3>
            <p>
              Na SoftBridge Solutions, defendemos os direitos dos artistas e
              estabelecemos padrões éticos para a IA. Colaborando com
              universidades, nos engajamos com programas de música e ciência de
              dados para capacitar a próxima onda de criadores e inovadores.
              Somos pioneiros em soluções de licenciamento ético e gerenciamento
              de direitos para IA, testando ativamente nossas ideias ao fomentar
              talentos, produzir música e abraçar a IA para moldar o futuro do
              som.
            </p>
            <div className="about-us-cta">
              <button>
                <CtaButton to="/contact">Fale Conosco</CtaButton>
              </button>
            </div>
          </div>
        </section>

        <section className="team">
          <div className="team-bg">
            <ParallaxImage
              src="/about/team-bg.jpg"
              alt="Fundo abstrato da equipe"
            />
          </div>
          <div className="team-header">
            <h3>A Equipe</h3>
            <h1>SoftBridge Solutions</h1>
            <div className="join-team-card">
              <h3>Faça Parte da Nossa Jornada</h3>
              <p>
                Na SoftBridge Solutions, promovemos uma abordagem colaborativa e
                adaptativa, capacitando nossa equipe a inovar e prosperar no
                mundo da IA.
              </p>
              <div className="join-team-cta">
                <button>
                  <CtaButton to="/" variant="dark">
                    Carreiras
                  </CtaButton>
                </button>
              </div>
            </div>
          </div>
          <div className="team-list">
            {/* --- MEMBROS DA EQUIPE --- */}
            <div className="team-list-row">
              <div className="team-player">
                <div className="player-img">
                  <ParallaxImage
                    src="/about/team1.jpg"
                    alt="Foto de Lia Costa"
                    speed={0.1}
                  />
                </div>
                <div className="player-info">
                  <h3>Lia Costa</h3>
                  <p>Co-fundadora & CEO</p>
                </div>
                <div className="player-desc">
                  <p>
                    Lia traz mais de duas décadas de experiência na indústria
                    musical, combinando uma carreira como compositora, produtora
                    e inovadora. Com um profundo compromisso com os direitos dos
                    artistas, Lia lidera a SoftBridge Solutions.
                  </p>
                </div>
                <div className="player-social">
                  <AnimatedLink to="/">LinkedIn</AnimatedLink>
                </div>
              </div>
              <div className="team-player">
                <div className="player-img">
                  <ParallaxImage
                    src="/about/team2.jpg"
                    alt="Foto de Marcos Oliveira"
                    speed={0.1}
                  />
                </div>
                <div className="player-info">
                  <h3>Marcos Oliveira</h3>
                  <p>Diretor de Tecnologia (CTO)</p>
                </div>
                <div className="player-desc">
                  <p>
                    Marcos é um visionário da tecnologia com paixão por inovação
                    em música e IA. Com experiência em desenvolvimento de
                    software, ele impulsiona nossas estratégias técnicas para
                    garantir a integração ética da IA.
                  </p>
                </div>
                <div className="player-social">
                  <AnimatedLink to="/">LinkedIn</AnimatedLink>
                </div>
              </div>
            </div>
            <div className="team-list-row">
              <div className="team-player">
                <div className="player-img">
                  <ParallaxImage
                    src="/about/team3.jpg"
                    alt="Foto de Sofia Almeida"
                    speed={0.1}
                  />
                </div>
                <div className="player-info">
                  <h3>Sofia Almeida</h3>
                  <p>Líder de Apoio ao Artista</p>
                </div>
                <div className="player-desc">
                  <p>
                    Sofia dedicou sua carreira a defender os direitos dos
                    criadores. Com profundo conhecimento do negócio da música,
                    ela trabalha para garantir que as vozes dos artistas sejam
                    ouvidas e protegidas no cenário digital.
                  </p>
                </div>
                <div className="player-social">
                  <AnimatedLink to="/">LinkedIn</AnimatedLink>
                </div>
              </div>
              <div className="team-player">
                <div className="player-img">
                  <ParallaxImage
                    src="/about/team4.jpg"
                    alt="Foto de Bruno Lima"
                    speed={0.1}
                  />
                </div>
                <div className="player-info">
                  <h3>Bruno Lima</h3>
                  <p>Diretor de Parcerias</p>
                </div>
                <div className="player-desc">
                  <p>
                    Bruno é especialista em criar conexões entre a SoftBridge
                    Solutions e os principais players da indústria. Ele garante
                    que nossas parcerias estejam alinhadas com nossa missão de
                    proteger e capacitar os criadores.
                  </p>
                </div>
                <div className="player-social">
                  <AnimatedLink to="/">LinkedIn</AnimatedLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-marquee">
          <div className="marquee_container">
            <div className="marquee">
              <h1>Inovar na Música</h1>
              <h1>Empoderar Artistas</h1>
              <h1>IA Ética</h1>
              <h1>Inovar na Música</h1>
              <h1>Empoderar Artistas</h1>
              <h1>IA Ética</h1>
              <h1>Inovar na Música</h1>
              <h1>Empoderar Artistas</h1>
              <h1>IA Ética</h1>
            </div>
            <div className="marquee">
              <h1>Inovar na Música</h1>
              <h1>Empoderar Artistas</h1>
              <h1>IA Ética</h1>
              <h1>Inovar na Música</h1>
              <h1>Empoderar Artistas</h1>
              <h1>IA Ética</h1>
              <h1>Inovar na Música</h1>
              <h1>Empoderar Artistas</h1>
              <h1>IA Ética</h1>
            </div>
          </div>
        </section>

        {/* --- SEÇÃO DE PRINCÍPIOS --- */}
        <section className="services">
          <div className="service-row">
            <div className="service-title">
              <h3>01.</h3>
              <h3>Respeito à Propriedade Criativa</h3>
            </div>
            <div className="service-desc">
              <p>O Treinamento de IA Começa com Permissão</p>
              <p>
                Priorizamos o consentimento claro e a transparência no
                treinamento de modelos de IA. Nossa missão é honrar o legado
                criativo e os direitos dos artistas humanos.
              </p>
            </div>
          </div>
          <div className="service-row">
            <div className="service-title">
              <h3>02.</h3>
              <h3>Inovação Através da União</h3>
            </div>
            <div className="service-desc">
              <p>Ação Além da Legislação</p>
              <p>
                Enquanto defendemos políticas de apoio, focamos em esforços
                coletivos da indústria para desenvolver frameworks éticos e
                autorregulação, garantindo uma inovação responsável.
              </p>
            </div>
          </div>
          <div className="service-row">
            <div className="service-title">
              <h3>03.</h3>
              <h3>Estabelecendo Padrões de Direitos para IA</h3>
            </div>
            <div className="service-desc">
              <p>Metadados são a Base de uma IA Justa</p>
              <p>
                Definir padrões globais para direitos de IA garante atribuições
                adequadas e respeito aos dados de treinamento. Colaboramos para
                desenvolver frameworks abertos que equilibram inovação e ética.
              </p>
            </div>
          </div>
          <div className="service-row">
            <div className="service-title">
              <h3>04.</h3>
              <h3>Promovendo a Consciência sobre IA Ética</h3>
            </div>
            <div className="service-desc">
              <p>O Conhecimento Transforma a Indústria</p>
              <p>
                Dedicamo-nos a educar artistas, tecnólogos e o público sobre a
                intersecção de IA e música, equipando todos com as ferramentas
                para defender práticas justas.
              </p>
            </div>
          </div>
        </section>

        <section className="contact-banner">
          <div className="contact-banner-col">
            <div className="contact-banner-header">
              <h2>
                SoftBridge
                <br />
                Solutions
              </h2>
              <p className="primary">
                Av. Paulista, 1230, São Paulo, SP 01310-100, Brasil
              </p>
            </div>
            <div className="banner-contact">
              <p className="primary">contato@softbridgesolutions.com</p>
              <p>Fundada em 2024</p>
            </div>
            <div className="banner-info">
              <p>
                A SoftBridge Solutions fornece datasets para machine learning,
                enriquecidos com metadados de atribuição detalhados para
                garantir soluções éticas e inovadoras.
              </p>
            </div>
          </div>
          <div className="contact-banner-col">
            <div className="contact-banner-img">
              <ParallaxImage
                src="/about/banner.jpg"
                alt="Banner da SoftBridge Solutions"
              />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Transition(About);
