import {Html5QrcodeScanner} from "html5-qrcode";
import {Html5Qrcode} from "html5-qrcode";

function Test() {
    function onScanSuccess(decodedText, decodedResult) {
        // handle the scanned code as you like, for example:
        console.log(`Code matched = ${decodedText}`, decodedResult);
      }
      
      function onScanFailure(error) {
        // handle scan failure, usually better to ignore and keep scanning.
        // for example:
        console.warn(`Code scan error = ${error}`);
      }
      
      let html5QrcodeScanner = new Html5QrcodeScanner(
        "reader",
        { fps: 10, qrbox: {width: 250, height: 250} },
        /* verbose= */ false);
      html5QrcodeScanner.render(onScanSuccess, onScanFailure);
    
      Html5Qrcode.getCameras().then(devices => {
        /**
         * devices would be an array of objects of type:
         * { id: "id", label: "label" }
         */
        if (devices && devices.length) {
          var cameraId = devices[0].id;
          // .. use this to start scanning.
        }
      }).catch(err => {
        // handle err
      });
    
      const html5QrCode = new Html5Qrcode("reader");
    const qrCodeSuccessCallback = (decodedText, decodedResult) => {
        /* handle success */
    };
    const config = { fps: 10, qrbox: { width: 250, height: 250 } };
    
    // If you want to prefer front camera
    html5QrCode.start({ facingMode: "user" }, config, qrCodeSuccessCallback);
    
    // If you want to prefer back camera
    html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);
    
    // Select front camera or fail with `OverconstrainedError`.
    html5QrCode.start({ facingMode: { exact: "user"} }, config, qrCodeSuccessCallback);
    
    // Select back camera or fail with `OverconstrainedError`.
    html5QrCode.start({ facingMode: { exact: "environment"} }, config, qrCodeSuccessCallback);
}

export default Test