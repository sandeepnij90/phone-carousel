import Enzyme, { shallow } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import PhoneCarousel from './PhoneCarousel';
import sample from '../../img/sample.png'

describe('PhoneCarousel', () => {

    it('should have frame', () => {
        const wrapper = shallow(<PhoneCarousel images={[sample, sample, sample]}/>)
        expect(wrapper.find('[data-qa="frame"]')).toExist;
    });

    it('the first item should be in the phone on render', () => {
        const wrapper = shallow(<PhoneCarousel images={[sample, sample, sample]} />)
        expect(wrapper.state('position')).toEqual(-273);
        expect(wrapper.state('currentScreen')).toEqual(0)
    })

    it('should move the position of the the tracklist when a counter is clicked', () => {
        const wrapper = shallow(<PhoneCarousel images={[sample, sample, sample, sample]} />)
        const counters = wrapper.find('[data-qa="counter"]')
        counters.at(1).simulate('click');
        expect(wrapper.state('position')).toEqual(-550);
        counters.at(3).simulate('click');
        expect(wrapper.state('position')).toEqual(-1104);
    })

    it('should highlight the current counter',() => {
        const wrapper = shallow(<PhoneCarousel images={[sample, sample, sample, sample]} />)
        wrapper.find('[data-qa="counter"]').at(3).simulate('click');
        expect(wrapper.state('currentScreen')).toEqual(3);
        expect(wrapper.find('[data-qa="counter"]').at(3).hasClass('counter active')).toBe(true)
    })    
});
