import React from 'react';
import './TextBox.css';

class TextBox extends React.Component{
    constructor(props){
        super(props);
        this.inputElement = React.createRef();

        this.notify = this.notify.bind(this);
    }
    notify () {
        let item = this.inputElement;

        this.props.changeHandler(/*item.dataset.variable*/1, item);
    }
    render () {   
        return (
            <div className={ this.props.divClass }
                ref={ this.props.id }>
                <input type="text"
                        placeholder={ this.props.placeholder} 
                        ref={this.inputElement} 
                        className={ this.props.textBoxClass }
                        disabled={ this.props.disabled } 
                        onChange={ this.notify }
                        data-variable={ this.props.variable } 
                        />
            </div>
        );
    } 
}

export default TextBox;