// import Vuex from "vuex";

// const createStore = () => {
//   return new Vuex.Store({
//     state: {
//       fetchedEvents: [],
//       accounts: [],
//       books: [],
//     },
//     mutations: {
//       setEvents(state, events) {
//         state.fetchedEvents = events;
//       },
//       addEvents(state, event) {
//         state.fetchedEvents.push(event);
//       },
//       updateEvent(state, editedEvent) {
//         console.log("Mutations => " + editedEvent);
//         let event_index = state.fetchedEvents.findIndex(
//           (event) => event.id == editedEvent.id
//         );
//         console.log("Mutations | EVENT INDEX => " + event_index);
//         state.fetchedEvents[event_index] = editedEvent;
//       },
//       //
//       setAccounts(state, accounts) {
//         state.accounts = accounts;
//       },
//       setBooks(state, books) {
//         state.books = books;
//       },
//     },
//     actions: {
//       //   nuxtServerInit(vuexContext, context) {
//       //     // vuexContext.dispatch("setEvents", array)
//       //     // veya :

//       //     return context.app.$axios.get(process.env.BASE_URL).then((response) => {
//       //       let data = response.data;
//       //       let eventArray = [];
//       //       for (let key in data) {
//       //         // data["id"] = key
//       //         console.log(key);
//       //         eventArray.push({
//       //           id: key,
//       //           ...data[key],
//       //         });
//       //       }
//       //       console.log(eventArray);
//       //       vuexContext.commit("setEvents", eventArray);
//       //     });
//       //   },
//       setEvents(vuexContext, events) {
//         vuexContext.commit("setEvents", events);
//       },
//       addEvents(vuexContext, event) {
//         return this.$axios
//           .post(process.env.BASE_URL + "events.json", event)
//           .then((response) => {
//             vuexContext.commit("addEvent", {
//               ...event,
//               id: response.data.name,
//               // event comes first to be replaced with id that belongs to response.data
//             });
//           });
//       },
//       updateEvent(vuexContext, editedEvent) {
//         return this.$axios
//           .put(process.env.BASE_URL + editedEvent.id + ".json", editedEvent)
//           .then((response) => {
//             console.log("Action => " + editedEvent);
//             vuexContext.commit("updateEvent", editedEvent);
//           })
//           .catch((e) => console.log(e));
//       },
//       //
//     },
//     getters: {
//       getEvents(state) {
//         return state.fetchedEvents;
//       },
//       //
//       getAccounts(state) {
//         return state.accounts;
//       },
//     },
//   });
// };

// export default createStore;
