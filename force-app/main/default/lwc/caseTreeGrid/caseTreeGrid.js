import { LightningElement, track } from 'lwc';
import caseRecords from '@salesforce/apex/caseTreeGrid.caseRecords';
//import getWeather from '@salesforce/apex/showWeatherMotive.getWeather'


export default class CaseTreeGrid extends LightningElement {


    @track gridColumns = [
        {
            type: 'text',
            fieldName: 'CaseNumber',
            label: 'CaseNumber',
            initialWidth: 300,
        }];

    @track gridData = [];

    connectedCallback() {
        caseRecords()
            .then((results) => {
                this.gridData = results;
            });
    }
}