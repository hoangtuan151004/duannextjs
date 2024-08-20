import React from "react";
import Link from "next/link";

function ProductCard(props) {
   // Đặt giá trị mặc định cho props.data để đảm bảo nó là một mảng
  const data = props.data || [];

  // Kiểm tra nếu data là một mảng trước khi sử dụng map
  if (!Array.isArray(data)) {
    console.error('props.data không phải là một mảng:', data);
    return null;
  }
  return (
    <>
      {props.data.map((product) => {
        const { _id, name, img, img2, price } = product;
        return (
          <>
            <div className="col-4" key={_id}>
              <div className="img-product">
                <img src={`http://localhost:3000/images/${img}`} />
                <img
                  src={`http://localhost:3000/images/${img}`}
                  className="hover-image"
                  alt=""
                />
              </div>
              <div className="text">
                <div className="name-product">{name}</div>
                <div className="price-product">
                  {price.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </div>
              </div>

              <div className="btn-product">
                <a href={`/chitiet/${_id}`} className="view">
                  Mua ngay
                </a>
                <a href="#" className="add">
                  Thêm
                </a>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default ProductCard;
