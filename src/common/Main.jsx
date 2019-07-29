import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { Layout } from 'antd';

import ScrollBar from 'react-overlayscrollbars';
import 'react-overlayscrollbars/es/index.css';

// import { ScrollBar } from '@/common/ScrollBar.jsx';
// import ScrollBar from './../../packages/scrollbar/';
// import './../../packages/scrollbar/es/index.css';

import Routes from '@/router';
import TopBar from './TopBar.jsx';
import SiderBar from './SiderBar.jsx';

const { Footer, Content } = Layout;

export default class Main extends Component {
	state = {
	    title: '',
	};
	render() {
	    const { title } = this.state;
	    return (
            <DocumentTitle title={title}>
                <Layout style={{ minHeight: '100vh' }}>
                    <TopBar/>
                    <Layout>
                        <SiderBar />
                        <Layout>
                            <ScrollBar className="roy_scroll os-theme-dark"
                                       overflow-behavior={{ x: 'hidden' }}
                                       scrollbars={{ autoHide: 'l' }} >
                                <Content style={{ margin: '0 16px', overflow: 'initial', flex: '1 1 0', minHeight: 'calc(100vh - 135px)' }}>
                                        <Routes />
                                </Content>
                                <Footer style={{ textAlign: 'center' }}>
                                    React-Admin ©{new Date().getFullYear()} Created by Roy
                                </Footer>
                            </ScrollBar>
                        </Layout>
                    </Layout>
                </Layout>
            </DocumentTitle>
	    );
	}
}


