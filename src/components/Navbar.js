import {Link} from 'react-router-dom'
function Navbar({loginHandler}) {
  


  return (
    <nav>
<Link to='/' >
Home
</Link>
<Link to='/aboutUs' >
aboutUs
</Link>
<Link to='/profiles' >
Profiles
</Link>

      
    
      
      <button
        className='login'
        onClick={loginHandler} >
      Login
      </button>
    </nav>
  );
}

export default Navbar;
