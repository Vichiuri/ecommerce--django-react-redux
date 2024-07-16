import React, { useEffect, useState } from "react";
import ViewFlashDeals from "./ViewFlashDeals";

export default function AllFlashDeals(props) {
  const { categories } = props;

  const [view_categories, setViewCategories] = useState([]);

  useEffect(() => {
    const v_categories = categories.filter(
      (v_category) => v_category.productcount > 0
    );

    setViewCategories(v_categories);
  }, [categories]);

  return (
    <div>
      {view_categories.map((category, index) => {
        return <ViewFlashDeals category={category} index={index} key={index} />;
      })}
    </div>
  );
}
