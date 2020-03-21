import React from 'react';
import ReactDOM from 'react-dom';
import ReadMoreModal from './components/ReadMoreModal.jsx';
import './main.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: 'Nike Blazer', //default for now
            styleName: 'Gray/Blue', //default for now
            productDescription: '',
            textBlock: '',
            productPrice: 100, //default for now
            imageUrl: 'https://static.nike.com/a/images/t_default/eric5lwitzffpoisq0rj/blazer-mid-77-vintage-shoe-flCCX4.jpg' //default for now
        }
        
    } 

    componentDidMount() {

        //fetching my service
        fetch(`http://localhost:5000/product/${this.props.productId}/description`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            this.setState({
                productDescription: data.description,
                textBlock: data.textBlock
            })

            // once I get Damien's API
            // return fetch(`http://localhost:4000/${this.props.productId}/${this.props.style}`)
        })
        // .then(response => {
        //     return response.json();
        // })
        // .then(data => {
        //     this.setState({
        //         productName: data.productName,
        //         styleName: data.styleName,
        //         productPrice: data.productPrice
        //     })
        //      
        //     once I get Abraham's API
        //     return fetch(`http://localhost:3000/${this.props.productId}/${this.props.style})
        // })
        // .then(response => {
        //     return response.json();
        // })
        // .then(data => {
        //     this.setState({
        //         imageUrl: data.imageUrl
        //     })
        // })
        .catch(error => {
            console.error(err);
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
                    toggleModal={this.toggleModal}
                    imageUrl = {this.state.imageUrl}/>

            </div>
        )
    }
}

ReactDOM.render(<App productId={1} style={2}/>, document.getElementById('root'));
// I suppose this id can be from the url or upper level component?