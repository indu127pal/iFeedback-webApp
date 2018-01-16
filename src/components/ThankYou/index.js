import React from 'react';
import Header from '../Header';
import BackButton from '../BackButton';

const ThankYou = () => (
    <div className="">
        <BackButton option="false" />
        <Header title="Thanks for your time."/>
        <div className="tc">
            <img className="pt4 h3 w-auto" src="/assets/images/ThankYou.png" alt="Thankyou"/>
            <h2 className="f5 ph5 roboto-regular tc">Your feedback is valuable, and we are committed 
            to improve the experience for your next visit to EasyDay.</h2>
            <img className="pt4 h3 w-auto" src="/assets/images/PaintBrush.png" alt="Thankyou"/>
        </div>
    </div>
);

export default ThankYou;