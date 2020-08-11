import React, { Component } from 'react'
import Taro, { getCurrentInstance } from '@tarojs/taro';
import { connect } from 'react-redux'
import { View, Button, Text } from '@tarojs/components'

import { add, minus, asyncAdd } from '../../actions/counter'

import './index.less'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleConsole = () => {
    console.log(getCurrentInstance().router.params);
  };

  handleNavigate = () => {
    Taro.navigateTo({
      url: '/pages/page2/index',
    })
  };

  render () {
    return (
      <View className='index'>
        <View>1、先确定url后加了query-string，如"?foo=hello"</View>
        <View>2、点击"console"按钮，在控制台查看参数</View>
        <View>3、点击"跳转页面"按钮，跳转到下个页面</View>
        <View>4、返回该页面后，再点击"console"按钮，再控制台查看参数</View>
        <Button className='add_btn' onClick={this.handleNavigate}>跳转页面</Button>
        <Button className='add_btn' onClick={this.handleConsole}>console</Button>
      </View>
    )
  }
}

export default Index

