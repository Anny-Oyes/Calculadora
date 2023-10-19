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
            const match = expression.match(/(\d+)([\+\-\*\÷/])(\d+)/);

            const numero1 = parseFloat(match[1]);
            const operator = match[2];
            const numero2 = parseFloat(match[3]);

            switch (operator) {
                case '+':
                    return numero1 + numero2;
                case '-':
                    return numero1 - numero2;
                case '*':
                    return numero1 * numero2;
                case '÷':
                    if (numero2 === 0) {
                        return NaN;
                    }
                    return numero1 / numero2;
                default:
                    return NaN;
            }
        } catch (error) {
            throw new Error();
        }

    };


    return (
        <div>
            <div className="border rounded-lg border-slate-800 bg-slate-800 w-3/4 text-center">
                <Display texto={texto || "0"} resultado={resultado} />
                <Keyboard keyPress={handleKeyPress} />
            </div>
        </div>
    );
}

export default Calculadora;
