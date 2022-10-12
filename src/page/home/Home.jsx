

import React from 'react'
import { AppScreen, ButtonBox, Wrapper, AppButton } from '../../common/components'
import { btnValues } from '../../common/data/Btn-Values'

const Home = () => {
  return (
     <Wrapper>
        <AppScreen />
        <ButtonBox>
            {
                btnValues.flatMap((item, index) => (
                    <AppButton value={item} key={index} />
                ))
            }
        </ButtonBox>
    </Wrapper>
  )
}

export default Home