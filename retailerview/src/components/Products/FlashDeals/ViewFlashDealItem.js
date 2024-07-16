import React, { useEffect, useState } from "react";

export default function ViewFlashDealItem({ product }) {
  const [image, setImage] = useState(
    product.product_images && product.product_images[0]
      ? `..${product.product_images[0].image}`
      : "../static/images/logo.svg"
  );

  return (
    <div class="item-load group-rows-fixed-supper-deal item-row card">
      <div class="item product product-item">
        <div class="product-item-info">
          <a
            href="blue-g9-pro-2020-battery-unlocked.html"
            class="product photo product-item-photo"
            tabindex="-1"
          >
            <span
              class="
              image0
              image-switch
              product-image-container
              flash_product_image
            "
            >
              <img
                class="product-image"
                src={image}
                alt="Blue G9 Pro 2020 Battery Unlocked"
              />
            </span>
          </a>
          {/* <div class="product-label">
            <span class="onsale">
              <span class="value">18%</span>
            </span>
          </div> */}
          <div class="product details product-item-details">
            <strong class="product name product-item-name">
              <a
                class="product-item-link"
                href="blue-g9-pro-2020-battery-unlocked.html"
              >
                {product.name}
              </a>
            </strong>
            {/* <div
              class="product-reviews-summary"
              itemscope
              itemtype="http://schema.org/AggregateRating"
            >
              <div class="rating-summary">
                <span class="label">
                  <span>Rating:</span>
                </span>
                <div class="rating-result" title="87%">
                  <span style={{ width: "87%" }}> </span>
                </div>
              </div>
              <div class="reviews-actions">
                <a
                  class="action view"
                  href="blue-g9-pro-2020-battery-unlocked.html#reviews"
                >
                  <span itemscope itemtype="https://schema.org/reviewCount">
                    3
                  </span>
                  &nbsp;
                  <span>Reviews</span>
                </a>
                <a
                  class="action add"
                  href="blue-g9-pro-2020-battery-unlocked.html#review-form"
                >
                  Add Your Review
                </a>
              </div>
            </div>
          */}
            <div
              class="price-box price-final_price"
              data-role="priceBox"
              data-product-id="3"
              data-price-box="product-id-3"
            >
              <span class="special-price">
                <span
                  class="
                  price-container
                  price-final_price&#x20;tax&#x20;weee
                "
                >
                  <span class="price-label">Special Price</span>
                  <span
                    data-price-amount="90"
                    data-price-type="finalPrice"
                    class="price-wrapper"
                  >
                    <span class="price">
                      {product.price_currency} {product.price}
                    </span>
                  </span>
                </span>
              </span>
              {/* <span class="old-price">
                <span
                  class="
                  price-container
                  price-final_price&#x20;tax&#x20;weee
                "
                >
                  <span class="price-label">Regular Price</span>
                  <span
                    data-price-amount="110"
                    data-price-type="oldPrice"
                    class="price-wrapper"
                  >
                    <span class="price">$110.00</span>
                  </span>
                </span>
              </span> */}
            </div>
            <div class="product-sold">
              <div class="ruler-sold">
                <div class="ruler-sold-count" style={{ width: "30.9%" }}></div>
              </div>
              <div class="count-sold-available">
                <div class="count-sold">
                  Stock: <span> 309 </span>
                </div>
              </div>
            </div>

            <div class="product-item-inner">
              <div class="product actions product-item-actions">
                <div class="actions-primary">
                  <form
                    data-role="tocart-form"
                    data-product-sku="Digital003"
                    method="post"
                  >
                    <input type="hidden" name="product" value="3" />
                    <input
                      type="hidden"
                      name="uenc"
                      value="aHR0cHM6Ly9tYWdlYmx1ZXNreXRlY2guY29tL2R1a2FtYXJrZXQvZW4zL2NoZWNrb3V0L2NhcnQvYWRkL3VlbmMvYUhSMGNITTZMeTl0WVdkbFlteDFaWE5yZVhSbFkyZ3VZMjl0TDJSMWEyRnRZWEpyWlhRdlpXNHpMdyUyQyUyQy9wcm9kdWN0LzMv"
                    />
                    <input
                      name="form_key"
                      type="hidden"
                      value="OQN7Nf56FneT1t7I"
                    />
                    <button
                      type="submit"
                      title="Add&#x20;to&#x20;Cart"
                      class="action tocart primary"
                    >
                      <span>Add to Cart</span>
                    </button>
                  </form>
                </div>
                <div data-role="add-to-links" class="actions-secondary">
                  <a
                    href="#"
                    class="action towishlist"
                    title=""
                    aria-label="Add to Wish List"
                    data-action="add-to-wishlist"
                    role="button"
                  >
                    <i className="fas fa-comments"></i>
                  </a>
                  {/* <a
                    href="#"
                    class="action tocompare"
                    title="Add to Compare"
                    aria-label="Add to Compare"
                    role="button"
                  >
                    <span>Add to Compare</span>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
