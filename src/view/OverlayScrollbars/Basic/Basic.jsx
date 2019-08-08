import React, { useRef, useEffect, useState } from 'react';
import ScrollBar from 'react-overlayscrollbars';
// import ScrollBar from './../../../common/ScrollBar';
import { Button, Alert } from 'antd';
import $ from 'jquery';
import CodeMirror from '@/common/CodeMirror/ReactCodeMirror.jsx';

import {parseJson} from '@/utils';

import './basic.scss';

// scrollbar配置
let scrollOptions = {
    className:'os-theme-dark',
    overflowBehavior:{ x: 'hidden' },
    paddingAbsolute:true,
    resize:'none',
    scrollbars:{ autoHide: 'l' },
    sizeAutoCapable:true,
    style:{ background: 'white' },
};
let scrollOption = '{\n\tclassName     : "os-theme-dark",\n\tresize       : "both",\n\tsizeAutoCapable : true,\n\tpaddingAbsolute : true,\n\tscrollbars : {\n\t\tclickScrolling : true\n\t}\n}';
console.log(parseJson(scrollOption,'scroll'),$);
export default function Basic() {
    const [instance, setInstance] = useState(null);
    const [className, setClassName] = useState('codemirror-host');
    const [value, setValue] = useState(scrollOption);
    const [error, setError] = useState('');
    const [warnDescription, setwarnDescription] = useState('For visibility purposes the scrollbar-track-elements have a reddish background-color.This behavior is special and only for this demo.');
    const ScrollBarBasic = useRef();
    const CodeMirrorBox = useRef();

    const onChange = () => {
        let changeTimeoutId;
        if(changeTimeoutId !== undefined) {
            clearTimeout(changeTimeoutId);
        }
        setValue(instance.getValue());
        changeTimeoutId = setTimeout(function() {
            setClassName('codemirror-host');
            var oldWarn = console.warn;
            // 初始化
            setError('');
            setwarnDescription('For visibility purposes the scrollbar-track-elements have a reddish background-color.This behavior is special and only for this demo.');
            console.warn = function(msg) {
                setwarnDescription(msg);
            };
            try {
                var option = {};
                // eslint-disable-next-line
                eval(`option = $.extend(true, {}, ${instance.getValue()})`);
                ScrollBarBasic.current.options(option);
                console.warn = oldWarn;
            } catch (error) {
                setClassName('codemirror-host codemirror-error');
                setError(`${error}`);
            }
        }, 500);
    };

    // 实例化
    useEffect(() => {
        setInstance(CodeMirrorBox.current.getCodeMirror());
    }, []);

    // 给scrollbar 赋值
    useEffect(()=>{
        if(ScrollBarBasic.current && instance) {
            var option = {};
            // eslint-disable-next-line
            eval(`option = $.extend(true, {}, ${instance.getValue()})`);
            debugger;
            console.log(option,'--', ScrollBarBasic.current.defaultOptions());
            ScrollBarBasic.current.options(option);
        }
    },[instance]);

    // if(ScrollBarBasic.current){
    //     debugger;
    //     ScrollBarBasic.current.extension('myBasicExtension', function(defaultOptions, framework) {
    //         var osInstance = this;
    //         var extension = {};

    //         var handleElmHorizontal;
    //         var handleElmVertical;

    //         extension.added = function() {
    //             var instanceElements = osInstance.getElements();
    //             var scrollbarHorizontalHandle =
    //                 instanceElements.scrollbarHorizontal.handle;
    //             var scrollbarVerticalHandle = instanceElements.scrollbarVertical.handle;
    //             var html =
    //                 '<div style="height: 100%; width: 100%; background: red;"></div>';

    //             handleElmHorizontal = framework(html);
    //             handleElmVertical = framework(html);

    //             framework(scrollbarHorizontalHandle).append(handleElmHorizontal);
    //             framework(scrollbarVerticalHandle).append(handleElmVertical);
    //         };

    //         extension.removed = function() {
    //             handleElmHorizontal.remove();
    //             handleElmVertical.remove();
    //         };

    //         return extension;
    //     });
    // }


    return (
        <div>
            <CodeMirror
                className={className}
                onChange={onChange}
                options={{
                    mode: { name: 'javascript', json: true },
                    lineSeparator: null,
                    theme: 'default',
                    indentUnit: 2,
                    smartIndent: true,
                    tabSize: 4,
                    indentWithTabs: false,
                    electricChars: true,
                    lineNumbers: true,
                }}
                preserveScrollPosition={{
                    top: 20,
                    left:10,
                }}
                ref={CodeMirrorBox}
                value={value}
            />
            {/* {Array(1)
                .fill(0)
                .map((v, i) => (
                    <div key={i}>v</div>
                ))} */}
            <p style={{marginTop:'20px',fontWeight: 600 }}>Warning:</p>
            <Alert description={warnDescription}
                   message="Warning"
                   showIcon
                   style={{color: '#FF9600', fontWeight: 600}}
                   type="warning"
                />

            <p style={{marginTop:'20px',fontWeight: 600}}>Result:</p>
            {
                !error ? (
                    <div>
                        <ScrollBar id="roy_basic"
                                   ref={ScrollBarBasic}
                                   { ...scrollOptions }>
                            <div style={{ whiteSpace: 'nowrap', wordBreak: 'break-all' }}>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                diam nonumy eirmod
                                <br />
                                >tempor invidunt ut labore et dolore magna aliquyam erat,
                                sed diam voluptua.
                                <br />
                                At vero eos et accusam et justo duo dolores et ea rebum.
                                Stet clita kasd gubergren,
                                <br />
                                no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                <br />
                                <br />
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                diam nonumy eirmod
                                <br />
                                tempor invidunt ut labore et dolore magna aliquyam erat, sed
                                diam voluptua.
                                <br />
                                At vero eos et accusam et justo duo dolores et ea rebum.
                                Stet clita kasd gubergren,
                                <br />
                                no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                <br />
                                <br />
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                diam nonumy eirmod
                                <br />
                                tempor invidunt ut labore et dolore magna aliquyam erat, sed
                                diam voluptua.
                                <br />
                                At vero eos et accusam et justo duo dolores et ea rebum.
                                Stet clita kasd gubergren,
                                <br />
                                no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                <br />
                                <br />
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                diam nonumy eirmod
                                <br />
                                tempor invidunt ut labore et dolore magna aliquyam erat, sed
                                diam voluptua.
                                <br />
                                At vero eos et accusam et justo duo dolores et ea rebum.
                                Stet clita kasd gubergren,
                                <br />
                                no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                <br />
                                <br />
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                diam nonumy eirmod
                                <br />
                                tempor invidunt ut labore et dolore magna aliquyam erat, sed
                                diam voluptua.
                                <br />
                            </div>
                        </ScrollBar>
                        <Button
                            icon="caret-right"
                            onClick={() =>
                                ScrollBarBasic.current.addExt('myBasicExtension')
                            }
                            type="primary" >
                            Primary
                        </Button>
                        <Button
                            icon="caret-left"
                            onClick={() =>
                                ScrollBarBasic.current.removeExt('myBasicExtension')
                            }>
                            Default
                        </Button>
                    </div>
                ) : (
                    <pre className="error">{error}</pre>
                )
            }

        </div>
    );
}


