import React, { Component } from 'react';
import propTypes from 'prop-types';

class ClrInput extends Component {

    render() {
        return (
            <input                
                type={this.props.type}
                name={this.props.name}
                value={this.props.value}
                disabled={this.props.disabled}                
                placeholder={this.props.placeholder}
                readOnly={this.props.readOnly}
            />
        );
    }
}

ClrInput.propTypes = {
    disabled: propTypes.bool,
    name: propTypes.string,
    placeholder: propTypes.string
 };
 
 ClrInput.defaultProps = {    
    type: 'text',
    className: ''
 };
 
 export default ClrInput;