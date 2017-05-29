import { GET_PUPPY_GIFS_SUCCESS } from '../actions/getPuppyGifs';

const intialState = [
  {
    images: {
      fixed_height: {
        url: ""
      }
    }
  }
]

export const GifsReducer = (state = intialState, action) => {
  switch(action.type){
    case GET_PUPPY_GIFS_SUCCESS:
      return action.puppies
    default:
      return state;
  }
}
