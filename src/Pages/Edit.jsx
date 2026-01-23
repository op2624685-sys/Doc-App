import React, { useState, useEffect } from 'react'

const Edit = () => {
  const [documents, setDocuments] = useState([]);
  const [editedItems, setEditedItems] = useState({});

  // Load documents from localStorage on mount
  useEffect(() => {
    setTimeout(() => {
      const savedDocs = JSON.parse(localStorage.getItem('docs')) || [];
      setDocuments(savedDocs);
    }, 0);
  }, []);

  // Handle input changes
  const handleChange = (id, field, value) => {
    setEditedItems(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        [field]: value
      }
    }));
  };

  // Get current value (edited or original)
  const getValue = (doc, field) => {
    return editedItems[doc.id]?.[field] ?? doc[field];
  };

  // Get description value
  const getDesc = (doc) => {
    return editedItems[doc.id]?.desc ?? doc.desc;
  };

  // Get tag values
  const getTagValue = (doc, tagField) => {
    if (editedItems[doc.id]?.tag) {
      return editedItems[doc.id].tag[tagField];
    }
    return doc.tag[tagField];
  };

  // Save individual document
  const handleSave = (doc) => {
    const updatedData = editedItems[doc.id];
    if (!updatedData) return;

    const updatedDocuments = documents.map(d => {
      if (d.id === doc.id) {
        return {
          ...d,
          title: updatedData.title ?? d.title,
          desc: updatedData.desc ?? d.desc,
          status: updatedData.status ?? d.status,
          close: (updatedData.status ?? d.status) === 'completed',
          tag: {
            isOpen: updatedData.tag?.isOpen ?? d.tag.isOpen,
            tagTitle: updatedData.tag?.tagTitle ?? d.tag.tagTitle,
            tagColor: updatedData.tag?.tagColor ?? d.tag.tagColor
          }
        };
      }
      return d;
    });

    setDocuments(updatedDocuments);
    localStorage.setItem('docs', JSON.stringify(updatedDocuments));
    
    // Clear edits for this item
    setEditedItems(prev => {
      const newEdits = { ...prev };
      delete newEdits[doc.id];
      return newEdits;
    });

    alert('Document saved successfully!');
  };

  // Delete individual document
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this document?')) {
      const updatedDocuments = documents.filter(doc => doc.id !== id);
      setDocuments(updatedDocuments);
      localStorage.setItem('docs', JSON.stringify(updatedDocuments));
      
      // Clear edits for this item
      setEditedItems(prev => {
        const newEdits = { ...prev };
        delete newEdits[id];
        return newEdits;
      });

      alert('Document deleted successfully!');
    }
  };

  // Refresh data
  const handleRefresh = () => {
    const savedDocs = JSON.parse(localStorage.getItem('docs')) || [];
    setDocuments(savedDocs);
    setEditedItems({});
  };

  return (
    <div className='fixed z-[3] top-0 left-0 w-full h-full flex justify-center items-center pt-24 pb-8'>
      <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Modal Container */}
      <div className='w-5/6 h-5/6 relative flex flex-col bg-gray-800 border-4 border-dashed border-gray-600 rounded-lg overflow-hidden'>
        
        {/* Header */}
        <div className='w-full h-[60px] flex justify-between items-center bg-[#94B4C1] px-6 flex-shrink-0'>
          <h1 className='text-3xl font-bold text-white'>Edit Documents</h1>
          <button 
            onClick={handleRefresh}
            className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors'
          >
            Refresh
          </button>
        </div>

        {/* Content Container - Fills entire remaining space */}
        <div className='w-full flex-1 p-4 overflow-auto border-4 border-gray-500 bg-gray-700 flex flex-col hide-scrollbar'>
          {documents.length > 0 ? (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4'>
              {documents.map((doc) => (
                <div key={doc.id} className='bg-gray-600 border border-gray-500 rounded p-4'>
                  {/* Row 1: Actions, Title, Description */}
                  <div className='grid grid-cols-1 md:grid-cols-4 gap-3 mb-3 pb-3 border-b border-gray-500'>
                    {/* Actions */}
                    <div className='flex flex-col gap-2'>
                      <label className='text-white text-xs font-semibold'>Actions</label>
                      <div className='flex gap-1'>
                        <button
                          onClick={() => handleDelete(doc.id)}
                          className='px-2 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700 transition-colors w-1/2'
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => handleSave(doc)}
                          className='px-2 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700 transition-colors w-1/2'
                        >
                          Save
                        </button>
                      </div>
                    </div>

                    {/* Title */}
                    <div className='flex flex-col gap-2'>
                      <label className='text-white text-xs font-semibold'>Title</label>
                      <input
                        type='text'
                        value={getValue(doc, 'title')}
                        onChange={(e) => handleChange(doc.id, 'title', e.target.value)}
                        className='w-full px-2 py-1 bg-gray-500 text-white border border-gray-400 rounded focus:outline-none focus:border-blue-400 text-sm'
                        placeholder='Title'
                      />
                    </div>

                    {/* Description */}
                    <div className='flex flex-col gap-2 md:col-span-2'>
                      <label className='text-white text-xs font-semibold'>Description</label>
                      <input
                        type='text'
                        value={getDesc(doc)}
                        onChange={(e) => handleChange(doc.id, 'desc', e.target.value)}
                        className='w-full px-2 py-1 bg-gray-500 text-white border border-gray-400 rounded focus:outline-none focus:border-blue-400 text-sm'
                        placeholder='Description'
                      />
                    </div>
                  </div>

                  {/* Row 2: Status, Tag, Tag Title, Tag Color */}
                  <div className='grid grid-cols-1 md:grid-cols-4 gap-3'>
                    {/* Status */}
                    <div className='flex flex-col gap-2'>
                      <label className='text-white text-xs font-semibold'>Status</label>
                      <select
                        value={getValue(doc, 'status')}
                        onChange={(e) => handleChange(doc.id, 'status', e.target.value)}
                        className='w-full px-2 py-1 bg-gray-500 text-white border border-gray-400 rounded focus:outline-none focus:border-blue-400 text-sm'
                      >
                        <option value='notCompleted'>❌ Not Completed</option>
                        <option value='completed'>✅ Completed</option>
                        <option value='doing'>⏳ Doing</option>
                      </select>
                    </div>

                    {/* Tag */}
                    <div className='flex flex-col gap-2'>
                      <label className='text-white text-xs font-semibold'>Tag</label>
                      <select
                        value={getTagValue(doc, 'isOpen') ? 'yes' : 'no'}
                        onChange={(e) => handleChange(doc.id, 'tag', {
                          ...doc.tag,
                          isOpen: e.target.value === 'yes'
                        })}
                        className='w-full px-2 py-1 bg-gray-500 text-white border border-gray-400 rounded focus:outline-none focus:border-blue-400 text-sm'
                      >
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                      </select>
                    </div>

                    {/* Tag Title */}
                    <div className='flex flex-col gap-2'>
                      <label className='text-white text-xs font-semibold'>Tag Title</label>
                      <input
                        type='text'
                        value={getTagValue(doc, 'tagTitle')}
                        onChange={(e) => handleChange(doc.id, 'tag', {
                          ...doc.tag,
                          tagTitle: e.target.value
                        })}
                        className='w-full px-2 py-1 bg-gray-500 text-white border border-gray-400 rounded focus:outline-none focus:border-blue-400 text-sm'
                        placeholder='Tag Title'
                      />
                    </div>

                    {/* Tag Color */}
                    <div className='flex flex-col gap-2'>
                      <label className='text-white text-xs font-semibold'>Tag Color</label>
                      <select
                        value={getTagValue(doc, 'tagColor')}
                        onChange={(e) => handleChange(doc.id, 'tag', {
                          ...doc.tag,
                          tagColor: e.target.value
                        })}
                        className='w-full px-2 py-1 bg-gray-500 text-white border border-gray-400 rounded focus:outline-none focus:border-blue-400 text-sm'
                      >
                        <option value='red'>Red</option>
                        <option value='blue'>Blue</option>
                        <option value='green'>Green</option>
                        <option value='yellow'>Yellow</option>
                        <option value='orange'>Orange</option>
                      </select>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className='flex-1 flex items-center justify-center text-center'>
              <p className='text-gray-400 text-lg'>No documents found. Create one to get started!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Edit
