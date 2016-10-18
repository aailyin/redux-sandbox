/*eslint-disable*/
export const ping = store => next => action => {
  console.log(`Type of event: ${action.type}, data: ${action.payload}`);
  return next(action);
}
/*eslint-disable*/