import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  const data = useLoaderData();
  //   const [data, setdata] = useState(null);

  //   useEffect(() => {
  //     const data = fetch(`https://api.github.com/users/${userid}`);
  //     data
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setdata(data);
  //       });
  //   }, []);

  return (
    <div className="flex justify-center items-center flex-col mt-5 p-5">
      <h1 className="text-xl">User : {userid}</h1>
      <h1 className="text-xl">Github Followers : {data?.followers}</h1>
    </div>
  );
}

export default User;

export const githubInLoader = async () => {
  const data = await fetch(`https://api.github.com/users/abhi23zc`);
  return await data.json();
};
