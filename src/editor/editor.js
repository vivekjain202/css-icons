import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css'
import styled from 'styled-components';

const StyledMirror = styled.div`
    width: 100%;
    height: calc(100% - 60px);

    > div {
        height: 100%;
        width: 100%;
    }
`

function Editor(props) {
  const onChange =(value, viewUpdate) => {
    props.onChange(value);
  };
  return (
    <StyledMirror>
        <CodeMirror
        value={props.value}
        extensions={[html({selfClosingTags: true, matchClosingTags: true}),
            css()
        ]}
        onChange={onChange}
        theme={vscodeDark}
        minHeight={'200px'}
        height={'100%'}
        width={'100%'}
        placeholder={props.placeholder}
        />
    </StyledMirror>
  );
}
export default Editor;