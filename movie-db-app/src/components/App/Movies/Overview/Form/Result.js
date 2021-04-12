import { useCallback } from "react";
import useFetch from "../../../../../core/hooks/useFetch";
import { fetchFilteredMovies } from "../../../../../core/modules/movies/api";
import Alert from "../../../../Design/Alert";
import MovieCard from "../../../../Design/MovieCard";
import Spinner from "../../../../Design/Spinner";

const Result = ({result}) => {

    const apiCall = useCallback(() => {
        return fetchFilteredMovies(result);
    }, [result])

    const {
        data: movies,
        error,
        isLoading
    } = useFetch(apiCall);

    if (isLoading) {
        return <Spinner />;
    }

    if (error) {
        return <Alert color="danger">{error}</Alert>;
    }

    return (
        <>
        {
            movies && (
                <ul className='movieList'>
                    { movies.map((movie) => (
                        <li key={movie._id}>
                            <MovieCard movie={movie}/>
                        </li>
                    ))}
                </ul>
            )
        }
        </>
    )
}

export default Result;