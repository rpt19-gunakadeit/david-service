// import ReadMoreModal from '../client/src/components/ReadMoreModal.jsx';
//import renderer from 'react-test-renderer';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src/index.jsx';

Enzyme.configure({adapter: new Adapter() });

describe('App Component', () => {
    it('ReadMoreModal changes class when top left button is clicked', () => {
        // const component = renderer.create(<App />);
        
        // let tree = component.toJSON();
        // expect(tree).toMatchSnapshot();
    
        // tree.props.onClick();
        // tree = component.toJSON();
        // expect(tree).toMatchSnapshot();
    
        // tree.props.onClick();
        // tree = component.toJSON();
        // expect(tree).toMatchSnapshot();
    
        // const component = renderer.create(
        //     <App page="http://www.facebook.com">Facebook</App>,
        //   );
        //   let tree = component.toJSON();
        //   expect(tree).toMatchSnapshot();
        // console.log(tree.props)
        //   // manually trigger the callback
        //   tree.props.onClick();
        //   // re-rendering
        //   tree = component.toJSON();
        //   expect(tree).toMatchSnapshot();
        
        //   // manually trigger the callback
        //   tree.props.onMouseLeave();
        //   // re-rendering
        //   tree = component.toJSON();
        //   expect(tree).toMatchSnapshot();
    
        const wrapper = shallow(<App />);
    
        const text = wrapper.find('div div');
        expect(text.text()).toBe('Hello I am David');
    });

    it('asdf', () => {
       const wrapper = shallow(<MyComponent />);
       const button = wrapper.find('a .normal');
       button.simulate('click');
       const text = wrapper.find('div div');
       expect
    })
})


