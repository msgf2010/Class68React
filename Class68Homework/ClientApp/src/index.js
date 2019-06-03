//Create a react application that has three textboxes and two buttons (Add and Clear).
//Beneath that, there should be a table. When the Add button is clicked, the texboxes should clear out,
//and the person should be added to the table. When the clear button is clicked, the table should be cleared.

//As an added bonus, see if you can add a delete button on each row, so that when that button is clicked, only THAT person gets deleted.

import React from 'react';
import { render } from 'react-dom';
import AddPerson from './AddPerson';
import ClearTable from './ClearTable';
import PeopleTableData from './PeopleTable';

class People extends React.Component {

    state = {
        firstName: "",
        lastName: "",
        age: "",
        people: []
    }

    clearTable = () => {
        this.setState({ people: [] });
    }

    firstNameChange = f => {
        this.setState({ firstName: f.target.value });
    }

    lastNameChange = l => {
        this.setState({ lastName: l.target.value });
    }

    ageChange = a => {
        this.setState({ age: a.target.value });
    }

    addPerson = () => {
        const copy = [...this.state.people];
        const person = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age
        }

        if (person.firstName != "" && person.lastName != "" && person.age != "") {

            copy.push(person);

            this.setState({
                firstName: '',
                lastName: '',
                age: '',
                people: copy
            });
        }
    }

    render() {

        return (
            <div style={{ marginTop: 35, marginLeft: 25 }} className="container">
                <div className="row">
                    <div className="col-md-2">
                        <AddPerson addPerson={this.addPerson} />
                    </div>
                    <div className="col-md-2">
                        <ClearTable clearTable={this.clearTable} />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-3">
                        <input type="text" className="form-control" value={this.state.firstName} onChange={this.firstNameChange} />
                    </div>
                    <div className="col-md-3">
                        <input type="text" className="form-control" value={this.state.lastName}  onChange={this.lastNameChange} />
                    </div>
                    <div className="col-md-3">
                        <input type="text" className="form-control" value={this.state.age}  onChange={this.ageChange} />
                    </div>
                </div>
                <br />
                <div>
                    <table className="table table-bordered table-striped table-hover">
                        <PeopleTableData people={this.state.people} />
                    </table>
                </div>
            </div>
        );
    }
}

render(<People />, document.getElementById('root'));