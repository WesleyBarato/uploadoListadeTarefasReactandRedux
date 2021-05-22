import React, { useRef, useEffect } from 'react';

const TodoItem = (props) => {
    const {item, updateTodo, removeTodo, completeTodo,} = props;

        useEffect(() => {
            localStorage.setItem('item', JSON.stringify(item))
        }, [item]);
    
    const inputRef = useRef(true);

    const changeFocus = () => {
        inputRef.current.disable = false;
        inputRef.current.focus();
    };

    const update = (id,value,e) => {

        if(e.which === 13){
            
            updateTodo({id, item:value});
            inputRef.current.disabled = true;

        }
    };
    //onde vai aparecer a informação, formato de card e os botões
    return (
        <li key={item.id} className="card">
                    <textarea 
                        ref={inputRef} 
                        disable={inputRef}
                        defaultValue={item.item}
                        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
                    />
                    
                    <div className="btns">
                    <button className="edit-btn" onClick={() => changeFocus()}>Editar</button>
                    {item.completed === false && (<button onClick={() => completeTodo(item.id)}>Concluído</button>)}  
                    <button onClick={() => removeTodo(item.id) }>Remover</button>
                    </div>
                    {item.completed && <span className="completed">Feito</span>} 
                    </li>
    )
}

export default TodoItem