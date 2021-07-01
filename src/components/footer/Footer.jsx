import React, { Component } from 'react'

import './Footer.css'

export default class Footer extends Component {

    checkAll = (event) => {
        this.props.checkAll(event.target.checked)

    }

    claerAllDone = () => {

        if (window.confirm('确定要清除已完成的吗？')) this.props.clearAllDone()
    }

    render() {
        //获取父组件传的值
        const { todos } = this.props;
        const doneCount = todos.reduce((preValue, current) => preValue + (current.done ? 1 : 0), 0)
        const total = todos.length
        return (
            <footer>
                <label>
                    <input type="checkBox" checked={total === doneCount && total > 0} onChange={this.checkAll} />
                    <span>已完成{doneCount}</span>
                    <span>/全部{total}</span>
                </label>
                <button onClick={this.claerAllDone}>Clear completion items</button>
            </footer>
        )
    }
}