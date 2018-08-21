/* eslint-disable */
import React from 'react';

class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkbox: true,
        };
    }

    handleChange = (event) => {
        this.setState({
           checkbox: !this.state.checkbox
        });
    };

    render() {
        let isVisible = "visuallyhidden"
        if(this.state.checkbox == false){
            isVisible = "visible"
        }

        return(
            <div className="checkbox">
                <div className="title">
                    Checkbox
                </div>
                <div className="content">
                    <label className="switch">
                        <input type="checkbox"
                           onChange={this.handleChange}/>
                        <div className="slider round"></div>
                    </label>
                </div>
                <div className={`hiddenContent ${isVisible}`}>
                    hidden content
                </div>
            </div>
        );
    }
}

export default Checkbox;
