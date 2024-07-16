import React, { useEffect } from "react";
import ViewTopCategoryItem from "./ViewTopCategoryItem";

export default function ViewTopCategories({ categories }) {
  useEffect(() => {
    const scroll = document.querySelector(".category_scroll");
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
            <span>Popular Categories</span>
            <a class="see-all" href="shop">
              See All
            </a>
          </h3>
        </div>
        <div class="widget-tabs">
          <div
            class="category_view list-category-item owl-loaded owl-drag"
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
                class="category_scroll"
                style={{
                  transform: "translate3d(0px, 0px, 0px)",
                  transition: "all 0s ease 0s",
                  width: "1734px",
                }}
              >
                {categories.map((caegory, index) => {
                  return <ViewTopCategoryItem category={caegory} key={index} />;
                })}
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
