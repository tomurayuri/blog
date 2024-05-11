import { signInWithPopup } from 'firebase/auth';
import { auth, ptovider} from '../firebase';
import { useNavigate } from 'react-router-dom';
type Props = {
  setIsAuth: (isLogin:boolean) => void
}

export const Login = (props:Props) => {
  const { setIsAuth } = props;
  const navigate = useNavigate();
  const loginInWithGoogle = () => {
    // Googleでログイン
    signInWithPopup(auth, ptovider).then((result) => {
      console.log(result)
      console.log("ログイン成功")
      
      localStorage.setItem("isAuth", 'true');
      setIsAuth(true);
      navigate("/")

    }).catch((error)=> {
      console.log(error)
    })

  }
  return (
  <div>
    <p>ログインして始める</p>
    <button onClick={loginInWithGoogle}>Googleでログイン</button>
  </div>
  )
};