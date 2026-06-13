import "./Updates.css";
import { useEffect } from "react";
import { Link } from "react-router";
import Footer from "../../components/Footer/Footer";
import Transition from "../../components/transition/Transition";
import ParallaxImage from "../../components/ParallaxImage/ParallaxImage";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedLink from "../../components/AnimatedLink/AnimatedLink";

const Updates = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animação de entrada escalonada para os artigos
    gsap.from(".article", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".articles",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <ReactLenis root>
      <div className="page updates">
        <section className="updates-hero">
          <h1>Atualizações</h1>
        </section>

        <section className="filters" style={{ display: "none" }}>
          <div className="filter active">
            <p>Todos</p>
          </div>
          <div className="filter">
            <p>Recursos</p>
          </div>
          <div className="filter">
            <p>Padrões</p>
          </div>
          <div className="filter">
            <p>Notícias</p>
          </div>
        </section>

        <section className="articles">
          <div className="articles-row">
            <div className="article">
              <div className="article-img">
                <img
                  src="/updates/article1.jpg"
                  alt="Batalha de Vozes com IA"
                />
                <div className="article-date">
                  <p>19.06.2024 &nbsp; Notícias</p>
                </div>
              </div>
              <div className="article-title">
                <h3>IA vs. Criatividade: A Luta por Vozes Autênticas</h3>
              </div>
              <div className="article-link">
                <p className="primary">
                  <AnimatedLink to="/">Leia Mais</AnimatedLink>
                </p>
              </div>
            </div>
            <div className="article">
              <div className="article-img">
                <img
                  src="/updates/article2.jpg"
                  alt="Discussão sobre Ética na IA"
                />
                <div className="article-date">
                  <p>19.06.2024 &nbsp; Notícias</p>
                </div>
              </div>
              <div className="article-title">
                <h3>Moldando a Ética na IA: Uma Abordagem Colaborativa</h3>
              </div>
              <div className="article-link">
                <p className="primary">
                  <AnimatedLink to="/">Leia Mais</AnimatedLink>
                </p>
              </div>
            </div>
          </div>

          <div className="articles-row">
            <div className="article">
              <div className="article-img">
                <img src="/updates/article3.jpg" alt="Direitos dos Artistas" />
                <div className="article-date">
                  <p>19.06.2024 &nbsp; Notícias</p>
                </div>
              </div>
              <div className="article-title">
                <h3>Protegendo os Direitos dos Artistas na Era da IA</h3>
              </div>
              <div className="article-link">
                <p className="primary">
                  <AnimatedLink to="/">Leia Mais</AnimatedLink>
                </p>
              </div>
            </div>
            <div className="article">
              <div className="article-img">
                <img src="/updates/article4.jpg" alt="IA e Música" />
                <div className="article-date">
                  <p>19.06.2024 &nbsp; Notícias</p>
                </div>
              </div>
              <div className="article-title">
                <h3>Reimaginando a Criação Musical com IA Ética</h3>
              </div>
              <div className="article-link">
                <p className="primary">
                  <AnimatedLink to="/">Leia Mais</AnimatedLink>
                </p>
              </div>
            </div>
          </div>

          <div className="articles-row">
            <div className="article">
              <div className="article-img">
                <img src="/updates/article5.jpg" alt="Reformas Políticas" />
                <div className="article-date">
                  <p>19.06.2024 &nbsp; Notícias</p>
                </div>
              </div>
              <div className="article-title">
                <h3>
                  Reformas Políticas: Garantindo a Justiça nas Práticas de IA
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
                <img
                  src="/updates/article6.jpg"
                  alt="IA e Direitos Criativos"
                />
                <div className="article-date">
                  <p>19.06.2024 &nbsp; Notícias</p>
                </div>
              </div>
              <div className="article-title">
                <h3>IA e Direitos Criativos: Encontrando o Equilíbrio</h3>
              </div>
              <div className="article-link">
                <p className="primary">
                  <AnimatedLink to="/">Leia Mais</AnimatedLink>
                </p>
              </div>
            </div>
          </div>

          <div className="articles-row">
            <div className="article">
              <div className="article-img">
                <img src="/updates/article7.jpg" alt="Futuro da IA" />
                <div className="article-date">
                  <p>19.06.2024 &nbsp; Notícias</p>
                </div>
              </div>
              <div className="article-title">
                <h3>O Futuro da IA na Música: Desafios e Oportunidades</h3>
              </div>
              <div className="article-link">
                <p className="primary">
                  <AnimatedLink to="/">Leia Mais</AnimatedLink>
                </p>
              </div>
            </div>
            <div className="article"></div>
          </div>
        </section>

        <section className="contact-banner">
          <div className="contact-banner-col">
            <div className="contact-banner-header">
              <h2>
                Impulsionando a<br />
                Inovação com Integridade
              </h2>
              <p className="primary">
                Entre em contato para colaborar ou saber mais sobre nossa
                missão.
              </p>
            </div>
            <div className="banner-contact">
              <p className="primary">contato@softbridgesolutions.com</p>
              <p>Desde 2024</p>
            </div>
            <div className="banner-info">
              <p>
                A SoftBridge Solutions cria datasets e soluções de IA inovadoras e
                éticas, oferecendo transparência e recursos avançados para
                capacitar criadores e desenvolvedores em todo o mundo.
              </p>
            </div>
          </div>
          <div className="contact-banner-col">
            <div className="contact-banner-img">
              <ParallaxImage
                src="/updates/banner.jpg"
                alt="Inovação com Integridade"
              />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Transition(Updates);
