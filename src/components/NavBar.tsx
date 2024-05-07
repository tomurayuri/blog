import React from 'react';
import { Link } from "react-router-dom"

export const NavBar: React.FC = () => {
  return (
    <nav>
        <Link to="/">ホーム</Link>
        <Link to="/CreatePost">記事投稿</Link>
        <Link to="/Login">ログイン</Link>
    </nav>
    )
};
