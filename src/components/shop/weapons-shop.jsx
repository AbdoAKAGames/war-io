import '../../game.css'

export default function WeaponsShop({ setCurrentShopItem }) {
    return (
        <>
            <div className="weapons-shop-modal item-shop-modal">
            <div className="close" onClick={() => setCurrentShopItem('')}>
                    <img src="src/assets/X.png" alt="" className="close_img" />
                </div>
                <div className="weapons-shop item-shop">
                    <div className="weapons-shop-title item-shop-title">
                        Weapons
                    </div>
                    <div className="shop-cards-container">
                        <div className="shop-cards">
                            <div className="shop-card">
                                <div className="shop-card-name">
                                    Katana
                                </div>
                                <div className="shop-card-image legend">
                                    <img src="src/assets/katana.png" alt="gear" draggable={false} />
                                </div>
                                <div className="shop-card-price">
                                    <img src="src/assets/gems icon.png" alt="gems" className="card-price-currency" draggable={false} />
                                    50
                                </div>
                            </div>
                            <div className="shop-card">
                                <div className="shop-card-name">
                                    Tiger Karambit
                                </div>
                                <div className="shop-card-image mythic">
                                    <img src="src/assets/tiger karambit.png" alt="gear" draggable={false} />
                                </div>
                                <div className="shop-card-price">
                                    <img src="src/assets/gems icon.png" alt="gems" className="card-price-currency" draggable={false} />
                                    99999
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}