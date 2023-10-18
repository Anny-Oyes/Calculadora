'use client'
import React from 'react';

export default function Display({ texto, resultado }: { texto: string, resultado: any }) {
    return (
        <div>
            <div className={'p-2 h-20 text-5xl font-bold text-right py-8 '}>
                <span>{texto}</span>
            </div>
        </div>
    );
}
