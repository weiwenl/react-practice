import React from 'react'
import './UserOutput.css'

const UserOutput = (props) => {
  return(
    <div className="userOutput">
      <p>
        Hello World! I am {props.username}
      </p>
      <p>
        I love drinking {props.favDrink}.
      </p>
    </div>
  );
}

export default UserOutput;
