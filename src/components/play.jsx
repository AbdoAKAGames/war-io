import { useRef, useState } from 'react'
import '../game.css'
import { Shop } from './Shop';
export function Play({ playContent, creditsText, credits, isShop, setIsShop }){
    const trainingModeRef = useRef(null);
    const nameRef = useRef(null);
    

    return (
        <>
            <div className="play_content item_content" ref={playContent}>
                <div className="play_content_title item_content_title">
                    <div className="play_content_title_text item_content_title_text">
                        PLAY
                    </div>
                </div>
                <div className="play_content_container">
                    <div className="shopBtn" onClick={() => setIsShop(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 600" fill='white'><path d="M36.8 192l566.3 0c20.3 0 36.8-16.5 36.8-36.8c0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0L121.7 0c-16 0-31 8-39.9 21.4L6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192zM64 224l0 160 0 80c0 26.5 21.5 48 48 48l224 0c26.5 0 48-21.5 48-48l0-80 0-160-64 0 0 160-192 0 0-160-64 0zm448 0l0 256c0 17.7 14.3 32 32 32s32-14.3 32-32l0-256-64 0z"/></svg> Shop
                    </div>
                    <div className="gameplay_content">
                        <div className="name_input_container">
                            <input type="text" id="name_input" defaultValue={localStorage.getItem('gameplay-name') ? localStorage.getItem('gameplay-name') : 'Player ' + Math.floor(Math.random() * 30)} ref={nameRef} maxLength={12} placeholder="name" onKeyUp={e => localStorage.setItem('gameplay-name', e.target.value)} />
                        </div>
                        <div className="party_btns">
                            <button className="create_party_btn party_btn">
                                CREATE PARTY
                            </button>
                            <button className="join_party_btn party_btn">
                                JOIN PARTY
                            </button>
                        </div>
                        <div className="start_play_btn_container">
                            <button className="start_play_btn play_btn">
                                PLAY
                            </button>
                        </div>
                        <div className="training_mode_btn_container">
                            <button className="training_mode_btn play_btn" onClick={() => trainingModeRef.current.style.display = 'flex'}>
                                TRAINING MODE
                            </button>
                        </div>
                    </div>
                    <div className="training_mode_container" ref={trainingModeRef}>
                        <div className="training_options_container">
                            <div className="training_options_header">
                                Choose A Mode For Training
                            </div>
                            <div className="easy_training_mode training_mode">
                                <div className="easy_training_mode_button_container training_mode_button_container">
                                    <button className="easy_training_mode_button training_mode_button">
                                        Easy
                                    </button>
                                </div>
                                <div className="easy_training_mode_explanation training_mode_explanation">
                                    Easy Mode Has Bots With Low Speed.
                                    <br />
                                    You Must Kill Them Before Time End.
                                    <br />
                                    <span>Time Is 3:00.</span>
                                </div>
                            </div>
                            <div className="normal_training_mode training_mode">
                                <div className="normal_training_mode_button_container training_mode_button_container">
                                    <button className="normal_training_mode_button training_mode_button">
                                        Normal
                                    </button>
                                </div>
                                <div className="normal_training_mode_explanation training_mode_explanation">
                                    Normal Mode Has Bots With Normal Speed.
                                    <br />
                                    You Must Kill Them Before Time End.
                                    <br />
                                    <span>Time Is 2:00.</span>
                                </div>
                            </div>
                            <div className="hard_training_mode training_mode">
                                <div className="hard_training_mode_button_container training_mode_button_container">
                                    <button className="hard_training_mode_button training_mode_button">
                                        Hard
                                    </button>
                                </div>
                                <div className="hard_training_mode_explanation training_mode_explanation">
                                    Hard Mode Has Bots With Fast Speed.
                                    <br />
                                    You Must Kill Them Before Time End.
                                    <br />
                                    <span>Time Is 1:00.</span>
                                </div>
                            </div>
                        </div>
                        <div className="close">
                            <img src="src/assets/X.png" className="close_img" onClick={() => trainingModeRef.current.style.display = 'none'} />
                        </div>
                    </div>
                    <div className="credits_text_container" ref={creditsText} onClick={() => credits.current.style.display = 'flex'}>
                        <div className="credits_text">
                            <span>CREDITS</span>
                        </div>
                    </div>
                </div>
            {isShop && <Shop setIsShop={setIsShop} />}
            </div>
        </>
    )
}