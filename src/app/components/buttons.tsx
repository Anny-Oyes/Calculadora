'use client'
export default function Buttons({
    texto,
    keyPress,
}: {
    texto: string
    keyPress?: any
}) {
    const sendKey = (key: string) => {
        keyPress(key)
    }
    return (
        <div
            className="m-1 flex flex-col items-center bg-gray-600"
            onClick={(e) => {
                sendKey(texto)
            }}
        >
            <div className="h-36 font-bold text-3xl flex flex-col justify-center text-white">
                <span>{texto}</span>
            </div>
        </div>
    )
}
