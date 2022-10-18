import React, { useContext } from 'react';
import ProductsItem from '../components/ProductsItem';
import { AppContext } from '../providers/Index';

const Market = () => {
    const useAppContext = useContext(AppContext)
    const { products, activeCat } = useAppContext;
    const renderProducts = () => {
        var dataS;
        if (activeCat.key === 'all') {
            dataS = products;
        }
        else {
            dataS = products && products.filter(item => item.categoryKey.includes(activeCat.key));
        }
        return dataS && dataS.map(product => <div key={product.key} className="ant-col ant-col-md-8 ant-col-xl-6" style={{ padding: 12 }}>
            <article title={product.name} className="Card-gwofcb-0 MarketItem__Container-rr0c4s-0 gpLETI">
                <div className="CardLink__Container-dqor2y-0 jRvebg">
                    <div className="MarketItem__CardLinkContent-rr0c4s-3 hZWvVs">
                        <ProductsItem product={product}></ProductsItem>
                    </div>
                </div>
            </article>
        </div>)
    }


    return (

        <>
            <div className="PageHeader__Container-sc-19x4r8h-1 fVgVuB">
                <h2 className="PageHeader__Header-sc-19x4r8h-0 jTfioR">{activeCat.key == 'all' ? 'Chợ' : activeCat.name}</h2>
            </div>
            <div className="ant-row MarketPage__ProductListRow-x35qcj-4 eUijMD" style={{ margin: '-12px' }}>
                {renderProducts()}
            </div>

        </>
    );
}

export default Market;
