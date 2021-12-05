
import React, {useState, useEffect} from "react"
import { setCookie, parseCookies, destroyCookie } from 'nookies'
export default function Login() {

  const [loggedUser, setloggedUser] = useState("")

  const send_login_data = (e) => {
    e.preventDefault()
    const username = e.target.username.value
    const password = e.target.password.value
    // sessionStorage.setItem('loggedUser', username)
    setCookie(null, 'loggedUser', username, {
      // maxAge: 30 * 24 * 60 * 60,
      maxAge: 5,
      path: '/',
    })
    setloggedUser(username)
  }

  const logout = () => {
    console.log("Logout!")
    // sessionStorage.removeItem('loggedUser')
    // setloggedUser("")
    destroyCookie(null, 'loggedUser')
  }

  useEffect(() => {
    // const sessionUser = sessionStorage.getItem('loggedUser')
    // sessionUser && setloggedUser(sessionUser)
    const cookies = parseCookies()
    // console.log({ cookies })
    console.log(cookies['loggedUser'])
  }, [])


  return (
    <>
      <h1> {loggedUser ? loggedUser : 'Login'} </h1>

      <form onSubmit={(e)=>send_login_data(e)}>
        <div>
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" id="username" placeholder="username"/>
        </div>
        <div>
          <label htmlFor="passwd">Password: </label>
          <input type="password" name="password" id="password" placeholder="********"/>
        </div>
        <input type="submit" value="Login"/>
      </form>
      {/* { loggedUser && (<button type="submit" onClick={()=> logout()}>Logout</button>)} */}
      <button type="submit" onClick={()=> logout()}>Logout</button>
    </>
    )
  }
  