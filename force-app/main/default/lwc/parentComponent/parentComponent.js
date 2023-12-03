import { LightningElement } from 'lwc';

export default class parentComponent extends LightningElement {
    searchDetail=[];
    handlemerchandise(event){
        this.searchDetail=[];
        alert('See the magic, I Called from Child');
        alert(event.detail);
        try{
            event.detail.forEach(x => {
                var accData = {
                    Id:x.id,
                    Name:x.Name,
                    /*Desc:x.Merchandise_Desc__c,
                    Stock:x.Merchandise_Stock__c,
                    Price:x.Merchandise_Price__c*/
                }
                this.searchDetail.push(accData);
            });
        }
        catch(e){
            console.log(e);
        }
    }
}