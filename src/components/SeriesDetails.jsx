import React from "react";
import Error from "./Error"
import SeriesMainInfo from "./SeriesMainInfo";
import SeriesAddInfo from "./SeriesAddInfo";

function SeriesDetails({ search, seriesInfo }) {
  if (!search || !seriesInfo) return null;
  const summaryWithoutTags = seriesInfo.summary
    ? seriesInfo.summary.replace(/<\/?p>|<\/?b>/g, "")
    : "";

  return (
    <>
      {seriesInfo.statusText === "Something went wrong" ? (
        <Error />
      ) : (
        <div className="info-container h-full pt-10 overflow-hidden container grid grid-cols-1 md:grid-cols-2 gap-4">
          <SeriesMainInfo
            title={seriesInfo.name ?? "This series doesn't have a name"}
            image={seriesInfo.image?.medium ?? "NOT AVAILABLE"}
            rating={seriesInfo.rating?.average ?? "NOT AVAILABLE"}
            network={seriesInfo.network?.name ?? "NOT AVAILABLE"}
            site={seriesInfo.officialSite ?? "#"}
          />

          <SeriesAddInfo
            summary={summaryWithoutTags ?? "NOT AVAILABLE"}
            status={seriesInfo.status ?? "NOT AVAILABLE"}
            genres={seriesInfo.genres ?? "NOT AVAILABLE"}
            premiered={seriesInfo.premiered ?? "NOT AVAILABLE"}
            ended={seriesInfo.ended ?? "NOT AVAILABLE"}
            country={seriesInfo.network?.country.name ?? "NOT AVAILABLE"}
            timezone={seriesInfo.network?.country.timezone ?? "NOT AVAILABLE"}
          />
        </div>
      )}
    </>
  );
}

export default SeriesDetails;
