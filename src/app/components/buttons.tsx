'use client'

import React from 'react';

export default function Buttons({ texto, handleKeyPress }: { texto: string, handleKeyPress?: any }) {
    return (
        <div
            className="m-1 flex flex-col items-center bg-gray-600"
            onClick={() => handleKeyPress(texto)}
        >
            <div className="h-36 font-bold text-3xl flex flex-col justify-center text-white">
                <span>{texto}</span>
            </div>
        </div>
    );
}

