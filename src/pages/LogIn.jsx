import '../styles/LogIn.css'

export default function LogIn() {
  return (
    <div className='login-background'>
   
    <form >
        <h3>Admin LogIn</h3>

        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Enter Username" id="username"/>

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Enter Password" id="password"/>

        <div className="login-btn-box">

        <button
          className="login-glowing-btn"
          
          >
          <span className= "login-glowing-txt">
            
            L o <span className="login-faulty-letter">g </span>I n
          </span>
        </button>
       
            </div>
    </form>
</div>
  )
}
