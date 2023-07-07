import React, { useCallback, useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout";
import ArticleCard from "../../components/Home/ArticleCard";
import axios from "axios";
import { Button } from "flowbite-react";
import { FavoriteContext } from "../../context/favouriteContext";
import { toast } from "react-toastify";

const Home = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoriteContext);

  const loadArticlesList = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "https://api.spaceflightnewsapi.net/v4/articles/"
      );
      if (Array.isArray(data?.results)) {
        setData(data?.results);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  //   Search article handler
  const searchHanlder = (e) => {
    e.preventDefault();
    if (search == "") {
      toast.error("Search is empty!!!");
    } else {
      const filterData = data.filter((article) =>
        article?.title?.includes(search)
      );
      setData(filterData);
    }
  };

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

  useEffect(() => {
    loadArticlesList();
  }, [search == ""]);

  return (
    <Layout>
      <section className="my-10 sm:px-4">
        <div className="resContainer">
          <form onSubmit={searchHanlder}>
            <div className="mt-6 mb-10 flex sm:justify-center sm:max-w-[600px] h-[42px] sm:h-[50px] overflow-hidden rounded-lg border shadow sm:mx-auto">
              <input
                type="text"
                placeholder="Search by title"
                className="text-xs sm:text-sm placeholder:text-gray-400 border-none  text-gray-700 flex-1 bg-transparent px-3 sm:px-5 focus:shadow-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button
                type="submit"
                className="h-full px-0 sm:px-5 rounded-none flex border-4 "
              >
                <span className="text-white font-medium text-xs sm:text-sm">
                  Search
                </span>
              </Button>
            </div>
          </form>
          <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((article, index) => (
              <ArticleCard
                key={index + ""}
                data={article}
                callback={(art) => handleFavorite(art)}
                favorite={favorites.some((fav) => fav.id == article.id)}
              />
            ))}
          </div>

          {data?.length == 0 && (
            <h1 className="text-base font-semibold text-gray-400 text-center w-full my-12">
              No Articles found!
            </h1>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Home;
