import React from 'react';

// function Contents() {
//     const [text, setText] = React.useState('');
//     const [displayText, setDisplayText] = React.useState('');
//     const $input = React.useRef();


//     const onClickCopy = () => {
//         setDisplayText( $input.current.value);
//     };
//     return (
//         <section>
//                 <input type="text" ref={$input} />
//             <button onClick={onClickCopy}>클릭</button>
//             {
//                 <div>{displayText}</div>
//             }
//         </section>

        
//     );
//   }

function Contents() {
    const [text, setText] = React.useState('');
    const [displayText, setDisplayText] = React.useState('');

    const onClickHanlder = () => {
        setDisplayText(text);
    };

    const onChangeHandler = (e) => {
        setText(e.target.value);
    };

    return (
        <section>
                <input type="text" onChange={onChangeHandler} />
            <button onClick={onClickHanlder}>클릭</button>
            {
                <div>{displayText}</div>
            }
        </section>

        
    );
  }
  
  export default Contents;
  