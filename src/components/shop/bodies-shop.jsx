import '../../game.css'

export default function BodiesShop({ setCurrentShopItem }) {
    return (
        <>
            <div className="bodies-shop-modal item-shop-modal">
            <div className="close" onClick={() => setCurrentShopItem('')}>
                    <img src="src/assets/X.png" alt="" className="close_img" />
                </div>
                <div className="bodies-shop item-shop">
                    <div className="bodies-shop-title item-shop-title">
                        Bodies
                    </div>
                    <div className="shop-cards-container">
                        <div className="shop-cards">
                            <div className="shop-card body-card">
                                <div className="shop-card-name">
                                    White
                                </div>
                                <div className="shop-card-image common">
                                    <img src="src/assets/white.png" alt="gear" draggable={false} />
                                </div>
                                <div className="shop-card-price">
                                    <img src="src/assets/gems icon.png" alt="gems" className="card-price-currency" draggable={false} />
                                    10
                                </div>
                            </div>
                            <div className="shop-card body-card">
                                <div className="shop-card-name">
                                    Grey
                                </div>
                                <div className="shop-card-image uncommon">
                                    <img src="src/assets/grey.png" alt="gear" draggable={false} />
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