

import React from 'react'

const AppLayout = ({ children }) => {
  return (
    <div className='flex h-[100vh] justify-center items-center theme-bg'>
        {children}
        <div className='absolute bottom-4 right-4'>
          <h2 className="text-slate-900">Godwin Ahua | Front-end Developer</h2>
        </div>
    </div>
  )
}

export default AppLayout