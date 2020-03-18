import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: '',
            styleName: '',
            productDescription: '',
            textBlock: ''
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/product/1/description')
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            this.setState({
                productDescription: data.description,
                textBlock: data.textBlock
            })
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.productDescription}</p>
                <ul>
                    <li>Shown: {this.state.productName}</li>
                    <li>Style: {this.state.styleName}</li>
                </ul>
                <button><span>Read more</span></button>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));