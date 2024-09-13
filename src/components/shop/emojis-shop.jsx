import '../../game.css'

export default function EmojisShop({ setCurrentShopItem }) {
    return (
        <>
            <div className="emojis-shop-modal item-shop-modal">
            <div className="close" onClick={() => setCurrentShopItem('')}>
                    <img src="src/assets/X.png" alt="" className="close_img" />
                </div>
                <div className="emojis-shop item-shop">
                    <div className="emojis-shop-title item-shop-title">
                        Emojis
                    </div>
                    <div className="shop-cards-container">
                        <div className="shop-cards">
                            <div className="shop-card emoji-card">
                                <div className="shop-card-name">
                                    Like
                                </div>
                                <div className="shop-card-image none">
                                    <img src="src/assets/like emoji.png" alt="gear" draggable={false} />
                                </div>
                                <div className="shop-card-price">
                                    <img src="src/assets/coins icon.png" alt="coins" className="card-price-currency" draggable={false} />
                                    20
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}