import React, { useState } from 'react'
 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserList = ({expenses , setExpense}) => {

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState();
    const [isedit, setIsedit] = useState(false);
    const [editid, setEditid] = useState("");

    
    const handleDelete = (id) => {
        let deletedArray = expenses.filter((ele) => ele.id !== id)
        setExpense(deletedArray)
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        const newexp = {
            id: uuidv4(),
            title: title,
            category: category,
            amount: amount
        }

        setExpense([...expenses, newexp])
        toast.success('Successfully Created');
        setTitle("");
        setCategory("");
        setAmount(0);
    }

    const handelUpdate = (exp) => {
        setTitle
    }

    let sum = 0;
    expenses.map((exp) => (sum += parseInt(exp.amount)))

    return (
        <div>
            <table >
                <thead>
                    <th>S.No</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Amount</th>
                    <th>Delete</th>
                </thead>
                <tbody>
                    {expenses.map((exp, index) => (
                        <tr key={exp.id} >
                            <td>{index + 1}</td>
                            <td>{exp.title}</td>
                            <td>{exp.category}</td>
                            <td>{exp.amount}</td>
                            <button onClick={() => handelUpdate(exp)}>Update</button>
                            <button onClick={() => handleDelete(exp, id)}>Delete</button>
                        </tr>
                    ))}
                    <tr>
                        <th colSpan={3}>Total</th>
                        <td>{sum}</td>
                    </tr>
                </tbody>
            </table>
            <form onSubmit={handelSubmit}>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <select onChange={(e) => setCategory(e.target.value)} value={category}>
                    <option value={""}>--Select--</option>
                    <option value={"Food"}>Food</option>
                    <option value={"Gorcery"}>Gorcery</option>
                    <option value={"Movie"}>Movie</option>
                    <option value={"NoteBooks"}>NoteBooks</option>
                </select>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                <button >Submit</button>
            </form>
        </div>
    )
}

export default UserList