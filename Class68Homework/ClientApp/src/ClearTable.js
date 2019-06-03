import React from 'react';

export default class ClearTable extends React.Component {
    render() {
        return (
            <button className="btn btn-danger" onClick={this.props.clearTable}>Clear Table</button>
        );
    }
}