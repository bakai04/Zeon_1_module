let store;
const getStore = async ()=>{
    store = await fetch("./src/config.json").then((resp) => resp.json());
    if (store) {
      return store;
    } else {
      return new Error('happened some shit!!!')
    }
};

export const data=getStore();