export default (axios) => ({
  login: (parameters = {}) => {
    return axios.post("/accounts/login", { ...parameters });
  },
});
