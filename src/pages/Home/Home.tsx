import Card from '../../components/Card/Card';
import useFetch from '../../hooks/useFetch';
import { IMovie } from '../../interfaces/movie';
import { Title } from './style';

import Cards from '../../components/Cards/Cards';
import Loading from '../../components/Loading/Loading';
import SearchMovie from '../../components/SearchMovie/SearchMovie';
import Layout from '../../Layout/Layout';

function Home() {
  const apiKey = import.meta.env.VITE_API_KEY;

  const { data: movies, isLoading } = useFetch<IMovie>(
    `movie/top_rated?${apiKey}`,
  );

  return (
    <>
      <Layout>
        <SearchMovie />

        <section>
          <Title>Os Melhores Filmes</Title>

          <Cards>
            {isLoading && <Loading />}

            {movies?.results?.map((movie) => (
              <Card
                key={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
                popularity={movie.popularity}
                vote_average={movie.vote_average}
              />
            ))}
          </Cards>
        </section>
      </Layout>
    </>
  );
}

export default Home;
