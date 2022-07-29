import { useSearchParams } from 'react-router-dom';
import Card from '../../components/Card/Card';
import Cards from '../../components/Cards/Cards';
import Loading from '../../components/Loading/Loading';
import SearchMovie from '../../components/SearchMovie/SearchMovie';
import useFetch from '../../hooks/useFetch';
import { IMovie } from '../../interfaces/movie';
import Layout from '../../Layout/Layout';
import { ResultSearch, TitleResults } from './style';

function Search() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [searchParams] = useSearchParams();
  const queryParams = searchParams.get('q');

  const { data: movies, isLoading } = useFetch<IMovie>(
    `search/movie?${apiKey}&query=${queryParams}`,
    queryParams,
  );

  return (
    <>
      <Layout>
        <SearchMovie />
        <TitleResults>
          Resultados da busca para: <ResultSearch>{queryParams}</ResultSearch>
        </TitleResults>

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
      </Layout>
    </>
  );
}

export default Search;
