import axios from 'axios'
import { jsonapiModule } from 'jsonapi-vuex'

const api = axios.create({
  baseURL: 'https://tresk.si/d/jsonapi/',
  headers: {
    'Content-Type': 'application/vnd.api+json'
  }
})

const jsonapi = jsonapiModule(api, {
  clearOnUpdate: true
})

export const state = jsonapi.state
