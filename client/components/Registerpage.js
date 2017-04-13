import React from 'react';
import RegisterationForm from './RegisterationForm';
class Registerpage extends React.Component{
    render(){
        return (
            <div className='jumbotron'>
                
                <h3>This Is Our Registeration Page </h3>
                <RegisterationForm/>

            </div>
        );
    }
}
export default Registerpage;