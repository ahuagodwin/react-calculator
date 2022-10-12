

import React from 'react';

const Wrapper = ({ children }) => {
  return (
    <div className='bg-[#f6f8f9] w-4/5 sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 2xl:w-1/4 p-4 rounded-md shadow'>
        {children}
    </div>
  )
}

export default Wrapper