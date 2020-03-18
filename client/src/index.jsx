import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: '',
            styleName: '',
            productDescription: '',
            textBlock: ''
        }
        var modal = document.getElementById('modal');
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

    openModal() {
      modal.style.display = "block";
    }

    render() {
        return (
            <div>
                <p>{this.state.productDescription}</p>
                <ul>
                    <li>Shown: {this.state.productName}</li>
                    <li>Style: {this.state.styleName}</li>
                </ul>
                <button onClick={this.openModal}><span>Read more</span></button>
                <div id="modal">
                    <p>{this.state.productDescription}</p>
                    <p>{this.state.textBlock}</p>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));