import './App.css';
import Form from "./components/form/Form";
import Blocks from "./components/blocks/Blocks";
import Expenses from "./components/expenses/Expenses";
import {useDispatch} from "react-redux";
import Sort from "./components/sort/Sort";
import {Clear} from "./redux/actions/Actions";

function App() {

    const dispatch = useDispatch()

    return (
        <div className="container mx-auto px-9">
            <div className="flex items-center justify-between sm:block">
                <h1 className="text-center text-4xl font-bold py-8 text-gray-700">Your list expenses</h1>
                <div className="flex items-center sm:justify-between">
                    <Sort/>
                    <button onClick={()=> dispatch(Clear())} className="bg-gray-700 px-4 py-2 text-white rounded hover:bg-gray-900 ml-41">Clear</button>
                </div>
            </div>

            <Blocks/>
            <Form/>
            <Expenses/>

        </div>
    );
}

export default App;
