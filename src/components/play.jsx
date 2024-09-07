import { useRef } from 'react'
import '../game.css'

export function Play({ playContent, creditsText, credits }){
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
                        </div>
        </>
    )
}