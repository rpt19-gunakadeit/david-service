import React from 'react';
import ReactDOM from 'react-dom';
import ReadMoreModal from './components/ReadMoreModal.jsx';
import './main.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: 'Nike Blazer 77 Vintage',
            styleName: 'White/Black',
            productDescription: '',
            textBlock: '',
            productPrice: 100,
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

    toggleModal() {
        var modal = document.querySelector('.modal');
        modal.classList.toggle("toggle-modal");
    }

    render() {
        return (
            <div>
                <p>{this.state.productDescription}</p>
                <ul>
                    <li>Shown: {this.state.productName}</li>
                    <li>Style: {this.state.styleName}</li>
                </ul>
                <button onClick={this.toggleModal}><span>Read more</span></button>
                <ReadMoreModal 
                    textBlock={this.state.textBlock}
                    productName={this.state.productName}
                    productPrice={this.state.productPrice}
                    toggleModal={this.toggleModal}/>

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));