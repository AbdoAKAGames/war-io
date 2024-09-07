import '../game.css'

export function LeftSidebar({ showGear, showPlay, showClans, showEvents, showMessages, showSettings }){
    return (
        <>
        <div className="left_sidebar">
                <div className="left_sidebar_container">
                    <div className="left_sidebar_gear left_sidebar_item" onClick={() => showGear()}>
                        <div className="left_sidebar_gear_container left_sidebar_item_container">
                            <div className="left_sidebar_gear_image_container left_sidebar_item_image_container">
                                <img className="left_sidebar_gear_image left_sidebar_item_image" src="../assets/gear.png" draggable="false" />
                            </div>
                            <div className="left_sidebar_gear_text_container left_sidebar_item_text_container">
                                <div className="left_sidebar_gear_text left_sidebar_item_text">
                                    GEAR
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="left_sidebar_play left_sidebar_item" onClick={() => showPlay()}>
                        <div className="left_sidebar_play_container left_sidebar_item_container">
                            <div className="left_sidebar_play_image_container left_sidebar_item_image_container">
                                <img className="left_sidebar_play_image left_sidebar_item_image" src="../assets/play.png" draggable="false" />
                            </div>
                            <div className="left_sidebar_play_text_container left_sidebar_item_text_container">
                                <div className="left_sidebar_play_text left_sidebar_item_text">
                                    PLAY
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="left_sidebar_clans left_sidebar_item" onClick={() => showClans()}>
                        <div className="left_sidebar_clans_container left_sidebar_item_container">
                            <div className="left_sidebar_clans_image_container left_sidebar_item_image_container">
                                <img className="left_sidebar_clans_image left_sidebar_item_image" src="../assets/clans.png" draggable="false" />
                            </div>
                            <div className="left_sidebar_clans_text_container left_sidebar_item_text_container">
                                <div className="left_sidebar_clans_text left_sidebar_item_text">
                                    CLANS
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="left_sidebar_events left_sidebar_item" onClick={() => showEvents()}>
                        <div className="left_sidebar_events_container left_sidebar_item_container">
                            <div className="left_sidebar_events_image_container left_sidebar_item_image_container">
                                <img className="left_sidebar_events_image left_sidebar_item_image" src="../assets/events.png" draggable="false" />
                            </div>
                            <div className="left_sidebar_events_text_container left_sidebar_item_text_container">
                                <div className="left_sidebar_events_text left_sidebar_item_text">
                                    EVENTS
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="left_sidebar_messages left_sidebar_item" onClick={() => showMessages()}>
                        <div className="left_sidebar_messages_container left_sidebar_item_container">
                            <div className="left_sidebar_messages_image_container left_sidebar_item_image_container">
                                <img className="left_sidebar_messages_image left_sidebar_item_image" src="../assets/messages.png" draggable="false" />
                                <div className="messages_notifications">
                                    <div className="messages_notifications_container">
                                        <div className="red_circle">
                                            <div className="messages_notifications_number">1</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="left_sidebar_messages_text_container left_sidebar_item_text_container">
                                <div className="left_sidebar_messages_text left_sidebar_item_text">
                                    MESSAGES
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="left_sidebar_settings left_sidebar_item" onClick={() => showSettings()}>
                        <div className="left_sidebar_settings_container left_sidebar_item_container">
                            <div className="left_sidebar_settings_image_container left_sidebar_item_image_container">
                                <img className="left_sidebar_settings_image left_sidebar_item_image" src="../assets/settings.png" draggable="false" />
                            </div>
                            <div className="left_sidebar_settings_text_container left_sidebar_item_text_container">
                                <div className="left_sidebar_settings_text left_sidebar_item_text">
                                    SETTINGS
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
