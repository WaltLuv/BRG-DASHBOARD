import React from "react";
import Account from "components/Account/Account";
import Chains from "components/Chains";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import DEX from "components/DEX";


function StakingDashboard() {

    return (
        <div className="App-header">
        <div className='container container-style'>
            <div className='col'>
            <body className='nftminter'>
                <div className="pb-3" id='wallet-address' style={{
                    color: "#fff",
                    fontWeight: "400",
                    textShadow: "1px 1px 1px black",
                  }}>   
                <Chains />
                <Account style={{ cursor: "pointer" }} />
              </div>
            
         
        </body>
    </div>

    
            <div className='col'>
              <body className='nftstaker border-0'>
                <form  style={{ fontFamily: "SF Pro Display" }} >
                  <div className="row px-3">
                    <div className="col">
                      <div class="stakingrewards" style={{ borderRadius: "25px", boxShadow: "1px 1px 15px #ffffff" }}>  
                      <div className="col">
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
                      </div>
                      <div class="header">
                      <div style={{ fontSize: '25px', borderRadius: '14px', color: "#ffffff", fontWeight: "300" }}>"Yesterday's price is not today's price" - Fat Joe</div>
                      </div>
                      <form className='stakingrewards' style={{ borderRadius: "25px", boxShadow: "1px 1px 15px #ffffff", fontFamily: "SF Pro Display" }}>
                          <h5 style={{ color: "#000000", fontWeight: '300' }}> Discover new places to buy or rent. 
                          You can also sell, swap, stake, or pawn your assets, and send money/crypto worldwide. Lastly, we are currently working on building a virtual city 
                          where you can purchase, sell, or rent Digital Property NFTs and virtual reality experiences.  
                          The Digital Property NFTs are inspired by and mimic real world real estate assets 
                          and locations. More information coming soon.
                          </h5>
                        </form>
                    </div>
                    <div className="row px-4 pt-2">
                      <div class="header">
                        <div style={{ fontSize: '25px', borderRadius: '14px', color: "#ffffff", fontWeight: "300" }}>BMD Rental Information</div>
                        <table className='table px-3 table-bordered table-black'>
                          <thead className='thead-light'>
                            <tr>
                              <th scope="col">Location</th>
                              <th scope="col">Avg. Cost Per Day</th>
                              <th scope="col">Beds & Bath</th>
                            </tr>
                          </thead>
                          <tbody>
                          <tr>
                              <td>Ohio</td>
                              <td class="amount" data-test-id="rewards-summary-ads">
                                <span class="amount">0.05</span>&nbsp;<span class="currency">MATIC</span>
                              </td>
                              <td class="exchange">
                                <span class="amount">4</span>&nbsp;<span class="currency">Beds</span>
                                &nbsp;
                                <span class="amount">2</span>&nbsp;<span class="currency">Bath</span>
                              </td>
                            </tr>  
                            <tr>
                              <td>New York</td>
                              <td class="amount" data-test-id="rewards-summary-ads">
                                <span class="amount">0.05</span>&nbsp;<span class="currency">MATIC</span>
                              </td>
                              <td class="exchange">
                                <span class="amount">2</span>&nbsp;<span class="currency">Beds</span>
                                &nbsp;
                                <span class="amount">1</span>&nbsp;<span class="currency">Bath</span>
                              </td>
                            </tr>
                            <tr>
                              <td>Los Angeles</td>
                              <td class="amount" data-test-id="rewards-summary-ac">
                                <span class="amount">0.10</span>&nbsp;<span class="currency">MATIC</span>
                              </td>
                              <td class="exchange">
                                <span class="amount">4</span>&nbsp;<span class="currency">Beds</span>
                                &nbsp;
                                <span class="amount">2</span>&nbsp;<span class="currency">Bath</span>
                              </td>
                            </tr>
                            <tr>
                              <td>Miami</td>
                              <td class="amount"><span class="amount">0.10</span>&nbsp;<span class="currency">MATIC</span>
                              </td>
                              <td class="exchange">
                                <span class="amount">3</span>&nbsp;<span class="currency">Beds</span>
                                &nbsp;
                                <span class="amount">2</span>&nbsp;<span class="currency">Bath</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
    
                        <div class="header">
                          <div style={{ fontSize: '25px', borderRadius: '14px', fontWeight: '300' }}>BMD Token Stake Farms</div>
                          <table className='table table-bordered table-black' style={{ borderRadius: '14px' }} >
                            <thead className='thead-light'>
                              <tr>
                                <th scope="col">Farm Pools</th>
                                <th scope="col">Harvest Daily Earnings</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Rent Your Home or NFT to Earn Crypto</td>
                                <td class="amount" data-test-id="rewards-summary-ads">
                                  <span class="amount">0.01</span>&nbsp;<span class="currency">Per BMDT</span>
                                </td>
                              </tr>
                              <tr>
                                <td>Stake BMDR to Earn BMDR</td>
                                <td class="amount" data-test-id="rewards-summary-ac">
                                  <span class="amount">0.005</span>&nbsp;<span class="currency">Per BMDR</span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    </div>
                </form>
              </body>
            </div>
          </div>
                    </div>
      );
    }

export default StakingDashboard;