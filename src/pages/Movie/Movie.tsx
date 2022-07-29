import { Info, InfoDescription, MoviePage, Tagline } from './style';

import {
  BsFillFileEarmarkTextFill,
  BsGraphUp,
  BsHourglassSplit,
  BsWallet2,
} from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import Card from '../../components/Card/Card';
import Loading from '../../components/Loading/Loading';
import useFetch from '../../hooks/useFetch';
import { TypeResultsMovies } from '../../interfaces/movie';
import Layout from '../../layout/Layout';

function Movie() {
  const apiKey = import.meta.env.VITE_API_KEY;

  const { id } = useParams();

  const { data: movie, isLoading } = useFetch<TypeResultsMovies>(
    `movie/${id}?${apiKey}`,
  );

  const formatCurrency = (value: any) => {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };

  return (
    <>
      <Layout>
        {isLoading && <Loading />}

        <MoviePage>
          {movie && (
            <>
              <Card
                title={movie.title}
                poster_path={movie.poster_path}
                vote_average={movie.vote_average}
                showLink={false}
              />

              <Tagline>{movie.tagline}</Tagline>

              <Info>
                <h3>
                  <BsWallet2 color="#2563EB" size={20} />
                  Orçamento
                </h3>
                <p>{formatCurrency(movie.budget)}</p>
              </Info>

              <Info>
                <h3>
                  <BsGraphUp color="#2563EB" size={20} />
                  Faturamento
                </h3>
                <p>{formatCurrency(movie.revenue)}</p>
              </Info>

              <Info>
                <h3>
                  <BsHourglassSplit color="#2563EB" size={20} />
                  Duração
                </h3>
                <p>{movie.runtime} minutos</p>
              </Info>

              <InfoDescription>
                <h3>
                  <BsFillFileEarmarkTextFill color="#2563EB" size={20} />
                  Descrição
                </h3>
                <p>{movie.overview}</p>
              </InfoDescription>
            </>
          )}
        </MoviePage>
      </Layout>
    </>
  );
}

export default Movie;
