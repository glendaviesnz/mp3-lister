import React, { Component } from 'react';
import * as axios from 'axios';

import Loading from './Loading';
import { config } from '../config';

class DataLoader extends Component {
    state = {
        loading: true,
        data: null,
        startIndex: 0,
        endIndex: 10
    }
    loadPage = (startIndex, endIndex) => {
        this.setState({
            startIndex: startIndex,
            endIndex: endIndex
        });
    }

    componentDidMount() {
        this.setState({ loading: true });
        axios.get(`${config.apiUrl}${this.props.path}`)
            .then(response => {
                this.setState({ data: response.data, loading: false })
            });
    }

    render() {
        if (this.state.loading) {
            return <Loading />
        }

        return this.props.render({ 
            data: this.state.data, 
            startIndex: this.state.startIndex,
            endIndex: this.state.endIndex,
            loadPage: this.loadPage,
        });
    }
}

export default DataLoader;
