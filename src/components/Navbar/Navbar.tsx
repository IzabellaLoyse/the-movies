import { Link } from 'react-router-dom';
import { ListItem } from './style';

function Navbar() {
  return (
    <nav>
      <ul>
        <ListItem>
          <Link to="/">Home</Link>
        </ListItem>
      </ul>
    </nav>
  );
}

export default Navbar;
