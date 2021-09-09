import React from 'react'
import OrderList from './OrderList';

function Order() {
    
    const customerFirstName = 'Anna';
    
    return (
        <div>
            <div className="flex-Order">
                <div><h2>{customerFirstName}'s orders</h2></div>
                <div id="help"><button class="i-btn">i</button>Help</div>
            </div>
            <OrderList/>
        </div>
    )
}

export default Order
