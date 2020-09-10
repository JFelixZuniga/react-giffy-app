const apiKey = '7lZH9gugK2y11tDwLAlB3SHzhtuQz4gy'

export default function getGifs ({keyword = 'morty'} ={}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`
  return fetch(apiURL)
  .then(res => res.json())
  .then(response => {
    const {data} = response
    const gifs = data.map(image =>
      image.images.downsized_medium.url)
      console.log(gifs)
      return gifs
  })
}