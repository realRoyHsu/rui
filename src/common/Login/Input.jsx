import React,{useRef} from 'react';
import PropTypes from 'prop-types';


function Input (props) {
    const inputRef = useRef();
    const onFocus = (e)=>{
        e.preventDefault();
        inputRef.current.className = 'focus';
    };
    const onBlur= (e)=>{
        e.preventDefault();
        if(inputRef.current.value === '') {
            inputRef.current.className = '';
        }
    };
    return (
        <div className="txtb" >
            <input onBlur={onBlur}
                   onFocus={onFocus}
                   ref={inputRef}
                   type={props.type}/>
            <span data-placeholder={props.dataPlaceholder}></span>
        </div>
    );
};

Input.propTypes = {
    type: PropTypes.string,
    dataPlaceholder: PropTypes.string,
};

Input.defaultProps = {
    type: 'text',
    dataPlaceholder: '',
};

export default Input;

