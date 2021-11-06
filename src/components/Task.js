import React, {Component} from "react";
import PropTypes from "prop-types";

class Task extends Component {

    StyleCompleted () {
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'green' : 'pink',
            TextDecoration: this.props.task.done ? 'line-through':'none'
        }
    }

    render(){
        const {task} = this.props
        return (<p style={this.StyleCompleted()}>
              {task.title} - 
              {task.description} - 
              {task.done} - 
              {task.id}
              <input type="checkbox"/>
              <button style = {btnDelet}>X</button>
            </p>)
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired
}

const btnDelet = {
    fontSize: '18px',
    background: '#ea2027',
    color:'#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'
}

export default Task;