import React, {useState, useEffect} from 'react'
import Tours from "./Tours"
import Loading from "./Loading"

const url = 'https://course-api.com/react-tours-project'

const App = () => {
  const [tours, setTours] = useState([])
  const [isLoading, setIsLoading] = useState(true)


  const getToursData = async () => {
    const toursDataRaw = await fetch(url);
    const toursData = await toursDataRaw.json()
    setTours(toursData);
    setIsLoading(false)
  }

  const removeTours = id => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }



  useEffect(() => {
    getToursData()
  }, [])


  if(isLoading) {
    return <div className="container-alt">
      <Loading/>
    </div>
  }

  if(tours.length === 0) {
    return (
      <div className="container-alt">
        <h1>No more tours left.</h1>
        <button className="btn" onClick={getToursData}>Refresh</button>
      </div>
    )
  }


  return (
    <div className="container">
      <Tours tours={tours} removeTours={removeTours}/>
    </div>
  )
}

export default App
