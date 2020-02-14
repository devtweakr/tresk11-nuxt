import axios from 'axios'
import { jsonapiModule } from 'jsonapi-vuex'

const api = axios.create({
  baseURL: 'https://tresk.si/d/jsonapi/',
  headers: {
    'Content-Type': 'application/vnd.api+json'
  }
})

const { state, mutations, actions, getters } = jsonapiModule(api)
export default { state, mutations, actions, getters }
