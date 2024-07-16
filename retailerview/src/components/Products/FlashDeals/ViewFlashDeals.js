import Axios from "axios";
import React, { useEffect, useState } from "react";
import ViewFlashDealItem from "./ViewFlashDealItem";

export default function ViewFlashDeals({ category, index }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const scroll = document.getElementById(`category_product_${index}`);
    var isDown = false;
    var scrollX;
    var scrollLeft;

    // Mouse Up Function
    scroll.addEventListener("mouseup", () => {
      isDown = false;
      scroll.classList.remove("active");
    });

    // Mouse Leave Function
    scroll.addEventListener("mouseleave", () => {
      isDown = false;
      scroll.classList.remove("active");
    });

    // Mouse Down Function
    scroll.addEventListener("mousedown", (e) => {
      e.preventDefault();
      isDown = true;
      scroll.classList.add("active");
      scrollX = e.pageX - scroll.offsetLeft;
      scrollLeft = scroll.scrollLeft;
    });

    // Mouse Move Function
    scroll.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      var element = e.pageX - scroll.offsetLeft;
      var scrolling = (element - scrollX) * 2;
      scroll.scrollLeft = scrollLeft - scrolling;
    });

    fetchCategoryProducts();
  }, [category]);

  function fetchCategoryProducts() {
    const token = localStorage.getItem("retail_token");
    let config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    if (token) {
      config.headers["Authorization"] = `Token ${token}`;
    }
    Axios.get(
      `../retailer/api/retailer_category_products/?category_id=${category.id}`,
      config
    )
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((error) => {
        const errors = {
          responseMessage: error.response.data,
          status: error.response.status,
        };
        console.log(errors);
      });
  }

  return (
    <div>
      <div
        class="section full-width has-white-bg product_view"
        style={{ background: "#fff" }}
      >
        <div class="container">
          <div
            class="
            section
            hot-deal-tab-slider hot-deal-tab-slider-customcss
            section-product
          "
          >
            <div class="rokan-title">
              <div class="supper-deal-title flex-layout space-between">
                <h3 class="title-deal module-title">
                  <span>{category.name}</span>
                </h3>
                <div class="right-deal flex-layout no-wrap-desktop">
                  <h5 class="sub-title-deal hidden-xs">View All</h5>
                  <div
                    class="super-deal-countdown"
                    data-date="03/26/2023"
                  ></div>
                </div>
              </div>
            </div>
            <div class="products wrapper grid products-grid main">
              <div
                class="
                products
                list
                items
                product-items
              scroll
              "
                id={`category_product_${index}`}
              >
                {products.map((product, index) => {
                  return <ViewFlashDealItem product={product} key={index} />;
                })}
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <br />
    </div>
  );
}
