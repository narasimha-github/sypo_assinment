import {Link, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import './index.css'

const SignIn = () => {
  const [user_firstname, setName] = useState('')
  const [user_password, setPass] = useState('')
  const [user_email, setmail] = useState('')
  const [user_phone, setPhone] = useState('')
  const [output, setOutput] = useState('')

  const navigation = useNavigate()

  const onChangeName = event => {
    setName(event.target.value)
  }

  const onChangePassword = event => {
    setPass(event.target.value)
  }

  const onChangeEmail = event => {
    setmail(event.target.value)
  }

  const onChangePhone = event => {
    setPhone(event.target.value)
  }

  const submitForm = async event => {
    event.preventDefault()
    const user_lastname = 'ni'
    const user_city = 'Hydrabad'
    const user_zipcode = '500072'
    const userDetails = {
      user_firstname,
      user_email,
      user_phone,
      user_password,
      user_lastname,
      user_city,
      user_zipcode,
    }
    const url =
      'https://syoft.dev/Api/user_registeration/api/user_registeration'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    setOutput(data.msg)
    if (response.status === true) {
      navigation('/logIn')
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
          <h1 className="signup">Sign Up</h1>
          <p>
            Already Have an account <Link to="/logIn">SignIn?</Link>
          </p>
          <div className="input">
            <span htmlFor="name">First Name :</span>
            <br />
            <input type="text" id="name" onChange={onChangeName} />
          </div>
          <div className="input">
            <span htmlFor="password">Password :</span>
            <br />
            <input type="password" id="password" onChange={onChangePassword} />
          </div>
          <div className="input">
            <span htmlFor="email">Email :</span>
            <br />
            <input type="text" id="email" onChange={onChangeEmail} />
          </div>
          <div className="input">
            <span htmlFor="phioneNumber">Phone Number</span>
            <br />
            <input type="number" id="phioneNumber" onChange={onChangePhone} />
          </div>
          <button type="submit">Sign In</button>
          <p>{output}</p>
        </form>
      </div>
    </div>
  )
}

export default SignIn
