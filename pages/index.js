import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import axios from 'axios';
import SuperComponent from '../components/shared/SuperComponent';

class Index extends SuperComponent {

    static async getInitialProps() {
        let userData = {};
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
            console.log(response.data);
            userData = response.data;
            console.log(userData.title);
        } catch(err) {
            console.log(err);
        }
        return{initialData: [1,2,3,4], userData};
    }
    constructor(props){
        super(props);

        this.state = {
            title: 'I am Index Page'
        }
        //console.log(constructor);
        //this.updateTitle = this.updateTitle.bind(this);
    }
    componentDidMount(){
        console.log('componentDidMount');
    }
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
    updateTitle = () =>{
        this.setState({title: 'I am updated Index Page'});
    }
    render() {
        const { title } =  this.state; //title = this.state.title
        const { userData, initialData } = this.props;
        return (
            <BaseLayout>
                <h1 className='fromPage'> I am Index Page from React Component </h1>
                <h2>{ title }</h2>
                <h2>{ userData.title }</h2>
                <button onClick={ this.updateTitle }>Cnange Title</button>
            </BaseLayout>
        )
    }
}

export default Index;

// const Index = () => (
//     <div>
//         <p>Hello Next.js</p>
//     </div>
// );

// const Index = function () {
    
// } (
//     <div>
//         <p>Hello Next.js</p>
//     </div>
// );