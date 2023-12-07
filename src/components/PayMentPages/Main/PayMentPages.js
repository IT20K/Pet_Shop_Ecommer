import React, { useEffect } from 'react';
import Header from '../../Headers/header/header';
import Footer from '../../Footers/footer/footer';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

function PaymentPages() {
    useEffect(() => {
        // Your createOrder logic here
    }, []);

    return (
        <>
            <Header />
            <div className='row '>
                <div className='w-100 d-flex justify-content-center algin-content-center'>
                    <PayPalScriptProvider options={{ 'AY94rKESY3SLKA_aQjLxufEfI47FhGqFrjig4dXWTzNZgLQSRSN-xWCEaUA9scm4nJZ_62FPRNWgIZI-': 'test', currency: 'USD' }}>
                        <div id="paypal-button-container">
                            <PayPalButtons  />
                        </div>
                    </PayPalScriptProvider>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default PaymentPages;