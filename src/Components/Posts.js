import React from "react";
import Post from "./Post";
import images from "./Images";

const Posts = () => {
  return (
    <div className="thousnd:!mx-auto">
      <Post avatar={images[0]} title="Kawan Idrees" img={images[0]} />
      <Post avatar={images[4]} title="Yusf Jasm" img={images[4]} />
      <Post avatar={images[5]} title="Naly Muslih" img={images[5]} />
      <Post avatar={images[3]} title="Aram Azadin" img={images[3]} />

      <Post avatar={images[6]} title="Aram Azadin" img={images[6]} />
      <Post avatar={images[7]} title="Kawan Idrees" img={images[7]} />
      <Post avatar={images[8]} title="Yusf Jasm" img={images[8]} />
      <Post avatar={images[9]} title="Naly Muslih" img={images[9]} />
      <Post avatar={images[10]} title="Aram Azadin" img={images[10]} />

      <Post avatar={images[0]} title="Kawan Idrees" img={images[11]} />
      <Post avatar={images[4]} title="Yusf Jasm" img={images[12]} />
      <Post avatar={images[5]} title="Naly Muslih" img={images[13]} />
      <Post avatar={images[3]} title="Aram Azadin" img={images[14]} />
      <Post avatar={images[0]} title="Kawan Idrees" img={images[15]} />
      <Post avatar={images[4]} title="Yusf Jasm" img={images[16]} />
      <Post avatar={images[5]} title="Naly Muslih" img={images[5]} />
      <Post avatar={images[3]} title="Aram Azadin" img={images[0]} />
    </div>
  );
};

export default Posts;
