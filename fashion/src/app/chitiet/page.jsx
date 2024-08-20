export default function Detail() {
  return (
    <>
      <div class="small-container single-product">
        <div class="roww">
          <div class="col-22">
            <img src="images/mou1.jpg" alt />
            <img src alt id="image" />
            <div class="small-img-row">
              <div class="small-img-col">
                <img
                  src="images/mou1-2.jpg"
                  alt
                  width="100%"
                  class="small-img"
                />
              </div>
            </div>
          </div>
          <div class="col-22">
            <p id="category">Home / T-Shirt</p>
            <h1 id="name">Mousse xoài</h1>
            <h4 id="price">50000</h4>
            <span>Size : </span>
            <select name id>
              <option value>Size</option>
              <option value>S</option>
              <option value>M</option>
              <option value>L</option>
              <option value>XL</option>
            </select>
            <span>Số lượng: </span>
            <input type="number" value="1" />
            <div class="bnt-cart-right">
              <a href="./checkout.html">
                <button>Thêm vào giỏ hàng</button>
              </a>
            </div>
            <h3>
              Mô tả sản phẩm: <i class="fa fa-indent"></i>
            </h3>

            <p>Còn : </p>
            <p id="description">
              Với Blueberry Mousse, vị chua tinh tế, dìu dặt của trái việt quất,
              dâu tằm kết hợp cùng vị béo nhẹ nhàng của CreamCheese cao cấp sẽ
              là hương vị chủ đạo nhưng sự đặc biệt của chiếc bánh này. Không
              dừng lại ở đó, ẩn giấu bên trong vẻ ngoài hấp dẫn ấy là từng lớp
              hương vị nằm đan xen vào nhau với Sữa Chua Hy Lạp thơm béo kết hợp
              cùng một lớp mỏng là mứt các loại berry tươi được nấu thủ công và
              đế bánh gato chocolat
            </p>
          </div>
        </div>
      </div>
      <div class="product">
        <div class="col-catalog-product">
          <div class="img-catalogg">
            <img src="images/bake.png" alt />
          </div>
          <div class="name-catalog">Sản phẩm liên quan</div>
        </div>
        <div class="your-product">
          <div class="list-products" id="showSpView">
            <div class="col-4">
              <div class="img-product">
                <img src="images/bn1.jpg" alt="" />
                <img src="images/bn1.jpg" class="hover-image" alt="" />
              </div>
              <div class="text">
                <div class="name-product">Macaron vani</div>
                <div class="price-product">450.000</div>
              </div>
              <div class="btn-product">
                <a href="#" class="view">
                  Mua ngay
                </a>
                <a href="#" class="add">
                  Thêm
                </a>
              </div>
            </div>
            <div class="col-4">
              <div class="img-product">
                <img src="images/bn7.png" alt="" />
                <img src="images/bn7.png" alt="" class="hover-image" />
              </div>
              <div class="text">
                <div class="name-product">Macaron vani</div>
                <div class="price-product">450.000</div>
              </div>
              <div class="btn-product">
                <a href="#" class="view">
                  Mua ngay
                </a>
                <a href="#" class="add">
                  Thêm
                </a>
              </div>
            </div>
            <div class="col-4">
              <div class="img-product">
                <img src="images/bn5.png" alt="" />
                <img src="images/bn5.png" alt="" class="hover-image" />
              </div>
              <div class="text">
                <div class="name-product">Macaron vani</div>
                <div class="price-product">450.000</div>
              </div>
              <div class="btn-product">
                <a href="#" class="view">
                  Mua ngay
                </a>
                <a href="#" class="add">
                  Thêm
                </a>
              </div>
            </div>
            <div class="col-4">
              <div class="img-product">
                <img src="images/bn4.png" alt="" />
                <img src="images/bn4.png" alt="" class="hover-image" />
              </div>
              <div class="text">
                <div class="name-product">Macaron vani</div>
                <div class="price-product">450.000</div>
              </div>
              <div class="btn-product">
                <a href="#" class="view">
                  Mua ngay
                </a>
                <a href="#" class="add">
                  Thêm
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
