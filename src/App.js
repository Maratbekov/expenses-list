import './App.css';
import Form from "./components/Form";
import Blocks from "./components/Blocks";
import Expenses from "./components/Expenses";
import {useDispatch} from "react-redux";
import Sort from "./components/Sort";

function App() {

    const dispatch = useDispatch()

    const clear = () => {
        dispatch({type: "CLEAR", payload: {}})
    }

    return (
        <div className="container mx-auto px-9">
            <div className="flex items-center justify-between sm:block">
                <h1 className="text-center text-4xl font-bold py-8 text-gray-700

                ">Your list expenses</h1>
                <div className="flex items-center sm:justify-between">
                    <Sort/>
                    <button onClick={()=> clear()} className="bg-gray-700 px-4 py-2 text-white rounded hover:bg-gray-900 ml-41">Clear</button>
                </div>
            </div>


            <Blocks/>
            <Form/>
            <Expenses/>

        </div>
    );
}

export default App;
