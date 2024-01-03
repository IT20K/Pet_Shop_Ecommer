import './CardTrend.scss'

export default function CardTrend() {
    return (

        <>
            <div className='container' id='ContainShowItem'>
                <div className='row d-flex' id='ShowItem'>
                    <div className='column w-50' id='showItemLeft'>
                        <img className="w-100 h-100 pt-3 pb-3 object-fit-fill" src='https://ik.imagekit.io/4chk4f1pbm/download%20(1).jpg?updatedAt=1704096227425'></img>
                        <div className='textShow d-flex justify-content-center w-100 h-100 align-items-center'>
                            <h2>SAM</h2>
                        </div>
                    </div>
                    <div className='column w-50' id='showItemRight'>
                        <div className='row d-flex'>
                            <div className='column w-50' id='ShowItemMiddle'>
                                <img className="w-100 h-100 pt-3 pb-3 object-fit-fill" src='https://ik.imagekit.io/4chk4f1pbm/%E1%BA%A3nh%20file%20petshop/z4586041365894_227200202c9d6d7f83431975053262bc.jpg?updatedAt=1691490683904'></img>
                                <div className='TextShow d-flex justify-content-center w-100 h-100 align-items-center'>
                                    <h2>ALASKA</h2>
                                </div>
                            </div>
                            <div className='columnn w-50' id='ShowItemLast'>
                                <div className='row h-100'>
                                    <div className='column h-50' id='ShowItemFirstRight'>
                                        <img className="w-100 h-100 pt-3 pb-2 object-fit-contain" src='https://ik.imagekit.io/4chk4f1pbm/%E1%BA%A3nh%20file%20petshop/z4586021643711_6e9e3b3070acfec902035f3a9c3d4782.jpg?updatedAt=1691490299375'></img>
                                        <div className='TextShow d-flex justify-content-center w-100 h-100 align-items-center'>
                                            <h2>SHIBA</h2>
                                        </div>
                                    </div>
                                    <div className='column h-50' id='ShowItemSecondRight'>
                                        <img className="w-100 h-100 pt-2 pb-3 object-fit-fill" src='https://ik.imagekit.io/4chk4f1pbm/%E1%BA%A3nh%20file%20petshop/z4586023036753_0c6282324a5b9d17e203425e9170014d.jpg?updatedAt=1691490299757'></img>
                                        <div className='TextShow d-flex justify-content-center w-100 h-100 align-items-center'>
                                            <h2>HUSKY</h2>
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