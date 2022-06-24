import MetaMask from "./MetaMask.js"
import WanMask from "./WanMask.js"
import XdcPay from "./Xdcpay.js"

const walletConnect = {

        MetaMask: function(){
            return new MetaMask()
        },
        WanMask: function(){
           return  new WanMask()
        },
        XdcPay: function(){
            return new XdcPay()
        }
}

export default walletConnect


