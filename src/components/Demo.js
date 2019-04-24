import React from 'react';
import PhoneCarousel from './PhoneCarousel/PhoneCarousel';
import sample from '../img/sample.png'
import sample2 from '../img/sample2.png'

const Demo = () => {
    return (
        <PhoneCarousel images={[sample, sample2, sample, sample2]} />
    )
}

export default Demo;