import React, {useEffect, useState} from 'react';
import Drawer from '../components/drawer';
import fetch from 'isomorphic-unfetch';


const Dashboard = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const response = await res.json();
            setData(response);
            console.log(response);
        })();
    }, []);

    return (
        <div>
            <Drawer data={data} />
        </div>
    )
};


export default Dashboard;