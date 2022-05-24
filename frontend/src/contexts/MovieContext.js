import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const api = axios.create({
    baseURL: '/api',
    timeout: 1000,
    auth: {
      username: process.env.API_USERNAME,
      password: process.env.API_PASSWORD
    }
  });

  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [movieEdit, setMovieEdit] = useState({
    item: {},
    edit: false
  });

  useEffect(() => {
    getMovie();
  }, []);

  const getMovie = async () => {
    const data = await api.get('/movies').then(res => res.data);
    setMovie(data);
    setIsLoading(false);
  }

  const addMovie = async (newMovie) => {
    const data = await api.put('/movies', {
      title: newMovie.title,
      rating: newMovie.rating,
      img: newMovie.img
    }).then(res => res.data);
    setMovie([data, ...movie]);
  }

  const deleteMovie = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      await api.delete(`/movies/${id}`);
      setMovie(movie.filter((item) => item.id !== id));
    }
  }

  const updateMovie = async (id, updatedMovie) => {
    const data = await api.put(`/movies/${id}`, {
      title: updatedMovie.title,
      rating: updatedMovie.title,
      img: updatedMovie.img
    }).then(res => res.data);
    setMovie(movie.map((item) => (item.id === id ? { ...item, ...data } : item)));
    setMovieEdit({
      item: {},
      edit: false
    });
  }

  const editMovie = async (movie) => {
    setMovieEdit({
      movie,
      edit: true
    });
  }

  return (
    <MovieContext.Provider value={{ movie, movieEdit, isLoading, 
      addMovie, deleteMovie, editMovie, updateMovie }}>
      {children}
    </MovieContext.Provider>
  )
}

export default MovieContext;