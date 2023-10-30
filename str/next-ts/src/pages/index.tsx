import React from "react";

const Home = () => {
  return <div>Main Homepage</div>;
};

// you can manage your route authentications and header and footer from the layout object
Home.layout = { header: true, footer: true, auth: false };

export default Home;
