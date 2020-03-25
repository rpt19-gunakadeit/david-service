import React from 'react';
import ReadMoreModal from './ReadMoreModal.jsx';
import '../main.css';


// const STATUS = {
//     HOVERED: 'hovered',
//     NORMAL: 'normal',
// };

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
            //return response.json();
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
    // constructor(props) {
    //     super(props);
    
    //     this._onMouseEnter = this._onMouseEnter.bind(this);
    //     this._onMouseLeave = this._onMouseLeave.bind(this);
    
    //     this.state = {
    //       class: STATUS.NORMAL,
    //       test: true
    //     };
    //   }
    
    //   _onMouseEnter() {
    //     this.setState({class: STATUS.HOVERED});
    //   }
    
    //   _onMouseLeave() {
    //     this.setState({class: STATUS.NORMAL});
    //   }

    //   toggleIsShown() {
    //       this.setState({test: !this.state.test});
    //   }
    
    //   render() {
    //     return (
    //         <div>
    //             <a
    //                 className={this.state.class}
    //                 href={this.props.page || '#'}
    //                 onClick={this._onMouseEnter}
    //                 onMouseEnter={this._onMouseEnter}
    //                 onMouseLeave={this._onMouseLeave}
    //             >
    //                 {this.props.children}
    //             </a>
                
    //             <a
    //                 className={this.state.test}
    //                 onClick={this.toggleIsShown}
    //             >
    //                 hello
    //              </a>
                
    //             <div>Hello I am David</div>
    //       </div>
        
    //     );
    //   }
}


// ReactDOM.render(<App productId={1} style={2}/>, document.getElementById('root'));
// I suppose this id can be from the url or upper level component?

export default App;