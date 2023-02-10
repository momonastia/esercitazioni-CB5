import { createContext } from "react";

const InitialState = {
  noteList: [
    {
      id: 1,
      title: "First note title",
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
    },
    {
      id: 2,
      title: "Second note title",
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
    },
    {
      id: 3,
      title: "Third note title",
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
    },
  ],
  user: {
    username: localStorage.getItem("Node-app-username"),
  },
};

const ApplicationCtx = createContext(InitialState);

export { InitialState, ApplicationCtx };
