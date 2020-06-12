import React, {useEffect, useState} from 'react';
import Drawer from '../components/drawer';
import fetch from 'isomorphic-unfetch';


const Dashboard = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const response = await res.json();
            setData(response);
            setLoading(false);
            console.log(response);
        })();
    }, []);

    return (
        <div>
            {!loading && <Drawer data={data} />}
        </div>
    )
};


export default Dashboard;