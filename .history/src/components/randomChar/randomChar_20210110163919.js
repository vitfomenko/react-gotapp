import React, {Component} from 'react';
import GotService from '../../services/gotService';
import './randomChar.css';
import gotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

export default class RandomChar extends Component {
    constructor() {
        super();
        this.updateChar();
    }

    gotService = new gotService();

    state = {
        char: {},
        loading: true,
        error: false
    }

    onCharLoaded = (char) => {
        this.setState({char, loading: false})
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false,
        })
    }

    updateChar() {

        const id = Math.floor(Math.random()*140 + 25);
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    render() {

        const {char, loading} = this.state;

        const content = loading ? <Spinner /> : <View char={char} />;

        return (
            <div className="random-block rounded">
                {content}
            </div>
        );
    }
}

const View = () => {
    const {name, gender, born, died}
}
