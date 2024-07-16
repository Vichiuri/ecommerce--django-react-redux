import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function CarouselView({ banners }) {
  return (
    <div>
      <div class="row no-wrap-desktop col-on-top section no-wrap-desktop">
        <div class="col-slide">
          <div class="section no-full-width slider-wrapper theme-default ">
            <Carousel controls={false}>
              {banners.map((banner, index) => {
                return (
                  <Carousel.Item key={index}>
                    <div
                      class="container-the-blue-sky-slider nivoSlider"
                      style={{
                        minHeight: "100%",
                        maxHeight: "400px",
                        borderRadius: "30px",
                        alignItems: "center",
                      }}
                    >
                      <a
                        href="shop.html"
                        title="Digital 03 - Side show carousel_img"
                      >
                        <img
                          class="banner-nivo-slider-mobile-and-web no-lazy "
                          alt="Digital 03 - Side show"
                          title="#htmlcaption10"
                          src={
                            banner.pic
                              ? `..${banner.pic}`
                              : "../static/images/3955595.webp"
                          }
                        />
                      </a>
                    </div>

                    <div
                      class="container-the-blue-sky-banner-text custom_carosel_overlay"
                      id="htmlcaption10"
                    >
                      <div class="banner-postion-fixed the-blue-sky-banner-text left_center">
                        <div class="container">
                          <h5
                            class="animate__animated animate__slideInUp has-bg light"
                            style={{ color: "#222222", marginTop: "20px" }}
                          >
                            {banner.name}
                          </h5>
                          {/* <h2
                            class="animate__animated animate__slideInRight light"
                            style={{ color: "#FFFFFF" }}
                          >
                            Limited
                          </h2>
                          <h2
                            class="animate__animated animate__slideInLeft"
                            style={{ color: "#FFFFFF" }}
                          >
                            Hot week deals
                          </h2> */}
                          <p
                            class="animate__animated animate__slideInUp"
                            style={{ color: "#FFFFFF" }}
                          >
                            {banner.text}
                          </p>
                          <a
                            href="shop.html"
                            title="Discover Now"
                            class="btn button-style-nivo-slider animate__animated animate__zoomIn hidden-xs"
                            style={{ color: "#222222" }}
                          >
                            Discover Now
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                );
              })}
              {/* 
id(pin):1
offer(pin):null
name(pin):"New Banner"
text(pin):"New description"
pic(pin):"/media/mobile/banners/WPVcf5xkH5.png"
status(pin):"Product"
view(pin):true
position(pin):1
distributor(pin):1 */}
              {/* 
              <Carousel.Item>
                <div class="container-the-blue-sky-slider nivoSlider">
                  <a href="shop.html" title="Digital 03 - Side show">
                    <img
                      class="banner-nivo-slider-mobile-and-web no-lazy"
                      alt="Digital 03 - Side show"
                      title="#htmlcaption10"
                      data-src-mobile="https://mageblueskytech.com/dukamarket/media/slidebanner/h/3/h3-slide-mobile-1.png"
                      data-src-desktop="https://mageblueskytech.com/dukamarket/media/slidebanner/h/3/h3-slide1.png"
                      src="https://mageblueskytech.com/dukamarket/media/slidebanner/h/3/h3-slide1.png"
                    />
                  </a>
                </div>

                <div
                  class="container-the-blue-sky-banner-text custom_carosel_overlay"
                  id="htmlcaption10"
                >
                  <div class="banner-postion-fixed the-blue-sky-banner-text left_center">
                    <div class="container">
                      <h5
                        class="animate__animated animate__slideInUp has-bg"
                        style={{ color: "#222222" }}
                      >
                        HOT deal
                      </h5>
                      <h2
                        class="animate__animated animate__slideInRight light"
                        style={{ color: "#FFFFFF" }}
                      >
                        Limited
                      </h2>
                      <h2
                        class="animate__animated animate__slideInLeft"
                        style={{ color: "#FFFFFF" }}
                      >
                        Hot week deals
                      </h2>
                      <p
                        class="animate__animated animate__slideInUp"
                        style={{ color: "#FFFFFF" }}
                      >
                        Discount 20% On Products
                      </p>
                      <a
                        href="shop.html"
                        title="Discover Now"
                        class="btn button-style-nivo-slider animate__animated animate__zoomIn hidden-xs"
                        style={{ color: "#222222" }}
                      >
                        Discover Now
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div class="container-the-blue-sky-slider nivoSlider">
                  <a href="shop.html" title="Digital 03 - Side show">
                    <img
                      class="banner-nivo-slider-mobile-and-web no-lazy"
                      alt="Digital 03 - Side show"
                      title="#htmlcaption14"
                      data-src-mobile="https://mageblueskytech.com/dukamarket/media/slidebanner/h/3/h3-slide-mobile-2.png"
                      data-src-desktop="https://mageblueskytech.com/dukamarket/media/slidebanner/h/3/h3-slide2.png"
                      src="https://mageblueskytech.com/dukamarket/media/slidebanner/h/3/h3-slide2.png"
                    />
                  </a>
                </div>

                <div
                  class="container-the-blue-sky-banner-text custom_carosel_overlay"
                  id="htmlcaption10"
                >
                  <div class="banner-postion-fixed the-blue-sky-banner-text left_center">
                    <div class="container">
                      <h5
                        class="animate__animated animate__slideInUp has-bg"
                        style={{ color: "#222222" }}
                      >
                        HOT deal
                      </h5>
                      <h2
                        class="animate__animated animate__slideInRight light"
                        style={{ color: "#FFFFFF" }}
                      >
                        Limited
                      </h2>
                      <h2
                        class="animate__animated animate__slideInLeft"
                        style={{ color: "#FFFFFF" }}
                      >
                        Hot week deals
                      </h2>
                      <p
                        class="animate__animated animate__slideInUp"
                        style={{ color: "#FFFFFF" }}
                      >
                        Discount 20% On Products
                      </p>
                      <a
                        href="shop.html"
                        title="Discover Now"
                        class="btn button-style-nivo-slider animate__animated animate__zoomIn hidden-xs"
                        style={{ color: "#222222" }}
                      >
                        Discover Now
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div class="container-the-blue-sky-slider nivoSlider">
                  <a href="shop.html" title="Digital 03 - Side show">
                    <img
                      class="banner-nivo-slider-mobile-and-web no-lazy"
                      alt="Digital 03 - Side show"
                      title="#htmlcaption15"
                      data-src-mobile="https://mageblueskytech.com/dukamarket/media/slidebanner/h/3/h3-slide-mobile-3.png"
                      data-src-desktop="https://mageblueskytech.com/dukamarket/media/slidebanner/h/3/h3-slide3.png"
                      src="https://mageblueskytech.com/dukamarket/media/slidebanner/h/3/h3-slide3.png"
                    />
                  </a>
                </div>

                <div
                  class="container-the-blue-sky-banner-text custom_carosel_overlay"
                  id="htmlcaption10"
                >
                  <div class="banner-postion-fixed the-blue-sky-banner-text left_center">
                    <div class="container">
                      <h5
                        class="animate__animated animate__slideInUp has-bg"
                        style={{ color: "#222222" }}
                      >
                        HOT deal
                      </h5>
                      <h2
                        class="animate__animated animate__slideInRight light"
                        style={{ color: "#FFFFFF" }}
                      >
                        Limited
                      </h2>
                      <h2
                        class="animate__animated animate__slideInLeft"
                        style={{ color: "#FFFFFF" }}
                      >
                        Hot week deals
                      </h2>
                      <p
                        class="animate__animated animate__slideInUp"
                        style={{ color: "#FFFFFF" }}
                      >
                        Discount 20% On Products
                      </p>
                      <a
                        href="shop.html"
                        title="Discover Now"
                        class="btn button-style-nivo-slider animate__animated animate__zoomIn hidden-xs"
                        style={{ color: "#222222" }}
                      >
                        Discover Now
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </Carousel.Item>
           */}
            </Carousel>
          </div>
        </div>
        <div class="col-banner-beside">
          <div class="banner section row">
            <div class="col-lg-6 col-md-6 d-none d-lg-block">
              <div class="col-banner left center shadow radius absolute-content-image">
                <div
                  class="banner-img no-animation hover-light-effect"
                  style={{
                    height: "190px",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="https://mageblueskytech.com/dukamarket/media/wysiwyg/banner-h2-4-1.jpg"
                    alt=""
                  />
                </div>
                <div class="content">
                  <h3 class="size-24 regular get-size-vw">
                    <a href="#">
                      <span style={{ color: "#ffffff" }}>New Style</span>
                      <br />
                      <span style={{ color: "#ffffff" }}>
                        Bluetooh Speaker{" "}
                      </span>
                    </a>
                  </h3>
                  <p class="size-16 get-size-vw">
                    <span style={{ color: "#ffffff" }}>Free Shipping 20km</span>
                  </p>
                </div>
              </div>
              <div class="col-banner left center shadow radius absolute-content-image">
                <div
                  class="banner-img no-animation hover-light-effect"
                  style={{
                    maxHeight: "190px",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="https://mageblueskytech.com/dukamarket/media/wysiwyg/banner-h2-4-2.jpg"
                    alt=""
                  />
                </div>
                <div class="content">
                  <h3 class="size-24 regular get-size-vw">
                    <a href="#">
                      <span style={{ color: "#ffffff" }}>Limited</span>
                      <br />
                      <span style={{ color: "#ffffff" }}>Top Camera </span>
                    </a>
                  </h3>
                  <p class="size-16 get-size-vw">
                    <span style={{ color: "#ffffff" }}>
                      Top Quality Products
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div
              class="col-lg-6 col-md-12"
              style={{
                minHeight: "100%",
                maxHeight: "400px",
                alignItems: "center",
              }}
            >
              <div
                class="col-banner space-between center middle shadow radius absolute-content-image"
                style={{ height: "100%", background: "#21b792" }}
              >
                <div class="banner-img no-animation hover-light-effect">
                  <img
                    src="https://mageblueskytech.com/dukamarket/media/wysiwyg/banner-h2-4-3.jpg"
                    alt=""
                  />
                </div>
                <div class="content space-between">
                  <div class="content-top" style={{ textAlign: "center" }}>
                    <h6
                      class="has-bg uppercase"
                      style={{ textAlign: "center" }}
                    >
                      Hot Sale
                    </h6>
                    <p
                      class="size-18 get-size-vw margin_0"
                      style={{ textAlign: "center" }}
                    >
                      <span style={{ color: "#ffffff" }}>Xbox Wireless</span>
                    </p>
                    <h3
                      class="size-26 regular get-size-vw margin_0"
                      style={{ textAlign: "center" }}
                    >
                      <a href="#">
                        <span style={{ color: "#ffffff" }}>
                          Sale Up To 50% Off
                        </span>
                      </a>
                    </h3>
                  </div>
                  <div class="button-wrap">
                    <a
                      class="btn transparent small"
                      style={{ color: "#ffffff" }}
                      title="shop now"
                      href="#"
                    >
                      SHOP NOW
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="row no-wrap-desktop col-on-top section no-wrap-desktop">
        <div class="col-slide">
          <div class="section no-full-width slider-wrapper theme-default ">
            <div id="rokanthemes-slidebanner-4">
              <div class="nivoSlider-loading-page-still-unsuc">
                <div
                  class="nivoslider-show-loading-in-web d-none d-md-block"
                  style={{ minHeight: "400px" }}
                ></div>
                <div
                  class="nivoslider-show-loading-in-mobile d-block d-md-none"
                  style={{ minHeight: "300px" }}
                ></div>
                <span></span>
              </div>
              <div class="container-the-blue-sky-slider nivoSlider">
                <a href="shop.html" title="Digital 03 - Side show">
                  <img
                    class="banner-nivo-slider-mobile-and-web no-lazy"
                    alt="Digital 03 - Side show"
                    title="#htmlcaption10"
                    data-src-mobile="https://mageblueskytech.com/dukamarket/media/slidebanner/h/3/h3-slide-mobile-1.png"
                    data-src-desktop="https://mageblueskytech.com/dukamarket/media/slidebanner/h/3/h3-slide1.png"
                    src="https://mageblueskytech.com/dukamarket/media/slidebanner/h/3/h3-slide1.png"
                  />
                </a>
                <a href="shop.html" title="Digital 03 - Side show">
                  <img
                    class="banner-nivo-slider-mobile-and-web no-lazy"
                    alt="Digital 03 - Side show"
                    title="#htmlcaption14"
                    data-src-mobile="https://mageblueskytech.com/dukamarket/media/slidebanner/h/3/h3-slide-mobile-2.png"
                    data-src-desktop="https://mageblueskytech.com/dukamarket/media/slidebanner/h/3/h3-slide2.png"
                    src="https://mageblueskytech.com/dukamarket/media/slidebanner/h/3/h3-slide2.png"
                  />
                </a>
                <a href="shop.html" title="Digital 03 - Side show">
                  <img
                    class="banner-nivo-slider-mobile-and-web no-lazy"
                    alt="Digital 03 - Side show"
                    title="#htmlcaption15"
                    data-src-mobile="https://mageblueskytech.com/dukamarket/media/slidebanner/h/3/h3-slide-mobile-3.png"
                    data-src-desktop="https://mageblueskytech.com/dukamarket/media/slidebanner/h/3/h3-slide3.png"
                    src="https://mageblueskytech.com/dukamarket/media/slidebanner/h/3/h3-slide3.png"
                  />
                </a>
              </div>

              <div
                class="container-the-blue-sky-banner-text nivo-html-caption nivo-caption"
                id="htmlcaption10"
              >
                <div class="banner-postion-fixed the-blue-sky-banner-text left_center">
                  <div class="container">
                    <h5
                      class="animate__animated animate__slideInUp has-bg"
                      style={{ color: "#222222" }}
                    >
                      HOT deal
                    </h5>
                    <h2
                      class="animate__animated animate__slideInRight light"
                      style={{ color: "#FFFFFF" }}
                    >
                      Limited
                    </h2>
                    <h2
                      class="animate__animated animate__slideInLeft"
                      style={{ color: "#FFFFFF" }}
                    >
                      Hot week deals
                    </h2>
                    <p
                      class="animate__animated animate__slideInUp"
                      style={{ color: "#FFFFFF" }}
                    >
                      Discount 20% On Products
                    </p>
                    <a
                      href="shop.html"
                      title="Discover Now"
                      class="btn button-style-nivo-slider animate__animated animate__zoomIn hidden-xs"
                      style={{ color: "#222222" }}
                    >
                      Discover Now
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div
                class="container-the-blue-sky-banner-text nivo-html-caption nivo-caption"
                id="htmlcaption14"
              >
                <div class="banner-postion-fixed the-blue-sky-banner-text left_center">
                  <div class="container">
                    <h5
                      class="animate__animated animate__slideInDown has-bg"
                      style={{ color: "#222222" }}
                    >
                      HOT sale
                    </h5>
                    <h2
                      class="animate__animated animate__slideInDown light"
                      style={{ color: "#FFFFFF" }}
                    >
                      Big sale
                    </h2>
                    <h2
                      class="animate__animated animate__fadeInLeft"
                      style={{ color: "#FFFFFF" }}
                    >
                      Top Accessories
                    </h2>
                    <p
                      class="animate__animated animate__slideInLeft"
                      style={{ color: "#FFFFFF" }}
                    >
                      Best Sport Edition 2022
                    </p>
                    <a
                      href="shop.html"
                      title="Discover Now"
                      class="btn button-style-nivo-slider animate__animated animate__zoomIn hidden-xs"
                      style={{ color: "#222222" }}
                    >
                      Discover Now
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div
                class="container-the-blue-sky-banner-text nivo-html-caption nivo-caption"
                id="htmlcaption15"
              >
                <div class="banner-postion-fixed the-blue-sky-banner-text left_center">
                  <div class="container">
                    <h5
                      class="animate__animated animate__fadeIn has-bg"
                      style={{ color: "#222222" }}
                    >
                      Best Sport Edition 2022
                    </h5>
                    <h2
                      class="animate__animated animate__slideInLeft light"
                      style={{ color: "#FFFFFF" }}
                    >
                      Gear 360
                    </h2>
                    <h2
                      class="animate__animated animate__slideInRight"
                      style={{ color: "#FFFFFF" }}
                    >
                      wireless earbuds
                    </h2>
                    <p
                      class="animate__animated animate__slideInUp"
                      style={{ color: "#FFFFFF" }}
                    >
                      Top Quality Earbuds & Accessories
                    </p>
                    <a
                      href="shop.html"
                      title="Discover Now"
                      class="btn button-style-nivo-slider animate__animated animate__fadeIn hidden-xs"
                      style={{ color: "#222222" }}
                    >
                      Discover Now
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
