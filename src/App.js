import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./views/HomePage/HomePage";
import MoviesPage from "./views/MoviesPage/MoviesPage";
import MovieDetailsPage from "./views/MovieDetailsPage/MovieDetailsPage";
import NotFound from "./views/NotFound/NotFound";
import Layout from './components/Layout/Layout';
import routes from "./routes";

const App = () => (
  <Layout>
    <Switch>
      <Route path={routes.home} exact component={HomePage} />
      <Route path={routes.movies} exact component={MoviesPage} />
      <Route path={routes.moviesDetails} component={MovieDetailsPage} />
      <Route component={NotFound} />
    </Switch>
  </Layout>
);

export default App;
