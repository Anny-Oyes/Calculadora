'use client'

import React from 'react';

export default function Buttons({ texto, handleKeyPress, color, size }: { texto: string, handleKeyPress?: any, color: string, size: string }) {

    const buttonColor = `${color} text-white font-bold py-4 px-1 rounded m-1 `;

    const buttonSize: any = {
        small: 'text-lg w-1/4',
        medium: "text-lg w-2/4 px-12",
        large: 'text-lg w-3/4 px-24',
    };

    const sizeList = buttonSize[size] || '';

    return (
        <div
            className={`${buttonColor} ${sizeList}`}
            onClick={() => handleKeyPress(texto)}
        >
            <div className="h-12 font-bold text-3xl flex flex-col justify-center text-center text-white">
                <span>{texto}</span>
            </div>
        </div>
    );
}

