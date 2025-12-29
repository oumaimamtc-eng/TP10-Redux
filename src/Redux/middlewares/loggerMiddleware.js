const loggerMiddleware = store => next => action => {
  console.log("Action :", action);
  console.log("State before :", store.getState());

  if (
      !store.getState().auth.isAuthenticated &&
      action.type !== "LOGIN" &&
      action.type !== "REGISTER"
    ) {
      window.location.href = "/Login";
      return;
    }
  next(action);

  console.log("State after :", store.getState());
};

export default loggerMiddleware;
