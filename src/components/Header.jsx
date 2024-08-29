import classes from './Header.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { authAction } from '../store/slice/auth';


const Header = () => {
  const is_authenticated=useSelector(state=>state.auth.is_authenticated)
  const dispatch=useDispatch()
  const onLogoutHandle=()=>{
    dispatch(authAction.logout())

  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            {is_authenticated?
      
            <button onClick={onLogoutHandle}>Logout</button>
            :
            <button>Login</button>
}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
