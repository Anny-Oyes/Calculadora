'use client'

import Buttons from "./buttons"

export default function Keyboard({ keyPress }: { keyPress?: any }) {
    const sendKey = (key: string) => {
        keyPress(key)
    }

    return (
        <div className="mt-5">
            <div className="flex flex-row justify-between">
                <Buttons color="bg-gray-700" size="text-lg w-3/4 px-24" texto="C" handleKeyPress={sendKey} />
                <Buttons color="bg-orange-400" size="text-lg w-1/4" texto="÷" handleKeyPress={sendKey} />
            </div>
            <div className="flex flex-row justify-between">
                <Buttons color="bg-gray-600" size="text-lg w-1/4" texto="7" handleKeyPress={sendKey} />
                <Buttons color="bg-gray-600" size="text-lg w-1/4" texto="8" handleKeyPress={sendKey} />
                <Buttons color="bg-gray-600" size="text-lg w-1/4" texto="9" handleKeyPress={sendKey} />
                <Buttons color="bg-orange-400" size="text-lg w-1/4" texto="*" handleKeyPress={sendKey} />

            </div>
            <div className="flex flex-row justify-between">
                <Buttons color="bg-gray-600" size="text-lg w-1/4" texto="4" handleKeyPress={sendKey} />
                <Buttons color="bg-gray-600" size="text-lg w-1/4" texto="5" handleKeyPress={sendKey} />
                <Buttons color="bg-gray-600" size="text-lg w-1/4" texto="6" handleKeyPress={sendKey} />
                <Buttons color="bg-orange-400" size="text-lg w-1/4" texto="-" handleKeyPress={sendKey} />
            </div>
            <div className="flex flex-row justify-between">
                <Buttons color="bg-gray-600" size="text-lg w-1/4" texto="1" handleKeyPress={sendKey} />
                <Buttons color="bg-gray-600" size="text-lg w-1/4" texto="2" handleKeyPress={sendKey} />
                <Buttons color="bg-gray-600" size="text-lg w-1/4" texto="3" handleKeyPress={sendKey} />
                <Buttons color="bg-orange-400" size="text-lg w-1/4" texto="+" handleKeyPress={sendKey} />
            </div>
            <div className="flex flex-row justify-between">
                <Buttons color="bg-gray-600" size="text-lg w-2/4 px-12 rounded-bl-lg" texto="0" handleKeyPress={sendKey} />
                <Buttons color="bg-gray-600" size="text-lg w-1/4" texto="." handleKeyPress={sendKey} />
                <Buttons color="bg-orange-400" size="text-lg w-1/4 rounded-br-lg" texto="=" handleKeyPress={sendKey} />
            </div>
        </div>
    )
}
