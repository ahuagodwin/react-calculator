

export const getClassName = item => {

    const className = {
      '=': 'equals',
      'X': 'opt',
      '-': 'opt',
      '+': 'opt',
      '/': 'opt',
    }
    return className[item]
  }