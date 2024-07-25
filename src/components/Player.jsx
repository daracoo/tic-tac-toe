import { useState } from "react";

export default function Player({initialName, symbol}){
    const [playerName, setPlayerName] = useState(initialName);    
    const[ isEditing , setIsEdit] = useState(false);

    function handleClick(){

        setIsEdit((isEditing) => !isEditing);
        
    }

    function handleChange(event){
        console.log(event);
        setPlayerName(() => event.target.value);
    }


    return (
        <li>
            <span className="player">
                {isEditing ? <input type="text" required value={playerName} onChange={handleChange}></input> : <span className="player-name">{playerName}</span>}
                
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
      </li>
    );
}