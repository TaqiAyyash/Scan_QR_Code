define(['knockout', 'ojs/ojbutton],
 function(ko) {
  
     function Scan_QR_Code() {
        var self = this;
        self.firstname = ko.observable();
        self.lastname = ko.observable();
        self.jobTitle = ko.observable();
        self.scanQR = function (){
        cordova.plugins.barcodeScanner.scan(
            function (result) {
            alert("information")
            console.log("Data: ", result.text); // show the data inside QR Code
            //assume we got this data after scanning => taqi/ayyash/developer
            console.log("Format: ", result.format); // show the format of the code have been scanned
            if (result.format == "QR_CODE") {
                var DTsplit = result.text.split(" / ");
                self.firstname(DTsplit[0]);
                self.lastname(DTsplit[1]);
                self.jobTitle(DTsplit[2]);
                console.log("first name: "self.firstname());
                console.log("last name: "self.lastname());
                console.log("job Title: "self.jobTitle());
                         }
            function (error) {
            alert("Scanning failed: " + error);
            }
            );
            }

        self.connected = function() {

            // Implement further logic if needed
             };
                              
        self.disconnected = function() {
            // Implement if needed
            };
                                
        self.transitionCompleted = function() {
            // Implement if needed
            };
                        }

                        
        return Scan_QR_Code;
            }
            );
