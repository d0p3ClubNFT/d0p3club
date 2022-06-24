

export class WalletAlert{
    errorContainer = document.getElementById("error-container")
    error = document.getElementById("error")
        

    displayAlert(msg){
        this.errorContainer.style.display = "flex"
        this.errorContainer.style.justifyContent = "space-between"
        this.error.textContent = msg
        return null
    }

    closeErrorAlert(){
        this.errorContainer.style.display = "none"
        
        }
}