import config from '../config';

const PetsApiService = {
  getDog() {
    //need to edit the updated endpoint
    return fetch(`${config.API_ENDPOINT}/`, {
      method: 'GET',
      headers: {
        "content/type": "application/json"
      }
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
        )
  },

  getCat() {
    //need to edit the updated endpoint
    return fetch(`${config.API_ENDPOINT}/`, {
      method: 'GET',
      headers: {
        "content/type": "application/json",
      }
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
      )
  },

  deleteDog() {
    //need to edit the updated endpoint
    return fetch(`${config.API_ENDPOINT}/`, {
      method: 'DELETE',
      headers: {
        "content-type": "application/json",
      }
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : undefined
      )
    .catch(e => console.error(e))
  },

  deleteCat() {
    //need to edit the updated endpoint
    return fetch(`${config.API_ENDPOINT}/`, {
      method: 'DELETE',
      headers: {
        "content-type": "application/json",
      }
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : undefined
      )
    .catch(e => console.error(e))
  }
}

export default PetsApiService;