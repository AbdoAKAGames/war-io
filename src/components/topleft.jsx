import '../game.css'

export function TopLeft({ showProfile }){
    return (
        <>
        <div className="top_left">
                <div className="profile_guest" onClick={() => showProfile()}>
                    <div className="profile_guest_img_container">
                        <img className="profile_guest_img" src="../src/assets/profile.png" draggable="false" />
                    </div>
                </div>
                <div className="name_level_container">
                    <div className="name_container">
                        <div className="name_text_container">
                            <div className="name_text">
                                NAME: <div className="myname">{localStorage.getItem("name")}</div>
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
        </>
    )
}