import React, { useState } from "react";
import { ARTICLE_PAGE_INIT } from "@pages/home/actions";
import { useDispatch } from "react-redux";

export default function SortByForm({ defaultFilter }) {
  const dispatch = useDispatch();

  const [isNewest, setIsNewest] = useState(true);

  const handleChange = (e, newest) => {
    e.preventDefault();
    setIsNewest(newest);
    dispatch({ type: ARTICLE_PAGE_INIT, params: { ...defaultFilter, order: newest ? "asc" : "desc" } });
  };

  return (
    <div className="btn-group btn-group-toggle" data-toggle="buttons">
      <label className={"btn btn-secondary " + (isNewest ? "active" : "")} onClick={e => handleChange(e, true)}>
        <input type="radio" name="options" id="option1" defaultChecked /> Newest
      </label>
      <label className={"btn btn-secondary " + (!isNewest ? "active" : "")} onClick={e => handleChange(e, false)}>
        <input type="radio" name="options" id="option2" /> Oldest
      </label>
    </div>
  );
}
