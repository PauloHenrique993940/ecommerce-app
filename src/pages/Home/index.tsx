import Header from '../../components/Header';
import style from './home.module.scss';
import heroPc from '../../assets/heropc.jpg';


function Home(){
    return (
        <div className={style.container}>
            <Header />
            <div className={style.banner} style={{ backgroundImage: `url(${heroPc})` }}>
                <h1>Bem Vindo a nossa loja</h1>
            </div>
        </div>
    );
}

export default Home;