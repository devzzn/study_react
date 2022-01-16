import React from 'react';

function Contents() {
    const [toggle, setToggle] = React.useState(false);
    /*
    setToggle(4)
    function(값) {
        toggle = 값;
    }
    const arr = [1,2,3,4]
    const [var1, var2, var3] = arr; 
    */

    const onClickHandler = () => {
        setToggle(!toggle);
    }; 

    return (
        <section>
            <div><button onClick={onClickHandler}>클릭</button></div>
            {
                toggle && (
                    <div>숙제를 안해왔다.</div>
                )
            }
            {
                toggle ? (
                    <div>숙제를 안해왔다.</div>
                ):(
                    <div>숙제를 해왔다.</div>
                )
            }
            
        </section>

        
    );
  }
  
  export default Contents;
  