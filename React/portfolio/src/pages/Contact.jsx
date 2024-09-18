import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"

const Contact = () => {


  const [nulldata, setNullData] = useState(null)
  const [numberdata, setNumberData] = useState(0)
  const [stringdata, setStringData] = useState("a")
  const [booleandata, setBooleanData] = useState(true)
  const [arraydata, setArrayData] = useState([])
  const [objdata, setObjData] = useState({
    name: "",
    age: 0,
    isalive: false
  })

  const [visible, setvisible] = useState(false)

  if (!nulldata) {
    setNullData("Nulldata")
  }
  console.log(nulldata)



  // useEffect(() => {
  //   console.log("Mounted")
  // }, [data])
  return (
    <>
      {
        visible && (
          <>

            <div className=" h-40 w-40 bg-red z-50">Contact</div>
            <button onClick={() => setvisible(!visible)}> close </button>

          </>
        )
      }
      <button onClick={() => setvisible(true)}> delete </button>
    </>
  )
}

export default Contact