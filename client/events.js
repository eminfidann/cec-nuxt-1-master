export default (axios) => ({
  getEvents: (parameters = {}) => {
    return axios.get("/events", { ...parameters });
  },
});
