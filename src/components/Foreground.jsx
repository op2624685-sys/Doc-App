import React, { useRef } from 'react'
import Card from './Card.jsx'

const Foreground = () => {

    const ref = useRef(null);

    const data = [
        {
            desc: "This is my first docs note and this is coded by my hand",
            filesize: ".0.34mb",
            close: false,
            tag: { isOpen: true, tagTitle: 'Download Now', tagColor: 'blue' }
        },
        {
            desc: "Here is the second card of this doc app, you can download it",
            filesize: ".0.12mb",
            close: true,
            tag: { isOpen: true, tagTitle: 'Download Now', tagColor: 'red' }
        },
        {
            desc: "This was another and different card in this doc app",
            filesize: "1.2mb",
            close: true,
            tag: { isOpen: false, tagTitle: 'Download Now', tagColor: 'orange' }
        },
        {
            desc: "This is the best card in this doc app and you can download it",
            filesize: ".0.26mb",
            close: true,
            tag: { isOpen: true, tagTitle: 'Download Now', tagColor: 'green' }
        },
    ];

    return (
        <div ref={ref} className='fixed p-4 top-0 left-0 z-[3] h-full w-full flex flex-wrap gap-5'>
            {data.map((item) => (
                <Card data={item} reference={ref} />
            ))}

        </div>
    )
}

export default Foreground
