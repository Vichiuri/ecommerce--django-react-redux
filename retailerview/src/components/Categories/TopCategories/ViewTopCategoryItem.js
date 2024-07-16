import React from "react";

export default function ViewTopCategoryItem({ category }) {
  return (
    <div
      class="card active first-active-item"
      style={{ width: "269px", marginRight: "20px" }}
    >
      <div class="item-load item-row">
        <div class="category-item">
          {" "}
          <a href="#" class="vertical absolute-content-image">
            <figure>
              <img
                alt="Top Featured Products"
                class="vertical lazy-loaded transition"
                src={
                  category.category_pic
                    ? `..${category.category_pic}`
                    : "../static/images/logo.svg"
                }
                style={{ display: "block" }}
              />
            </figure>
            <span class="thumb-infor">
              <span class="cate-name cate-count">
                <span>{category.name}</span>
                <span class="count">{`(${category.productcount} items)`}</span>{" "}
              </span>
            </span>
          </a>
        </div>{" "}
      </div>
    </div>
  );
}
