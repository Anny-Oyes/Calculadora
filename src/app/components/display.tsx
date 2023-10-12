'use client'
export default function Display({ texto }: { texto?: string }) {
    return (
        <div className="border rounded-t-lg p-1 bg-black">
            <div className={'p-2 h-20 text-2xl font-bold text-center align-middle'}>
                <span>{texto}</span>
            </div>
        </div>
    )
}
