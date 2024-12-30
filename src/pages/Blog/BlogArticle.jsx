import { useParams } from "react-router-dom";

export default function BlogArticle() {
  const { articleId } = useParams();

  // You might fetch the article data from an API or store here.

  return (
    <div className="p-4">
      <h1 className="text-3xl">Blog Article</h1>
      <p>This is the article with ID: {articleId}</p>
      {/* Show actual blog content/markdown here */}
    </div>
  );
}
