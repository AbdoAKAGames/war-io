import '../../game.css'

export default function HandsShop({ setCurrentShopItem }) {
    return (
        <>
            <div className="hands-shop-modal item-shop-modal">
            <div className="close" onClick={() => setCurrentShopItem('')}>
                    <img src="src/assets/X.png" alt="" className="close_img" />
                </div>
                <div className="hands-shop item-shop">
                    <div className="hands-shop-title item-shop-title">
                        Hands
                    </div>
                    <div className="shop-cards-container">
                        <div className="shop-cards">
                            <div className="shop-card hand-card">
                                <div className="shop-card-name">
                                    none
                                </div>
                                <div className="shop-card-image common">
                                    <img src="src/assets/basic_hand.png" alt="gear" draggable={false} />
                                </div>
                                <div className="shop-card-price">
                                    <img src="src/assets/gems icon.png" alt="gems" className="card-price-currency" draggable={false} />
                                    10
                                </div>
                            </div>
                            <div className="shop-card hand-card">
                                <div className="shop-card-name">
                                    Bunny Gloves
                                </div>
                                <div className="shop-card-image uncommon">
                                    <img src="src/assets/basic_hand.png" alt="gear" draggable={false} />
                                </div>
                                <div className="shop-card-price">
                                    <img src="src/assets/gems icon.png" alt="gems" className="card-price-currency" draggable={false} />
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