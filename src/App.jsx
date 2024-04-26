import { useEffect, useState } from 'react'
import './App.css'
import Header from "./Components/Header";
import AddData from './Components/AddData';
import DataTable from './Components/DateTable';
import axios from 'axios';

function App() {
  const [expense, setExpense] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://expense-tracker-backend-dr56.onrender.com/")
        setExpense(response.data)
      }catch(error){
        console.log(error);
      }
    };
    fetchData();
  },[])
  return (
    <>
      <Header />
      <AddData expense={expense} setExpense={setExpense} />
      <DataTable expense={expense} setExpense={setExpense} />
    </>
  )
}

export default App
