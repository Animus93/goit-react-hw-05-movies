import { useParams, useNavigate, NavLink, Outlet } from 'react-router-dom';
import api from '../../api/api';
import { useEffect, useState } from 'react';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await api.fetchMovieDetails(id.substring(1));
      return setData(response.data);
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {data !== null && (
        <>
          <button className={styles.btn} onClick={goBack}>
            Назад
          </button>
          <div className={styles.container}>
            <div className={styles.imgTags}>
              <img
                className={styles.img}
                alt={data.id}
                src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
              />
              <div className={styles.linkBlock}>
                <li className={styles.link}>
                  <NavLink to="cast" replace>
                    Актёры
                  </NavLink>
                </li>
                <li className={styles.link}>
                  <NavLink to="reviews" replace>
                    Обзоры
                  </NavLink>
                </li>
              </div>
            </div>
            <div className={styles.description}>
              <h1>{data.title}</h1>
              <p>{data.overview}</p>
              <div>
                <p>
                  <b>Оценка:</b> {data.vote_average}
                </p>
                <p>
                  <b>Голосов:</b> {data.vote_count}
                </p>
                <ul className={styles.tags}>
                  <b>Жанр:</b>
                  {data.genres.map(tag => {
                    return (
                      <li className={styles.tag} key={tag.id}>
                        {tag.name.charAt(0).toUpperCase() + tag.name.slice(1)}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <Outlet />
        </>
      )}
    </>
  );
};

export default MovieDetails;
