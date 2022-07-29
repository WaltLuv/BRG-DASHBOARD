import { useMoralis } from "react-moralis";
import { getEllipsisTxt } from "helpers/formatters";
import Blockie from "../Blockie";
import { Button, Card, Modal} from "antd";
import { useState } from "react";
import Address from "../Address/Address";
import { SelectOutlined } from "@ant-design/icons";
import { getExplorer } from "helpers/networks";
import Text from "antd/lib/typography/Text";
import { connectors } from "./config";
import { NavLink } from "react-router-dom";




const styles = {
  account: {
    height: "42px",
    padding: "0 15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "fit-content",
    borderRadius: "12px",
    backgroundColor: "#17b2ff",
    cursor: "pointer",
  },
  text: {
    color: "#B721FF",
    backgroundColor: "black",
    size:"small",
    width: "100%",
    marginTop: "10px",
    borderRadius: "0.5rem",
    fontSize: "16px",
    fontWeight: "500",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "auto",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "20px 5px",
   
  },
  connector: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "auto",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "20px 5px",
    cursor: "pointer",
  },
  icon: {
    alignSelf: "center",
    fill: "rgb(40, 13, 95)",
    flexShrink: "0",
    marginBottom: "8px",
    height: "30px",
  },
  search: { 
    borderRadius: "10px", 
    boxShadow: "1px 1px 15px #B721FF", 
    fontWeight: "300", 
    backgroundColor: "#000000", 
    color: "#B721FF",
  },
};

export default function Account() {
 
  const { authenticate, isAuthenticated, account, chainId, logout, isLoggingOut } =
    useMoralis();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAuthModalVisible, setIsAuthModalVisible] = useState(false);

  
 

  if (!isAuthenticated || !account) {
    return (
      <>
        <div onClick={() => setIsAuthModalVisible(true)}>
          <div>
            <h5 style={{ color:"#fff" }}>Login Dashboard</h5>
          </div>
            <p className="connectbutton" for="floatingInput" >Connect Wallet</p>
        </div>
        <div className="row pt-3">
        <div>
              <h2 style={{ borderRadius: '14px', fontWeight: "300", fontSize: "25px", color: "#fff" }}>Blokmatic Real-Estate NFT Marketplace and Coin Exchange </h2>
        </div>
        <div style={{ borderRadius: '14px'}}>
              <img src="logo1.png"></img>
        </div>
        <div style={{ borderRadius: '14px'}}>
              <img src="polygon.png"></img>
        </div>    
        <div style={{ borderRadius: '14px'}}>
              <img src="ethereum.png"></img>
        </div>
        <div style={{ borderRadius: '14px'}}>
              <img src="bsc.png"></img>
        </div>
        <div style={{ borderRadius: '14px'}}>
              <img src="ava5.png"></img>
        </div>
        </div>
        <Modal
          visible={isAuthModalVisible}
          footer={null}
          onCancel={() => setIsAuthModalVisible(false)}
          bodyStyle={{
            padding: "15px",
            fontSize: "17px",
            fontWeight: "500",
          }}
          style={{ fontSize: "16px", fontWeight: "500" }}
          width="340px"
        >
          <div
            style={{
              width: "100%",
              marginTop: "10px",
              borderRadius: "0.5rem",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            Connect Wallet
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            {connectors.map(({ title, icon, connectorId }, key) => (
              <div
                style={styles.connector}
                key={key}
                onClick={async () => {
                  try {
                    await authenticate({
                    signingMessage:"Sign to login to Blockmatic",
                    provider: connectorId });
                    window.localStorage.setItem("connectorId", connectorId);
                    setIsAuthModalVisible(false);
                  } catch (e) {
                    console.error(e);
                  }
                }}
              >
                <img src={icon} alt={title} style={styles.icon} />
                <Text style={{ fontSize: "14px" }}>{title}</Text>
              </div>
            ))}
          </div>
        </Modal>
      </>
    );
  }

  return (
    <>
      {/* <button
        onClick={async () => {
          try {
            console.log("change")
            await web3._provider.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: "0x38" }],
            });
            console.log("changed")
          } catch (e) {
            console.error(e);
          }
        }}
      >
        Hi
      </button> */}
                    <form >
                        <div className="connectbutton" onClick={() => setIsModalVisible(true)}>
                          <h5 style={{ color:"#9007ec" }}>The Blockmatic Dashboard</h5> 
                        
                          <div>
                          <p className="connectbutton" for="floatingInput" style={{ color:"#B721FF", cursor: "pointer"  }}>Log-Out</p>
                          <Blockie currentWallet scale={3} />
                          </div>
                       </div>
                    </form>
                    <div>
                          <p style={{  ...styles.text }}><b>💼 &nbsp; Wallet Address:</b>{getEllipsisTxt(account, 6)}</p>
                    </div>
      
      <form>
        <div className='col'>
          <body className='nftstaker border-0'>
            <form  style={{ fontFamily: "SF Pro Display" }} >
              <div className="row px-3">
                <div className="col">
                  <div style={{ fontSize: '25px', borderRadius: '14px', color: "#ffffff", fontWeight: "300" }}>Click Options Below to Choose Where You Want To Go</div>
                </div>
                <form class="stakingrewards" style={{ borderRadius: "25px", boxShadow: "1px 1px 15px #ffffff" }}>
                <div key="/onramp" style={{  ...styles.text }}>
                <NavLink style={{ fontWeight: "300", backgroundColor: "#000000", color: "#B721FF" }} to="/onramp">
                🛒  The Block Market
                </NavLink>  
                </div>
                <div key="/onramp" style={{  ...styles.text }}>
                <NavLink style={{ fontWeight: "300", backgroundColor: "#000000", color: "#B721FF" }} to="/onramp">
                💸  Fiat-On-Ramp 
                </NavLink >
                </div>
                <div key="/1inch" style={{  ...styles.text }}>
                <NavLink style={{ fontWeight: "300", backgroundColor: "#000000", color: "#B721FF" }} to="/1inch">
                🪙 Token-Swap
                </NavLink>
                </div>
                <div key="/stakingdashboard" style={{  ...styles.text }}>
                <NavLink style={{ fontWeight: "300", backgroundColor: "#000000", color: "#B721FF" }} to="/stakingdashboard">
                🏘️ Real Estate 
                </NavLink>
                </div>
                <div key="/stakingdashboard" style={{  ...styles.text }}>
                <NavLink style={{ fontWeight: "300", backgroundColor: "#000000", color: "#B721FF" }} to="/stakingdashboard">
                🏦 Buy and Stake Real Estate NFTs
                </NavLink>
                </div>
                <div key="/nftBalance" style={{  ...styles.text }}>
                <NavLink style={{ fontWeight: "300", backgroundColor: "#000000", color: "#B721FF" }} to="/nftBalance">
                  🖼  NFT Collection
                </NavLink>
                </div>
                <div key="/erc20balance" style={{  ...styles.text }}>
                <NavLink style={{ fontWeight: "300", backgroundColor: "#000000", color: "#B721FF" }} to="/erc20balance">
                  📊 Balances
                </NavLink>
                </div>
                <div key="/erc20transfers" style={{  ...styles.text }}>
                <NavLink style={{ fontWeight: "300", backgroundColor: "#000000", color: "#B721FF" }} to="/erc20transfers"> 
                  🧾 Transaction History
                </NavLink>
                </div>
               
                </form>
                </div> 
              </form>
            </body>
          </div>  
        </form>
      <Modal
        visible={isModalVisible}
        footer={null}
        onCancel={() => setIsModalVisible(false)}
        bodyStyle={{
          padding: "15px",
          fontSize: "17px",
          fontWeight: "500",
        }}
        style={{ fontSize: "16px", fontWeight: "500" }}
        width="400px"
      >
        Account
        <Card
          style={{
            marginTop: "10px",
            borderRadius: "1rem",
          }}
          bodyStyle={{ padding: "15px" }}
        >
          <Address
            avatar="left"
            size={6}
            copyable
            style={{ fontSize: "20px" }}
          />
          <div style={{ marginTop: "10px", padding: "0 10px" }}>
            <a
              href={`${getExplorer(chainId)}/address/${account}`}
              target="_blank"
              rel="noreferrer"
              style={{ color: "#9007ec" }}
            >
              <SelectOutlined style={{ marginRight: "5px", color: "#9007ec" }} />
              View on Explorer
            </a>
          </div>
        </Card>
        <Button
          disable={isLoggingOut}
          size="large"
          type="primary"
          style={{
            width: "100%",
            marginTop: "10px",
            borderRadius: "0.5rem",
            fontSize: "16px",
            fontWeight: "500",
            backgroundColor: "#9007ec",
            color: "#07ece4",
          }}
          onClick={async () => {
            await logout();
            window.localStorage.removeItem("connectorId");
            setIsModalVisible(false);
          }}
        >
          Disconnect Wallet
        </Button>
      </Modal>
    </>
  );
}


