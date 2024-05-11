import React from 'react';
import { Link } from "react-router-dom";
import "./NavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney, faFilePen ,faRightToBracket} from '@fortawesome/free-solid-svg-icons';

export const NavBar: React.FC = () => {
  return (
    <nav>
        <Link to="/">
            <FontAwesomeIcon className='navIcon' icon={faHouseChimney} />ホーム
        </Link>
        <Link to="/CreatePost">
            <FontAwesomeIcon className='navIcon' icon={faFilePen} />記事投稿
        </Link>
        <Link to="/Login">
            <FontAwesomeIcon  className='navIcon'icon={faRightToBracket} />ログイン
        </Link>
    </nav>
    )
};
