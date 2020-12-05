import React from "react";
import { Link } from "react-router-dom";

export default function ArticleItem({ article }) {
  return (
    <div className="media pt-2">
      <img src={article?.image} loading="lazy" className="mr-3 w-25 rounded" alt="" />
      <div className="media-body">
        <Link to={`/article/${article?.id}`}>
          <h5 className="mt-0">{article?.title}</h5>
        </Link>
        {article?.content}
      </div>
    </div>
  );
}
