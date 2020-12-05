import store from "@redux";

export const initModule = async (reducer, saga, module) => {
  store.injectReducer(module, reducer.default);
  store.injectSaga(module, saga.default);
};
