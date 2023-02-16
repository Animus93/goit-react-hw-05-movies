import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api/api';
import styles from './Reviews.module.css';

const Reviews = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchReviews() {
      const response = await api.fetchReview(id.substring(1));
      const result = response.data.results;
      return setData(result);
    }
    fetchReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <ul className={styles.container}>
      {data !== null ? (
        data.map(review => {
          return (
            <div className={styles.item} key={review.id}>
                {review.author_details.avatar_path !== null && 
                <>
              <p className={styles.cast}>
                <b>Автор</b>: {review.author}
              </p>
              <li>
                  <img
                    src={`https://image.tmdb.org/t/p/w200/${review.author_details.avatar_path}`}
                    alt={review.id}
                  />
                <p className={styles.content}>{review.content}</p>
              </li>
              </>
                }
            </div>
          );
        })
      ) : (
        <p>у этого фильма еще нет обзоров</p>
      )}
    </ul>
  );
};

export default Reviews;
