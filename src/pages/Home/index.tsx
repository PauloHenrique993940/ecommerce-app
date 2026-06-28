import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import style from './home.module.scss';



function Home(){
    return (
        <div className={style.container}>
            <Header />
            <div className={style.banner}>
                <h1>E-commerce Developer</h1>
            </div>
            <div className={style.products}>
                <ProductCard
                    id={'1'}
                    name={'Camisa Dev'}
                    description={'Camisa desenvolvedor'}
                    price={199.99}
                    imageUrl={
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyf_4ueJCb5Qo3cisFx-mFTk3PEfLgdHyR0qrI3ikQ4g&s=10'
                    }
                />
                <ProductCard
                    id={'2'}
                    name={'Camisa Moleton'}
                    description={'Camisa Moleton Fullstack'}
                    price={19.99}
                    imageUrl={
                        'https://gcp-images.majestic.ink.rsvcloud.com/images/product_v2/main_image/08063f029623ebebe2628acbbfd9ba35.webp'
                    }
                />
                <ProductCard
                    id={'3'}
                    name={'Tênis Dev'}
                    description={'Tênis desenvolvedor'}
                    price={30}
                    imageUrl={
                        'https://gcp-images.majestic.ink.rsvcloud.com/images/product_v2/main_image/6a882f9fe6ae77eeed8b426c72ddcddb.webp'
                    }
                />
                <ProductCard
                    id={'4'}
                    name={'Boné Dev'}
                    description={'Boné desenvolvedor'}
                    price={49.99}
                    imageUrl={
                        'https://gcp-images.majestic.ink.rsvcloud.com/images/product_v2/main_image/6a882f9fe6ae77eeed8b426c72ddcddb.webp'
                    }
                />
                <ProductCard
                    id={'5'}
                    name={'Mochila Dev'}
                    description={'Mochila desenvolvedor'}
                    price={50}
                    imageUrl={
                        'https://gcp-images.majestic.ink.rsvcloud.com/images/product_v2/main_image/6a882f9fe6ae77eeed8b426c72ddcddb.webp'
                    }
                />
                <ProductCard
                    id={'5'}
                    name={'Mochila Dev'}
                    description={'Mochila desenvolvedor'}
                    price={50}
                    imageUrl={
                        'https://gcp-images.majestic.ink.rsvcloud.com/images/product_v2/main_image/6a882f9fe6ae77eeed8b426c72ddcddb.webp'
                    }
                />
            </div>
        </div>
    );
}

export default Home;