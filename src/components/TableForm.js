import React, { useState, useEffect} from "react";
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai"
import{v4 as uuidv4} from "uuid";

export default function TableForm({description, quantity, price, amount, list, setDescription, setQuantity, setPrice, setAmount, setList, total, setTotal}){

    const [isEditing, setIsEditing] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()

        if (!description || !quantity || !price) {
            alert("Please fill in all inputs")
        } else {
            const newItems = {
                id: uuidv4(), 
                description, quantity, price, amount
            }
            setDescription("")
            setQuantity("")
            setPrice("")
            setAmount("")
            setList([...list, newItems])
        /*console.log(list) */
        }
    }

    useEffect(() => {
        const calculateAmount = (amount) => {
            setAmount(quantity * price);
        }
        calculateAmount(amount)
    }, [amount, price, quantity, setAmount])
    
    let rows =  document.querySelectorAll(".amount")
    let sum = 0

    for(let i=0; i<rows.length; i++){
        if(rows[i].className === "amount"){
            sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
            setTotal(sum)
        }
    }

    const editRow = (id) => {
        const editingRow = list.find((row) => row.id === id)
        setList(list.filter((row) => row.id !== id))
        setIsEditing(true)
        setDescription(editingRow.description)
        setQuantity(editingRow.quantity)
        setPrice(editingRow.price)
        setAmount(editingRow.amount)
    }
    
    const deleteRow = (id) => setList(list.filter((row) => row.id !== id))

    return(
        <>  
            <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:mt-10">
                    <label htmlFor="description">Enter Item Description</label>
                    <input type="text" name="description" id="description" placeholder="Items Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <div className="md:grid grid-cols-3 gap-10">
                    <div className="flex flex-col">
                        <label htmlFor="quantity">Enter Quantity</label>
                        <input type="text" name="quantity" id="quantity" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="price">Enter Price</label>
                        <input type="text" name="price" id="price" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)}/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="amount">Amount</label>
                        <p>{amount}</p>
                    </div>
                </div>
                <button type="submit" className="mb-5 bg-blue-500 text-white font-bold float-right py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">{
                    isEditing ? "Finish Editing" : "Add Table Items"
                }</button>
            </form>

            <table width="100%" className="mb-10 overflow-auto">
                <thead>
                    <tr className="bg-gray-100 p-1">
                        <td className="font-bold">Description</td>
                        <td className="font-bold">Quantity</td>
                        <td className="font-bold">Price</td>
                        <td className="font-bold">Amount</td>
                        <td></td>
                    </tr>
                </thead>
                {list.map(({id, description, quantity, price, amount }) => (
                    <React.Fragment key={id}>
                        <tbody>
                            <tr>
                              <td>{description}</td>
                              <td>{price}</td>
                              <td>{quantity}</td>
                              <td className="amount">{amount}</td>
                              <td><button onClick={() => deleteRow(id)}><AiOutlineDelete className="text-red-500 font-bold text-xl" /></button></td>
                              <td>
                                <button onClick = {() => editRow(id)}><AiOutlineEdit className="text-green-500 font-bold text-xl"/></button>
                              </td>
                            </tr>
                        </tbody>
                    </React.Fragment>
                ))}
            </table>

            <div>
                <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">Total: {total.toLocaleString()}</h2>
            </div>
        </>
    )
}