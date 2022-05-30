let store;
const getStore = async () => {
  store = await fetch("./src/config.json").then((resp) => resp.json());
  if (store) {
    return store;
  } else {
    return new Error("An error has occurred");
  }
};

export const data = getStore();
