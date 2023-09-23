import { useState} from 'react'
import Sidebar from "./components/sidebar"
import Dashboard from "./components/Dashboard"
import Create from "./components/Create"
import Edit from "./components/Edit"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  let [data,setData] = useState([
    {
      invoice:"#AHGA6B",
      customer:"jacob marcus",
      date:"23/09/2022",
      payableamount:"$000",
      paidamount:"$000",
      due:"$000"
    },
    {
      invoice:"#AHGA6B",
      customer:"jacob marcus",
      date:"23/09/2022",
      payableamount:"$000",
      paidamount:"$000",
      due:"$000"
    },
    {
      invoice:"#AHGA6B",
      customer:"jacob marcus",
      date:"23/09/2022",
      payableamount:"$000",
      paidamount:"$000",
      due:"$000"

    },
    {
      invoice:"#AHGA6B",
      customer:"jacob marcus",
      date:"23/09/2022",
      payableamount:"$000",
      paidamount:"$000",
      due:"$000"

    },
    {
      invoice:"#AHGA6B",
      customer:"jacob marcus",
      date:"23/09/2022",
      payableamount:"$000",
      paidamount:"$000",
      due:"$000"
    },
    {
      invoice:"#AHGA6B",
      customer:"jacob marcus",
      date:"23/09/2022",
      payableamount:"$000",
      paidamount:"$000",
      due:"$000"
    }
  ])
 

  return <>
  <div id='wrapper'>
    <BrowserRouter>
    <Sidebar/>
    <Routes>
      <Route path='/dashboard' element={<Dashboard data={data}/>}/>
      <Route path='/Create' element={<Create/>}/>
      <Route path='/Edit' element={<Edit/>}/>
    </Routes>
    </BrowserRouter>
    

  </div>
 
  </>
  
}

export default App
