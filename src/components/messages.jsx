import { useState } from 'react'
import '../game.css'
import { io } from 'socket.io-client';
import { useRef } from 'react';


export function Messages({ messagesContent }){

    const [currentChat, setCurrentChat] = useState('');

    function openWorldChat(){
        setCurrentChat('world-chat')
    }

    return (
        <>
            <div className="messages_content item_content" ref={messagesContent}>
                <div className="messages_content_title item_content_title">
                    <div className="messages_content_title_text item_content_title_text">
                        MESSAGES
                    </div>
                </div>
                <div className="messages-container">
                    <div className="messages">
                        {currentChat === 'world-chat' && <iframe src='http://127.0.0.1:5500/app/' style={{ width: 100 + '%', height: 100 + '%', border: 'none' }}></iframe>}
                        {currentChat === '' && <div className="open-world-chat" onClick={() => openWorldChat()}>
                            <button className="world-chat-btn">World Chat</button>
                        </div>}
                    </div>
                </div>
            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.7.2/socket.io.min.js"
            integrity="sha512-Xm9qbB6Pu06k3PUwPj785dyTl6oHxgsv9nHp7ej7nCpAqGZT3OZpsELuCYX05DdonFpTlBpXMOxjavIAIUwr0w=="
            crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
            <script defer src="./app.js" type="module"></script>
        </>
    )
}