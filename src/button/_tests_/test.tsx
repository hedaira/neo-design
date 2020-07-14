import React, { Component } from 'react';
import {NeoButton} from "../../index";
import { mount } from 'enzyme';

const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-15');


describe('Button', () => {
    Enzyme.configure({ adapter: new Adapter() });
    class DefaultButton extends Component {
        render() {
            return (
                <NeoButton>
                    NeoButton
                </NeoButton>
            );
        }
    }
    const wrapper = mount(<DefaultButton />);
    expect(wrapper.render());

});

