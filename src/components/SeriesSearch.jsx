import React, { useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import Loader from "./Loader";
import SeriesForm from "./seriesForm";
import SeriesDetails from "./seriesDetails";
import AboutApp from "./AboutApp";

function seriesSearch() {
  const [search, setSearch] = useState(null);
  const [seriesInfo, setseriesInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      const { series } = search;

      let seriesUrl = ` https://api.tvmaze.com/singlesearch/shows?q=:${series}`;

      setLoading(true);

      const seriesRes = await helpHttp().get(seriesUrl);

      setseriesInfo(seriesRes);

      setLoading(false);
    };

    fetchData();
  }, [search]);

  const handleSearch = (data) => {
    setSearch(data);
  };

  return (
    <div className="main-container w-full h-auto flex flex-col items-center justify-center">
      {!search && <AboutApp />}
      {loading && <Loader />}
      <SeriesForm handleSearch={handleSearch} />
      {search && !loading && (
        <SeriesDetails search={search} seriesInfo={seriesInfo} />
      )}
    </div>
  );
}

export default seriesSearch;
