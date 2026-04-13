import { useCounter } from "./context";

function Counter() {
    const { counter, increment, decrement, reset, incrementBy } = useCounter();

    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg shadow-lg text-white">
            <h2 className="text-2xl font-bold mb-4">Global Counter: {counter}</h2>
            
            <div className="flex gap-3 flex-wrap">
                <button
                    onClick={increment}
                    className="bg-green-500 hover:bg-green-700 px-4 py-2 rounded font-semibold transition"
                >
                    + 1
                </button>
                
                <button
                    onClick={decrement}
                    className="bg-red-500 hover:bg-red-700 px-4 py-2 rounded font-semibold transition"
                >
                    - 1
                </button>
                
                <button
                    onClick={() => incrementBy(5)}
                    className="bg-blue-600 hover:bg-blue-800 px-4 py-2 rounded font-semibold transition"
                >
                    + 5
                </button>
                
                <button
                    onClick={reset}
                    className="bg-yellow-500 hover:bg-yellow-700 px-4 py-2 rounded font-semibold transition"
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default Counter;
