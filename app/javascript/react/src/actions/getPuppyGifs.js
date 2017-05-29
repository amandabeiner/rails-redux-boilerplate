export const GET_PUPPY_GIFS_SUCCESS = 'GET_PUPPY_GIFS_SUCCESS';

export const getPuppyGifsSuccess = puppies => {
  return {
    type: GET_PUPPY_GIFS_SUCCESS,
    puppies
  }
}

export const fetchPuppyGifs = () => {
  return (dispatch) => {
    fetch('http://api.giphy.com/v1/gifs/search?q=puppies&api_key=dc6zaTOxFJmzC')
    .then(response => {
      let puppies = response.json()
      return puppies
    }).then(puppies => {
      return dispatch(getPuppyGifsSuccess(puppies.data))
    })
  }
}
