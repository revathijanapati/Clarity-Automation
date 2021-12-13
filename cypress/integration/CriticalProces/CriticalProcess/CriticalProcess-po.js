
let locators = {
  "picon": "[data-item-id='1'] > .dx-item > .dx-item-content > .dx-icon",
  "Plan": "[data-item-id='1'] > :nth-child(1) > .dx-item-content",
  "CP": "li[data-item-id='/plan/criticaldata/list']",
  "AddCD": ".dx-toolbar-before > :nth-child(1) > .dx-item-content > .dx-button > .dx-button-content",
  "AssignRisk": "div[aria-disabled='true']",
  "ViewRisk": "div[aria-label='View Risks']",
  "Formtitle": "Add Critical Data",
  "Addedname": "input[name='name']",
  "Justification": "input[name='justification']",
  "Addcomments": "textarea[name='comments']",
  "Savebutton": "dx-button[validationgroup='criticalDataVal']",
  "Datasource": ".clsDataSource > .dx-field-item-content > .dx-tagbox > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container",
  "Sourcesitemcheckbox": ":nth-child(2) > .dx-list-item-before-bag > .dx-list-select-checkbox > .dx-checkbox-container > .dx-checkbox-icon",
  "Clickokbt": "div[aria-label='OK']",
  "SourceSite": ".clsDataSource > .dx-field-item-content > .dx-tagbox > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container",
  "Vendordetails": "input[name='dataSourceDetails']",
  "Vendorcheck": ":nth-child(3) > .dx-list-item-before-bag > .dx-list-select-checkbox > .dx-checkbox-container > .dx-checkbox-icon",
  "delectetext": "div.dx-tag-remove-button",
  "Monitormethod": ".clsMonitoringMethod > .dx-field-item-content > .dx-show-invalid-badge > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container",
  "Monitorcheckbox": "div[class='dx-item dx-list-item']",
  "MOkbutton": ".dx-popup-cancel-visible > .dx-popup-normal > .dx-toolbar > .dx-toolbar-items-container > .dx-toolbar-center > :nth-child(1) > .dx-item-content > .dx-popup-done > .dx-button-content > .dx-button-text",
  "Savebutton": ":nth-child(1) > .dx-item-content > .dx-first-col > .dx-field-item-content > .dx-form-group > .dx-form-group-content > .dx-template-wrapper > [text='Save'] > .dx-button-content",
  "Calendaricon": ":nth-child(3) > .dx-box-flex > :nth-child(2) > .dx-item-content > .clsDateOfIdentification > .dx-field-item-content > .dx-show-invalid-badge > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-buttons-container > .dx-button-normal > .dx-button-content > .dx-dropdowneditor-icon",
  "Calendardate": "td.dx-calendar-cell",
  "Gridname": "td[role='gridcell']:nth-child(4)",
  "Gridcpid": "td[role='gridcell']:nth-child(3)",
  "Buildicon":"[data-item-id='8'] > .dx-item > .dx-item-content > .dx-icon",
  "Clickbuild":"[data-item-id='8'] > :nth-child(1) > .dx-item-content",
  "Integrated":"li[aria-label='Integrated Risk Plan']",
  "CDIDedit":"tr[role='row']:nth-child(2)"
  
  


}

var gidname

export function ClickPlanIcon() {
  /*Click on i icon */

  cy.wait(5000)
  cy.get(locators.picon).click()
  
}
// export function ClickOnCP() {
//   cy.get(locators.CP).click()
//   cy.log('successfully clicked on critical process')
//   /*click on Add critical data to add details*/
//   cy.wait(5000)
//   cy.get(locators.AddCD).click()

// }

// export function AddCDDetails() {
//   // const sourcestring="Source at Site"

//   cy.get(locators.Datasource).click()
//   //click on Source at site checkbox and validating vendor details non editable
//   cy.wait(5000)
//   cy.get(locators.Sourcesitemcheckbox).click()
//   cy.wait(5000)
//   cy.get(locators.Clickokbt).click()
//   cy.wait(1000)
//   cy.get(locators.Vendordetails).should('be.disabled')

// }

// export function EnterADdetails(justf, adcom, testname) {
   
//   //Enter Justification
//   cy.get(locators.Justification).type(justf)
//   //Enter Comments
//   cy.get(locators.Addcomments).type(adcom)
//   //enter name
//   cy.get(locators.Addedname).eq(1).type(testname)

//   //const vendsrt ="vendor details"
//   cy.get(locators.delectetext).click()

//   //click on Vendor checkbox and validating vendor details are editable
//   cy.get(locators.Datasource).click()
//   cy.wait(5000)
//   cy.get(locators.Vendorcheck).click()
//   cy.wait(5000)
//   cy.get(locators.Clickokbt).click()
//   cy.wait(1000)
//   var vendsrt = "vendor details"
//   cy.get(locators.Vendordetails).type(vendsrt)
//   //Enter Name 
//   //Selectiong monitoring from monitoring
//   cy.get(locators.Monitormethod).click()
//   //selecting monitoring checkbox
//   cy.get(locators.Monitorcheckbox).eq(4).click()
//   cy.wait(3000)
//   cy.get(locators.MOkbutton).click()
//   //Selecting date 
//   cy.get(locators.Calendaricon).click()
//   cy.wait(3000)
//   var datetex
//   //var sdate="3"
//   //expect(cy.get(locators.Calendardate)).to.be.visible
//   cy.get(locators.Calendardate).each(($el1, index, list) => {
//     if ($el1.text() == "3")
//     {
//       //cy.log($e1.text)
//       $el1.click()
//     }
//   })

//   //Click on save 
//   cy.get(locators.Savebutton).click()
//   //verifying CP-id in grid
//   cy.wait(10000)
  
//   gidname=testname

  
// }

// export function Verifycpid() {
//   //checking CD id present on grid
//    cy.get(locators.Gridname).each(($el1, index, list) => {
//       var textone = $el1.text()
      
//       // var testcid=testname
//         cy.log(textone)
//         if (textone.includes(gidname)) 
//         {  
//          //getting cp id by using index of username
//           cy.get(locators.Gridcpid).eq(index).then(function(gridid)
//             {
          
//              var  dynamiccpid=gridid.text()
//              expect(dynamiccpid).to.be.contains("CD")
//              //cy.log("Record created sucessfully",dynamiccpid)                                          
//             })
          
//         } 
//     })
//       //getting first cdid 
//       cy.get(locators.Gridcpid).first().then(function(firstcp){
//         var firstcpid=firstcp.text()
//         cy.log("CDID created sucessfully",firstcpid)
//       })
//         //Edit CDID
//         cy.get(locators.CDIDedit).children('td').contains("CD")
//         cy.get(locators.CDIDedit).children('td:nth-child(2)').find('dx-button').click()
//        // cy.get(locators.CDIDedit).children('td').should('have.aria-describedby','dx-col-1').children('div').click()
          
        
//        // cy.get(locators.CDIDedit).find('td[aria-describedby="dx-col-1"]').click()

 
//    cy.get(locators.Buildicon).click()
//    cy.wait(3000)
//    cy.get(locators.Clickbuild).each(($el1, index, list) => {
//     if ($el1.text() == "Build")
//     {
//       //cy.log($e1.text)
//       $el1.click()
//     }
//   })
//    cy.get(locators.Integrated).click() 
// }
      
      
   

           
       
     

      









