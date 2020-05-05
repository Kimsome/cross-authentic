import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject("store")
@observer
class Index extends React.Component {
    componentDidMount() {
        this.props.store.index_post();
    }
    render() {
        return (<div>Index</div>)
    }
}

export default Index;