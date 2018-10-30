import React, { useState, useEffect } from 'react';
import * as axios from 'axios';

import Loading from './Loading';
import { config } from '../config';

const ListLoader = ({ listState: { list, updateList, startIndex, endIndex, loadPage }, render, path }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (list.length === 0) {
            setLoading(true);
            axios.get(`${config.apiUrl}${path}`)
                .then(response => {
                    updateList(response.data)
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, []);

    if (loading) {
        return <Loading />
    }

    return render({
        list,
        startIndex,
        endIndex,
        loadPage,
    });
}

export default ListLoader;
