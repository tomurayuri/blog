import { signOut } from 'firebase/auth';
import { auth} from '../firebase';
import { useNavigate } from 'react-router-dom';
type Props = {
  setIsAuth: (isLogin:boolean) => void
}

export const Logout = (props:Props) => {
  const { setIsAuth } = props;
  const navigate = useNavigate();
  const logout = () => {
    // ログアウト
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login")

    }).catch((error)=> {
      console.log(error)
    })

  }
  return (
  <div>
    <p>ログアウトする</p>
    <button onClick={logout}>ログアウト</button>
  </div>
  )
};