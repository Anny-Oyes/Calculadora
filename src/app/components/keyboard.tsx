'use client'

import Buttons from "./buttons"

export default function Keyboard({ keyPress }: { keyPress?: any }) {
    const sendKey = (key: string) => {
        keyPress(key)
    }
    return (
        <div className="mt-5 border p-1 ">
            <div className="flex flex-row justify-between">
                <div className="w-5/6">
                    <Buttons texto="C" keyPress={sendKey} />
                </div>
                <div className="w-1/3">
                    <Buttons texto="÷" keyPress={sendKey} />
                </div>
            </div>
            <div className="flex flex-row justify-between">
                <div className="w-1/3">
                    <Buttons texto="7" keyPress={sendKey} />
                </div>
                <div className="w-1/3">
                    <Buttons texto="8" keyPress={sendKey} />
                </div>
                <div className="w-1/3">
                    <Buttons texto="9" keyPress={sendKey} />
                </div>
                <div className="w-1/3">
                    <Buttons texto="x" keyPress={sendKey} />
                </div>
            </div>
            <div className="flex flex-row justify-between">
                <div className="w-1/3">
                    <Buttons texto="4" keyPress={sendKey} />
                </div>
                <div className="w-1/3">
                    <Buttons texto="5" keyPress={sendKey} />
                </div>
                <div className="w-1/3">
                    <Buttons texto="6" keyPress={sendKey} />
                </div>
                <div className="w-1/3">
                    <Buttons texto="-" keyPress={sendKey} />
                </div>
            </div>
            <div className="flex flex-row justify-between">
                <div className="w-1/3">
                    <Buttons texto="1" keyPress={sendKey} />
                </div>
                <div className="w-1/3">
                    <Buttons texto="2" keyPress={sendKey} />
                </div>
                <div className="w-1/3">
                    <Buttons texto="3" keyPress={sendKey} />
                </div>
                <div className="w-1/3">
                    <Buttons texto="+" keyPress={sendKey} />
                </div>
            </div>
            <div className="flex flex-row justify-between">
                <div className="w-2/3">
                    <Buttons texto="0" keyPress={sendKey} />
                </div>
                <div className="w-1/3">
                    <Buttons texto="." keyPress={sendKey} />
                </div>
                <div className="w-1/3">
                    <Buttons texto="=" keyPress={sendKey} />
                </div>
            </div>
        </div>
    )
}
