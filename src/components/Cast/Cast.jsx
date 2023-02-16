import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api/api';
import styles from './Cast.module.css';

const Cast = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchCast() {
      const response = await api.fetchMovieCast(id.substring(1));
      const result = response.data.cast;
      return setData(result);
    }
    fetchCast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul className={styles.container}>
      {data !== null &&
        data.map(actor => {
          if (actor.profile_path) {
            return (
              <div className={styles.item} key={actor.id}>
                {actor.profile_path && (
                  <>
                    <p>
                      <b>{actor.name}</b>
                    </p>
                    <li >
                      <img
                        alt={actor.id}
                        src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                      />
                    </li>
                  </>
                )}
              </div>
            );
          }
          return null
        })}
    </ul>
  );
};

export default Cast;
