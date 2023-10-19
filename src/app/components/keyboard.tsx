'use client'

import Buttons from "./buttons"

export default function Keyboard({ keyPress }: { keyPress?: any }) {
    const sendKey = (key: string) => {
        keyPress(key)
    }

    return (
        <div className="mt-5">
            <div className="flex flex-row justify-between">
                <Buttons color="bg-gray-700" size="large" texto="C" handleKeyPress={sendKey} />
                <Buttons color="bg-orange-400" size="small" texto="÷" handleKeyPress={sendKey} />
            </div>
            <div className="flex flex-row justify-between">
                <Buttons color="bg-gray-600" size="small" texto="7" handleKeyPress={sendKey} />
                <Buttons color="bg-gray-600" size="small" texto="8" handleKeyPress={sendKey} />
                <Buttons color="bg-gray-600" size="small" texto="9" handleKeyPress={sendKey} />
                <Buttons color="bg-orange-400" size="small" texto="*" handleKeyPress={sendKey} />

            </div>
            <div className="flex flex-row justify-between">
                <Buttons color="bg-gray-600" size="small" texto="4" handleKeyPress={sendKey} />
                <Buttons color="bg-gray-600" size="small" texto="5" handleKeyPress={sendKey} />
                <Buttons color="bg-gray-600" size="small" texto="6" handleKeyPress={sendKey} />
                <Buttons color="bg-orange-400" size="small" texto="-" handleKeyPress={sendKey} />
            </div>
            <div className="flex flex-row justify-between">
                <Buttons color="bg-gray-600" size="small" texto="1" handleKeyPress={sendKey} />
                <Buttons color="bg-gray-600" size="small" texto="2" handleKeyPress={sendKey} />
                <Buttons color="bg-gray-600" size="small" texto="3" handleKeyPress={sendKey} />
                <Buttons color="bg-orange-400" size="small" texto="+" handleKeyPress={sendKey} />
            </div>
            <div className="flex flex-row justify-between">
                <Buttons color="bg-gray-600" size="medium" texto="0" handleKeyPress={sendKey} />
                <Buttons color="bg-gray-600" size="small" texto="." handleKeyPress={sendKey} />
                <Buttons color="bg-orange-400" size="smaller" texto="=" handleKeyPress={sendKey} />
            </div>
        </div>
    )
}
