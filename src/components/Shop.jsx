import { BrowserRouter } from 'react-router-dom'
import '../style.css'
import { Router } from 'react-router-dom'
import { Route } from 'react-router-dom'

export function Shop({ shop }) {
    return (
        <>
            <div className="shop-container" ref={shop}>
                <div className="shop">
                    <div className="shop-title">

                    </div>
                    <div className="shop-item">
                        <div className="shop-item-image">
                            <img src="" alt="" />
                        </div>
                        <div className="shop-item-name">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}