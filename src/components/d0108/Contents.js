import React from 'react';
import { Link } from 'react-router-dom';

function Contents() {
    const [text, setText] = React.useState('');
    const [todos, setTodos] = React.useState([]);
    const $id = React.useRef(0);

    const onCreateHandler = () => {
        setTodos([...todos, {
            id: $id.current++,
            text,
            date: new Date()
        }]);
        setText('');
        console.log('dd');
    }

    // 뷰에서는 양방향 바인딩 되지만, 리액튼는 안됨
    const onChangeHandler = (e) => {
        setText(e.target.value);
    }

    const dateParser = (date) => {
        return `${date.getFullYear()} ${date.getMonth() + 1}`;
    }

    const onDeleteHandler = (deleteId) => {
        setTodos(todos.filter(({id}) => {
            return id !== deleteId;
        }));
    }

    return (
        <section>
            <div>
                <input type="text" onChange={onChangeHandler} value={text}/>
                <button onClick={onCreateHandler}>입력</button>
            </div>
            <div>
                <ul>
                    {
                        todos.map( ({id, text, date}) =>
                            <li key={`todo_${id}`}>{text} {dateParser(date)}<button onClick={() => {onDeleteHandler(id)}}>삭제</button></li>
                        )
                    }
                    
                </ul>
            </div>

            
        
        </section>
    );
}

export default Contents;