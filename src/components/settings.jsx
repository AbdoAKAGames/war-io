import { io } from 'socket.io-client'
import '../game.css'
import { useRef } from 'react';


export function Settings({ settingsContent }) {
    const title = useRef(null);
    const socket = io();
    socket.on("msg", msg => {
        title.current.textContent = msg;
    })
    return (
        <>
            <div className="settings_content item_content" ref={settingsContent}>
                <div className="settings_content_title item_content_title">
                    <div className="settings_content_title_text item_content_title_text" ref={title}>
                        SETTINGS
                    </div>
                </div>
            </div>
            </>
    )
}