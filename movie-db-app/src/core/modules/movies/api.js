import { createHeaders } from "../../utils/api";

const fetchMovies = () => (headers) => {

    return fetch(`${process.env.REACT_APP_BASE_API}/movies`, {
        headers: createHeaders(headers),
    });

}

const fetchMovie = (id) => (headers) => {

    return fetch(`${process.env.REACT_APP_BASE_API}/movies/${id}`, {
        headers: createHeaders(headers),
    });

}

const createMovies = (data) => (headers) => {
    return fetch(`${process.env.REACT_APP_BASE_API}/movies`, {
        method:'POST',
        headers: createHeaders(headers),
        body: JSON.stringify(data),
    });
}

const updateMovie = (data) => (headers) => {
    const {_id} = data;
    return fetch(`${process.env.REACT_APP_BASE_API}/movies/${_id}`, {
        method:'PATCH',
        headers: createHeaders(headers),
        body: JSON.stringify(data),
    });
}

export {
    fetchMovies,
    fetchMovie,
    createMovies,
    updateMovie,
}