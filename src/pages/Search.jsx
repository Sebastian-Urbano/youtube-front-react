import React, { useEffect } from "react";
import Header from "../components/Header";
import CardVideos from "../components/CardVideos";
import InputSearch from "../components/InputSearch";
import { StatusContext } from "../context/StatusProvider";
import { ToastContainer, toast } from "react-toastify";
import axios from "../utils/axios";
import "react-toastify/dist/ReactToastify.css";

const Search = () => {
  const { status, setStatus } = React.useContext(StatusContext);

  useEffect(() => {
    if (status.error) {
      toast.error("Ups you have an empty field");
    }
  }, [status.error]);

  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    };
    if (status.search) {
      async function fetchData() {
        const req = await axios.post(
          "/youtube-search",
          {
            query: status.query,
          },
          { headers: headers }
        );
        setTimeout(() => {
          setStatus({ ...status, data: req.data.data_videos });
        }, 2000);
      }
      fetchData();
    }
  }, [status.search]);
  return (
    <>
      <Header />
      <InputSearch status={status} setStatus={setStatus} />
      <CardVideos status={status} setStatus={setStatus} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Search;
