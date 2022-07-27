import { BiCameraMovie } from 'react-icons/bi';
import { Link } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import { HeaderPage, Title } from './style';

function Header() {
  return (
    <HeaderPage>
      <div>
        <Title>
          <Link to="/">
            <BiCameraMovie size={30} />
            The Movies
          </Link>
        </Title>
      </div>

      <Navbar />
    </HeaderPage>
  );
}

export default Header;
