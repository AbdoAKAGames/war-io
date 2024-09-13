import '../game.css'

export function Currency(){

    return (
        <>
        <div className="currency">
                <div className="gems_currency">
                    <div className="gems_icon_container">
                        <img src="../src/assets/gems icon.png" className="gems_icon shimmer" draggable="false" />
                    </div>
                    <div className="gems_currency_count_container">
                        <div className="gems_currency_count">
                            {localStorage.gems ? localStorage.gems : 0}
                        </div>
                    </div>
                </div>
                <div className="coins_currency">
                    <div className="coins_icon_container">
                        <img src="../src/assets/coins icon.png" className="coins_icon shimmer" draggable="false" />
                    </div>
                    <div className="coins_currency_count_container">
                        <div className="coins_currency_count">
                            {localStorage.coins ? localStorage.coins : 0}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}