import React from 'react';
import BaseLayout from '../layouts/BaseLayout';

class SuperComponent extends React.Component {

    constructor(props) {
        super(props);

        this.someVeriable = 'Just some variable';
    }
    alertName(title) {
        alert(title);
    }
    render() {
        return (
            <BaseLayout>
                <h1> I am Blogs Page from React Component </h1>
            </BaseLayout>
        )
    }
}

export default SuperComponent;