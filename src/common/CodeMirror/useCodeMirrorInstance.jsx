import { useEffect, useState } from 'react';
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

import './../../style/CodeMirror.scss';

// import 'codemirror/mode/meta.js';
// import 'codemirror/addon/mode/loadmode.js';

function CodeEditMirror(props, CodeMirrorRef) {
    const [Instance, setInstance] = useState(null);

    // init
    useEffect(() => {
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
            setInstance(
                CodeMirror(CodeMirrorRef, {
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
                })
            );
        }
        init();
    }, [CodeMirrorRef, props]);

    return Instance;
}

export default CodeEditMirror;
