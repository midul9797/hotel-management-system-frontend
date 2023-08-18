import '../styles/LogIn.css'
import '../styles/SignUp.css'
export default function SignUp() {
  return (
    <div className='signup-background'>
   
    <form className='signup-form'>
        <h3>Admin SignUp</h3>

        <label htmlFor="name">Name</label>
        <input type="text" placeholder="Enter Name" id="name"/>

        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Enter Username" id="username"/>
        <label htmlFor="code">Code</label>
        <input type="text" placeholder="Enter Code" id="code"/>

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Enter Password" id="password"/>

        <div className="login-btn-box" style={{padding: "1vw"}}>

        <button
          className="login-glowing-btn"
          
          >
          <span className= "login-glowing-txt">
            
            S i <span className="login-faulty-letter">g n </span>U p
          </span>
        </button>
       
            </div>
    </form>
</div>
  )
}
