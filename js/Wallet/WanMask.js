import { WalletAlert } from "./WalletAlert.js";




export default class WanMask extends WalletAlert{

   
   
    connectWallet(){
        const isInstalled =  this.isInstalled()
        if(isInstalled){
        return this.getUserAccount()
    }
    else{
        this.displayAlert("WanMask Is Not Installed!")
    }

    
    
}

     isInstalled(){
        const provider = window.wan3
        const flag = provider?true:false   
        return flag
        }
  
  async getUserAccount(){
        const provider = window.wan3.eth
      
    return provider.getAccounts( (err, accounts) =>{
        
                if(err !== null){
                    this.displayAlert(err.message)
                }
                else if(accounts.length === 0){
                    this.displayAlert("Can't detect accounts, maybe it's locked")
                }
                else{
                    return accounts[0]
                    
                }
            
        })
    }
        
    
}