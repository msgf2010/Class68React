import React from 'react';

export default class AddPerson extends React.Component {
    render() {
        return (
            <button className="btn btn-success" onClick={this.props.addPerson}>Add Person</button>
        );
    }
}