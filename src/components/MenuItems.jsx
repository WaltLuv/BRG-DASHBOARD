import { useLocation } from "react-router";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

function MenuItems() {
  const { pathname } = useLocation();

  return (
    <Menu
      theme="light"
      mode="horizontal"
      style={{
        display: "flex",
        fontSize: "17px",
        fontWeight: "500",
        width: "100%",
        justifyContent: "center",
        backgroundColor: "black",
        color: "#B721FF",
      }}
      defaultSelectedKeys={[pathname]}
    >
      <Menu.Item key="/stakingdashboard">
        <NavLink to="/stakingdashboard">🚀 Dashboard</NavLink>
      </Menu.Item>
      <Menu.Item key="/onramp">
        <NavLink  to="/onramp">🛒  The Block Market</NavLink>
      </Menu.Item>
      <Menu.Item key="/wallet">
        <NavLink to="/wallet">🧰 Wallet-Transfer</NavLink>
      </Menu.Item>
      <Menu.Item key="/nftBalance">
        <NavLink  to="/nftBalance">🖼 Collection</NavLink>
      </Menu.Item>
      <Menu.Item key="/erc20balance">
        <NavLink to="/erc20balance">🔍 Explore</NavLink>
      </Menu.Item>
    </Menu>
  );
}

export default MenuItems;
