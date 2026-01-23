import React from 'react'

const Create = () => {
  return (
    <div className='fixed z-[3] top-0 left-0 w-full h-screen flex justify-center'>
      {/* Container */}
      <div className='w-3/4 h-3/4 relative flex flex-col items-center mt-30 bg-gray-800 border-4 border-dashed border-gray-600 rounded-lg overflow-hidden'>
      {/* heading */}
        <h1 className='h-[50px] w-2/4 flex justify-center items-center text-white text-4xl rounded mt-12 bg-[#94B4C1]'>Add Docs</h1>

        {/* Input sections */}
        <div className='w-3/4 flex-1 mt-8 mb-4 p-5 flex flex-col justify-between border-solid border-4 border-gray-500 bg-gray-700 rounded overflow-auto'>
          <form className='grid grid-cols-1 md:grid-cols-2 gap-6 m-5'>
            <div className='flex flex-col gap-2'>
              <label className='text-white text-lg font-semibold'>Title</label>
              <input type="text" name="title" className='p-2 rounded bg-gray-600 text-white border border-gray-500 focus:outline-none focus:border-[#94B4C1]' placeholder='Enter title' />
            </div>

            <div className='flex flex-col gap-2'>
              <label className='text-white text-lg font-semibold'>Description</label>
              <input type="text" name="description" className='p-2 rounded bg-gray-600 text-white border border-gray-500 focus:outline-none focus:border-[#94B4C1]' placeholder='Enter description' />
            </div>

            <div className='flex flex-col gap-2'>
              <label className='text-white text-lg font-semibold'>Docs Status</label>
              <select className='p-2 rounded bg-gray-600 text-white border border-gray-500 focus:outline-none focus:border-[#94B4C1]' name="status">
                <option value="notCompleted">❌ Not Completed</option>
                <option value="completed">✅ Completed</option>
                <option value="doing">⏳ Doing</option>
              </select>
            </div>

            <div className='flex flex-col gap-2'>
              <label className='text-white text-lg font-semibold'>Tag</label>
              <div className='flex items-center gap-4'>
                <label className='text-white flex items-center gap-2'>
                  <input type="radio" name="tag" value='yes' className='w-4 h-4' />
                  Yes
                </label>
                <label className='text-white flex items-center gap-2'>
                  <input type="radio" name="tag" value='no' className='w-4 h-4' />
                  No
                </label>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <label className='text-white text-lg font-semibold'>Tag Title</label>
              <input type="text" name="tagTitle" className='p-2 rounded bg-gray-600 text-white border border-gray-500 focus:outline-none focus:border-[#94B4C1]' placeholder='Enter tag title' />
            </div>

            <div className='flex flex-col gap-2'>
              <label className='text-white text-lg font-semibold'>Tag Color</label>
              <select className='p-2 rounded bg-gray-600 text-white border border-gray-500 focus:outline-none focus:border-[#94B4C1]' name="tagColor">
                <option value="red" className='bg-red-500'>Red</option>
                <option value="blue" className='bg-blue-500'>Blue</option>
                <option value="green" className='bg-green-500'>Green</option>
                <option value="yellow" className='bg-yellow-500'>Yellow</option>
                <option value="orange" className='bg-orange-500'>Orange</option>
              </select>
            </div>
          </form>
        </div>
        
        {/* Save button */}
        <button className='m-8 px-6 py-2 bg-[#E23D28] text-white rounded hover:bg-[#ED1B24] transition-colors duration-300 cursor-pointer active:scale-95'>Save Document</button>
      </div>
    </div>
  )
}

export default Create
