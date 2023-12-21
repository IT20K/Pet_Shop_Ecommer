import './CardTrend.scss'

export default function CardTrend() {
    return (

        <>
            <div className='container' id='ContainShowItem'>
                <div className='row d-flex' id='ShowItem'>
                    <div className='column w-50' id='showItemLeft'>
                        <img className="w-100 h-100 pt-3 pb-3 object-fit-fill" src='https://ik.imagekit.io/fyhbxzra7/0f187c5649bf97ab7faac620127ff8f0.jpg?updatedAt=1702876809621'></img>
                        <div className='textShow d-flex justify-content-center w-100 h-100 align-items-center'>
                            <h2>Hat</h2>
                        </div>
                    </div>
                    <div className='column w-50' id='showItemRight'>
                        <div className='row d-flex'>
                            <div className='column w-50' id='ShowItemMiddle'>
                                <img className="w-100 h-100 pt-3 pb-3 object-fit-fill" src='https://ik.imagekit.io/fyhbxzra7/96ff91a0d762b696fb0b61cc2c8117b5.jpg?updatedAt=1702876809811'></img>
                                <div className='TextShow d-flex justify-content-center w-100 h-100 align-items-center'>
                                    <h2>Shirt</h2>
                                </div>
                            </div>
                            <div className='columnn w-50' id='ShowItemLast'>
                                <div className='row h-100'>
                                    <div className='column h-50' id='ShowItemFirstRight'>
                                        <img className="w-100 h-100 pt-3 pb-2 object-fit-contain" src='https://ik.imagekit.io/fyhbxzra7/bfe5831a6a351fdd7cd9309c1d221bb7.jpg?updatedAt=1702876992757'></img>
                                        <div className='TextShow d-flex justify-content-center w-100 h-100 align-items-center'>
                                            <h2>Trousers</h2>
                                        </div>
                                    </div>
                                    <div className='column h-50' id='ShowItemSecondRight'>
                                        <img className="w-100 h-100 pt-2 pb-3 object-fit-fill" src='https://ik.imagekit.io/fyhbxzra7/8f6902de274a91b3acac6358befabbee.jpg?updatedAt=1702876809619'></img>
                                        <div className='TextShow d-flex justify-content-center w-100 h-100 align-items-center'>
                                            <h2>Althetic Shoe</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}