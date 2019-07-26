import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import useCodeMirrorInstance from './CodeMirror/useCodeMirrorInstance';

function CodeEditMirror(props) {
    const CodeMirrorRef = useRef(null);
    const Instance = useCodeMirrorInstance(props, CodeMirrorRef.current);

    if (Instance) {
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
