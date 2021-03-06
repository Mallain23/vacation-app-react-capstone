import React from 'react';

import './Input.css';

export default class Input extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.meta.active && this.props.meta.active) {
            this.input.focus();
        }
    };

    render() {

        let error;
        if (this.props.meta.touched && this.props.meta.error) {
            error = <div className="form-error">{this.props.meta.error}</div>;
        }

        let warning;
        if (this.props.meta.touched && this.props.meta.warning) {
            warning = (
                <div className="form-warning">{this.props.meta.warning}</div>
            );
        }

        return (

            <div className="form-input">
                <label className={this.props.className} htmlFor={this.props.input.name}>
                    {this.props.label}
                    {error}
                    {warning}
                </label>
                <input
                    {...this.props.input}
                    placeholder={this.props.placeholder}
                    id={this.props.input.name}
                    type={this.props.type}
                    className={this.props.className}
                    ref={input => (this.input = input)}
                    value={this.props.input.value}
                />
            </div>
        );
    };
};
