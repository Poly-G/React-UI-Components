import React from 'react';
import './Header.css';

import moment from 'moment';

const HeaderTitle = () => {
    let time = moment().format("Do MMM");
    return ( 
        <div>
            <p> Lambda School <span className="date"> @LambdaSchool • {time} </span> </p>
        </div>
    );
};


export default HeaderTitle;
