export default function ({ $axios, redirect }) {
  $axios.onRequest((config) => {
    /* eslint-disable */
    console.log('Making request to ' + config.url);
    /* eslint-enable */
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
