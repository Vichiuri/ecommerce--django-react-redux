import React from "react";

export default function ViewTopOfferItem({ offer }) {
  return (
    <div
      class="card active first-active-item"
      style={{ width: "400px", marginRight: "20px" }}
    >
      <div class="item-load item-row">
        <div class="category-item">
          {" "}
          <a href="#" class="vertical absolute-content-image">
            <figure>
              <img
                alt="Top Featured Products"
                class="vertical lazy-loaded transition"
                src={offer.pic ? `..${offer.pic}` : "../static/images/logo.svg"}
                style={{ display: "block" }}
              />
            </figure>
            <span class="thumb-infor">
              <span class="cate-name cate-count">
                <span>{offer.name}</span>
                <span class="count">{offer.detail_name}</span>{" "}
              </span>
            </span>
          </a>
        </div>{" "}
      </div>
    </div>

    // <div
    //   class="owl-item cloned"
    //   style={{ width: "558px", marginRight: "20px" }}
    // >
    //   <div class="col-banner absolute-content-image left center left center shadow radius">
    //     <div class="banner-img right  no-animation hover-light-effect">
    //       <img
    //         src={
    //           "https://mageblueskytech.com/dukamarket/media/wysiwyg/banner-5.png"
    //         }
    //         alt="banner-5"
    //         style={{ display: "block" }}
    //         class="lazy-loaded transition"
    //       />
    //     </div>
    //     <div class="content">
    //       <h3 class="size-24 regular">
    //         <a href="#">
    //           <span style={{ color: "#ffffff" }}>Microsoft</span>
    //           <br />
    //           <span style={{ color: "#ffffff" }}>Surface Laptop 14” </span>
    //         </a>
    //       </h3>
    //       <p class="size-16">
    //         <span style={{ color: "#ffffff" }}>Up To -30%</span>
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
}
