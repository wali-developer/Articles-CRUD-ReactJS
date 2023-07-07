import React, { useContext } from "react";
import Layout from "../../components/Layout";
import ArticleCard from "../../components/Home/ArticleCard";
import { FavoriteContext } from "../../context/favouriteContext";
import { toast } from "react-toastify";

const FavoriteArticles = () => {
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoriteContext);

  //   Handle Favrouite
  const handleFavorite = (article) => {
    if (favorites.some((fav) => fav.id === article.id)) {
      removeFromFavorites(article.id);
      toast.success("Article removed from your favourites list");
    } else {
      addToFavorites(article);
      toast.success("Article added to your favourites list");
    }
  };

  return (
    <Layout>
      <section className="my-10 sm:px-4">
        <div className="resContainer">
          <h1 className="text-xl sm:text-3xl font-semibold text-gray-800 text-center md:text-left">
            My Favorite Articles
          </h1>
          <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {favorites?.length > 0 &&
              favorites?.map((article, index) => (
                <ArticleCard
                  key={index + ""}
                  data={article}
                  callback={(art) => handleFavorite(art)}
                  favorite={favorites.some((fav) => fav.id == article.id)}
                />
              ))}
          </div>
          {favorites?.length == 0 && (
            <h1 className="text-base font-semibold text-gray-400 text-center w-full my-8 sm:my-20">
              Your have not any favrouite article yet!
            </h1>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default FavoriteArticles;
