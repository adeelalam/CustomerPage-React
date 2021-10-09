import React from "react";

import style from './Card.module.css';
const Card = ({ img, title, line1, line2 }) => (
            <div className={style.card}>
                <div className={style.inline}>
                    <span><img alt={img.alt} {...img} /></span>
                    <span><h3 className={style.h3}>{title}</h3></span>
                </div>

                <p>{line1}</p>
                <p>{line2}</p>
                
            </div>
  )

  export default Card;