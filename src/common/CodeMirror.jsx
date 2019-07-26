import React, { useEffect, useRef } from 'react';
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

import './../style/CodeMirror.scss';

// import 'codemirror/mode/meta.js';
// import 'codemirror/addon/mode/loadmode.js';

function CodeEditMirror(props) {
    const CodeMirrorRef = useRef(null);
    // const [Instance, setInstance] = useState(null);
    let Instance = null;

    // init
    function init() {
        const {
            value,
            mode,
            lineSeparator,
            theme,
            indentUnit,
            smartIndent,
            tabSize,
            indentWithTabs,
        } = props;
        Instance = CodeMirror(CodeMirrorRef.current, {
            value,
            mode,
            lineSeparator,
            theme,
            indentUnit,
            smartIndent,
            tabSize,
            indentWithTabs,
            lineNumbers: true,
            lineWrapping: true,
            scrollbarStyle: null,
            cursorHeight: 0.85,
            readOnly: false, // nocursor
        });

        Instance.on('change', () => {
            let changeTimeoutId;
            // if(changeTimeoutId !== undefined) {
            //     clearTimeout(changeTimeoutId);
            // }
            changeTimeoutId = setTimeout(function() {
                CodeMirrorRef.current.className = 'codemirror-host';
                try {
                    var json = JSON.parse(Instance.getValue());
                    console.log(json);
                } catch (error) {
                    CodeMirrorRef.current.className =
                        'codemirror-host codemirror-error';
                    console.log(error);
                }
            }, 500);
            console.log(changeTimeoutId);
        });
    }

    useEffect(() => {
        init();
        return () => (Instance = null);
    }, []);

    return <div className="codemirror-host"
                ref={CodeMirrorRef}></div>;
}

CodeEditMirror.propTypes = {
    value: PropTypes.string,
    mode: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    lineSeparator: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    theme: PropTypes.string,
    indentUnit: PropTypes.number,
    smartIndent: PropTypes.bool,
    tabSize: PropTypes.number,
    indentWithTabs: PropTypes.bool,
    electricChars: PropTypes.bool,
    specialChars: PropTypes.string,
};
CodeEditMirror.defaultProps = {
    value: '',
    mode: { name: 'javascript', json: false },
    lineSeparator: null,
    theme: 'default',
    indentUnit: 2,
    smartIndent: true,
    tabSize: 4,
    indentWithTabs: false,
    electricChars: true,
    specialChars:
        '/[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/',
    specialCharPlaceholder: '•',
};

export default CodeEditMirror;
