import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OverlayScrollbars from 'overlayscrollbars';
import 'overlayscrollbars/css/OverlayScrollbars.css';

class ScrollBar extends Component {
    static defaultOptions() {
        return OverlayScrollbars.defaultOptions();
    }
    static globals() {
        return OverlayScrollbars.globals();
    }
    static extension(...args) {
        return OverlayScrollbars.extension(...args);
    }

    // initialization
    constructor(props) {
        console.log('----->initialization-----');
        super(props);
        this.state = {
            instance: null,
        };
        console.log('initialization<-----');
    }


    // Mounting: 此阶段分为componentWillMount，render，componentDidMount三个时期。
    //（componentWillMount，componentWillReceiveProps，componentWillUpdate）都被getDerivedStateFromProps替代。
    static getDerivedStateFromProps(props, state) {
        console.log('----->Mounting');
        console.log('getDerivedStateFromProps');
        console.log(props,state);
        return null;
    }
    // componentWillMount() {
    //     console.log('componentWillMount');
    // }
    componentDidMount() {
        // ajax
        this.init();
        console.log('componentDidMount');
        console.log('Mounting<-----');
    }

    // update: 此阶段分为componentWillReceiveProps，shouldComponentUpdate，componentWillUpdate，render，componentDidUpdate
    // componentWillReceiveProps(nextProps){
    //     console.log('----->update');
    //     console.log('componentWillReceiveProps');
    //     console.log(nextProps);

    // }

    shouldComponentUpdate(nextProps , nextState){
        console.log('shouldComponentUpdate');
        console.log(nextProps, nextState);
        return true;
    }

    // componentWillUpdate(nextProps, nextState){
    //     console.log('componentWillUpdate');
    //     console.log(nextProps, nextState);
    // }

    // 被调用于render之后，可以读取但无法使用DOM的时候。它使您的组件可以在可能更改之前从DOM捕获一些信息（例如滚动位置）
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        console.log(prevProps, prevState);
        //我们是否要添加新的 items 到列表?
        // 捕捉滚动位置，以便我们可以稍后调整滚动.
        // if (prevProps.list.length < this.props.list.length) {
        //   const list = this.listRef.current;
        //   return list.scrollHeight - list.scrollTop;
        // }
        return null;
      }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
        console.log(prevProps, prevState, snapshot);
        console.log('update<-----');
        // let sss = ;
        // console.log(sss,'--sss');
    }

    // Unmount
    componentWillUnmount() {
        console.log('----->Unmount');
        this.destroy();
        console.log('Unmount<-----');
    }

    // 创建实例
    init = () => {
        const {
            className,
            resize,
            sizeAutoCapable,
            clipAlways,
            normalizeRTL,
            paddingAbsolute,
            autoUpdate,
            autoUpdateInterval,
            nativeScrollbarsOverlaid,
            overflowBehavior,
            scrollbars,
            textarea,
            callbacks,
        } = this.props;
        this.setState({ instance : OverlayScrollbars(this.scrollbar, {
            className,
            resize,
            sizeAutoCapable,
            clipAlways,
            normalizeRTL,
            paddingAbsolute,
            autoUpdate,
            autoUpdateInterval,
            nativeScrollbarsOverlaid,
            overflowBehavior,
            scrollbars,
            textarea,
            callbacks,
        })});
    }

    delegateMethod(name, ...args) {
        if (!this.state.instance) {
            this.init();
        }
        return this.state.instance[name](...args);
    }

    options(...args) {
        return this.delegateMethod('options', ...args);
    }
    update() {
        this.delegateMethod('update');
    }
    sleep() {
        this.delegateMethod('sleep');
    }
    scroll(...args) {
        return this.delegateMethod('scroll', ...args);
    }
    scrollStop() {
        this.delegateMethod('scrollStop');
    }
    getElements(...args) {
        return this.delegateMethod('getElements', ...args);
    }
    getState(...args) {
        return this.delegateMethod('getState', ...args);
    }
    destroy() {
        this.delegateMethod('destroy');
        this.setState({instance: null});
    }
    ext(...args) {
        return this.delegateMethod('ext', ...args);
    }
    addExt(...args) {
        return this.delegateMethod('addExt', ...args);
    }
    removeExt(...args) {
        this.delegateMethod('removeExt', ...args);
    }

    render() {
        console.log('render');
        return (
            <div id={this.props.id}
                 ref={el => this.scrollbar = el}
                 style={{...this.props.style}}>
                {/* eslint-disable-next-line */}
                {this.props.children}
            </div>
        );
    }
}

ScrollBar.propTypes = {
    id: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    resize: PropTypes.oneOf([
        'none',
        'both',
        'horizontal',
        'vertical',
        'n',
        'b',
        'h',
        'v',
    ]),
    sizeAutoCapable: PropTypes.bool,
    clipAlways: PropTypes.bool,
    normalizeRTL: PropTypes.bool,
    paddingAbsolute: PropTypes.bool,
    autoUpdate: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    autoUpdateInterval: PropTypes.number,
    nativeScrollbarsOverlaid: PropTypes.object,
    overflowBehavior: PropTypes.object,
    scrollbars: PropTypes.object,
    textarea: PropTypes.object,
    callbacks: PropTypes.object,
};
ScrollBar.defaultProps = {
    id: '',
    style: {},
    className: 'os-theme-dark',
    resize: 'none',
    sizeAutoCapable: true,
    clipAlways: true,
    normalizeRTL: true,
    paddingAbsolute: true,
    autoUpdate: true,
    autoUpdateInterval: 33,
    nativeScrollbarsOverlaid: {
        showNativeScrollbars: false,
        initialize: true,
    },
    overflowBehavior: {
        x: 'scroll',
        y: 'scroll',
    },
    scrollbars: {
        visibility: 'auto',
        autoHide: 'never',
        autoHideDelay: 800,
        dragScrolling: true,
        clickScrolling: false,
        touchSupport: true,
    },
    textarea: {
        dynWidth: false,
        dynHeight: false,
        inheritedAttrs: ['style', 'class'],
    },
    callbacks: {
        onInitialized: null,
        onInitializationWithdrawn: null,
        onDestroyed: null,
        onScrollStart: null,
        onScroll: null,
        onScrollStop: null,
        onOverflowChanged: null,
        onOverflowAmountChanged: null,
        onDirectionChanged: null,
        onContentSizeChanged: null,
        onHostSizeChanged: null,
        onUpdated: null,
    },
};

export default ScrollBar;
