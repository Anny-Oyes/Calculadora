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
                    <Buttons texto="C" handleKeyPress={sendKey} />
                </div>
                <div className="w-1/3">
                    <Buttons texto="/" handleKeyPress={sendKey} />
                </div>
            </div>
            <div className="flex flex-row justify-between">
                <div className="w-1/3">
                    <Buttons texto="7" handleKeyPress={sendKey} />
                </div>
                <div className="w-1/3">
                    <Buttons texto="8" handleKeyPress={sendKey} />
                </div>
                <div className="w-1/3">
                    <Buttons texto="9" handleKeyPress={sendKey} />
                </div>
                <div className="w-1/3">
                    <Buttons texto="*" handleKeyPress={sendKey} />
                </div>
            </div>
            <div className="flex flex-row justify-between">
                <div className="w-1/3">
                    <Buttons texto="4" handleKeyPress={sendKey} />
                </div>
                <div className="w-1/3">
                    <Buttons texto="5" handleKeyPress={sendKey} />
                </div>
                <div className="w-1/3">
                    <Buttons texto="6" handleKeyPress={sendKey} />
                </div>
                <div className="w-1/3">
                    <Buttons texto="-" handleKeyPress={sendKey} />
                </div>
            </div>
            <div className="flex flex-row justify-between">
                <div className="w-1/3">
                    <Buttons texto="1" handleKeyPress={sendKey} />
                </div>
                <div className="w-1/3">
                    <Buttons texto="2" handleKeyPress={sendKey} />
                </div>
                <div className="w-1/3">
                    <Buttons texto="3" handleKeyPress={sendKey} />
                </div>
                <div className="w-1/3">
                    <Buttons texto="+" handleKeyPress={sendKey} />
                </div>
            </div>
            <div className="flex flex-row justify-between">
                <div className="w-2/3">
                    <Buttons texto="0" handleKeyPress={sendKey} />
                </div>
                <div className="w-1/3">
                    <Buttons texto="." handleKeyPress={sendKey} />
                </div>
                <div className="w-1/3">
                    <Buttons texto="=" handleKeyPress={sendKey} />
                </div>
            </div>
        </div>
    )
}
