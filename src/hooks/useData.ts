import axios from 'axios';
import { useEffect, useState } from 'react';

export interface Movie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}
interface IData {
  data: Movie[];
  loading: boolean;
  error: null;
}

const useData = (keyword: string) => {
  const key = 'd89a9953';
  const url = `http://www.omdbapi.com/?s=${keyword}&apikey=${key}`;

  const [state, setState] = useState<IData>({
    data: [],
    loading: true,
    error: null,
  });

  const fetchMovies = async () => {
    setState((prev) => ({ ...prev, loading: true }));
    try {
      const { data } = await axios.get(url);
      const movieData = data.Search;
      setState((prev) => ({ ...prev, loading: false, data: movieData }));
    } catch (error) {
      console.log(error);
      setState((prev) => ({ ...prev, error }));
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [keyword]);

  return { loading: state.loading, error: state.error, data: state.data };
};

export default useData;
