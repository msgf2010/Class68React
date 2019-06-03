import React from 'react';

export default class TextBoxes extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-md-3">
                    <input type="text" className="form-control" onChange={this.firstNameChange} />
                </div>
                <div className="col-md-3">
                    <input type="text" className="form-control" onChange={this.lastNameChange} />
                </div>
                <div className="col-md-3">
                    <input type="text" className="form-control" onChange={this.ageChange} />
                </div>
            </div>
        );
    }
}