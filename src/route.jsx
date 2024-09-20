import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./home/App"

export default function Navegacao() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App /> }/>
      </Routes>
    </BrowserRouter>
  )
}