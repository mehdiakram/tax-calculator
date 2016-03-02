$(document).ready(function(){
    var taxData = {
        "maryland": {
            tax: 6
        },
        "newJersey": {
            tax: 7
        },
        "newYork": {
            tax: 8.88
        },

        "pennsylvania": {
            tax: 8
        },

        "virginia": {
            tax: 6
        }
    };

    var taxRate=0, selectedState=null, priceWithoutTax= 0;


    $('#tax-amount').keyup(function(){
        var inputtedVal = $(this).val();
        if(isNaN(inputtedVal)){
            alert("Please fill with number only");
            $(this).val("");
        }else{
            priceWithoutTax = parseInt(inputtedVal);
            inputtedVal==''?priceWithoutTax =0:'';
            updateTax(priceWithoutTax,taxRate);
            console.log("Price with out tax: " + priceWithoutTax);
        }
    });


    $("#localState").on('change', function(){
        selectedState = $(this).val().trim();
        console.log("Selected State: "+ selectedState);

        if(selectedState == ''){
            alert('You must have to select a state to calculate tax.');
        }else{
            taxRate = taxData[selectedState].tax;
            $("#tax-rate").text(taxRate);
            updateTax(priceWithoutTax,taxRate);
        }

    });



    function updateTax(priceWithoutTax,taxRate){
        if(priceWithoutTax == 0 || taxRate == 0) {
            $("#total-cost").text(0);
        }else{
            var taxInPoint  = taxRate/100, taxAmount = priceWithoutTax * taxInPoint, priceWithTax = priceWithoutTax+taxAmount;
            $("#total-cost").text(priceWithTax);
        }
    }

    function isValid(input){

        }








});