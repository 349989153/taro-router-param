import React, { Component } from 'react'
import { getCurrentInstance } from '@tarojs/taro';
import { View, Button, Text } from '@tarojs/components'
import './index.less'


function Index() {
  return (
    <View>点击浏览器左上方的回退，回退之后再点击"console"按钮，在控制台查看params</View>
  )
}

export default Index

