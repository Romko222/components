import './App.css'
import Greeting from './components/Greeting'
import Message from './components/Message'
import Button from './components/Button'

function App() {

  function log() {
    console.log("Тиць")
  }

  return (
    <>
      <Greeting name = "Боб"/>
      <Message text = "У Вас 200 пропущених повідомлень!"/>
      <Button onClick = {log}/>
    </>
  )
}

export default App
