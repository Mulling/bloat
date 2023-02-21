import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { gruvboxDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const Code = ({ codeString }: { codeString: string }) => {
    return (
        <SyntaxHighlighter language='cpp' style={gruvboxDark} showLineNumbers wrapLongLines>
            {codeString}
        </SyntaxHighlighter>
    );
};
