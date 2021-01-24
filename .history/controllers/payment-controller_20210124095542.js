const { json, response } = require('express');
const Request = require('request');
const insta = require('instamojo-nodejs');




const MakePayment = (request, response) => {
    try {
        
        insta.setKeys('test_bcdd0dd73af51df6f070df03497','test_329de34cc072369f16762a17c61');
        const data = new insta.PaymentData();
        insta.isSandboxMode(true);
        data.purpose = request.body.purpose;
        data.amount = request.body.amount;
        data.redirected_url = request.body.redirected_url;
        console.log(request.body);
        insta.createPayment(data, function(error,response){
            if(error){

            }else{
                console.log(response);
                const responseData = JSON.parse(response);
                const redirected_url = responseData.payment_request.longurl;
                response.json(redirected_url);
            }
        })
    } catch (error) {
        if (error != null) response.status(500).send({ error: error.message });
    }
};

const payment = {
    MakePayment
}
module.exports = payment;