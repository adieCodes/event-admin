import React from 'react';
import { Link } from 'react-router-dom';
import './LinkBtn.css';

interface ILinkBtnProps {
  to: string;
  class: string;
  text: string;
}

const LinkBtn = (props: ILinkBtnProps) => (
  <Link to={props.to} className={props.class}>
    {props.text}
  </Link>
);

export default LinkBtn;
