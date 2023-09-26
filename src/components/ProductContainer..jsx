import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductContainer.styles.scss";
import axios from "axios";
import Spinner from "./Spinner";

function Products() {
  const [products, setProducts] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const productsPerPage = 12;

  useEffect(() => {
    // Calculate the `skip` value based on the current page number and items per page
    const skip = (currentPage - 1) * productsPerPage;

    setIsLoading(true);
    // Make an API request to fetch data for the current page using `skip` and `limit`
    axios
      .get(
        `https://dummyjson.com/products?skip=${skip}&limit=${productsPerPage}`
      )
      .then((response) => {
        return setProducts(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [currentPage]);

  return (
    <div>
      {isLoading ? (
        <div className="spinner-container">
          <Spinner />
        </div>
      ) : (
        <div className="pagination-example-container">
          <div className="product-container">
            {products &&
              products.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
          </div>
          <div className="pagination-container">
            <button
              className="pagination-button"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>Page {currentPage}</span>
            <button
              className="pagination-button"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={products && products.length < productsPerPage}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
