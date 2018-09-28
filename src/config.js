module.exports = {
  PORT: process.env.PORT || 8080,
  API_URL:
    process.env.REACT_APP_BASE_URL || "https://caritas-auxilium.herokuapp.com",
  API_LOCAL: process.env.REACT_APP_BASE_URL || "http://localhost:8000"
};
