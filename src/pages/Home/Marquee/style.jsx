import styled from 'styled-components'

export const Marquee = styled.div`
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  height: 18px;
  justify-content: space-between;
  margin: 10px 0;
  padding: 0 14px 0;
  width: 100%;
  & .text-elem {
    /* 修改套件跑馬燈間距 */
    margin-right: 10px !important;
  }
`

export const MarqueeText = styled.button`
  color: #9ca5c3;

  &:nth-child(n + 2) {
    /* 修改跑馬燈間距 */
    margin-left: 10px;
  }
`

export const Icon = styled.img`
  height: 16px;
  margin-right: 4px;
  width: 16px;
`
