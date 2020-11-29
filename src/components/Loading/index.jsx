import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const StyleLoading = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: ${({ theme }) => theme.zIndex.coverLayer};
  animation: loading .5s;
  @keyframes loading {
    from {
      opacity: 0;
    }
  }
  #circularG {
    position: relative;
    width: 58px;
    height: 58px;
  }
  .circularG {
    position: absolute;
    background-color: rgb(241, 241, 241);
    width: 14px;
    height: 14px;
    border-radius: 9px;
    -o-border-radius: 9px;
    -ms-border-radius: 9px;
    -webkit-border-radius: 9px;
    -moz-border-radius: 9px;
    animation-name: bounce_circularG;
    -o-animation-name: bounce_circularG;
    -ms-animation-name: bounce_circularG;
    -webkit-animation-name: bounce_circularG;
    -moz-animation-name: bounce_circularG;
    animation-duration: 0.96s;
    -o-animation-duration: 0.96s;
    -ms-animation-duration: 0.96s;
    -webkit-animation-duration: 0.96s;
    -moz-animation-duration: 0.96s;
    animation-iteration-count: infinite;
    -o-animation-iteration-count: infinite;
    -ms-animation-iteration-count: infinite;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    animation-direction: normal;
    -o-animation-direction: normal;
    -ms-animation-direction: normal;
    -webkit-animation-direction: normal;
    -moz-animation-direction: normal;
  }

  #circularG_1 {
    left: 0;
    top: 23px;
    animation-delay: 0.36s;
    -o-animation-delay: 0.36s;
    -ms-animation-delay: 0.36s;
    -webkit-animation-delay: 0.36s;
    -moz-animation-delay: 0.36s;
  }

  #circularG_2 {
    left: 6px;
    top: 6px;
    animation-delay: 0.48s;
    -o-animation-delay: 0.48s;
    -ms-animation-delay: 0.48s;
    -webkit-animation-delay: 0.48s;
    -moz-animation-delay: 0.48s;
  }

  #circularG_3 {
    top: 0;
    left: 23px;
    animation-delay: 0.6s;
    -o-animation-delay: 0.6s;
    -ms-animation-delay: 0.6s;
    -webkit-animation-delay: 0.6s;
    -moz-animation-delay: 0.6s;
  }

  #circularG_4 {
    right: 6px;
    top: 6px;
    animation-delay: 0.72s;
    -o-animation-delay: 0.72s;
    -ms-animation-delay: 0.72s;
    -webkit-animation-delay: 0.72s;
    -moz-animation-delay: 0.72s;
  }

  #circularG_5 {
    right: 0;
    top: 23px;
    animation-delay: 0.84s;
    -o-animation-delay: 0.84s;
    -ms-animation-delay: 0.84s;
    -webkit-animation-delay: 0.84s;
    -moz-animation-delay: 0.84s;
  }

  #circularG_6 {
    right: 6px;
    bottom: 6px;
    animation-delay: 0.96s;
    -o-animation-delay: 0.96s;
    -ms-animation-delay: 0.96s;
    -webkit-animation-delay: 0.96s;
    -moz-animation-delay: 0.96s;
  }

  #circularG_7 {
    left: 23px;
    bottom: 0;
    animation-delay: 1.08s;
    -o-animation-delay: 1.08s;
    -ms-animation-delay: 1.08s;
    -webkit-animation-delay: 1.08s;
    -moz-animation-delay: 1.08s;
  }

  #circularG_8 {
    left: 6px;
    bottom: 6px;
    animation-delay: 1.2s;
    -o-animation-delay: 1.2s;
    -ms-animation-delay: 1.2s;
    -webkit-animation-delay: 1.2s;
    -moz-animation-delay: 1.2s;
  }

  @keyframes bounce_circularG {
    0% {
      transform: scale(1);
    }

    100% {
      transform: scale(0.3);
    }
  }

  @-o-keyframes bounce_circularG {
    0% {
      -o-transform: scale(1);
    }

    100% {
      -o-transform: scale(0.3);
    }
  }

  @-ms-keyframes bounce_circularG {
    0% {
      -ms-transform: scale(1);
    }

    100% {
      -ms-transform: scale(0.3);
    }
  }

  @-webkit-keyframes bounce_circularG {
    0% {
      -webkit-transform: scale(1);
    }

    100% {
      -webkit-transform: scale(0.3);
    }
  }

  @-moz-keyframes bounce_circularG {
    0% {
      -moz-transform: scale(1);
    }

    100% {
      -moz-transform: scale(0.3);
    }
  }
`

const Loading = () => {
  const enabled = useSelector(state => state.loading)

  if (enabled) {
    return (
      <StyleLoading>
        <div id='circularG'>
          <div id='circularG_1' className='circularG'></div>
          <div id='circularG_2' className='circularG'></div>
          <div id='circularG_3' className='circularG'></div>
          <div id='circularG_4' className='circularG'></div>
          <div id='circularG_5' className='circularG'></div>
          <div id='circularG_6' className='circularG'></div>
          <div id='circularG_7' className='circularG'></div>
          <div id='circularG_8' className='circularG'></div>
        </div>
      </StyleLoading>
    )
  } else {
    return null
  }
}

export default Loading
