'use client'

import { useState } from 'react'
import Display from './display'
import Keyboard from './keyboard'

export default function Calculadora() {
    const [texto, setTexto] = useState('')
    const [resultados, setresultados] = useState('')

    const pressEnter = (texto: number) => {

    }


    const pressEliminar = () => {
        setTexto('')
    }

    const sendKey = (key: string) => {

        if (key === 'C') {
            pressEliminar()
            return
        }

        if (key === '=') {
            pressEnter(parseInt(texto))
            return
        }
        setTexto(texto + key)
    }
    return (
        <div>
            <Display texto={texto} />
            <Keyboard keyPress={sendKey} />
        </div>
    )
}
