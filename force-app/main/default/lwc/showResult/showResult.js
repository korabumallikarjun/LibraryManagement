import { LightningElement, api} from 'lwc';
const columns = [
    { label: 'Merchandise id', fieldName: 'Id' },
    { label: 'Merchandise Name', fieldName: 'Name' },
   /* { label: 'Merchandise Description', fieldName: 'Desc' },
    { label: 'Merchandise Stock', fieldName: 'Stock' },
    { label: 'Merchandise Price', fieldName: 'Price' },*/
];
export default class Merchandisesearchresult extends LightningElement {
    columns = columns;
    @api searchresults=[];
}