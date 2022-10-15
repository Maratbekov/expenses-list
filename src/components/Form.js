import React from 'react';
import {useState} from "react";
import {useDispatch,} from "react-redux";

const Form = ({item,idx}) => {

    const dispatch = useDispatch()

    const [history, setHistory] = useState({
        date: "",
        products: "",
        spent: ""
    })

    const handleChange = (e) => {
        setHistory({...history, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type: "ADD_EXPENSES_ITEM", payload: history})
    }

    return (
        <form onSubmit={handleSubmit} className="my-9">
            <div className="flex items-center sm:block">
                <input
                    type="date"
                    name="date"
                    onChange={handleChange}
                    className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-2
        sm:mx-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                    placeholder="Text input"
                />

                <input
                    type="text"
                    name="products"
                    onChange={handleChange}
                    className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-2
        sm:mx-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                    placeholder="Text input"
                />

                <input type="number"
                       name="spent"
                       onChange={handleChange}
                       className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mr-4
        sm:mx-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                       placeholder="Number input"
                />

                <button className="bg-pink-700 text-white p-2 rounded sm:mt-4">pay</button>
            </div>
        </form>
    );
};

export default Form;