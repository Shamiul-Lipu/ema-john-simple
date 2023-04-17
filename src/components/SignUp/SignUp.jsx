import React from 'react';

const SignUp = () => {
    return (
        <div className='form-container'>
            <h2 className='from-title'>SignUp</h2>
            <form>
                <div className='form-control'>
                    <label htmlFor="email">Eamil</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" name="Confirm" id="" required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
        </div>
    );
};

export default SignUp;