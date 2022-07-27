import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { ILayoutProps } from '../interfaces/layoutProps';
import { Container, Main } from './style';

function Layout({ children }: ILayoutProps) {
  return (
    <Container>
      <Header />

      <Main>{children}</Main>
      <Footer />
    </Container>
  );
}

export default Layout;
