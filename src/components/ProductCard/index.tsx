import styles from './product-card.module.scss';

interface ProductCardProps {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}
export default function ProductCard({ name, description, price, imageUrl }: ProductCardProps){
    return (
        <div className={styles.productCard}>
            <img
                src={imageUrl}
                alt={name}
                className={styles.productImage}
            />
            <div className={styles.productInfo}>
                <div className={styles.content}>
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <span className={styles.price}>R$ {price.toFixed(2)}</span>
                </div>
                <button className={styles.addToCartButton}>Adicionar ao carrinho</button>
            </div>
        </div>

    );
}