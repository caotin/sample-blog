import ArticleItem from "@components/ArticleItem";
import Loading from "@components/Loading";
import Pagination from "@components/Pagination";
import SortByForm from "@components/SortByForm";
import { convertParamsToObject } from "@helpers/convertParams";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ARTICLE_PAGE_INIT } from "./actions";

const defaultFilter = {
  limit: 10,
  page: 1,
  sortBy: "createdAt",
  order: "asc"
};

export default function HomePage() {
  const dispatch = useDispatch();
  const home = useSelector(state => state.home);
  const {
    location: { search }
  } = useHistory();

  const params = search && convertParamsToObject(search);

  useEffect(() => {
    const param = search && convertParamsToObject(search);
    dispatch({ type: ARTICLE_PAGE_INIT, params: { ...defaultFilter, ...param } });
  }, [dispatch, search]);

  return (
    <div>
      <SortByForm defaultFilter={defaultFilter} />

      {home.loading && (
        <div className="py-2">
          <Loading />
        </div>
      )}

      {home?.articles?.map(article => (
        <ArticleItem key={article.id} article={article} />
      ))}

      {home?.articles.length ? <Pagination filter={{ ...defaultFilter, ...params }} /> : null}
    </div>
  );
}
