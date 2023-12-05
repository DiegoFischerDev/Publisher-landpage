function StripeController() {

    const Urls = {
        "$99": "https://buy.stripe.com/test_eVabIT1Ks61LgMM000",
        "$950": "https://buy.stripe.com/test_7sI00b74Mdud1RS5kl",
        "$599": "https://buy.stripe.com/test_6oE28j3SAai19kkcMO",
        "$5700": "https://buy.stripe.com/test_fZe3cn60I89TdAA6or"
    };

    function redirectToStripe(price, userEmail) {
        const tierUrl = Urls[price];
        
        if (!tierUrl) {
            console.error("Invalid price");
            return;
        }

        const encodedEmail = encodeURIComponent(userEmail);
        const paymentUrl = `${tierUrl}?prefilled_email=${encodedEmail}`;
        window.open(paymentUrl, '_blank');
    }

    return {
        redirectToStripe
    };
}
export default StripeController();