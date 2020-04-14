import PictureFrame from './PictureFrame.jsx';
import SlideButton from './SlideButton.jsx';
import './main.css';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pics: ["https://images.nike.com/is/image/DotCom/CU4705_001?$NIKE_PWP_GRAY$&wid=420&hei=420", "https://images.nike.com/is/image/DotCom/CW6974_100?$NIKE_PWP_GRAY$&wid=420&hei=420", "https://images.nike.com/is/image/DotCom/CW1408_001?$NIKE_PWP_GRAY$&wid=420&hei=420", "https://images.nike.com/is/image/DotCom/CQ0912_100?$NIKE_PWP_GRAY$&wid=420&hei=420","https://images.nike.com/is/image/DotCom/CZ1088_400?$NIKE_PWP_GRAY$&wid=420&hei=420"],
            ulLeft: 0
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="ptb-15">
                <div className="mlr-12 plr-2 pst-r">
                    <h3 className="pb-4">YOU MIGHT ALSO LIKE</h3>
                    <ul className="pst-r d-g slider slide">
                        {this.state.pics.map(pic => {
                        return <PictureFrame url={pic}/>
                        })}
                    </ul>
                    <SlideButton direction="left"/>
                    <SlideButton direction="right"/>
                 </div>
            </div>
        )
    }
}

ReactDOM.render(<Carousel />, document.getElementById('carousel'));