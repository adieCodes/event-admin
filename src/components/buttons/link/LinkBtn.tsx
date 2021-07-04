import React from 'react';
import { Link } from 'react-router-dom';
import './LinkBtn.css';

interface ILinkBtnProps {
  to: string;
  text: string;
}

const LinkBtn = (props: ILinkBtnProps) => (
  <div className="linkBtn_container">
    <Link to={props.to} className="linkBtn">
      {props.text}
    </Link>
  </div>
);

export default LinkBtn;
