import Account from "~/client/account";
import Events from "~/client/events";

export default (context, inject) => {
  const factories = {
    account: Account(context.$axios),
    events: Events(context.$axios),
  };

  // Inject $API
  inject("API", factories);
};
