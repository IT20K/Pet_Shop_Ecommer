import Header from '../../Headers/header/header';
import Footer from '../../Footers/footer/footer';
import Carousels from '../../Bodys/Carousel/Carousel';
import Card from '../../Bodys/Card/Card';
import CardTrend from '../../Bodys/CardTrend/CardTrend';
export default function HomePages() {
    return (
        <>
            <Header />
            <div className='container'>
                <div className='row'>
                    <CardTrend/>
                    <Carousels />
                    <Card />
                </div>
            </div>
            <Footer />
        </>
    )
}