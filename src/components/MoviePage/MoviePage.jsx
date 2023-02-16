import React from 'react';
import { Link } from 'react-router-dom';
import api from '../../api/api';
import styles from './MoviePage.module.css';

class MoviePage extends React.Component {
  state = {
    value: '',
    query: [],
  };

  componentDidMount() {
   if(localStorage.query){
    const savedQuery = JSON.parse(localStorage.getItem('query'))
    this.setState({query: savedQuery})
   }
  }

  onButtonListner = async data => {
    data.preventDefault();
    if(!this.state.value){
      return alert("Введите название фильма для поиска")
    }
    const response = await api.fetchSerchMovie(this.state.value);
    const results = await response.data.results;
    await this.setState({ query: results, value: '' });
    localStorage.setItem('query',JSON.stringify(results))
  };

  onInputListner = data => {
    this.setState({ value: data.currentTarget.value });
  };

  render() {
    const { query } = this.state;
    return (
      <>
        <form className={styles.d7} onSubmit={this.onButtonListner}>
          <button type="submit">Найти</button>
          <input
            type="text"
            placeholder="Искать здесь..."
            onChange={this.onInputListner}
            value={this.state.value}
          />
        </form>
        {query.length > 0 && (
          <div className={styles.container}>
            {query
              .sort((prev, next) => next.vote_count - prev.vote_count)
              .map(movie => {
                if(movie.poster_path){
                  return (
                  <div key={movie.id}>
                    <li className={styles.item}>
                    <Link to={`/goit-react-hw-05-movies/movie/:${movie.id}`}>
                      <img
                        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                        alt={movie.id}
                      />
                      </Link>
                      <div className={styles.description}>
                        <p>
                          <b>{movie.title}</b>
                        </p>
                        <p>
                          <b>Описание</b>: {movie.overview}
                        </p>
                        <p>
                          <b>Оценка</b>: {movie.vote_average}
                        </p>
                        <p>
                          <b>Голосов</b>: {movie.vote_count}
                        </p>
                      </div>
                    </li>
                    <hr />
                  </div>
                )}
                return <div key={movie.id}></div>;
              })}
          </div>
        )}
      </>
    );
  }
}

export default MoviePage;
