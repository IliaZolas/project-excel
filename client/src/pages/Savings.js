import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../components/table';


const Savings = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://localhost:4000/savings');
                setData(response.data);
            } catch (error) {
                setError(error.message);
            }
        }
        fetchData();
    }, []);


    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Table data={data} />
        </div>
    );
}

export default Savings;
