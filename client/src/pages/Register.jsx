import registerImage from '../images/register-image.png';
import { useState } from 'react';
import "../components/Register.css";
const Register = () =>{
    const [user, setUser] = useState({
        username:"",
        email:"",
        phone:"",
        password:""
    });
//handiling input values

const handleInput = (e) =>{
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;
    
    setUser({
        ...user,
        [name]: value,

    })
}

//handling the form submission

const handleSubmit = (e) =>{
    e.preventDefault();
    alert(user);
}
    return(
    <>
    <section>
        <main>
            <div className="section-registration">
                <div className="container grid grid-two-cols">
                    <div className="reginstration-image">
                        <img src={registerImage} alt="register" width="500" height="500"/>
                    </div>
                    <div className="register-form">
                        <h1 class ="main-heading mb-3">registration form</h1>
                        <br />
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">username</label>
                                <input type="text" name="username" placeholder='username' id='username'
                                required autoComplete='off'  value={user.username} onChange={handleInput} />
                            </div>
                            <div>
                                <label htmlFor="email">email</label>
                                <input type="text" name="email" placeholder='email' id='email'
                                required autoComplete='off' value={user.email} onChange={handleInput}/>
                            </div>
                            <div>
                                <label htmlFor="phone">phone</label>
                                <input type="number" name="phone" placeholder='phone' id='phone'
                                required autoComplete='off'  value={user.phone} onChange={handleInput}/>
                            </div>
                                
                                <div>
                                <label htmlFor="password">password</label>
                                <input type="password" name="password" placeholder='password' id='password'
                                required autoComplete='off'  value={user.password} onChange={handleInput}/>
                            </div>
                            <br />
                            <button type='submit' className='btn btn-submit'>Register now</button>
                            
                        </form>
                    </div>
                </div>
            </div>
        </main>
    </section>
    </>
    )
}

export default Register;