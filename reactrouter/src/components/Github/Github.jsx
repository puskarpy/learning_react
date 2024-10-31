import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";

export default function Github() {
  const data = useLoaderData();
  // const { username } = useParams();
  // const [data, setData] = useState({});
  // useEffect(() => {
  //   fetch(`https://api.github.com/users/${username}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, [username]);

  return (
    <>
      <div className=" p-4 flex justify-center items-center ">
        <div className=" p-4 flex flex-col gap-4 justify-between items-center shadow-md bg-slate-200 m-2">
          <div>
            <img
              className="rounded-full w-[200px]"
              src={data.avatar_url}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <p className="text-xl p-2 ">Name: {data.name}</p>
            <p className="text-xl p-2 ">Blog:{data.blog}</p>
            <p className="text-xl p-2 ">Location:{data.location}</p>
            <p className="text-xl p-2 ">Bio:{data.bio}</p>
            <p className="text-xl p-2 ">Repos:{data.public_repos}</p>
            <p className="text-xl p-2 ">Followers:{data.followers}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export const githubUserInfo = async () => {
  let response = await fetch(`https://api.github.com/users/puskar26`);
  return response.json();
};
