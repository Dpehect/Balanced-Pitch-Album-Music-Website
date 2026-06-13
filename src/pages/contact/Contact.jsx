import "./Contact.css";
import { Link } from "react-router";
import Footer from "../../components/Footer/Footer";
import Transition from "../../components/transition/Transition";
import ParallaxImage from "../../components/ParallaxImage/ParallaxImage";
import { ReactLenis } from "lenis/react";
import AnimatedLink from "../../components/AnimatedLink/AnimatedLink";
import CtaButton from "../../components/CtaButton/CtaButton";

const Contact = () => {
  return (
    <ReactLenis root>
      <div className="page contact">
        <section className="contact-hero">
          <div className="contact-hero-img">
            <ParallaxImage
              src="/contact/hero.jpg"
              alt="Pessoa em estúdio de gravação"
            />
          </div>

          <div className="contact-hero-header">
            <h1>Entre em Contato</h1>
            <div className="stickers">
              <img src="/stickers.png" alt="Adesivos decorativos" />
            </div>
          </div>

          <div className="contact-form">
            <div className="form-col">
              <div className="form-header">
                <p className="primary">
                  Posicione-se por uma IA Justa na Música. Juntos, Podemos Criar
                  a Mudança.
                </p>
                <p>Faça Sua Voz Valer a Pena</p>
                <button>
                  <CtaButton to="/contact">Inscreva-se</CtaButton>
                </button>
              </div>
              <div className="form-details">
                <div className="join-our-team">
                  <p className="primary">Faça Parte da Nossa Missão</p>
                  <p>
                    Pronto para criar impacto? Descubra nossas vagas disponíveis
                    e dê o próximo passo na sua carreira. Clique abaixo para
                    explorar as oportunidades e se candidatar.
                  </p>
                </div>
                <div className="divider"></div>
                <div className="careers-cta">
                  <p className="primary">
                    <AnimatedLink to="/">Leia Mais</AnimatedLink>
                  </p>
                </div>
              </div>
            </div>
            <div className="form-col">
              <div className="form">
                <div className="form-row">
                  <div className="form-item">
                    <input type="text" placeholder="Nome" />
                  </div>
                  <div className="form-item">
                    <input type="text" placeholder="Sobrenome" />
                  </div>
                </div>
                <div className="form-item">
                  <input type="text" placeholder="Endereço de Email" />
                </div>
                <div className="form-item">
                  <input type="text" placeholder="Nome da Empresa (Opcional)" />
                </div>
                <div className="form-item">
                  <input type="text" placeholder="Onde você está localizado?" />
                </div>
                <div className="form-item">
                  <textarea
                    rows={8}
                    placeholder="Como podemos ajudar?"
                  ></textarea>
                </div>
                <div className="submit-btn">
                  <p className="primary">
                    <Link to="/">Enviar</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-banner">
          <div className="contact-banner-col">
            <div className="contact-banner-header">
              <h2>
                Inovando o<br />
                Futuro da Música
              </h2>
              <p className="primary">
                Vamos nos conectar para redefinir a criatividade na era da IA.
              </p>
            </div>
            <div className="banner-contact">
              <p className="primary">contato@softbridgesolutions.com</p>
              <p>Fundada em 2024</p>
            </div>
            <div className="banner-info">
              <p>
                Na SoftBridge Solutions, fornecemos datasets éticos e prontos para
                IA, projetados para capacitar criadores e desenvolvedores.
                Nossas soluções garantem transparência, protegem a propriedade
                intelectual e estabelecem um novo padrão para a inovação na
                indústria musical.
              </p>
            </div>
          </div>
          <div className="contact-banner-col">
            <div className="contact-banner-img">
              <ParallaxImage
                src="/contact/banner.jpg"
                alt="Inovando o Futuro da Música"
              />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Transition(Contact);
