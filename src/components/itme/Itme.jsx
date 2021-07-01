import React, { Component } from 'react';
import './Itme.css'
export default class Itme extends Component {

    state = {
        pointer: false
    }
    //删除按钮的回调
    handleDelete = (index) => {
        return () => {
            if (window.confirm('确定删除吗')) {
                this.props.deleteTodo(index)
            }
        }
    }

    //鼠标移入移出的回调
    handleMouse = (pointer) => {
        return () => {
            this.setState({ pointer })
        }
    }

    handleCheck = (id) => {
        return (event) => {
            console.log(id, event.target.checked)
            this.props.updateTodo(id, event.target.checked)
        }
    }

    render() {
        const { id, name, done } = this.props;
        const { pointer } = this.state;
        return (
            <li
                onMouseEnter={this.handleMouse(true)}
                onMouseLeave={this.handleMouse(false)}
                className={pointer ? 'active' : ''}
            >
                <label>
                    <input type="checkBox"
                        checked={done}
                        onChange={this.handleCheck(id)}
                    />
                    <span>{name}</span>
                </label>
                <button
                    className="btn btn-danger"
                    style={{ display: pointer ? 'block' : 'none' }}
                    onClick={this.handleDelete(id)}
                >删除</button>
            </li>
        )

    }
}