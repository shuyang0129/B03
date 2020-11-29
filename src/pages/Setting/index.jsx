import React from 'react'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import { FEEDBACK, RESET_PASSWORD } from '@router/links'
// constants
import { BACK } from '@constants/topBarButtonTypes'
// components
import * as S from './style'
import TopBar from '@components/TopBar'
// actions
import { memberInfoLogout } from '@actions'

const Setting = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  return (
    <S.Container>
      <TopBar title='设置' left={BACK} />
      <S.MainContent>
        <div>
          <S.ListItem onClick={() => history.push(RESET_PASSWORD)}>
            <S.ListItemContent>修改密码</S.ListItemContent>
          </S.ListItem>
          <S.ListItem onClick={() => history.push(FEEDBACK)}>
            <S.ListItemContent>意见反馈</S.ListItemContent>
          </S.ListItem>
        </div>
        <div>
          <S.logoutButton onClick={() => dispatch(memberInfoLogout())}>退出</S.logoutButton>
        </div>
      </S.MainContent>
    </S.Container>
  )
}

export default Setting
