

import React from 'react';
import { useContext } from 'react';
import { ContextProvider } from '../../context/ContextProvider';
import { Textfit } from "react-textfit";


const Screen = () => {
  const { calc } = useContext(ContextProvider)

  return (
    <Textfit className="bg-gray-200 h-[4rem] text-black p-1 mb-2" max={70} mode="multi">
        {calc.num ? calc.num : calc.res}
    </Textfit>
  )
}

export default Screen