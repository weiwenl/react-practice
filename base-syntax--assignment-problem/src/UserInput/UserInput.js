import React from 'react'

const UserInput = (props) => {
  const inputStyle = {
    border: '2px solid green',
    fontSize: '20px',
    padding: '5px'
  }
  return(
    <div>
      <input type='text' style={inputStyle} onChange={props.change} value={props.currentname}/>
    </div>
  );
}

export default UserInput;
