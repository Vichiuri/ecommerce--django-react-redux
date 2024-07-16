import React, { useEffect } from "react";
import ViewFlashDealItem from "../FlashDeals/ViewFlashDealItem";

export default function ViewNewArrivals({ products }) {
  return (
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
                <span>New Arrivals</span>
              </h3>
              <div class="right-deal flex-layout no-wrap-desktop">
                <h5 class="sub-title-deal hidden-xs">View All</h5>
                <div class="super-deal-countdown" data-date="03/26/2023"></div>
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
              data-rtl="false"
              data-items="6"
              data-bigdesktop="8"
              data-smalldesktop="4"
              data-bigtablet="4"
              data-tablet="3"
              data-smalltablet="3"
              data-mobile="2.2"
              data-margin="0"
              data-loop="true"
              data-center="false"
              data-mousedrag="true"
              data-touchdrag="true"
              data-stagepadding="1"
              data-nav="true"
              data-navnext=""
              data-navprev=""
              data-rewind="true"
              data-dots="false"
              data-autoplay="false"
              data-speed="500"
            >
              {products.map((product, index) => {
                return <ViewFlashDealItem key={index} product={product} />;
              })}
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
