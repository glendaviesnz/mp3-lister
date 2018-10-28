import React, { Component } from 'react';
import * as axios from 'axios';

import Loading from './Loading';
import { config } from '../config';

class ListLoader extends Component {
    
    state = {
        loading: true
    }

    componentDidMount() {
        const {listState: {list, updateList}, path} = this.props;

        if (list.length === 0) {
            this.setState({ loading: true });
            axios.get(`${config.apiUrl}${path}`)
                .then(response => {
                    updateList(response.data)
                    this.setState({ loading: false });
                });
        } else {
            this.setState({ loading: false });
        }
    }

    render() {
        const {listState: {list, startIndex, endIndex, loadPage} } = this.props;
        if (this.state.loading) {
            return <Loading />
        }

        return this.props.render({
            list,
            startIndex,
            endIndex,
            loadPage,
        });
    }
}

export default ListLoader;
