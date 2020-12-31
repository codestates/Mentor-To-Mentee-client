import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import axios from 'axios';
axios.defaults.withCredentials = true;

const InsertForm = styled.form`
  background: #f8f9fa;
  width: 484px;
  height: 500px;

  h1 {
    padding-left: 20px;
    padding-bottom: 30px;
    padding-top: 20px;
    padding-right: 10px;
    text-align: center;
  }
`;

const SubmitButton = styled.button`
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 91.5%;
  height: 50px;
  font-size: 18px;
  padding: 10px;
  margin-left: 20px;
  margin-bottom: 15px;
  background: #38d9a9;
  color: white;

  &:hover {
    cursor: pointer;
  }
`;

const Input = styled.input`
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 87%;
  height: 30px;
  font-size: 12px;
  padding: 10px;
  margin-left: 20px;
  margin-bottom: 20px;
`;

function PasswordSetting() {
  const email = useSelector(state => state.userInfoSetting.email);
  const [passwordState, setPasswordState] = useState({
    currentPassword: '',
    newPassword: '',
    passwordConfirm: '',
  });
  const inputFormHandler = e => {
    setPasswordState({ ...passwordState, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = e => {
    e.preventDefault();
    axios
      .post('https://localhost:4000/setPassword', {
        ...passwordState,
        email,
      })
      .then(res => {
        alert('설정 저장이 완료되었습니다.');
        console.log(res);
        setPasswordState({
          currentPassword: '',
          newPassword: '',
          passwordConfirm: '',
        });
      });
  };
  return (
    <InsertForm>
      <h1>비밀번호 변경</h1>
      <Input
        autoFocus
        placeholder='현재 비밀번호'
        type='password'
        name='currentPassword'
        value={passwordState.currentPassword}
        onChange={inputFormHandler}
      ></Input>
      <Input
        placeholder='새 비밀번호'
        type='password'
        name='newPassword'
        value={passwordState.newPassword}
        onChange={inputFormHandler}
      ></Input>
      <Input
        placeholder='새 비밀번호 확인'
        type='password'
        name='passwordConfirm'
        value={passwordState.passwordConfirm}
        onChange={inputFormHandler}
      ></Input>
      <SubmitButton onClick={onSubmitHandler}>비밀번호 변경</SubmitButton>
    </InsertForm>
  );
}

export default PasswordSetting;
