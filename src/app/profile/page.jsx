"use client";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { redirect, useRouter } from "next/navigation";
import Loading from "../loading";
import { toast } from "react-toastify";
import { TodoItem } from "../../components/server";
const Page = () => {
  const [taskArray, setTaskArray] = useState([]);
  const route = useRouter();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  useEffect(() => {
    axios
      .get("/api/addTask")
      .then((res) => res.data)
      .then((data) => setTaskArray(data.userTask));
  }, []);
  const addTask = async () => {
    try {
      setLoading(true);
      const res = await axios.post("/api/addTask", task);
      const data = res.data;
      axios
        .get("/api/addTask")
        .then((res) => res.data)
        .then((data) => setTaskArray(data.userTask));
      route.refresh();
      setLoading(false);
      return toast.success(data.message);
    } catch (error) {
      return toast.error(error.message);
    }
  };
  const [name, setName] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const onload = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/profile");
      const data = res.data;
      setLoading(false);
      if (data.success) {
        setName(data.data.username);
      }
      if (!data.success) {
        router.push("/login");
      }
      if (data.success == true) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    onload();
},[]);
  const deleteHandler =  async(id) =>{
    try {
      setLoading(true);
      const res = await axios.delete(`/api/task?id=${id}`)
      const data = res.data;
      axios
        .get("/api/addTask")
        .then((res) => res.data)
        .then((data) => setTaskArray(data.userTask));
        router.refresh();
      setLoading(false);
      if(!data.success) return toast.error(data.message)
      toast.success(data.message)
    } catch (error) {
      return toast.error(error)
    }finally{
      setLoading(false);
    }
  }
  return loading ? (
    <Loading />
  ) : (
    <div className="flex min-h-screen flex-col bg-indigo-100">
      <div className="flex flex-col justify-end items-start">
        <div className="text-xl m-3">Welcome - {name}</div>
      </div>
      <div className="flex justify-center items-center mt-8">
        <div className="flex flex-col justify-center items-center h-60 bg-indigo-300 w-4/5 mb-8">
          <input
            onChange={(e) => {
              setTask({ ...task, title: e.target.value });
            }}
            className=" focus:outline-slate-300 rounded w-2/3 h-12 m-2 mt-3 p-2"
            type="text"
            placeholder="Enter Title"
          />
          <input
            onChange={(e) => {
              setTask({ ...task, description: e.target.value });
            }}
            className=" focus:outline-slate-300 rounded w-2/3 h-12 m-2 p-2"
            type="text"
            placeholder="Enter description"
          />
          <button
            onClick={addTask}
            className="mb-3 mt-4 bg-slate-100 px-3 py-2 rounded"
          >
            Add Task
          </button>
        </div>
      </div>
      <div className="flex w-full justify-center flex-col ">
        {taskArray.map((item) => (
          <>
            <div className="flex m-auto w-4/5 my-1 justify-between rounded-lg p-3 bg-indigo-200">
              <div>
                <div className=" font-serif text-2xl">{item.title}</div>
                <div className="font-serif text-lg">{item.description}</div>
              </div>
              <div className="flex justify-center items-center">
                {loading ? (
                  "Loading..."
                ) : (
                  <>
                    <button
                      onClick={() => {
                        deleteHandler(item._id);
                      }}
                      className="p-4 text-lg bg-slate-100 rounded"
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Page;
