import React from 'react';
import { Link } from "react-router-dom";
import "./NavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney, faFilePen ,faRightToBracket} from '@fortawesome/free-solid-svg-icons';

export const NavBar: React.FC = () => {
  return (
    <nav>
        <Link to="/">
            <FontAwesomeIcon icon={faHouseChimney} />ホーム
        </Link>
        <Link to="/CreatePost">
            <FontAwesomeIcon icon={faFilePen} />記事投稿
        </Link>
        <Link to="/Login">
            <FontAwesomeIcon icon={faRightToBracket} />ログイン
        </Link>
    </nav>
    )
};
