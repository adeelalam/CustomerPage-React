import React from 'react'
import OrderHeadings from './OrderHeadings'

// Importing SVGs
import cornerDownRight from '../../Assets/corner-down-right.svg';
import upsell from '../../Assets/Upsell.svg';

function OrderList() {
    return (
        <div>
            <OrderHeadings/>

        {/* /////////   Order List  //////////// */}

            <div className="flex-boxes">
                <span className="order__list">
                    <span className="onlineTag">Online</span>
                    {/* <span className="orderNumber">1234567890</span><span id="orderNumber"><img src={cornerDownRight} alt="Arrow"/></span>
                    <span>05 maj, 12:33</span>
                    <span>Butik X</span>
                    <span>Invoice</span>
                    <span>Paid</span>
                    <span>2160 kr</span> */}
                </span>

                <span className="order__list"><span className="instoreTag">Instore</span></span>
                <span className="order__list"><span className="manualTag">Manual</span></span>
                <span className="order__list"><span className="onlineTag">Online</span>
                <span className="upsell"><img src={upsell} alt="Flag"/></span>
                </span>
                <span className="order__list"><span className="instoreTag">Instore</span></span>
            </div>

        </div>
    )
}

export default OrderList
