import { useEffect } from "react";
import { Main } from "./project"
// import styles from './stylesApp'

function App() {
  useEffect(() => {
    async function getData() {
      try {
        const token = localStorage.getItem('adminToken')
        if (!token) return;
        const response = await adminProfile(token)
        console.log(response);
      } catch (error) {
        localStorage.removeItem('adminToken');
        window.location.replace("/login")
        console.log(error);
      }
    }
    getData()
  }, [])
  return (
    <>
      <Main />
    </>
  )
}

export default App
