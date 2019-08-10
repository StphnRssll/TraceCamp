import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'ZSCcmGisSSBitVNNYiHkYM54euGbZxbdgpBhrU9H'

const Apod = ({ match }) => {
    const date = match.params.date;
    const [data, setDate] = React.useState({});

    React.useEffect(() => {
        setDate({ data: date });
        console.log('fetched');
    },[date]);

    console.log(data);

    return <div>{date}</div>
}
export default Apod;