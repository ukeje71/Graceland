import { useEffect, useState } from "react";
import axios from "axios";

const Blogs = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("https://dev.to/api/articles?tag=react&per_page=25");
        setArticles(response.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Latest React Blogs</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {articles.map((article) => (
          <div key={article.id} className="border rounded-lg overflow-hidden shadow-md">
            {article.cover_image ? (
              <img src={article.cover_image} alt={article.title} className="w-full h-48 object-cover" />
            ) : (
              <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-gray-600">
                No Image
              </div>
            )}
            <div className="p-4">
              <a href={article.url} target="_blank" rel="noreferrer" className="text-lg font-semibold text-blue-700 hover:underline">
                {article.title}
              </a>
              <p className="text-sm text-gray-500">By {article.user.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
