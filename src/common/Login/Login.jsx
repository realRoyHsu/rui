import React, {useRef, useEffect} from 'react';

import Input from './Input.jsx';

export default () => {
    let ref = useRef(null);
    useEffect(() => {
        console.log(ref);
    });
    return (
        <div className="login-bg">
            <form action=""
                  className="login-form">
                <h1>Login</h1>

                <Input dataPlaceholder="Username"
                       type="text"/>

                <Input dataPlaceholder="Password"
                       type="password"/>

                <input className="logbtn"
                       type="submit"
                       value="Login"/>

                <div className="bottom-text">
                    Don't have account? <a href="">sign up</a>
                </div>
            </form>
        </div>
    );
};

