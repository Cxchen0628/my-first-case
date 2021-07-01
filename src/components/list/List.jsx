import React, { Component } from 'react'

import './List.css'

import Itme from '../itme/Itme'

export default class List extends Component {

    render() {
        const { todos, deleteTodo, updateTodo } = this.props
        return (
            <ul className='List'>
                {
                    todos.map((todoObj, index) => {
                        return <Itme
                            key={todoObj.id}
                            index={index} {...todoObj}
                            deleteTodo={deleteTodo}
                            updateTodo={updateTodo}
                        />
                    })
                }
            </ul>
        )
    }
}