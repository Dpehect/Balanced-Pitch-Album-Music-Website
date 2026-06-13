import "./Solutions.css";
import { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Transition from "../../components/Transition/Transition";
import ParallaxImage from "../../components/ParallaxImage/ParallaxImage";

import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Solutions = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animação para a lista de funcionalidades
    gsap.from(".features-copy", {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".features",
        start: "top 60%",
        toggleActions: "play none none none",
      },
    });

    // Animação para a lista de direitos
    gsap.from(".right", {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".rights-list",
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <ReactLenis root>
      <div className="page solutions">
        <section className="solutions-hero about-hero">
          <div className="solutions-hero-img">
            <ParallaxImage src="/solutions/hero.jpg" alt="Abstrato sonoro" />
          </div>
          <div className="solutions-hero-header about-hero-header">
            <h1>Soluções</h1>
            <div className="stickers">
              <img src="/stickers.png" alt="Adesivos decorativos" />
            </div>
          </div>
          <div className="solutions-hero-info">
            <p className="primary">Dados SoftBridge Solutions</p>
            <p className="primary">Academia & Inovação</p>
            <p className="primary">Ética em IA</p>
            <p className="primary">API SoftBridge Solutions</p>
          </div>
        </section>

        <section className="contact-banner">
          <div className="contact-banner-col">
            <div className="contact-banner-header">
              <h2>
                Capacitando
                <br />
                Através da Inovação
              </h2>
              <p className="primary">
                Moldando o futuro da música com soluções de IA éticas.
              </p>
            </div>
            <div className="banner-contact">
              <p className="primary">suporte@softbridgesolutions.com</p>
              <p>Fundada em 2024</p>
            </div>
            <div className="banner-info">
              <p>
                Acreditamos em um equilíbrio harmonioso entre criatividade e
                tecnologia. Ao defender os direitos dos artistas e promover
                práticas de IA éticas, estamos abrindo caminho para uma nova era
                na indústria musical.
              </p>
            </div>
          </div>
          <div className="contact-banner-col">
            <div className="contact-banner-img">
              <ParallaxImage
                src="/solutions/banner.jpg"
                alt="Capacitando Criadores Através da Inovação"
              />
            </div>
          </div>
        </section>

        <section className="features">
          <div className="features-header">
            <div className="features-col">
              <img
                src="/solutions/text-bg.png"
                alt="Dados para Treinamento de IA"
              />
              <h3>
                Dados para Treinamento
                <br />
                de IA Ética
              </h3>
            </div>
            <div className="features-col">
              <img src="/solutions/text-bg.png" alt="Atribuição de Direitos" />
              <h3>
                Atribuição de
                <br />
                Direitos Criativos
              </h3>
            </div>
          </div>
          <div className="features-copy">
            <div className="features-col feature-title">
              <p>01.</p>
              <p>Reconhecimento do Artista</p>
            </div>
            <div className="features-col feature-copy">
              <p>
                Metadados abrangentes garantem que cada criador e detentor de
                direitos seja devidamente creditado por suas contribuições.
              </p>
            </div>
          </div>
          <div className="features-copy">
            <div className="features-col feature-title">
              <p>02.</p>
              <p>Otimização de Dados</p>
            </div>
            <div className="features-col feature-copy">
              <p>
                Nossas ferramentas avançadas extraem detalhes complexos de
                arquivos de áudio, permitindo que cientistas de dados trabalhem
                com datasets ricos e de alta qualidade.
              </p>
            </div>
          </div>
          <div className="features-copy">
            <div className="features-col feature-title">
              <p>03.</p>
              <p>Controle de Acesso</p>
            </div>
            <div className="features-col feature-copy">
              <p>
                Permissões rigorosas garantem que os dados sejam acessíveis
                apenas a indivíduos autorizados, mantendo a conformidade legal e
                ética em todos os momentos.
              </p>
            </div>
          </div>
          <div className="features-copy">
            <div className="features-col feature-title">
              <p>04.</p>
              <p>Insights & Relatórios</p>
            </div>
            <div className="features-col feature-copy">
              <p>
                Obtenha insights claros com relatórios detalhados sobre o uso de
                datasets, promovendo responsabilidade e transparência entre
                todas as partes interessadas.
              </p>
            </div>
          </div>
          <div className="features-copy">
            <div className="features-col feature-title">
              <p>05.</p>
              <p>Padrões & Integridade</p>
            </div>
            <div className="features-col feature-copy">
              <p>
                Nosso framework de relatórios estabelece o padrão para a origem
                transparente de dados, garantindo que todos os processos sigam
                rigorosos padrões éticos.
              </p>
            </div>
          </div>
        </section>

        <section className="solutions-callout">
          <div className="callout-bg">
            <ParallaxImage
              src="/solutions/callout-bg.jpg"
              alt="Fundo para chamada de IA Ética"
            />
          </div>
          <div className="callout-copy">
            <h2>
              Responsáveis pela
              <br />
              Criatividade
              <br />e Além
            </h2>
            <p>
              Faça parte de um movimento que valoriza a criatividade, respeita
              as contribuições artísticas e é pioneiro em práticas de IA éticas
              na indústria musical e além.
            </p>
            <br />
            <p>
              Em uma era digital em rápido avanço, o uso não regulado de obras
              criativas por empresas de IA levanta questões éticas
              significativas. Sem autorização ou transparência, a origem e a
              propriedade dos datasets são frequentemente ignoradas.
            </p>
          </div>
        </section>

        <section className="rights">
          <h1>Direitos na IA</h1>
          <h3>Defendendo a Justiça</h3>
          <p className="tagline">
            Capacitando artistas para se protegerem e prosperarem.
          </p>
          <p>
            Ao firmar parcerias com pioneiros jurídicos e líderes da indústria,
            entregamos soluções inovadoras para recuperar receitas perdidas,
            prevenir o uso não autorizado e proteger ativamente sua música e
            propriedade intelectual.
          </p>
        </section>

        <section className="rights-list">
          <div className="right">
            <div className="right-index">
              <p>(01)</p>
            </div>
            <div className="right-title">
              <h3>Defina Suas Regras</h3>
            </div>
            <div className="right-desc">
              <div className="right-desc-line">
                <p>Controle sua música</p>
              </div>
              <div className="right-desc-line">
                <p>Proteja sua voz</p>
              </div>
              <div className="right-desc-line">
                <p>Garanta sua imagem</p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right-index">
              <p>(02)</p>
            </div>
            <div className="right-title">
              <h3>Proteja Seus Direitos</h3>
            </div>
            <div className="right-desc">
              <div className="right-desc-line">
                <p>Rastreie o uso indevido</p>
              </div>
              <div className="right-desc-line">
                <p>Garanta a conformidade</p>
              </div>
              <div className="right-desc-line">
                <p>Previna a exploração</p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right-index">
              <p>(03)</p>
            </div>
            <div className="right-title">
              <h3>Molde Seu Legado</h3>
            </div>
            <div className="right-desc">
              <div className="right-desc-line">
                <p>Monetize eticamente</p>
              </div>
              <div className="right-desc-line">
                <p>Use IA responsavelmente</p>
              </div>
              <div className="right-desc-line">
                <p>Construa seu futuro</p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-banner">
          <div className="contact-banner-col">
            <div className="contact-banner-header">
              <h2>
                Moldando
                <br />o Som do Amanhã
              </h2>
              <p className="primary">
                Capacitando a criatividade através da inovação em IA ética.
              </p>
            </div>
            <div className="banner-contact">
              <p className="primary">contato@softbridgesolutions.com</p>
              <p>Fundada em 2024</p>
            </div>
            <div className="banner-info">
              <p>
                Na SoftBridge Solutions, nos especializamos em fornecer datasets
                eticamente curados, enriquecidos com metadados de atribuição
                detalhados e recursos avançados para IA.
              </p>
            </div>
          </div>
          <div className="contact-banner-col">
            <div className="contact-banner-img">
              <ParallaxImage
                src="/solutions/banner2.jpg"
                alt="Inovação SoftBridge Solutions"
              />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Transition(Solutions);
