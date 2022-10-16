import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {DeleteItem} from "../../redux/actions/Actions";

const Expenses = () => {

    const dispatch = useDispatch()
    const {expList} = useSelector(s => s)

    return (
        <>
            {expList.length === 0 ? (<h1 className="text-center py-2 text-2xl">Expenses list empty</h1>) : (<div className="overflow-x-auto relative my-6 shadow-lg sm:rounded-lg ">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Product name
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Color
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Category
                        </th>

                        <th scope="col" className="py-3 px-6">
                            X
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        expList.map((el,idx) => (
                            <tr key={idx} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="py-4 px-6">{el.date}</td>
                                <td className="py-4 px-6">{el.products}</td>
                                <td className="py-4 px-6">{el.spent}</td>
                                <td className="py-4 px-6">
                                    <button
                                        onClick={()=> dispatch(DeleteItem(idx))}
                                        className="bg-pink-700 text-white p-2 rounded">Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>)}
        </>
    );
};

export default Expenses;