import { createContext } from 'react'

const peopleContext = createContext({
  people: [],
  addPerson: () => {}
}) 

export default peopleContext
