import React from 'react';
import './nav.css';
import { BsMic } from 'react-icons/bs';
import { AiOutlineSetting } from 'react-icons/ai';

function Nav() {
  return (
    <div>
      <ul className="links">
        <li className="title">
          Covid
          <span className="evolution">Evolution &nbsp;&nbsp;</span>
          <span />
        </li>
        <li className="icon">
          <BsMic className="icon-mic" />
          <AiOutlineSetting className="icon-mic" />
        </li>
      </ul>
    </div>
  );
}

export default Nav;
