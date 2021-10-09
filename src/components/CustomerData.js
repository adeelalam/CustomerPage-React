import React from "react";

import Card from "./Card";
import style from './CustomerData.module.css';


const CustomerData = ({customerData}) => (
    <div className={style.container}>
        {customerData.map((customerData) => (
             <Card
             key={customerData.title}
             {...customerData}
           />
        ))}
    </div>
)


export default CustomerData;