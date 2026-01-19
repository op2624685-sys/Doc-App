import React from 'react'
import { FileText, Download, CircleX } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

function Card({ data, reference }) {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.2 }} className='relative flex-shrink-0 h-76 w-61 rounded-[26px] bg-zinc-900/80 text-white px-5 py-8 m-5 overflow-hidden'>
            <FileText />
            <p className='text-sm leading-tight font-semibold mt-4'>{data.desc} </p>
            <div className='absolute bottom-0 w-full left-0'>
                <div className='flex items-center justify-between py-3 px-5 mb-2 '>
                    <h5>{data.filesize}</h5>
                    <span className='flex justify-center items-center'>
                        {data.close ? <CircleX size={22} /> : <Download size={22} />}

                    </span>
                </div>
                {data.tag.isOpen && (
                    <div className={`w-full py-3 ${data.tag.tagColor === 'red' ? 'bg-red-900' : data.tag.tagColor === 'blue' ? 'bg-blue-900' : data.tag.tagColor === 'orange' ? 'bg-orange-900' : 'bg-green-900'} flex items-center justify-center`}>
                        <h3 className='text-md font-semibold'>Download</h3>
                    </div>)}
            </div>
        </motion.div>
    );
}

export default Card
