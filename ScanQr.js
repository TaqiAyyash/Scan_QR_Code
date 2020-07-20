
define(['knockout','ojs/ojbutton],
 function(ko) {

    function Scan_QR_Code() {
      var self = this;
    
     
      self.ScanQr = function (){ 
cordova.plugins.barcodeScanner.scan(
      function (result) {
alert("information")
console.log(result.text); // show the data inside QR Code
console.log("Format",result.format); // show the format of the code have been scanned
      function (error) {
          alert("Scanning failed: " + error);
      }
   );
}
      
      self.connected = function() {
        
        // Implement further logic if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      self.disconnected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      self.transitionCompleted = function() {
        // Implement if needed
      };
    }

    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return Scan_QR_Code;
  }
);
