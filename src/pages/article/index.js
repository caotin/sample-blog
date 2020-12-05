import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ARTICLE_DETAIL_INIT } from "./actions";
import moment from "moment";
import Loading from "../../components/Loading";

export default function HomePage() {
  const dispatch = useDispatch();
  const { article, loading } = useSelector(state => state.article);

  const { id } = useParams();

  useEffect(() => {
    dispatch({ type: ARTICLE_DETAIL_INIT, id });
  }, [dispatch, id]);

  return (
    <div>
      {loading && <Loading />}
      {article && (
        <>
          <h1>{article.title}</h1>
          <p>Created date: {moment(article.createdAt).format("lll")}</p>
          <img alt="" src={article.image} className="w-100 rounded" />
          <div>{article.content}</div>
        </>
      )}
    </div>
  );
}
