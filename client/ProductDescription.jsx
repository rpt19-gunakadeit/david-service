

class ProductDescription extends React.Component {
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
            response.json();
        })
        .then(data => {
            this.setState({
                productDescription: data.productDescription,
                textBlock: data.textBlock
            })
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.description}</p>
                <ul>
                    <li>Shown: {this.state.productName}</li>
                    <li>Style: {this.state.styleName}</li>
                </ul>
                <button><span>Read more</span></button>
            </div>
        )
    }
}
