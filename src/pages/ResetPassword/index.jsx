import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
// constants
import { BACK } from '@constants/topBarButtonTypes'
// components
import { StyleForm, StyleFormItem, StyleResetPassword, StyleToggleType } from './styles'
import TopBar from '@components/TopBar/'
import VerifyButton from '@components/VerifyButton/'
import SubmitButton from './SubmitButton'
// api
import { getVerifyCode } from '@api'
// actions
import { loadingClose, toastMsg } from '@actions'
// utils
import formListData from './formListData'

const ResetPassword = () => {
  const dispatch = useDispatch()
  const [params, setParams] = useState({
    loginName: '',
    phoneNo: '',
    verificationCode: '',
    passWord: '',
    repeatPassWord: '',
  })

  // input 輸入事件
  const handleInputChange = evt => {
    const { name, value } = evt.target
    setParams({ ...params, [name]: value })
  }

  // input 類型切換
  const handleToggleType = (evt, name) => {
    //眼睛樣式
    let classList = evt.target.classList
    classList.contains('active') ? classList.remove('active') : classList.add('active')

    //顯示文字或 ***
    let target = document.getElementById(name)
    target.type === 'password' ? (target.type = 'text') : (target.type = 'password')
  }

  // 獲取驗證碼
  const fetchVerifyCode = () => {
    getVerifyCode(params.phoneNo, 2)
      .then(res => {
        const { code, message } = res.data
        if (code !== 0) return dispatch(toastMsg(message))
        dispatch(toastMsg(message))
      })
      .finally(() => dispatch(loadingClose()))
  }

  return (
    <StyleResetPassword>
      <TopBar title='重设密码' left={BACK} />
      <StyleForm>
        {formListData.map((item, idx) => {
          const { label, type, typeToggle, name, placeholder, verify } = item
          return (
            <StyleFormItem key={idx}>
              <div className='label'>{label}</div>
              <div className='wrapper'>
                <input type={type} name={name} id={name} placeholder={placeholder} onChange={handleInputChange} />
                {verify && <VerifyButton theme='small' phoneNo={params.phoneNo} handleRequest={fetchVerifyCode} />}
                {typeToggle && <StyleToggleType onClick={evt => handleToggleType(evt, name)} />}
              </div>
            </StyleFormItem>
          )
        })}
      </StyleForm>
      <SubmitButton params={params} />
    </StyleResetPassword>
  )
}

export default ResetPassword
