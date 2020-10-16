import { LightningElement , wire, track} from 'lwc';
import getRSSFeed from '@salesforce/apex/IntegrateRSSFeed.getRSSFeed';
export default class RSSFeed extends LightningElement{
    //@wire(getRSSFeed) wrapperList; 
    @track wrapperList;
    @track error;
    connectedCallback(){
        setInterval(() => {
            getRSSFeed()
            .then(result => {
                this.wrapperList = result;
        
            })
            .catch(error => 
                {
                    this.error = error;
                }
        
            )
            console.log("test interval");
            }, 1000 * 10); 
        
            
                  
    }
    
}