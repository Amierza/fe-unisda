import { Link } from "react-router-dom";
import { allNews, groupNewsByArchive } from "../searchData";

const ArchiveList = () => {
  const archives = groupNewsByArchive(allNews);

  return (
    <div>
      <h2>Arsip Berita</h2>
      {Object.keys(archives).map((archiveKey) => (
        <div key={archiveKey}>
          <h3>{archiveKey}</h3>
          <ul>
            {archives[archiveKey].map((newsItem, index) => (
              <li key={index}>
                <Link to={`/news/${newsItem.link}`}>{newsItem.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ArchiveList;
