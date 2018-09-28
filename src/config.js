module.exports = {
  PORT: process.env.PORT || 8080,
  API_URL:
    process.env.REACT_APP_API_BASE_URL ||
    "https://caritas-auxilium.herokuapp.com/"
};
