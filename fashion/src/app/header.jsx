import Link from "next/link";

export default function Header() {
    return (
      <div class="header">
        <div class="header-top">
          <div class="logo-header">
            <h1>Fashion</h1>
          </div>
          <div class="row-header">
            <form class="search-form">
              <input type="text" class="search-input"
                placeholder="Tìm kiếm"/>
              <button type="button" class="search-button"><i
                  class="fa-solid fa-magnifying-glass"></i></button>
            </form>
          </div>
          <div class="title-rigth">
            <li><a href="#" class>
                <i class="fa-solid fa-phone"></i>
                <span>0880 2308</span>
              </a></li>
          </div>
          <div class="title-rigth">
            <li><a href="#" class>
                <i class="fa-solid fa-headphones"></i>
                <span>Tư vấn miễn phí</span>
              </a></li>
          </div>
          <div class="title-rigth">
            <li><a href="#" class>
                <i class="fa-solid fa-location-dot"></i>
                <span>Tìm kiếm cửa hàng</span>
              </a></li>
          </div>
          <div class="title-rigth">
            <li><a href="/admin" class>
                <i class="fa-regular fa-circle-user"></i>
                <span>Quản trị</span>
              </a></li>
          </div>

        </div>
        <div class="menu-header">
          <div class="row-menu-header">
            <div class="menu-left">
              <li><a href="/"><i class="fa-solid fa-house"></i>Trang
                  chủ</a></li>
              <li><a href="/sanpham">Sản phẩm</a></li>
              <li><a href="#">Giới thiệu</a></li>
              <li><a href="#">Bài viết</a></li>
              <li><a href="#">Liên hệ</a></li>
            </div>
            <div class="content-header">
              
              <li><a href="/dangnhap" class="nav-link">
                  <i class="fa-solid fa-user"></i>
                  <span>Tài khoản</span>
                </a></li>
              <li><a href="/giohang" class="nav-link">
                  <i class="fa-solid fa-bag-shopping"></i>
                  <span>Giỏ hàng</span></a></li>
            </div>
          </div>
        </div>
      </div>
    );
  }
  