import { PageHeader, Button } from 'antd';
import { useMoralis } from "react-moralis";
import './Header.css'

const Header = () => {
  const { authenticate } = useMoralis();
  return(
    <div>

          Login with Metamask
      
    </div>
  )
}

export default Header;