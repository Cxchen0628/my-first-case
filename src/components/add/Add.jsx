import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid'
import './add.css'

export default class Add extends Component {
    handleKeyUp = (event) => {

        const { value } = event.target

        if (event.keyCode !== 13) return
        //设置一个验证
        if (event.target.value.trim() === '') return alert('输入内容不能为空')
        //打印handleKeyUp本身的value值
        console.log(event.target.value)
        //声明一个
        const todoObj = { id: uuidv4(), name: value, done: false }

        this.props.addTodo(todoObj)

        event.target.value = ''
    }
    render() {
        return (
            <header>
                <input type="text" onKeyUp={this.handleKeyUp} placeholder='请输入你以后要做的事情' />

            </header>
        )
    }
}