import React, { useRef } from 'react';
import ScrollBar from 'react-overlayscrollbars';
import { Button } from 'antd';

import CodeMirror from '@/common/CodeMirror';

import './basic.scss';

export default function Basic() {
    const ScrollBarBasic = useRef(null);
    const CodeMirrorBox = useRef(null);
    CodeMirrorBox.change();
    return (
        <div>
            <CodeMirror
                ref={CodeMirrorBox}
                value={
                    '{\n\tclassName     : "os-theme-dark",\n\tresize       : "both",\n\tsizeAutoCapable : true,\n\tpaddingAbsolute : true,\n\tscrollbars : {\n\t\tclickScrolling : true\n\t}\n}'
                }
            />
            {Array(1)
                .fill(0)
                .map((v, i) => (
                    <div key={i}>v</div>
                ))}
            <ScrollBar
                className="roy_basic os-theme-dark"
                id="roy_sss"
                overflow-behavior={{ x: 'hidden' }}
                paddingAbsolute={true}
                ref={ScrollBarBasic}
                resize="both"
                scrollbars={{ autoHide: 'l' }}
                sizeAutoCapable={true}
                style={{ background: 'white' }}
            >
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
                type="primary"
            >
                Primary
            </Button>
            <Button
                icon="caret-left"
                onClick={() =>
                    ScrollBarBasic.current.removeExt('myBasicExtension')
                }
            >
                Default
            </Button>
        </div>
    );
}

ScrollBar.extension('myBasicExtension', function(defaultOptions, framework) {
    var osInstance = this;
    var extension = {};

    var handleElmHorizontal;
    var handleElmVertical;

    extension.added = function() {
        var instanceElements = osInstance.getElements();
        var scrollbarHorizontalHandle =
            instanceElements.scrollbarHorizontal.handle;
        var scrollbarVerticalHandle = instanceElements.scrollbarVertical.handle;
        var html =
            '<div style="height: 100%; width: 100%; background: red;"></div>';

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
