import { Fragment } from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import {useSelector} from 'react-redux'


function App() {
  
  const is_authenticated=useSelector((state)=>state.auth.is_authenticated)

  return (
    <>
    <Header/>
    {is_authenticated?<UserProfile/>:<Auth/>}
    <Fragment/>
    <Counter />
    
   
    </>
  );
}

export default App;
