import ReadMoreModal from './ReadMoreModal.jsx';
import './main.css';

class Description extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productId: this.props.productId,
            productName: 'Nike Blazers', //default for now
            styleName: 'Gray/Blue', //default for now
            productDescription: '',
            textBlock: '',
            productPrice: 100, //default for now
            imageUrl: 'https://static.nike.com/a/images/t_default/eric5lwitzffpoisq0rj/blazer-mid-77-vintage-shoe-flCCX4.jpg', //default for now,
            modal: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        
    } 

    
    componentDidMount() {
        console.log('.', this.state.productId)
        //fetching my service
        fetch(`http://ec2-54-241-130-11.us-west-1.compute.amazonaws.com:5000/product/${this.state.productId}/description/`,
        { 'Content-Type': 'text/plain'})
        .then(response => {
            //return response.json();
            return response.json();
        })
        .then(data => {
            console.log('data', data);
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
        this.setState({
            modal: !this.state.modal
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