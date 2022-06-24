
import { WalletAlert } from "./Wallet/WalletAlert.js"
import walletConnect from "./Wallet/WalletConnect.js"

const connectMetaMaskButton = document.getElementById("metamask")
const connectWanMaskButton = document.getElementById("wanmask")
const connectXdcButton = document.getElementById("xdc")
const closeError = document.getElementById("close-error")
const publicKey = document.getElementById("publickey")


connectMetaMaskButton.addEventListener("click", async  function(){
   const userAddress =  await walletConnect.MetaMask().connectWallet()
   console.log(userAddress)
})

connectWanMaskButton.addEventListener("click", function(){
   const userAddress =   walletConnect.WanMask().connectWallet()
   console.log(userAddress)

})

connectXdcButton.addEventListener("click", async  function(){
   const userAddress = await walletConnect.XdcPay().connectWallet()
   console.log(userAddress)

})

closeError.addEventListener("click", () => {
   const walletAlert = new WalletAlert()
   walletAlert.closeErrorAlert()
})