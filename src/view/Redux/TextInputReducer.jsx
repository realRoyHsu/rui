import React, { useReducer } from 'react';
import PropTypes from 'prop-types';


const initialState = '';
const reducer = (state, action) => action;

const Example04 = () => {
  const [firstName, changeFirstName] = useReducer(reducer, initialState);
  const [lastName, changeLastName] = useReducer(reducer, initialState);
  return (
    <>
      <div>
        First Name:
        <TextInput onChangeText={changeFirstName}
                   value={firstName} />
      </div>
      <div>
        Last Name:
        <TextInput onChangeText={changeLastName}
                   value={lastName} />
      </div>
    </>
  );
};

// ref: https://facebook.github.io/react-native/docs/textinput
const TextInput = ({ value, onChangeText }) => (
    <input onChange={e => onChangeText(e.target.value)}
           type="text"
           value={value} />
);
TextInput.propTypes = {
    value: PropTypes.string,
    onChangeText: PropTypes.func,
};

export default Example04;
