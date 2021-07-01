import React, { Component } from 'react'
import Add from './components/add/Add'
import List from './components/list/List'
import Footer from './components/footer/Footer'
import './App.css'

export default class App extends Component {
    //初始化状态 因为add要用todos 而且list也要用
    state = {
        todos: [


        ]
    }
    //删除todo
    deleteTodo = (id) => {
        const { todos } = this.state;
        const newTodos = todos.filter((todoObj) => {
            return todoObj.id !== id
        })
        this.setState({ todos: newTodos })
        // const arr = todos.splice(index, 1)
        // this.setState({ todos: arr })
    }
    //添加todo
    addTodo = (todoObj) => {
        const { todos } = this.state
        this.setState({ todos: [todoObj, ...todos] })
    }
    //更新todo
    updateTodo = (id, done) => {
        const { todos } = this.state;
        const newTodos = todos.map((todoObj) => {
            if (todoObj.id === id) todoObj.done = done
            return todoObj
        })
        this.setState({ todos: newTodos })
    }
    //勾选or取消勾选
    checkAll = (done) => {
        const { todos } = this.state;
        const newTodos = todos.map(todoObj => ({ ...todoObj, done }))
        this.setState({ todos: newTodos })
    }

    //清除已完成
    clearAllDone = (done) => {
        const { todos } = this.state;
        const newTodos = todos.filter((todoObj) => {
            return !todoObj.done
        })
        this.setState({ todos: newTodos })
    }
    render() {
        const { todos } = this.state
        return (
            <div className='App'>
                <Add addTodo={this.addTodo} />
                <List todos={todos} deleteTodo={this.deleteTodo} updateTodo={this.updateTodo} />
                <Footer todos={todos} checkAll={this.checkAll} clearAllDone={this.clearAllDone} />
            </div >
        )
    }
}