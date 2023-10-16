'use client'
import React from 'react';

export default function Display({ texto, resultado }: { texto: string, resultado: any }) {
    return (
        <div className="border rounded-t-lg p-1 bg-black">
            <div className={'p-2 h-20 text-2xl font-bold text-center align-middle'}>
                <span>{texto}</span>
            </div>
        </div>
    );
}
