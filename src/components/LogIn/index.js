import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './index.css'

const LogIn = () => {
  const [useremail, setemail] = useState('')
  const [userpassword, setPassword] = useState('')

  const navigate = useNavigate('')

  const emailchange = event => {
    setemail(event.target.value)
  }

  const passwordChange = event => {
    setPassword(event.target.value)
  }

  const submitForm = async event => {
    event.preventDefault()
    const url = 'https://syoft.dev/Api/userlogin/api/userlogin'
    const userDetails = {useremail, userpassword}
    const options = {
      method: 'POSt',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (data.status === true) {
      navigate('/dash')
    }
  }

  return (
    <div className="signForm">
      <div className="into">
        <h1 className="head">
          Welcome to <br />
          our Community
        </h1>
        <p>
          Fuse helps developers to build organiged and well coded <br />
          dash board full of rich and butifull modules. join us and start <br />
          bulding your application today
        </p>
      </div>
      <div className="second-part">
        <form className="form" onSubmit={submitForm}>
          <h1 className="signup">Log In</h1>
          <div className="input">
            <span htmlFor="email">Email :</span>
            <br />
            <input type="text" id="email" onChange={emailchange} />
          </div>
          <div className="input">
            <span htmlFor="password">Password :</span>
            <br />
            <input type="password" id="password" onChange={passwordChange} />
          </div>
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  )
}

export default LogIn
