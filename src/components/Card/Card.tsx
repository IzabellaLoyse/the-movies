import {
  CardContainer,
  CardContent,
  CardImage,
  CardPopularity,
  CardStar,
  CardTitle,
} from './style';

import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IMovieCardProps } from '../../interfaces/movie';

function Card({
  title,
  id,
  poster_path,
  vote_average,
  popularity,
  showLink = true,
}: IMovieCardProps) {
  const imageUrl = import.meta.env.VITE_IMG;

  return (
    <CardContainer>
      <CardImage>
        <img
          src={imageUrl + poster_path}
          alt={'Imagem do cartaz do filme' + title}
        />
      </CardImage>

      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardPopularity>
          Popularidade: <strong>{popularity}</strong>{' '}
        </CardPopularity>

        <CardStar>
          <FaStar color="#FACC15" size={20} /> {vote_average}
        </CardStar>

        {showLink && <Link to={`/movie/${id}`}>Detalhes</Link>}
      </CardContent>
    </CardContainer>
  );
}

export default Card;
