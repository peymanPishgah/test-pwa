import React from 'react';
import s from './recent.module.css';


const RecentChart = () => {
    return(
        <div className={s.holder}>
            <div className={s.recent}>Recent Deposits</div>
            <div className={s.number}>$3,500,70</div>
            <div className={s.date}>on 15March, 2019</div>
            <div className={s.balance}>view balance</div>
        </div>
    )
};

export default RecentChart;