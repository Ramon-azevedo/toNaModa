import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from './ProductCard.module.scss';
import { useParams } from "react-router-dom";

// Definição do tipo de Produto
interface Product {
  id: number;
  imagem: string;
  nome: string;
  preco: string;
  vezesCartao: string;
}

const ProductCard: React.FC = () => {
  const { id } = useParams(); // Captura o ID da URL
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:8080/feminino/getFemininoId/${id}`) // Faz a requisição com o ID capturado
        .then((response) => {
          setProduct(response.data);
        })
        .catch((err) => {
          setError("Erro ao carregar os dados do produto.");
          console.error(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  return (
    <div className={styles.productCard}>
      {product ? (
        <div className={styles.cardContainer}>
          <div className={styles.imageContainer}>
            <img
              src={product.imagem}
              alt={product.nome}
              className={styles.productImage}
            />
          </div>
          <div className={styles.productDetails}>
            <h2 className={styles.productName}>{product.nome}</h2>
            <p className={styles.productPrice}>{product.preco}</p>
            <p className={styles.productSize}>Tamanho: {product.vezesCartao}</p>
            <div className={styles.buySection}>
              <button className={styles.buyButton}>Comprar</button>
              <p className={styles.paymentInfo}>
                Em até 6x de R$ {parseFloat(product.preco.replace("R$", "").trim()) / 6} no cartão
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p>Produto não encontrado.</p>
      )}
    </div>
  );
};

export default ProductCard;
