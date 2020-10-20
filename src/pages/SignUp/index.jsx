import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const SignUp = () => {
  return (
    <div className="page">
      <div className="card">
        <div className="card-left">
          <div className="text-2 mb-12">
            Here’s some amazing copy. Doesn’t this copy just make you excited?
          </div>
          <div className="text-3">
            Wow, you really built this form in 2-3 hours? You’re awesome.
          </div>
          <ul className="list">
            <li className="list-item list-item--active">
              <Avatar>
                <PlayArrowIcon />
              </Avatar>
              Write Code
            </li>
            <li>
              <Avatar>2</Avatar>
              Fix Bugs
            </li>
            <li>
              <Avatar>3</Avatar>
              Profit
            </li>
          </ul>
        </div>
        <div className="card-right">
          <div className="text-1">Create an Account</div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
