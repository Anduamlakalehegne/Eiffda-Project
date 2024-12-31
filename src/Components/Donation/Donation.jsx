import React, { useState } from 'react';
import './DonationPage.css';
import Header from '../Common/Header/Header';
import "animate.css";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Footer from '../Common/Footer/Footer';

const MySwal = withReactContent(Swal);

const Donation = () => {
    const [selectedAmount, setSelectedAmount] = useState('');
    const [customAmount, setCustomAmount] = useState('');

    const amounts = [50, 100, 250, 500, 1000, 5000];

    const handleAmountClick = (amount) => {
        setSelectedAmount(amount);
        setCustomAmount('');
    };

    const handleCustomAmountChange = (e) => {
        setSelectedAmount('');
        setCustomAmount(e.target.value);
    };

    const handleNextClick = async () => {
        const amountToDonate = selectedAmount || customAmount;

        if (!amountToDonate) {
            MySwal.fire({
                title: 'Error',
                text: 'Please enter an amount to donate.',
                icon: 'error',
                confirmButtonText: 'OK' 
            });
            return;
        }

        const orderId = `order_${Math.floor(Math.random() * 1000000)}`;

        try {
            MySwal.fire({
                title: 'Creating Session',
                text: 'Please wait...',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading(); 
                }
            });

            const response = await fetch('https://back.eifdda.org/create-session', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    amount: amountToDonate,
                    orderId
                })
            });

            const data = await response.json();
            MySwal.close();

            if (data.session && data.session.id) {
                const existingScript = document.querySelector('script[src="https://ap-gateway.mastercard.com/static/checkout/checkout.min.js"]');
                if (existingScript) {
                    existingScript.remove();
                }

                const script = document.createElement('script'); 
                script.src = 'https://ap-gateway.mastercard.com/static/checkout/checkout.min.js'; 
                script.dataset.error = 'errorCallback'; 
                script.dataset.cancel = 'cancelCallback'; 
                script.onload = () => {
                    window.Checkout.configure({ 
                        session: { 
                            id: data.session.id 
                        }
                    });
                    window.Checkout.showPaymentPage();
                };
                script.onerror = () => {
                    MySwal.fire({
                        title: 'Error',
                        text: 'Failed to load payment gateway. Please try again later.',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
                };
                document.head.appendChild(script);
            } else {
                throw new Error('Invalid session data');
            }
        } catch (error) {
            MySwal.fire({
                title: 'Error',
                text: 'There was an issue creating your donation session. Please try again.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            console.error('Error creating session', error);
        }
    };

    const amountToDonate = selectedAmount || customAmount;

    const handleSlideClick = () => {
        MySwal.fire({
            title: <p style={{ fontSize: '27px' }}>Bank Details</p>,
            html: (
                <div style={{ display: 'grid', justifyContent: 'center' }}>
                    <p style={{ fontSize: '16px', textAlign: 'center' }}>Account Name : YE-ETH YEIMNET TEQUAMAT YELIMAT FORUM</p>
                    <p style={{ fontSize: '16px', textAlign: 'center' }}>Account Number : 1161810701725016</p>
                    <p style={{ fontSize: '22px' }}>Bank Name</p>
                    <p style={{ fontSize: '16px', textAlign: 'center' }}>United Bank S.C.; Wollosefer branch </p>
                    <p style={{ fontSize: '16px', textAlign: 'center' }}>Swift Code : UNTDETAA</p>
                </div>
            ),
            width: "600px",
            showCloseButton: true,
            showConfirmButton: false,
        });
    };

    return (
        <>
            <Header activeLink={"GET INVOLVED"}  />

            <div className="donation-container">
                <h1>Choose Amount</h1>
                <div className="toggle-buttons">
                    <button className="toggle-button">Donate To Eifdda</button>
                    <button className="toggle-button active" onClick={handleSlideClick}>Bank Transfer</button>
                </div>
                <div className="amount-buttons">
                    {amounts.map((amount) => (
                        <button
                            key={amount}
                            className={`amount-button ${selectedAmount === amount ? 'selected' : ''}`}
                            onClick={() => handleAmountClick(amount)}
                        >
                            {`$${amount}`}
                        </button>
                    ))}
                </div>
                <input
                    type="number"
                    placeholder="Custom Amount"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    className="custom-amount-input"
                />
                <button className="next-button" onClick={handleNextClick}>
                    Donate {amountToDonate && `- $${amountToDonate}.00`}
                </button>
            </div>

            <Footer />
        </>
    );
};

export default Donation;
