import React from 'react'

import cornerDownRight from '../Assets/corner-down-right.svg';
import upsell from '../Assets/Upsell.svg';

function OrderList() {
    return (
        <div>
            <div className="flex-headings">
                <div>Order number</div>
                <div>Created</div>
                <div>Store</div>
                <div>Payment method</div>
                <div>Payment status</div>
                <div>Amount</div>
            </div>

        {/* /////////   Order List  //////////// */}

            <div className="flex-boxes">
                <span className="box">
                    <span className="onlineTag">Online</span>
                    <span className="orderNumber">1234567890</span><span id="orderNumber"><img src={cornerDownRight} alt=""/></span>
                    {/* <!-- <span>05 maj, 12:33</span>
                    <span>Butik X</span>
                    <span>Invoice</span>
                    <span>Paid</span>
                    <span>2160 kr</span> --> */}
                </span>

                <span className="box"><span className="instoreTag">Instore</span></span>
                <span className="box"><span className="manualTag">Manual</span></span>
                <span className="box"><span className="onlineTag">Online</span>
                <span className="upsell"><img src={upsell} alt="Flag"/></span>
                </span>
                <span className="box"><span className="instoreTag">Instore</span></span>
            </div>
        </div>
    )
}

export default OrderList
