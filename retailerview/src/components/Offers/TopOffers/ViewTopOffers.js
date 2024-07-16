import React, { useEffect } from "react";
import ViewTopOfferItem from "./ViewTopOfferItem";

export default function ViewTopOffers({ offers }) {
  useEffect(() => {
    const scroll = document.querySelector(".offer_scroll");
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
  }, []);

  return (
    <div class="section wrapper_sub_category_tabs container_horizontal_tab_postions onlyparent">
      <div class="category-thumb-section">
        <div class="rokan-title  has-see-all">
          <h3 class="module-title">
            <span>New Offers</span>
            <a class="see-all" href="shop">
              See All
            </a>
          </h3>
        </div>
        <div class="widget-tabs">
          <div
            class="offer_view list-category-item owl-loaded owl-drag"
            data-nav="false"
            data-dots="false"
            data-center="false"
            data-loop="false"
            data-bigdesktop="6"
            data-items="5"
            data-smalldesktop="4"
            data-bigtablet="4"
            data-tablet="3"
            data-smalltablet="3"
            data-mobile="2"
            data-margin="20"
          >
            <div class="main">
              <div
                class="offer_scroll"
                style={{
                  transform: "translate3d(0px, 0px, 0px)",
                  transition: "all 0s ease 0s",
                  width: "1734px",
                }}
              >
                {offers.map((offer, index) => {
                  return <ViewTopOfferItem offer={offer} key={index} />;
                })}
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>

    // <div class="banner section banner-middle  offer_view">
    //   <div class=" main">
    //     <div
    //       class=" offer_scroll"
    //       style={{
    //         width: "5202px",
    //       }}
    //     >
    //       {offers.map((offer, index) => {
    //         return <ViewTopOfferItem offer={offer} key={index} />;
    //       })}
    //       {/* <div class=" cloned" style={{ width: "558px", marginRight: "20px" }}>
    //         <div class="col-banner absolute-content-image left center left center shadow radius">
    //           <div class="banner-img right  no-animation hover-light-effect">
    //             <img
    //               src="https://mageblueskytech.com/dukamarket/media/wysiwyg/banner-5.png"
    //               alt="banner-5"
    //               style={{ display: "block" }}
    //               class="lazy-loaded transition"
    //             />
    //           </div>
    //           <div class="content">
    //             <h3 class="size-24 regular">
    //               <a href="#">
    //                 <span style={{ color: "#ffffff" }}>Microsoft</span>
    //                 <br />
    //                 <span style={{ color: "#ffffff" }}>
    //                   Surface Laptop 14”{" "}
    //                 </span>
    //               </a>
    //             </h3>
    //             <p class="size-16">
    //               <span style={{ color: "#ffffff" }}>Up To -30%</span>
    //             </p>
    //           </div>
    //         </div>
    //       </div> */}

    //       {/* <div
    //         class="owl-item cloned"
    //         style={{ width: "558px", marginRight: "20px" }}
    //       >
    //         <div class="col-banner absolute-content-image left center middle shadow radius">
    //           <div class="banner-img right  no-animation hover-light-effect">
    //             <img
    //               src="https://mageblueskytech.com/dukamarket/media/wysiwyg/banner-6.png"
    //               alt="banner-6"
    //               style={{ display: "block" }}
    //               class="lazy-loaded transition"
    //             />
    //           </div>
    //           <div class="content">
    //             <h3 class="size-24 regular">
    //               <a href="#">
    //                 <span style={{ color: "#ffffff" }}>Cameras </span>
    //                 <br />
    //                 <span style={{ color: "#ffffff" }}>
    //                   Best Sport Edition{" "}
    //                 </span>
    //               </a>
    //             </h3>
    //             <p class="size-16">
    //               <span style={{ color: "#ffffff" }}>Up To -20%</span>
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     */}
    //       {/* <div
    //         class="owl-item cloned"
    //         style={{ width: "558px", marginRight: "20px" }}
    //       >
    //         <div class="col-banner absolute-content-image left center middle shadow radius">
    //           <div class="banner-img right  no-animation hover-light-effect">
    //             <img
    //               src="https://mageblueskytech.com/dukamarket/media/wysiwyg/banner-7.png"
    //               alt="banner-7"
    //               style={{ display: "block" }}
    //               class="lazy-loaded transition"
    //             />
    //           </div>
    //           <div class="content">
    //             <h3 class="size-24 regular">
    //               <a href="#">
    //                 <span style={{ color: "#ffffff" }}>Sneaker </span>
    //                 <br />
    //                 <span style={{ color: "#ffffff" }}>Nike Air Max 90 </span>
    //               </a>
    //             </h3>
    //             <p class="size-16">
    //               <span style={{ color: "#ffffff" }}>Up To -60%</span>
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //      */}
    //       {/* <div class="owl-item" style={{ width: "558px", marginRight: "20px" }}>
    //         <div class="col-banner absolute-content-image left center left center shadow radius">
    //           <div class="banner-img right  no-animation hover-light-effect">
    //             <img
    //               src="https://mageblueskytech.com/dukamarket/media/wysiwyg/banner-5.png"
    //               alt="banner-5"
    //               style={{ display: "block" }}
    //               class="lazy-loaded transition"
    //             />
    //           </div>
    //           <div class="content">
    //             <h3 class="size-24 regular">
    //               <a href="#">
    //                 <span style={{ color: "#ffffff" }}>Microsoft</span>
    //                 <br />
    //                 <span style={{ color: "#ffffff" }}>
    //                   Surface Laptop 14”{" "}
    //                 </span>
    //               </a>
    //             </h3>
    //             <p class="size-16">
    //               <span style={{ color: "#ffffff" }}>Up To -30%</span>
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //       */}
    //       {/* <div
    //         class="owl-item first-active-item"
    //         style={{ width: "558px", marginRight: "20px" }}
    //       >
    //         <div class="col-banner absolute-content-image left center middle shadow radius">
    //           <div class="banner-img right  no-animation hover-light-effect">
    //             <img
    //               src="https://mageblueskytech.com/dukamarket/media/wysiwyg/banner-6.png"
    //               alt="banner-6"
    //               style={{ display: "block" }}
    //               class="lazy-loaded transition"
    //             />
    //           </div>
    //           <div class="content">
    //             <h3 class="size-24 regular">
    //               <a href="#">
    //                 <span style={{ color: "#ffffff" }}>Cameras </span>
    //                 <br />
    //                 <span style={{ color: "#ffffff" }}>
    //                   Best Sport Edition{" "}
    //                 </span>
    //               </a>
    //             </h3>
    //             <p class="size-16">
    //               <span style={{ color: "#ffffff" }}>Up To -20%</span>
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //      */}
    //       {/* <div
    //         class="owl-item active"
    //         style={{ width: "558px", marginRight: "20px" }}
    //       >
    //         <div class="col-banner absolute-content-image left center middle shadow radius">
    //           <div class="banner-img right  no-animation hover-light-effect">
    //             <img
    //               src="https://mageblueskytech.com/dukamarket/media/wysiwyg/banner-7.png"
    //               alt="banner-7"
    //               style={{ display: "block" }}
    //               class="lazy-loaded transition"
    //             />
    //           </div>
    //           <div class="content">
    //             <h3 class="size-24 regular">
    //               <a href="#">
    //                 <span style={{ color: "#ffffff" }}>Sneaker </span>
    //                 <br />
    //                 <span style={{ color: "#ffffff" }}>Nike Air Max 90 </span>
    //               </a>
    //             </h3>
    //             <p class="size-16">
    //               <span style={{ color: "#ffffff" }}>Up To -60%</span>
    //             </p>
    //           </div>
    //         </div>
    //       </div> */}

    //       {/* <div
    //         class="owl-item cloned last-active-item active"
    //         style={{ width: "558px", marginRight: "20px" }}
    //       >
    //         <div class="col-banner absolute-content-image left center left center shadow radius">
    //           <div class="banner-img right  no-animation hover-light-effect">
    //             <img
    //               src="https://mageblueskytech.com/dukamarket/media/wysiwyg/banner-5.png"
    //               alt="banner-5"
    //               style={{ display: "block" }}
    //               class="lazy-loaded transition"
    //             />
    //           </div>
    //           <div class="content">
    //             <h3 class="size-24 regular">
    //               <a href="#">
    //                 <span style={{ color: "#ffffff" }}>Microsoft</span>
    //                 <br />
    //                 <span style={{ color: "#ffffff" }}>
    //                   Surface Laptop 14”{" "}
    //                 </span>
    //               </a>
    //             </h3>
    //             <p class="size-16">
    //               <span style={{ color: "#ffffff" }}>Up To -30%</span>
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     */}
    //       {/* <div
    //         class="owl-item cloned active"
    //         style={{ width: "558px", marginRight: "20px" }}
    //       >
    //         <div class="col-banner absolute-content-image left center middle shadow radius">
    //           <div class="banner-img right  no-animation hover-light-effect">
    //             <img
    //               src="https://mageblueskytech.com/dukamarket/media/wysiwyg/banner-6.png"
    //               alt="banner-6"
    //               style={{ display: "block" }}
    //               class="lazy-loaded transition"
    //             />
    //           </div>
    //           <div class="content">
    //             <h3 class="size-24 regular">
    //               <a href="#">
    //                 <span style={{ color: "#ffffff" }}>Cameras </span>
    //                 <br />
    //                 <span style={{ color: "#ffffff" }}>
    //                   Best Sport Edition{" "}
    //                 </span>
    //               </a>
    //             </h3>
    //             <p class="size-16">
    //               <span style={{ color: "#ffffff" }}>Up To -20%</span>
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //       */}
    //       {/* <div
    //         class="owl-item cloned"
    //         style={{ width: "558px", marginRight: "20px" }}
    //       >
    //         <div class="col-banner absolute-content-image left center middle shadow radius">
    //           <div class="banner-img right  no-animation hover-light-effect">
    //             <img
    //               src="https://mageblueskytech.com/dukamarket/media/wysiwyg/banner-7.png"
    //               alt="banner-7"
    //               style={{ display: "block" }}
    //               class="lazy-loaded transition"
    //             />
    //           </div>
    //           <div class="content">
    //             <h3 class="size-24 regular">
    //               <a href="#">
    //                 <span style={{ color: "#ffffff" }}>Sneaker </span>
    //                 <br />
    //                 <span style={{ color: "#ffffff" }}>Nike Air Max 90 </span>
    //               </a>
    //             </h3>
    //             <p class="size-16">
    //               <span style={{ color: "#ffffff" }}>Up To -60%</span>
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     */}
    //     </div>
    //   </div>
    // </div>
  );
}
