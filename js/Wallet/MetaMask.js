import { WalletAlert } from "./WalletAlert.js";




export default class Metamask extends WalletAlert{


   async connectWallet(){
        const isInstalled = await this.isInstalled()
       const userPublicKey =  isInstalled?this.getUserAccount():this.displayAlert("MetaMask Not Installed!")
        return userPublicKey;

    }

    async isInstalled(){
        const provider = await detectEthereumProvider()
        if(provider){
            const flag = provider === window.ethereum?true:false
            return flag
        }
        else{
            this.displayAlert("MetaMask is Not Installed!")
        }
    }

    async getUserAccount(){
        try{
        const provider = window.ethereum
        const accounts = provider?.request?await provider.request({method: "eth_requestAccounts"}):undefined
        if(accounts !== undefined){
        if(accounts.length > 0){
            this.userPublicKey = accounts[0]
            return this.userPublicKey
            
        }
       
        
    }
}
catch(error){
    switch(error.code){
        case 4001: this.displayAlert("User Rejected the Request!");
        break;
        case -32603: this.displayAlert("Internal Error")
        break;
        default: this.displayAlert("Something went wrong!")
    }
}

        
    }
}