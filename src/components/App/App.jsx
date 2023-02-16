import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css';

const Home = lazy(() => import('../Home/Home'));
const MoviesPage = lazy(() => import('../MoviePage/MoviePage'));
const MovieDetails = lazy(() => import('../MovieDetails/MovieDetails'));
const Layout = lazy(() => import('../Layout/Layout'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

export const App = () => {
  return (
    <div className={styles.body}>
      <Suspense fallback={<h1>Загрузка...</h1>}>
        <Routes>
          <Route path="/goit-react-hw-05-movies" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movie" element={<MoviesPage />} />
            <Route path="movie/:id/*" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
