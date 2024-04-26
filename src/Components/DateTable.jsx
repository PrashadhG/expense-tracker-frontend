import axios from 'axios'
import React from 'react'

const DataTable = (props) => {
    const { expense, setExpense } = props

    const handelDelete = async (_id) => {
        try {
            const response = await axios.delete(`https://expense-tracker-backend-dr56.onrender.com/delete/${_id}`)
            setExpense(expense.filter(item => item._id !== _id))
        }catch(error){
            console.error("Error Deleting item", error);
        }
    }
    return (
        <div>
            <table border={1}>
                <thead>
                    <th>S.No</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Amount</th>
                    <th>Date</th>
                </thead>
                <tbody>
                    {expense && expense?.map((exp, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{exp.title}</td>
                            <td>{exp.category}</td>
                            <td>{exp.amount}</td>
                            <td>{new Date(exp.date).toLocaleDateString()}</td>
                            <td><button onClick={() => handelDelete(exp._id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default DataTable