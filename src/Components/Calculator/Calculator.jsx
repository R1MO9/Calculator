
import React, { useState } from 'react';

const Calculator = () => {
    const [expression, setExpression] = useState('');

    const handleButtonClick = (value) => {
        setExpression(prevExpression => prevExpression + value);
    };

    const evaluateExpression = () => {
        try {
            const result = eval(expression);
            setExpression(result.toString());
        } catch (error) {
            setExpression('Error');
        }
    };

    const clearExpression = () => {
        setExpression('');
    };

    const handleDelete = () => {
        const result = expression.slice(0, expression.length - 1);
        setExpression(result);
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-black">
            <div className="w-80 bg-gray-100 p-4 rounded-lg shadow-md">
                <input className="w-full h-10 text-right text-xl border-b-2 border-gray-400 mb-2 outline-none" type="text" value={expression} readOnly />
                <div className="grid grid-cols-4 gap-2">
                    <button className="col-span-2 bg-yellow-600 hover:bg-yellow-500 text-white font-bold text-lg p-3 rounded-full" onClick={clearExpression}>C</button>
                    <button className="bg-gray-800 hover:bg-gray-900 text-blue-500 font-bold text-lg p-3 rounded-full" onClick={() => handleDelete()}>Del</button>
                    <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold text-lg p-3 rounded-full" onClick={() => handleButtonClick('/')}>/</button>
                    <button className="bg-gray-800 hover:bg-gray-900 text-blue-500 font-bold text-lg p-3 rounded-full" onClick={() => handleButtonClick('7')}>7</button>
                    <button className="bg-gray-800 hover:bg-gray-900 text-blue-500 font-bold text-lg p-3 rounded-full" onClick={() => handleButtonClick('8')}>8</button>
                    <button className="bg-gray-800 hover:bg-gray-900 text-blue-500 font-bold text-lg p-3 rounded-full" onClick={() => handleButtonClick('9')}>9</button>
                    <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold text-lg p-3 rounded-full" onClick={() => handleButtonClick('*')}>*</button>
                    <button className="bg-gray-800 hover:bg-gray-900 text-blue-500 font-bold text-lg p-3 rounded-full" onClick={() => handleButtonClick('4')}>4</button>
                    <button className="bg-gray-800 hover:bg-gray-900 text-blue-500 font-bold text-lg p-3 rounded-full" onClick={() => handleButtonClick('5')}>5</button>
                    <button className="bg-gray-800 hover:bg-gray-900 text-blue-500 font-bold text-lg p-3 rounded-full" onClick={() => handleButtonClick('6')}>6</button>
                    <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold text-lg p-3 rounded-full" onClick={() => handleButtonClick('-')}>-</button>
                    <button className="bg-gray-800 hover:bg-gray-900 text-blue-500 font-bold text-lg p-3 rounded-full" onClick={() => handleButtonClick('1')}>1</button>
                    <button className="bg-gray-800 hover:bg-gray-900 text-blue-500 font-bold text-lg p-3 rounded-full" onClick={() => handleButtonClick('2')}>2</button>
                    <button className="bg-gray-800 hover:bg-gray-900 text-blue-500 font-bold text-lg p-3 rounded-full" onClick={() => handleButtonClick('3')}>3</button>
                    <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold text-lg p-3 rounded-full" onClick={() => handleButtonClick('+')}>+</button>
                    <button className="bg-gray-800 hover:bg-gray-900 text-blue-500 font-bold text-lg p-3 rounded-full col-span-2" onClick={() => handleButtonClick('0')}>0</button>
                    <button className="bg-gray-800 hover:bg-gray-900 text-blue-500 font-bold text-lg p-3 rounded-full" onClick={() => handleButtonClick('.')}>.</button>
                    <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold text-lg p-3 rounded-full" onClick={evaluateExpression}>=</button>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
