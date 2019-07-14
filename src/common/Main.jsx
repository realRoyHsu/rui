import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { Layout, Button } from 'antd';

// import { ScrollBar } from '@/common/ScrollBar.jsx';
import ScrollBar from 'react-overlayscrollbars';

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
                                       ref={el=> this.ScrollBarRef = el}
                                       scrollbars={{ autoHide: 'l' }} >
                                <Content style={{ margin: '0 16px', overflow: 'initial', flex: '1 1 0' }}>
                                        <Routes />
                                        <Button icon="caret-right"
                                                onClick={()=>this.ScrollBarRef.addExt('myBasicExtension')}
                                                type="primary">Primary</Button>
                                        <Button icon="caret-left"
                                                onClick={()=>this.ScrollBarRef.removeExt('myBasicExtension')}>Default</Button>
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

ScrollBar.extension('myBasicExtension', function(defaultOptions, framework) {
	var osInstance = this;
	var extension = { };

	var handleElmHorizontal;
	var handleElmVertical;

	extension.added = function() {
		var instanceElements = osInstance.getElements();
		var scrollbarHorizontalHandle = instanceElements.scrollbarHorizontal.handle;
		var scrollbarVerticalHandle = instanceElements.scrollbarVertical.handle;
		var html = '<div style="height: 100%; width: 100%; background: red;"></div>';

		handleElmHorizontal = framework(html);
		handleElmVertical = framework(html);

		framework(scrollbarHorizontalHandle).append(handleElmHorizontal);
		framework(scrollbarVerticalHandle).append(handleElmVertical);
	};

	extension.removed = function() {
		handleElmHorizontal.remove();
		handleElmVertical.remove();
	};

	return extension;
});
