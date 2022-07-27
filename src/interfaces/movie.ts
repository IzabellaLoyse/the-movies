export interface IMovie {
  results?: Array<TypeResultsMovies>;
}

export interface TypeResultsMovies {
  id?: number;
  title?: string;
  poster_path?: string;
  vote_average?: number;
  popularity?: number;
}

export interface IMovieCardProps extends TypeResultsMovies {
  showLink?: boolean;
}
