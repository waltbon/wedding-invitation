import React from 'react';
import App from 'next/app';

class PaolaApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return <Component {...pageProps} />;
    }
}

export default PaolaApp