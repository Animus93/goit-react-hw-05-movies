import React from 'react';
import { Link} from 'react-router-dom';
import api from '../../api/api';
import styles from './Home.module.css';

class Home extends React.Component {
  state = {
    movies: [],
    page: 1,
  };

  componentDidMount() {
    if(localStorage.movies){
      const SavedMovies = JSON.parse(localStorage.getItem('movies'))
      const SavedPage = JSON.parse(localStorage.getItem('page'))
      return this.setState({movies: SavedMovies, page: SavedPage})
    }
    return this.fetchMovies();
  };

  componentDidUpdate() {
    localStorage.setItem('movies',JSON.stringify(this.state.movies))
    localStorage.setItem('page',JSON.stringify(this.state.page))
  }

  fetchMovies = async () => {
    const response = await api.fetchMovies(this.state.page);
    const results = response.data.results;
    this.setState((prevState) => {
      return {movies: [...prevState.movies,...results],
      page: prevState.page+1}
    });
  };

  isMovie = movie => {
    if (movie.media_type === 'movie') {
      return (
        <Link to={`/goit-react-hw-05-movies/movie/:${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
          alt={movie.title || movie.name}
        />
      </Link>
      );
    }
    return (
      <img
        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
        alt={movie.title || movie.name}
        onClick={() => {
          alert(
            'Бэкенд карявый подробаня информация доступна только для фильмов :с'
          );
        }}
      />
    );
  };

  render() {
    const { movies } = this.state;
    return (
      <>
        <h1>Популярное</h1>
        <hr />
        <div className={styles.container}>
          {movies.map(movie => {
            return (
              <li className={styles.item} key={movie.id}>
                {this.isMovie(movie)}
              </li>
            );
          })}
        </div>
        {movies.length>0 && <button className={styles.LoadModeBtn} type='Button' onClick={this.fetchMovies}>Загрузить еще</button>}
      </>
    );
  }
}

export default Home;
