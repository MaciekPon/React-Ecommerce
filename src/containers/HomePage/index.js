import { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard';
import { GridContainer, Container, ComponentWrapper, NavLink } from './styles';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      let response = await fetch(
        'https://frontend-labs.herokuapp.com/products?_sort=created_at&_limit=10'
      );
      response = await response.json();
      setProducts(response);
    };

    fetchAPI();
  }, []);
  return (
    <ComponentWrapper>
      <h1>Most recent products</h1>
      <Container>
        <GridContainer>
          {products.map((item) => {
            return (
              <NavLink to={`/product/${item.id}`} key={item.id}>
                <ProductCard
                  key={item.name}
                  width='100%'
                  height='100%'
                  image={item.image}
                  name={item.name}
                  price={item.price}
                />
              </NavLink>
            );
          })}
        </GridContainer>
      </Container>
    </ComponentWrapper>
  );
};

export default HomePage;
