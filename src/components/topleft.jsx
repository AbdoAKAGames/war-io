import { useState, useRef } from 'react'
import '../game.css'

export function TopLeft({ showProfile }){
    const [editName, setEditName] = useState(false);
    const newNameRef = useRef(null);


    function edit() {
        const newName = newNameRef.current.value;
        if (JSON.parse(localStorage.getItem("gems")) >= 50 && (newName.length > 0 && !newName.startsWith(' '))) {
            localStorage.setItem("gems", JSON.parse(localStorage.getItem("gems")) - 50);
            localStorage.setItem("name", newName);
            setEditName(false);
            document.getElementsByClassName("gems_currency_count")[0].innerHTML = localStorage.gems
        }
    }

    return (
        <>
        <div className="top_left">
                <div className="profile_guest" onClick={() => showProfile()}>
                    <div className="profile_guest_img_container">
                        <img className="profile_guest_img" src="src/assets/profile.png" draggable="false" />
                    </div>
                </div>
                <div className="name_level_container">
                    <div className="name_container">
                        <div className="name_text_container">
                            <div className="name_text">
                                NAME: <div className="myname">{localStorage.getItem("name")} <button className="edit-name" onClick={() => setEditName(true)}>Edit</button></div>
                            </div>
                        </div>
                    </div>
                    <div className="level_container">
                        <div className="level_text_container">
                            <div className="level_text">
                                LV.<div className="mylevel">{localStorage.getItem("level")}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {editName && <div className="edit-name-modal">
                <div className="close" onClick={() => setEditName(false)}>
                    <img src="src/assets/X.png" alt="" className="close_img" />
                </div>
                <div className="edit-name-title">
                    Edit Your Name
                </div>
                <div className="edit-name-container">
                    <div className="edit-name-form">
                        <input type="text" className="new-name-input" maxLength={15} placeholder="New username..." ref={newNameRef} />
                        <button className="create-new-name" onClick={() => edit()}>Edit <span style={{color: 'transparent'}}>x</span> <samp style={{fontSize: '20px'}}>50<img src="src/assets/gems icon.png" width={20} height={20} /></samp></button>
                    </div>
                </div>
            </div>}
        </>
    )
}
