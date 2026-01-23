import React, { useRef, useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
import Card from './Card.jsx'

const Foreground = () => {

    const ref = useRef(null);
    const [data, setData] = useState([
        // Initial dummy data can be placed here if needed
    ]);

    // Load data from localStorage on component mount
    useEffect(() => {
        setTimeout(() => {
            const savedDocs = JSON.parse(localStorage.getItem('docs')) || [];
            if (savedDocs.length > 0) {
                setData(savedDocs);
            }
        }, 0);
    }, []);

    return (
        <div ref={ref} className='fixed p-4 top-21 left-0 z-[3] h-screen w-full flex flex-wrap gap-5'>
            {data.map((item) => (
                <div 

                >
                    <Card data={item} reference={ref} />
                </div>
            ))}

        </div>
    )
}

export default Foreground
