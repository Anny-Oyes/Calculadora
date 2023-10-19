'use client'

import React from 'react';

export default function Buttons({ texto, handleKeyPress, color, size }: { texto: string, handleKeyPress?: any, color: string, size: string }) {

    const buttonColor = `${color}text-white font-bold py-4 hover:border-zinc-950`;

    return (
        <div
            className={`${buttonColor} ${size} border border-slate-800`}
            onClick={() => handleKeyPress(texto)}
        >
            <div className="h-12 font-bold text-3xl flex flex-col justify-center text-center text-white">
                <span>{texto}</span>
            </div>
        </div>
    );
}

