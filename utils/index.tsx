const axios = require('axios')

export async function fetchCars() {
  const options = {
    method: 'GET',
    url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carolla',
    params: { model: 'corolla' },
    headers: {
      'X-RapidAPI-Key': 'b515922dfcmsh235abca1633f40dp179277jsncf0b2c15adf5',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
    },
  }

  try {
    const response = await axios.request(options)
    return response.data
  } catch (error) {
    console.error(error)
  }
}
