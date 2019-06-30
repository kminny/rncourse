import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  DESELECT_PLACE
} from "../actions/actionTypes";

// javascript object
const initialState = {
  places: [],
  selectedPlace: null
};

const reducer = (state = initialState, action) => {
  // state: old state, if we don't have any existing state, start with 'initialState'
  // action: reducer will be executed whenever we receive an action

  switch (action.type) {
    // action type 에 따라 동작을 정의한다.
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random().toString(),
          name: action.placeName,
          image: {
            uri:
              "https://www.treebo.com/blog/wp-content/uploads/2017/04/Places-to-Visit-in-Jaipur.jpg"
          }
        })
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== state.selectedPlace.key;
        }),
        selectedPlace: null
      };
    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(place => {
          return place.key === action.placeKey;
        })
      };
    case DESELECT_PLACE:
      return {
        ...state,
        selectedPlace: null
      };
    default:
      return state;
  }
};

export default reducer;
