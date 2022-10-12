

import React, { useContext } from 'react';
import { ContextProvider } from '../../context/ContextProvider';
import { getClassName } from "../../data/getStyleName";

const Button = ({ value }) => {
  const { calc, setCalc } = useContext(ContextProvider)


  const handleClick = () => {

    // user click comma 
    const commaClick = () => {
      setCalc({
        ...calc,
        num: !calc.num.toString().includes('.') ? calc.num + value : calc.num
      });
    }

    // user reset "C"
    const resetClick = () => {
      setCalc({
        sign: "", num: 0, res: 0
      })
    }

    // user click number 0 - 9
    const handleBtnClick = () => {
      const numberString = value.toString()

      let numberValue;

      if (numberString === '0' && calc.num === 0) {
        numberValue = "0"
      } else {
        numberValue = Number(calc.num + numberString)
      }

      setCalc({
        ...calc,
        num: numberValue
      })
    }


    // user click operator + - x /
    const optClick = () => {
      setCalc({
        sign: value,
        res: !calc.res && calc.num ? calc.num : calc.res,
        num: 0
      })
    }


    // RESULT OPERATOR " = "
    const equalsClick = () => {
      if (calc.res && calc.num) {
        const math = (a, b, sign) => {
          const result = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            'X': (a, b) => a * b,
            '/': (a, b) => a / b,
          }
          return result[sign](a, b);
        }
        setCalc({
          res: math(calc.res, calc.num, calc.sign),
          sign: "",
          num: 0
        })
      }
    }

    // user remainder click %
    const remainderClick = () => {
      setCalc({
        num: (calc.num / 100),
        res: (calc.res / 100),
        sign: "",
      })
    }

    // user invert click +-
    const invertClick = () => {
      setCalc({
        num: calc.num ? calc.num * -1 : 0,
        res: calc.res ? calc.res * -1 : 0,
        sign: ''
      })
    }


    const results = {
      '.': commaClick,
      'C': resetClick,
      '/': optClick,
      'X': optClick,
      '+': optClick,
      '-': optClick,
      '=': equalsClick,
      '%': remainderClick,
      '+-': invertClick,
    }

    if (results[value]) {
      return results[value]()
    } else {
      return handleBtnClick();
    }

  }

  return (
    <button onClick={handleClick} className={`${getClassName(value)} flex bg-[#e9f0f4] h-14 p-2 rounded-lg justify-center items-center cursor-pointer border-none text-base text-[#242424]`}>
      {value}
    </button>
  )
}

export default Button