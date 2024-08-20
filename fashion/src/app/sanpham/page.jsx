"use client";
import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

export default function Products({ params }) {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all"); // Set default category to "Mousse"
  const [productSearch, setProductSearch] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState(params.name || ""); // params lấy name trên url

  useEffect(() => {
    const fetchSearchProducts = async () => {
      if (searchKeyword) {
        const res = await fetch(
          `http://localhost:3000/products/search/name/${searchKeyword}`
        );
        const data = await res.json();
        setProductSearch(data);
      }
    };

    fetchSearchProducts();
  }, [searchKeyword]);

  useEffect(() => {     
    const fetchProducts = async () => {
      let url = "http://localhost:3000/products/all";
      if (category !== "all") {
        url = `http://localhost:3000/category/name/${category}`;
      }
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, [category]);

  return (
    <>


      <div className="list-product__main">
        <div className="list-product__left">
          <div className="list-product__left-aside">Danh mục sản phẩm</div>
          <ul className="navbar-aside">
            <li onClick={() => setCategory("all")}>
              <a className="navbar-link">Tất cả</a>
            </li>
            <li className="navbar-list" onClick={() => setCategory("Quần")}>
              <a className="navbar-link">Quần</a>
            </li>
          
            <li className="navbar-list" onClick={() => setCategory("Áo")}>
              <a className="navbar-link">Áo</a>
            </li>
            <li className="navbar-list" onClick={() => setCategory("Nón")}>
              <a className="navbar-link">Nón</a>
            </li>
          </ul>

          <div className="list-product__left-aside">Tìm kiếm sản phẩm</div>
          <form className="search-form" action="/timkiem">
            <input
              className="search-input"
              name="keyword"
              placeholder="Nhập tên sản phẩm"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <button className="search-button" type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>

        <div className="list-product__right">
          <div className="sort-options">
            <label htmlFor="sort">Sắp xếp theo:</label>
            <select id="sort">
              <option value="default">Mặc định</option>
              <option value="asc">Giá tăng dần</option>
              <option value="desc">Giá giảm dần</option>
            </select>
          </div>

          {searchKeyword && (
            <>
              <h3>Kết quả tìm kiếm cho từ khóa: {searchKeyword}</h3>
              <div className="list-products">
                <ProductCard data={productSearch} />
              </div>
            </>
          )}

          <div className="list-products">
            <ProductCard data={products}></ProductCard>
          </div>
        </div>
      </div>
    </>
  );
}
