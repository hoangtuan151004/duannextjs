export const metadata = {
    title: "Giỏ hàng Becky",
    description: "Generated by create next app",
  };
export default function Cart() {
    return (
      <>
      <div class="cart">
      <div class="shopping-cart">
          <div class="shopping-left">
              <div class="cart-title">
                  <h3>| Giỏ hàng của bạn</h3>
              </div>
              <div class="cart-content">
                  <table>
                      <thead>
                          <tr>
                              <th>STT</th>
                              <th>Hình ảnh</th>
                              <th>Tên sản phẩm</th>
                              <th>Số lượng</th>
                              <th>Giá</th>
                              <th>Xóa</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>1</td>
                              <td><img src="images/mou1.jpg"
                                      alt width="80px"/></td>
                              <td>Áo thun</td>
                              <td>1</td>
                              <td>200.000</td>
                              <td><i
                                      class="fa-solid fa-trash"></i></td>
                          </tr>
                          <tr>
                              <td>1</td>
                              <td>Hình ảnh sản phẩm</td>
                              <td>Áo thun</td>
                              <td>1</td>
                              <td>200.000</td>
                              <td><i
                                      class="fa-solid fa-trash"></i></td>
                          </tr>
                          <tr>
                              <td>1</td>
                              <td>Hình ảnh sản phẩm</td>
                              <td>Áo thun</td>
                              <td>1</td>
                              <td>200.000</td>
                              <td><i
                                      class="fa-solid fa-trash"></i></td>
                          </tr>
                      </tbody>
                  </table>

              </div>
              <div class="bnt-cart"><a
                      href="./index.html"><button>Quay lại trang
                          chủ</button></a></div>
          </div>
          <div class="shopping-right">
              <table>
                  <thead>
                      <tr>
                          <th colspan="2">Thông tin đơn hàng</th>
                      </tr>
                  </thead>
              </table>
              <div class="right-text">
                  <div class="cart-item">
                      <div class="item-title">Tạm tính</div>
                      <div class="item-price">200.000</div>
                  </div>
                  <div class="cart-item">
                      <div class="item-title">Giảm giá</div>
                      <div class="item-price">Áp dụng tại trang
                          thanh toán</div>
                  </div>
                  <div class="cart-item">
                      <div class="item-title">Phí vân chuyển
                      </div>
                      <div class="item-price">Được tính tại trang
                          thanh toán</div>
                  </div>
                  <div class="bnt-cart-right"><a
                          href="./checkout.html"><button>Thanh
                              Toán</button></a></div>
                  <div class="cart-checkou">
                      <div class="checkou-title">Hỗ trợ nhiều
                          phương thức thanh toán</div>
                      <div class="checkou-img">
                          <img src="images/money.png" alt/>
                          <img src="images/momone.png" alt/>
                          <img src="images/Logo-Napas.webp"
                              alt/>
                          <img src="images/visa.png" alt/>
                      </div>
                  </div>
              </div>

          </div>
      </div>
  </div>
      </>
    );
  }
  