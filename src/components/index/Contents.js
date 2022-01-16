import React from 'react';


function Contents() {
    const [number, setNumber] = React.useState(0);
    const onClickHandler = (contorll) => {
        setNumber(number + contorll);
    };

    return (
        <section>
            index page
            <br/>
            {number}
            <br/>
            <button onClick={() => onClickHandler(1)}>up</button>
            <br/>
            <button onClick={() => onClickHandler(-1)}>down</button>
        </section>
    );
  }
  
  export default Contents;
  

//   class Contents extends React.Component {
//       state = {
//           number = 0,
//       }

//       onClickHandler = (contorll) => {
//         setNumber(number + contorll);
//     };

//       render() {
//           return (
//             <section>
//                 index page
//                 <br/>
//                 {number}
//                 <br/>
//                 <button onClick={() => onClickHandler(1)}>up</button>
//                 <br/>
//                 <button onClick={() => onClickHandler(-1)}>down</button>
//             </section>
//           )
//       }
//   }