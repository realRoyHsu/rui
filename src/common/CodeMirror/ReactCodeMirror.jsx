import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';

// 引入主题后还需要在 options 中指定主题才会生效
import 'codemirror/theme/cobalt.css';

// high
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/css/css.js';
import 'codemirror/mode/xml/xml.js';
import 'codemirror/mode/clike/clike.js';
import 'codemirror/mode/markdown/markdown.js';
import 'codemirror/mode/python/python.js';
import 'codemirror/mode/r/r.js';
import 'codemirror/mode/shell/shell.js';
import 'codemirror/mode/sql/sql.js';
import 'codemirror/mode/swift/swift.js';
import 'codemirror/mode/vue/vue.js';
// 自定义
import './../../style/CodeMirror.scss';
// 自动
import 'codemirror/mode/meta.js';
import 'codemirror/addon/mode/loadmode.js';

const className = require('classnames');
const isEqual = require('lodash.isequal');


export default class CodeEditMirror extends Component {
    state = {
        isFocused: false,
    }

	componentDidMount () {
		this.codeMirror = CodeMirror.fromTextArea(this.textareaNode, this.props.options);
		this.codeMirror.on('change', this.codemirrorValueChanged);
		this.codeMirror.on('cursorActivity', this.cursorActivity);
		this.codeMirror.on('focus', this.focusChanged);
		this.codeMirror.on('blur', this.focusChanged);
		this.codeMirror.on('scroll', this.scrollChanged);
		this.codeMirror.setValue(this.props.defaultValue || this.props.value || '');
	}

    componentWillUnmount () {
		// is there a lighter-weight way to remove the cm instance?
		if (this.codeMirror) {
			this.codeMirror.toTextArea();
		}
	}
	setOptionIfChanged (optionName, newValue) {
 		const oldValue = this.codeMirror.getOption(optionName);
 		if (!isEqual(oldValue, newValue)) {
 			this.codeMirror.setOption(optionName, newValue);
 		}
 	}
	getCodeMirror () {
		return this.codeMirror;
	}
	focus = () => {
		if (this.codeMirror) {
			this.codeMirror.focus();
		}
	}
	focusChanged = (focused) => {
		this.setState({
			isFocused: focused,
		});
		this.props.onFocusChange && this.props.onFocusChange(focused);
	}
	cursorActivity=(cm) => {
		this.props.onCursorActivity && this.props.onCursorActivity(cm);
	}
	scrollChanged = (cm)=>{
		this.props.onScroll && this.props.onScroll(cm.getScrollInfo());
	}
	codemirrorValueChanged = (doc, change) =>{
		if (this.props.onChange && change.origin !== 'setValue') {
			this.props.onChange(doc.getValue(), change);
		}
	}
	render () {
		const editorClassName = className(
			'ReactCodeMirror',
			this.state.isFocused ? 'ReactCodeMirror--focused' : null,
			this.props.className
		);
		return (
			<div className={editorClassName}>
                <textarea autoComplete="off"
                          defaultValue={this.props.value}
                          ref={ref => this.textareaNode = ref}>
                </textarea>
			</div>
		);
	}
}

CodeEditMirror.propTypes = {
    className: PropTypes.any,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
    onCursorActivity: PropTypes.func,
    onFocusChange: PropTypes.func,
    onScroll: PropTypes.func,
    options: PropTypes.object,
    value: PropTypes.string,
    preserveScrollPosition: PropTypes.oneOfType([PropTypes.bool,PropTypes.object]),
};

CodeEditMirror.defaultProps = {
    className: '',
    defaultValue: '',
    onChange: ()=>{},
    onCursorActivity: ()=>{},
    onFocusChange: ()=>{},
    onScroll: ()=>{},
    options: {},
    value: '',
    preserveScrollPosition: false,
};
