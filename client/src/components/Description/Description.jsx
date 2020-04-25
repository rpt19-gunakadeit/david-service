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
        
        fetch(`http://ec2-54-241-130-11.us-west-1.compute.amazonaws.com:5000/product/${this.state.productId}/description/`,
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

                <p>{this.state.productDescription}</p>
                <ul>
                    <li>Shown: {this.props.productInfo.name}</li>
                    <li>Style: {this.props.styleInfo.name}</li>
                </ul>
                <button className="ncss-cta-primater-dark underline" onClick={this.toggleModal}><span>Read more</span></button>
    
                <ReadMoreModal 
                    textBlock={this.state.textBlock}
                    productName={this.state.productName}
                    productPrice={this.state.productPrice}
                    toggleModal={this.toggleModal}
                    imageUrl = {this.state.imageUrl}
                    modal={this.state.modal}/>    
                
            </div>
        )
    }

}

window.Description = Description;
export default Description;