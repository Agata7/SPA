import React from 'react';
import {Prompt} from 'react-router-dom';
class ContactPage extends React.Component {
    state = {
        value:"",
        isEmpyt: true, 
    }
    handleChange = (e) =>{
        if(e.target.value.length >0){
            this.setState({
                value: e.target.value,
                isEmpyt: false
            })
        } else{
        this.setState({
            value: e.target.value
        })
    }
    }

    handleSubmit =(e) => {
        e.preventDefault();
        this.setState({
            value:""
        })
    }

    render(){
        return (
     <div className="contact">
         <form onSubmit={this.handleSubmit}>
             <h3>Napisz do nas</h3>
             <textarea value={this.state.value}
             onChange={this.handleChange}
             placeholder="Wyślij wiadomość">
             </textarea>
             <button>Wyślij</button>
         </form>
         <Prompt
            when={true}
            message="Nie wypełniłeś formularza. Czy na pewno chcesz opuścić stronę"
            />
     </div>   
    )
}
}

export default ContactPage;