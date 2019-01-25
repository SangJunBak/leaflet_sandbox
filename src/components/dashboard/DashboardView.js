import React, {Component} from 'react';
import {
    Link,
    Route,
    Switch
} from 'react-router-dom'

import { Layout, Menu, Icon } from 'antd';
import LeafletView from "../leaflet/LeafletView";

const {Sider, Content } = Layout;

const styles = {
    container: {
      minHeight: "100%"
    },
    content: {
        margin: '24px 16px',
        padding: 24,
        background: '#fff',
        height: "100%"
    },
    menu: {
      textAlign: "center"
    },
    menuItem: {
        width: "50%"
    }
};


class DashboardView extends Component {

    constructor(props){
        super(props);

        this.state = {
            selectedMenuItem: ''
        };

        this.handleSelectedMenuItem = this.handleSelectedMenuItem.bind(this);
    }

    handleSelectedMenuItem(e){

    }

    render() {
        return (
            <Layout style={styles.container}>
                <Sider
                    trigger={null}
                    collapsible
                    // collapsed={this.state.collapsed}
                >
                </Sider>
                <Layout>
                        <Menu mode = "horizontal"
                              style={styles.menu}
                              selectedKeys={[this.props.location.pathname]}
                        >
                            <Menu.Item key = '/' style = {styles.menuItem}>
                                <Link to='/'>
                                    <span>Leaflet</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key = '/3D' style = {styles.menuItem}>
                                <Link to='/3D'>
                                    <span>3D</span>
                                </Link>
                            </Menu.Item>
                        </Menu>
                    <Content style={styles.content}>
                        <Switch>
                            <Route exact path="/" component = {LeafletView}/>
                            <Route path="3D" component = {null}/>
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default DashboardView;