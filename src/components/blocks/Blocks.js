import React from 'react';
import {useSelector} from "react-redux";

const Blocks = () => {
    const {balance, expenses} = useSelector((s) => s)
    return (
        <div className="flex items-center sm:mt-4">
            <div className="bg-pink-700 shadow-2xl w-72 p-12 rounded text-center mr-2">
                <h1 className="text-white text-3xl py-2">Balance</h1>
                <h2 className="text-white  text-2xl py-6">{balance}c</h2>
            </div>

            <div className="bg-blue-700 shadow-2xl w-72 p-12 rounded text-center ml-2">
                <h1 className="text-white text-3xl py-2">Expenses</h1>
                <h2 className="text-white  text-2xl py-6">{expenses} c</h2>
            </div>
        </div>
    );
};

export default Blocks;