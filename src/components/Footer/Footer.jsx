import "./Footer.css";
import { Link } from "react-router";
import ParallaxImage from "../ParallaxImage/ParallaxImage";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-bg">
        <ParallaxImage src="/footer/footer.jpg" alt="Fundo do rodapé" />
      </div>

      <div className="footer-nav">
        <div className="footer-nav-link">
          <Link to="/about">Sobre</Link>
        </div>
        <div className="footer-nav-link">
          <Link to="/solutions">Soluções</Link>
        </div>
        <div className="footer-nav-link">
          <Link to="/updates">Novidades</Link>
        </div>
        <div className="footer-nav-link">
          <Link to="/contact">Contato</Link>
        </div>
      </div>

      <div className="footer-outro">
        <div className="footer-col">
          <p>Tem Dúvidas?</p>
          <h3>Entre em Contato</h3>
          <p>© 2026 SoftBridge Solutions</p>
        </div>
        <div className="footer-col">
          <p>Planejando uma Visita?</p>
          <h3>Nossa Localização</h3>
          <p className="primary">
            Av. Paulista, 1230
            <br />
            São Paulo, SP 01310-100, Brasil
          </p>
          <p>Template por Codegrid</p>
        </div>
      </div>

      <div className="footer-form">
        <p className="primary">Faça Sua Voz Ser Ouvida!</p>
        <p>Defenda a IA Ética na Música</p>
        <span>
          Junte-se ao nosso movimento para proteger e capacitar os criadores de
          música.
        </span>
        <div className="footer-ws"></div>
        <div className="footer-input">
          <input type="text" placeholder="Nome" />
        </div>
        <div className="footer-input">
          <input type="text" placeholder="Sobrenome" />
        </div>
        <div className="footer-input">
          <input type="text" placeholder="Endereço de Email" />
        </div>
        <div className="footer-submit">
          <Link to="/">Enviar</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
