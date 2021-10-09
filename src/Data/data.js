// ----SVGs----
import EmailPhone from '../Assets/EmailPhone.svg'
import Shipping from '../Assets/Shipping.svg'
import Invoice from '../Assets/Invoice.svg'

import Arrow from '../Assets/corner-down-right.svg'
import UK from '../Assets/uk.svg'
import Svenska from '../Assets/Svenska.svg'
import Norska from '../Assets/Norska.svg'
import Qliro from '../Assets/Qliro.svg'
import Visa from '../Assets/VISA.png'
import AMEX from '../Assets/AMEX.png'
import Paypal from '../Assets/Paypal.png'
import Trustly from '../Assets/Trustly.svg'


export const customer = [
    {firstName:'Anna'},
    {lastName: 'Anne'},
    {personNummer: '19901230-4567'}
];

export const customerDetails = [
    { 
        img: {
            src:EmailPhone,
            alt: 'Contact',
        },
        title: 'Contact Anna',
        line1: 'annaanne@qliro.com',
        line2: '+46721234567',
    },
    { 
        img: {
            src:Shipping,
            alt: 'Shipping',
        },
        title: 'Shipping address',
        line1: 'Qlirovägen 123,',
        line2: '12345 Stockholm, Sweden', 
    },
    { 
        img: {
            src:Invoice,
            alt: 'Invoice',
        },
        title: 'Invoice Address',
        line1: 'Qlirovägen 123,',
        line2: '12345 Stockholm, Sweden',
    },
  ];

  // Customer Table Data

  export const tableColumns = [
    {
      Header: '',
      Cell: orderType => (
        <span className={orderType.value === 'Online' ? "online" :
                         orderType.value === 'Manual' ? "manual":
                         orderType.value === 'InStore' ? "inStore": "otherType"}>
          {orderType.value}
        </span>
      ),
      accessor: 'order_type'
    },
    // {
    //   Header: 'Id',
    //   accessor: 'id'
    // },
    {
      Header: 'Order number',
      Cell: imgSrc => (
        <div className='orderNumber'> 
           <span className='orderNumberValue'>{imgSrc.value}</span>
           <img className='svgButik'
                src={Arrow}/>
        </div>
      ),
      accessor: 'order_number'
    },
    {
      Header: 'Created',
      accessor: 'date_of_creation'
    },
    {
      Header: 'Store',
      Cell: imgSrc => (
        <div className='butik'> 
           <img className='svgButik'
                src={imgSrc.value === 'UK' ? UK :
                     imgSrc.value === 'Sweden' ? Svenska:
                     imgSrc.value === 'Norway' ? Norska: ''}/>
            <span>Butik X</span>
        </div>
      ),
      accessor: 'store'
    },
    {
      Header: 'Payment method',
      id: 'id',
      Cell: payMethod => (
        <div className='paymentMethod'> 
           <img className='svgPaymentMethod'
                src={payMethod.value === 'Invoice' ? Qliro :
                     payMethod.value === 'Visa, •••• 1234' ? Visa:
                     payMethod.value === 'Card, •••• 1234' ? AMEX:
                     payMethod.value === 'Paypal' ? Paypal:
                     payMethod.value === 'Trustly' ? Trustly: ''}/>
            <span>{payMethod.value}</span>
        </div>
      ),
      // accessor: 'payment_method'
      accessor: method =>
        method.id == null
        ? method.id
        : method.payment_method
    },
    {
      Header: 'Payment status',
      // id:'id',
      Cell: paymentStatus => (
        <span className={paymentStatus.value === 'Paid' ? "paid" :
                         paymentStatus.value === 'Failed' ? "fail":
                         paymentStatus.value === 'In progress' ? "inprogress": "other"}>
          {paymentStatus.value}
        </span>
      ),
      accessor:'payment_status'
      // accessor: status =>
      //   status.id == null
      //   ? status.id
      //   : status.payment_status
    },
    {
      Header: 'Amount',
      accessor: 'amount'
    }
    
]