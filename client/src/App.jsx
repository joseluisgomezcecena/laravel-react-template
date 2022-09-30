import React, {useEffect} from 'react'
import './App.css'
import {HttpClient} from "./utilities/HttpClient";

function App() {

  const[initiated, setInitiated] = React.useState(false)
  const [user, setUser] = React.useState(null)

  useEffect(() => {
    init();
  }, [])

const init = async () => {
    if (initiated) {
      return;
    }

    const {data} = await HttpClient().get('/api/auth/init');

    if (data.user) {
        setUser(data.user)
    }
    setInitiated(true);
}

  return (
      <></>
  )
}

export default App
