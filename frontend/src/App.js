import { Layout, Menu } from 'antd'
import React from 'react'
import routes from './router'
import { Link, useRoutes } from 'react-router-dom'

const { Sider, Content, Header } = Layout

export default function App() {
  const element = useRoutes(routes)
  const items = []
  routes.forEach((item) => {

    if (item.path != '/' && item.path.search('add') ==-1 && item.path.search('upd') == -1){
      console.log(item.path)
          items.push({
      label: <Link to={item.path}>{item.label}</Link>,
      key: item.path,
      icon: item.icon,
      children:
        item.children &&
        item.children.map((child) => {
          return {
            label: <Link to={item.path + '/' + child.path}>{child.label}</Link>,
            key: item.path + '/' + child.path,
            icon: child.icon,
            children:
              child.children &&
              child.children.map((sun) => {
                return {
                  label: (
                    <Link to={item.path + '/' + child.path + '/' + sun.path}>
                      {sun.label}
                    </Link>
                  ),
                  key: item.path + '/' + child.path + '/' + sun.path,
                  icon: sun.icon,
                }
              }),
          }
        }),
    })

    }
  })
  return (
    <>
      <Layout>
        <Sider theme="light">
          <Menu theme="light" mode="inline" items={items}></Menu>
        </Sider>
        <Layout>
          <Content>{element}</Content>
        </Layout>
      </Layout>

    </>
  )
}