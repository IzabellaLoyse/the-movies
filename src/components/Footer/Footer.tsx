import { Description, FooterPage } from './style';

function Footer() {
  return (
    <FooterPage>
      <Description>
        The Movies &copy; 2022 |{' '}
        <span>
          Desenvolvido por{' '}
          <a href="https://github.com/IzabellaLoyse">Izabella Loyse</a>
        </span>
      </Description>
    </FooterPage>
  );
}

export default Footer;
