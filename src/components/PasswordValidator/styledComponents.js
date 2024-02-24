// Style your elements here

import styled from 'styled-components'

export const BgForAll = styled.div`
  background-color: #24263c;
  color: #edeeff;
  height: 100vh;
  background-size: cover;
  padding-top: 33px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Card = styled.div`
  background-color: #383a4e;
  height: 300px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  font-family: 'Roboto';
  text-align: center;

  @media screen and (max-width: 576px) {
    width: 350px;
    padding: 17px;
  }

  @media screen and (min-width: 577px,max-width:1200px) {
    width: 470px;
    padding: 22px;
  }
`

export const ParaErrorMsg = styled.p`
  color: #ef4444;
  line-height: 1.5;
`
export const Heading = styled.h1`
  color: #f8fafc;
  font-family: 'Roboto';
  @media screen and (min-width: 767px) {
    font-size: 34px;
  }
`

export const Input = styled.input`
  width: 330px;
  height: 33px;
  outline: none;
  margin-top: 33px;

  @media screen and (max-width: 576px) {
    width: 280px;
  }

  @media screen and (min-width: 577px,max-width:1200px) {
    width: 370px;
  }
`
