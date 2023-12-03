import { LightningElement } from 'lwc';
import getMerchandise from '@salesforce/apex/searchMerchandiseInfo.getMerchandisedata'
export default class searchMerchandise extends LightningElement {
    merchName;
    merchStock;
   
 
    handleOnChangemerchName(event){
        this.merchName = event.target.value;
    }
    handleOnChangemerchStock(event){
        this.merchStock = event.target.value;
    }

    initiateSearch(event){
    
        alert('Yes sir, I am ready to search! = '+this.merchName);
        getMerchandise({actName:this.merchName}).then(results=>{
            this.dispatchEvent(new CustomEvent('getMerchandisedata',{detail:results}));
        }).catch(error=>{
            console.log(error);
        })
    }
 
}