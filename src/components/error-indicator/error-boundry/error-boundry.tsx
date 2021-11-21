import { Component } from 'react';
import { ErrorIndicator } from '../error-indicator';

export default class ErrorBoundry extends Component { 
    
    state = {
        error: false
    };

    componentDidCatch() {
        this.setState({ error: true });
    };

    setError = () => {
        this.setState({ error: false });
    };

    render() {
        if (this.state.error) {
            return <ErrorIndicator setError={this.setError} />;
        }

        return this.props.children;
    };
};