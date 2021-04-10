import { Route, Switch, Redirect } from 'react-router-dom';
import Movies from './Movies/Movies';
import Directors from './Directors/Directors';
import { Routes } from '../../core/routing';
import LikedMoviesOverview from './Liked/Overview/LikedMoviesOverview';

const MainRouting = () => {
    return (
        <Switch>
            <Route path={Routes.Movies}>
                <Movies />
            </Route>
            <Route path={Routes.Directors}>
                <Directors />
            </Route>
            <Route path={Routes.LikedMovies}>
                <LikedMoviesOverview/>
            </Route>
            <Redirect to={Routes.Movies} />
        </Switch>
    );
};

export default MainRouting;
