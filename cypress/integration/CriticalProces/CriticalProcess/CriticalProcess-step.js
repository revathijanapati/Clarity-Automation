import {Given, And,Then} from 'cypress-cucumber-preprocessor/steps'
//import {loginInApplication} from '../../Common/Common/Common-po'
import {ClickPlanIcon,ClickOnCP,AddCDDetails,EnterADdetails,Verifycpid,IntriskPlan} from './CriticalProcess-po'

And('Click on Plan',()=>{
    ClickPlanIcon()
})
// And('Click on Critical process',()=>{
//     ClickOnCP()
// })
// And('Select source at site from Datasource',()=>{

//     AddCDDetails()
   
// }) 
// And('Enter details',(dataTable)=>{
//    //var addcusdetails=new EnterADdetails()
//     dataTable.hashes().forEach(element => {
//         EnterADdetails(element.Justification,element.Comments,element.Name)
//       // EnterADdetails()
//     })
//     });
// And('Verify CDID on Grid',()=>{
//     Verifycpid()
    
// })    
    



    


