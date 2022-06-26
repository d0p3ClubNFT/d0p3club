import { WalletAlert } from "./WalletAlert.js";





class XdcPay extends WalletAlert{
     
     METAMASKINSTALLED = true
     web3 = new Web3(window.ethereum)

    async connectWallet(){
        const status = this.checkMetaMask()
        const account = status?this.displayAlert("XDCPAY won't work well with MetaMask Installed!"):await this.web3.eth.getAccounts()
        return  account !== null?account[0]:this.displayAlert("Can't Detect Account!")
       
        }

   checkMetaMask(){
    if(window.ethereum){
    const status = window.ethereum?.request !== undefined?this.METAMASKINSTALLED:!this.METAMASKINSTALLED
    return status
    }
    else{
      this.displayAlert("XDCPAY Is Not Installed!")
    }
  }

   



}

export default XdcPay;