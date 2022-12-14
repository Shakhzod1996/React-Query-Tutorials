import axios from "axios"
import { useQuery } from "react-query"

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes")
} 

export const RQSuperHeroesPage = () => {
  const {isLoading, data, isError} = useQuery('super-heroes', fetchSuperHeroes)

  if (isLoading) {
    return <h1>Loading... </h1>
  } 

  if (isError) {
    return <h1>Error... </h1>
  }
  return (
    <>
  <h2>React Query Super Heroes Page</h2>
  {data?.data.map((item) => (
    <h3 key={item.id}>{item.name}</h3>
  ))}
    </>
  )
}
