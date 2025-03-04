"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import ChildComponent from "./components/ChildComponent";
import ProductCard from "./components/ProductCard";

// export const metadata = {
//   title: "Cửa hàng bánh ngọt Becky",
//   description: "Generated by create next app",
// };

export default function Home() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("Áo thun");
  const [dataHot, setDataHot] = useState([]);
  const [data, setData] = useState([]);

  const [dataNew, setDataNew] = useState([]);
  const [dataView, setDataView] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      let url = "http://localhost:3000";
      if (category !== "") {
        url = `http://localhost:3000/category/name/${category}`;
      }
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data); 
    };

    fetchProducts();
  }, [category]);

  useEffect(() => {
    const fetchData = async () => {
      const resHot = await fetch("http://localhost:3000/products/hot");
      const dataHot = await resHot.json();
      setDataHot(dataHot);

      const resNew = await fetch("http://localhost:3000/products/new");
      const dataNew = await resNew.json();
      setDataNew(dataNew);

      const resView = await fetch("http://localhost:3000/products/view");
      const dataView = await resView.json();
      setDataView(dataView);

      const resData= await fetch("http://localhost:3000/products/all");
      const data= await resData.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <>
    <div>
 

    <div className="products-new">
      <div className="col-catalog">
        <div className="name-catalog">Sản phẩm mới nhất</div>
      </div>
      <div className="list-products" id="showSpNew">
        <ProductCard data={dataNew}></ProductCard>
      </div>
    </div>
    <div className="products-new">
    <div className="col-catalog">
      <div className="name-catalog">Tất cả sản phẩm</div>
    </div>
    <div className="list-products" id="showSpNew">
      <ProductCard data={data}></ProductCard>
    </div>
  </div>

  

   
  </div>
    </>
  );
}
