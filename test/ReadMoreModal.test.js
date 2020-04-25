import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Description from '../client/src/components/Description/Description.jsx';
import ReadMoreModal from '../client/src/components/Description/ReadMoreModal.jsx';

Enzyme.configure({adapter: new Adapter() });

describe('Description Component', () => {
    var productInfo = {
        name:'Nike Blazer', 
        styles: [
            {name: 'black/white', stock: []},
            {name: 'red/blue', stock: []}
        ]
    }
    var styleInfo = {
        name: 'Green/Yellow',
        stock: []
    }

    it('it should show product name text derived from props', () => {
        const wrapper = shallow(<Description productInfo={productInfo} styleInfo={styleInfo}/>);
        const text = wrapper.find('li').at(0);
        expect(text.text()).toBe('Shown: Nike Blazer');
    })

    it('it should show style name text derived from props', () => {
        const wrapper = shallow(<Description productInfo={productInfo} styleInfo={styleInfo}/>);
        const text = wrapper.find('li').at(1);
        expect(text.text()).toBe('Style: Green/Yellow');
    })

    it('it should show button "read more" text', () => {
        const wrapper = shallow(<Description productInfo={productInfo} styleInfo={styleInfo}/>);
        const text = wrapper.find('span') ;
        expect(text.text()).toBe('Read more');
    })

    it('clicking on "read more" link should toggle this.state.modal', () => {
        const wrapper = shallow(<Description productInfo={productInfo} styleInfo={styleInfo}/>);
        
        wrapper.find('button').simulate('click');
        expect(wrapper.find('ReadMoreModal').prop('modal')).toBe(true);

        wrapper.find('button').simulate('click');
        expect(wrapper.find('ReadMoreModal').prop('modal')).toBe(false);
    })

})


describe('ReadMoreModal Component', () => {
    
    var textBlock = '<div>lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet neque eu lacus porta hendrerit.</div>';
    var productName = 'Nike Blazer';
    var productPrice = '99.99';
    var imageUrl = 'https://static.nike.com/a/images/t_default/eric5lwitzffpoisq0rj/blazer-mid-77-vintage-shoe-flCCX4.jpg';

    it('it should show textBlock', () => {
        const wrapper = shallow(<ReadMoreModal 
                                    textBlock={textBlock} 
                                    productName={productName}
                                    productPrice={productPrice}
                                    imageUrl={imageUrl}/>);
        const text = wrapper.find('.text-block');
        expect(text.html()).toBe(`<div class=\"text-block\">${textBlock}</div>`);
    })

    it('it should show product name', () => {
        const wrapper = shallow(<ReadMoreModal 
                                    textBlock={textBlock} 
                                    productName={productName}
                                    productPrice={productPrice}
                                    imageUrl={imageUrl}/>);
        const text = wrapper.find('p').at(0);
        expect(text.text()).toBe(productName);
    })

    it('it should show product price', () => {
        const wrapper = shallow(<ReadMoreModal 
                                    textBlock={textBlock} 
                                    productName={productName}
                                    productPrice={productPrice}
                                    imageUrl={imageUrl}/>);
        const text = wrapper.find('p').at(1);
        expect(text.text()).toBe(`$${productPrice}`);
    })

    it('passing in modal prop of true should change className', () => {
        const wrapper = shallow(<ReadMoreModal 
                                    textBlock={textBlock} 
                                    productName={productName}
                                    productPrice={productPrice}
                                    imageUrl={imageUrl}
                                    modal={true}/>);
        
        expect(wrapper.find('#modal').prop('className')).toBe('modal pt4-sm pb4-sm toggle-modal');

        })

})