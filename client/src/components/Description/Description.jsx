import ReadMoreModal from './ReadMoreModal.jsx';
import './main.css';

class Description extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productId: this.props.productId,
            productName: this.props.productInfo.name,
            styleName: this.props.styleInfo.name,
            productDescription: '',
            textBlock: '',
            productPrice: this.props.styleInfo.price_sale, 
            imageUrl: this.props.styleInfo.thumb,
            modal: false
        }
        this.toggleModal = this.toggleModal.bind(this);
    } 

    componentDidMount() {
        
        fetch(`http://18.144.38.149:5000/product/${this.state.productId}/description/`,
        { 'Content-Type': 'text/plain'})
        .then(response => {
            return response.json();
        })
        .then(data => {
            this.setState({
                productDescription: data.description,
                textBlock: data.textBlock
            })
        })
        .catch(error => {
            console.error(err);
        })
    }

    toggleModal() {
        this.setState({
            modal: !this.state.modal
        })
    }


    render() {
        return (
            <div>

                <p id="product-description">{this.state.productDescription}</p>
                <ul id="details">
                    <li>Shown: {this.props.productInfo.name}</li>
                    <li>Style: {this.props.styleInfo.name}</li>
                </ul>
                <button className="ncss-cta-primater-dark underline" onClick={this.toggleModal}><span>Read more</span></button>
    
                <ReadMoreModal 
                    textBlock={this.state.textBlock}
                    productName={this.props.productInfo.name}
                    productPrice={this.props.styleInfo.price_sale}
                    toggleModal={this.toggleModal}
                    imageUrl = {this.props.styleInfo.thumb}
                    modal={this.state.modal}/>    
                
            </div>
        )
    }

}

window.Description = Description;
export default Description;