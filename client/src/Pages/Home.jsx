import Model from "@/components/custom/Model";
import Navbar from "@/components/custom/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { Eye, PenBox, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  const [Todos, setTodos] = useState([]);

  useEffect(() => {
    try {
      const fetchTodos = async () => {
        const res = await axios.get(
          "http://localhost:5000/api/todo/all-todos",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!res) {
          toast.error("Something went wrong");
        }
        console.log(res.data.todos);
        setTodos(res.data.todos);
      };
      fetchTodos();
    } catch (error) {
      toast.error(error.message);
    }
  }, []);

  const todostatus = async (id) => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/todo/update/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },{
          ...Todos,
          completed: !Todos.completed
        }
      );
      if (!res) {
        toast.error("Something went wrong");
      }
      console.log(res.data.todos);
      setTodos(res.data.todos);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className=" mx-auto p-4 mt-4">
        <div className="flex flex-col gap-2 justify-center items-center my-5">
          <input
            type="text"
            placeholder="Tiltle"
            className="w-2/3 p-2 border"
          />
          <input
            type="text"
            placeholder="Discription"
            className="w-2/3 p-2 border"
          />
          <Button className="w-2/3">Add</Button>
        </div>
        <div className="flex flex-col gap-2 mx-auto  items-center my-5">
          <ul className="w-full">
            {Todos.map((todo, index) => (
              <li
                key={index}
                className="flex justify-between items-center my-2 w-full md:w-2/3 mx-auto"
              >
                <div className="flex items-center gap-4">
                  <Input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => todostatus(todo._id)}
                    className="w-3 h-3 md:w-6 md:h-6 cursor-pointer"
                  />
                  <span className="text-lg">{todo.title}</span>
                </div>
                <div className="flex items-center gap-4">
                  <Model todo={todo} />

                  <Link to={`/todo/${todo._id}`}>
                    <Button
                      variant="secondary"
                      className="w-3 h-3 md:w-6 md:h-6"
                    >
                      <Eye />
                    </Button>
                  </Link>
                  <Button
                    variant="destructive"
                    className="w-3 h-3 md:w-6 md:h-6"
                  >
                    <Trash2 />
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2 mx-auto  items-center my-5">
          <p className="text-lg">
            <span className="font-bold mx-3">{Todos.length}</span>Remain Todos
          </p>
          <Button className="w-1/2">Log Out</Button>
        </div>
      </div>
    </>
  );
};

export default Home;
