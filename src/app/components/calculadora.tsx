"use client"

import React, { useState } from "react";
import Display from "./display";
import Keyboard from "./keyboard";


function Calculadora() {
    const [texto, setTexto] = useState('');
    const [resultado, setResultado] = useState<string | number>('');

    const handleKeyPress = (key: string) => {
        if (key === '=') {
            try {
                const calculandoResultado = calculateExpression(texto);
                setResultado(calculandoResultado);
                setTexto(calculandoResultado.toString());
            } catch (error) {
                setResultado('Error');
            }
        } else if (key === 'C') {
            setTexto('');
            setResultado('');
        } else {
            setTexto((prevText) => prevText + key);
        }
    };

    const calculateExpression = (expression: any) => {
        try {
            const [num1, operator, num2] = expression.split('');

            const number1 = parseFloat(num1);
            const number2 = parseFloat(num2);

            switch (operator) {
                case '+':
                    return number1 + number2;
                case '-':
                    return number1 - number2;
                case '*':
                    return number1 * number2;
                case '/':
                    if (number1 === 0) {
                        return NaN;
                    }
                    return number1 / number2;
                default:
                    return NaN;
            }
        } catch (error) {
            return NaN;
        }
    };


    return (
        <div>
            <Display texto={texto} resultado={resultado} />
            <Keyboard keyPress={handleKeyPress} />
        </div>
    );
}

export default Calculadora;
