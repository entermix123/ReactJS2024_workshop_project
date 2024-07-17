import * as requeste from './requester'

const BASE_URL = 'htpp://localhost:3030/jsonstore/games'

export const getAll = () => requeste.get(BASE_URL)