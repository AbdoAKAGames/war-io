import '../../game.css'

export default function SkinsShop({ setCurrentShopItem }) {
    return (
        <>
            <div className="skins-shop-modal item-shop-modal">
            <div className="close" onClick={() => setCurrentShopItem('')}>
                    <img src="src/assets/X.png" alt="" className="close_img" />
                </div>
                <div className="skins-shop item-shop">
                    <div className="skins-shop-title item-shop-title">
                        Skins
                    </div>
                    <div className="shop-cards-container">
                        <div className="shop-cards">
                            <div className="shop-card skin-card">
                                <div className="shop-card-name">
                                    Flowers
                                </div>
                                <div className="shop-card-image common">
                                    <img src="src/assets/flowers.png" alt="gear" draggable={false} />
                                </div>
                                <div className="shop-card-price">
                                    <img src="src/assets/gems icon.png" alt="gems" className="card-price-currency" draggable={false} />
                                    10
                                </div>
                            </div>
                            <div className="shop-card skin-card">
                                <div className="shop-card-name">
                                    Sunny
                                </div>
                                <div className="shop-card-image uncommon">
                                    <img src="src/assets/sunny.png" alt="gear" draggable={false} />
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