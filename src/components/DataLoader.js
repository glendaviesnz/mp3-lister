import React, { useState, useEffect } from 'react';
import * as axios from 'axios';

import Loading from './Loading';
import { config } from '../config';

const DataLoader = ({ render }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(config.apiUrl)
            .then(response => {
                setLoading(false);
                setData(response.data);
            });
    });


    if (loading) {
        return <Loading />
    }
    return render(data)

}

export default DataLoader;
