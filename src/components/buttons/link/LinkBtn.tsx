import React from 'react';
import { Link } from 'react-router-dom';
import './LinkBtn.css';

interface ILinkBtnProps {
  to: string;
  text: string;
  danger?: boolean;
}

const LinkBtn = (props: ILinkBtnProps) => (
  <Link
    to={props.to}
    className={props.danger ? 'linkBtn linkBtn_danger' : 'linkBtn'}
  >
    {props.text}
  </Link>
);

export default LinkBtn;
