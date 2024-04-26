import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import image from "../assets/expense-image.png"
import './AddData.css'

const AddData = (props) => {
    const { expense, setExpense } = props

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState();

    const handelSubmit = async(e) => {
        e.preventDefault();
        const response = await  axios.post("https://expense-tracker-backend-dr56.onrender.com/add",{
            title: title,
            category: category,
            amount: amount
        })

        setExpense([...expense, response.data])
        setTitle("");
        setCategory("");
        setAmount(" ");
    }

    const handelClear = ()=>{
        setTitle("");
        setCategory("");
        setAmount(" ");
    }

    return (
        <div className='parent-data'>
            <p className='form-para'>Add the Expenses</p>
            <div className='child-form'>
                <div className='form-data'>
                    <form onSubmit={handelSubmit}>
                        <div className="title-input">
                            <p className="form-head">Title</p>
                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Name"/>
                        </div>
                        <div className="title-input">
                            <p className="form-head">Category</p>
                            <select onChange={(e) => setCategory(e.target.value)} value={category}>
                                <option value={""}>--Select--</option>
                                <option value={"Food"}>Food</option>
                                <option value={"Gorcery"}>Gorcery</option>
                                <option value={"Movie"}>Movie</option>
                                <option value={"NoteBooks"}>NoteBooks</option>
                                <option value={"Rent"}>Rent</option>
                            </select>
                        </div>
                        <div className="title-input">
                            <p className="form-head">Amount</p>
                            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="no-arrows" placeholder="Amount"/>

                        </div>
                        <div className="form-buttons">
                            <button className="submit-button">SUBMIT</button>
                            <button onClick={handelClear} className="clear-button">CLEAR</button>
                        </div>
                    </form>
                </div>
                <div className='image'><img src={image} /></div>
            </div>
        </div>
    )
}

export default AddData