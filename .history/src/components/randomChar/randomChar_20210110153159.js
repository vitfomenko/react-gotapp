import React, {Component} from 'react';
import './randomChar.css';

export default class RandomChar extends Component {

    state = {
        name: null,
        gender: null,
        born: null,
        died: null,
        culture: null
    }

    render() {

        const {name, gender}

        return (
            <div className="random-block rounded">
                <h4>Random Character: John</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender </span>
                        <span>male</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born </span>
                        <span>11.03.1039</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died </span>
                        <span>13.09.1089</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture </span>
                        <span>Anarchy</span>
                    </li>
                </ul>
            </div>
        );
    }
}
