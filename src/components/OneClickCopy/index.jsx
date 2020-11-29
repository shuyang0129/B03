import React from 'react'
import styled from 'styled-components'

const copy = require('clipboard-copy')

const StyleOneClickCopy = styled.button`
  border: 1px solid #d2b79c;
  border-radius: 5px;
  font-size: 12px;
  color: #d2b79c;
  &.large { 
    width: 66px;
    height: 27px;
    line-height: 27px;
  }
  &.small { 
    width: 34px;
    height: 18px;
    line-height: 18px;
  }
`

const OneClickCopy = ({ theme, copyString }) => {
  return <StyleOneClickCopy className={theme} onClick={()=> copy(copyString)}>复制</StyleOneClickCopy>
}

export default OneClickCopy
