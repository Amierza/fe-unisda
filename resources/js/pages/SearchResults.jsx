import Search from "../components/Search.jsx";
import LinkNews from "../components/LinkNews.jsx";

const SearchResults = ({
    results,
    searchQuery,
    latestNews,
    newsDisplayForAYear,
}) => {
    console.log(results);
    return (
        <div>
            <div className="w-full pt-9 px-8 pb-40 lg:px-48 lg:pt-20">
                <h1 className="text-2xl font-bold mb-8">
                    Hasil Pencarian: {searchQuery}
                </h1>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {results.length > 0 ? (
                        results.map((newsItem, index) => (
                            <a
                                key={index}
                                href={`/news/${newsItem.link}`}
                                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg hover:scale-105 cursor-pointer"
                            >
                                <img
                                    src={`/storage/${newsItem.image}`}
                                    alt={newsItem.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-5">
                                    <h3 className="text-lg font-bold mb-3 text-color-2">
                                        {newsItem.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        {newsItem.date}
                                    </p>
                                    <p className="text-gray-800 text-sm">
                                        {newsItem.content &&
                                        newsItem.content.length > 0
                                            ? (() => {
                                                  const textContent =
                                                      newsItem.content.find(
                                                          (item) =>
                                                              item.type ===
                                                                  "text" ||
                                                              item.type ===
                                                                  "textBox"
                                                      );
                                                  if (textContent) {
                                                      if (
                                                          typeof textContent.value ===
                                                          "string"
                                                      ) {
                                                          return textContent.value.slice(
                                                              0,
                                                              100
                                                          );
                                                      }
                                                      if (
                                                          Array.isArray(
                                                              textContent.value
                                                          )
                                                      ) {
                                                          const firstElement =
                                                              textContent
                                                                  .value[0];
                                                          if (
                                                              typeof firstElement ===
                                                              "string"
                                                          ) {
                                                              return firstElement.slice(
                                                                  0,
                                                                  100
                                                              );
                                                          }
                                                          if (
                                                              typeof firstElement ===
                                                                  "object" &&
                                                              firstElement !==
                                                                  null
                                                          ) {
                                                              return typeof firstElement.item ===
                                                                  "string"
                                                                  ? firstElement.item.slice(
                                                                        0,
                                                                        100
                                                                    )
                                                                  : "";
                                                          }
                                                      }
                                                  }
                                                  return "";
                                              })()
                                            : "Tidak ada konten tersedia"}
                                        ...
                                    </p>
                                </div>
                            </a>
                        ))
                    ) : (
                        <p>Tidak ada hasil ditemukan untuk {query}</p>
                    )}
                </div>
            </div>
            <Search />
            <LinkNews
                latestNews={latestNews}
                newsDisplayForAYear={newsDisplayForAYear}
            />
        </div>
    );
};

export default SearchResults;
