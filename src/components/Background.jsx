import React from 'react'

const Background = () => {
    return (
        <>
            <div className='fixed z-[-1] w-full h-screen relative bg-zinc-700 p-2'>
                <div className='w-full py-10 flex justify-center text-zinc-600 font-semibold select-none'>Document</div>
                <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] font-semibold leading-none traking-tighter text-zinc-900 select-none'>Docs.</h1>
            </div>
        </>
    )
}

export default Background
