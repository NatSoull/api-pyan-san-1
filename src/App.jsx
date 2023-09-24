/* eslint-disable no-unused-vars */
import React from 'react'
import { useGetDataQuery , useGetTokenMutation } from "./redux/api/currencyDataApi"
import Path from './routes/Path'

const App = () => {

  // const { data } = useGetDataQuery()
  // console.log(data)

  const mutation = useGetTokenMutation()
  console.log(mutation)

  // const teams = data?.data.teams

  

  return (
    <div>
      <Path />
    </div>
  )
}

export default App
