const baseURL = 'https://digimon-api.vercel.app'

async function getBeginers() {
    try {
      const response = await axios.get(`${baseURL}/api/digimon`)
      console.log(response.data);

    } catch (error) {
      console.error(error);
    }
}