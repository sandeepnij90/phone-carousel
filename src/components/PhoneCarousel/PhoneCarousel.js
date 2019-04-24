import React, { Component } from 'react';
import PropTypes from 'prop-types';
import iphoneFrame from '../../img/frame.png';
import sample from '../../img/sample.png';
import './phonecarousel.scss';

class PhoneCarousel extends Component {
    constructor() {
        super();
        this.state = {
            position: -273,
            currentScreen: 0
        }
    }

    renderImages = () => {
        return this.props.images.map((image, index) => {
            return (
                <img key={index} className={`screen-${index}`} src={image} />
            )
        })
    }

    updateTrack = newPosition => () => {
        if (newPosition !== 0) {
            const position = (-273 + newPosition) - (newPosition * 278)
            return this.setState({
                position,
                currentScreen: newPosition
            })
        }

        this.setState({
            position: -273,
            currentScreen: 0
        })
    }

    renderCounters = () => {
        const counters = this.props.images;
        const { currentScreen } = this.state;
        return counters.map((item, index) => {
            return (
                <div data-qa="counter" key={index} className={`counter ${currentScreen === index ? 'active' : ''}`} onClick={this.updateTrack(index)}></div>
            )
        })
    }

    render() {
        return (
            <div className="phone-carousel">
                <div className="phone-carousel-container">
                    <div className="phone-container">
                        <img data-qa="frame" className="frame" src={iphoneFrame} />
                        <div className="image-track" style={{ transform: `translateX(${this.state.position}px)` }}>{this.renderImages()}</div>
                        <div className="counters">{this.renderCounters()}</div>
                    </div>
                </div>
            </div>
        )
    }
}

PhoneCarousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default PhoneCarousel;