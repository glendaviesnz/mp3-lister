import React, { Component } from 'react';
import * as axios from 'axios';

import Loading from './Loading';
import { config } from '../config';

class DataLoader extends Component {
    state = {
        loading: false,
        data: null
    }
    loadData = e => {
        console.log(e);
        this.setState({
            startIndex: 0,
            endIndex: e
        }
        );
    }

    componentDidMount() {
        this.setState({ loading: true });
        axios.get(config.apiUrl)
            .then(response => {
                this.setState({ data: response.data, loading: false })
            });
    }

    render() {
        if (this.state.loading) {
            return <Loading />
        }
        return this.props.render(this.state.data)
    }
}

export default DataLoader;
