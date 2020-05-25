export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export function addFeature(feature) {
  // console.log("LT: actions.js: addFeature: feature", feature);
  return {
    type: ADD_FEATURE,
    payload: feature,
  };
}

export function removeFeature(feature) {
  // console.log("LT: actions: removeFeature: feature", feature);
  return {
    type: REMOVE_FEATURE,
    payload: feature,
  };
}
