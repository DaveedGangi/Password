// Write your code here

import {useState} from 'react'

import {BgForAll, Card, ParaErrorMsg, Heading, Input} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const [conditionForPara, setConditionPara] = useState(true)

  const inputValue = event => {
    setPassword(event.target.value)
    if (event.target.value.length >= 8) {
      setConditionPara(false)
    } else {
      setConditionPara(true)
    }
  }

  return (
    <BgForAll>
      <Card>
        <Heading>Password Validator</Heading>
        <p>Check how strong and secure is your password</p>
        <div>
          <Input onChange={inputValue} type="password" value={password} />
        </div>
        <ParaErrorMsg>
          {conditionForPara && 'Your password must be at least 8 characters'}
        </ParaErrorMsg>
      </Card>
    </BgForAll>
  )
}

export default PasswordValidator
