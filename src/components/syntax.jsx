import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const SyntaxComponent = () => {
    const codeString = `  
        render() {
            return (
                <div className='directory-menu'>
                    {this.state.section.map(({ id, ...otherSectionProps }) => (
                        <MenuItem key={id} {...otherSectionProps} />
    
                    ))}
                </div>
            )
        }
    }`;
    return (
        <SyntaxHighlighter language="javascript" style={docco}>
            {codeString}
        </SyntaxHighlighter>
    );
};

export default SyntaxComponent;