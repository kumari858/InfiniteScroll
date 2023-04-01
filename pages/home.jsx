import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

function home() {
  const [data, setData] = useState({
    items: Array.from({ length: 20 }),
    hasMore: true,
  });

  useEffect(() => {}, []);

  const fetchMoreData = () => {
    if (data.items.length >= 500) {
      setData({ items: data.items, hasMore: false });
      return;
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs
    setTimeout(() => {
      setData({
        items: data.items.concat(Array.from({ length: 20 })),
        hasMore: true,
      });
    }, 500);
  };
  return (
    <div >
       <h1 class="text-center text-lime-700 text-6xl pb-2.5">List </h1>
      <InfiniteScroll class="space-x-7"
        dataLength={data.items.length}
        next={fetchMoreData}
        hasMore={data.hasMore}
        loader={<h4>Loading...</h4>}
        height={550}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {data.items.map((i, index) => (
          <div
            className="h-8 border border-solid border-green-600 m-2 p-2"
            key={index}
          >
            div - #{index}
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default home;
