import React from 'react';
import moment from 'moment';
import App from '../App';
//import App from './node_modules/components/App';

const DatePicker = ( match, history) => {
    console.log(match.params.date);
    const date = match.params.date;
    const today = moment().format('YYYY-MM-DD');
    const minDate = moment('1995-06-16').format('YYYY-MM-DD');

    const dateHandler = (event) => {
        const date = event.target.value;
        console.log(date);
        history.push(`/apods/${date}`);
    }

    return (
        <div>
            <label htmlFor="date">Date:</label>
            <input 
                onChange={dateHandler} 
                type="date" 
                id="date" 
                value={date} 
                min={minDate}
                max={today}
                ></input>
        </div>
    );
};

export default DatePicker;