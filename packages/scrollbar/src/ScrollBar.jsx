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

    constructor(props) {
        super(props);
        this.state = {
            instance: null,
        };
    }

    componentDidMount() {
        this.init();
    }

    componentWillUnmount() {
        this.destroy();
    }

    init () {
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
        this.setState({ instance : OverlayScrollbars(this.ScrollbarRef, {
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
        return (
            <div id={this.props.id}
                 ref={el => this.ScrollbarRef = el}
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
