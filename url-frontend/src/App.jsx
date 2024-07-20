import "./App.css"
import Body from "./components/body"
import Header from "./components/header"
import { ToastContextProvider } from "./components/context/ToastContext"

const App = () => {
  return (
    <>
     <ToastContextProvider>
      <Header />
      <Body />
     </ToastContextProvider>
     
    </>
  )
}

export default App;