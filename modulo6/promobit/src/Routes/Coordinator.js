export const goToHome = (navigate) => {
  navigate("/");
};

export const goToMovieDetail = (navigate, id) => {
  navigate(`/movie/${id}`);
};
