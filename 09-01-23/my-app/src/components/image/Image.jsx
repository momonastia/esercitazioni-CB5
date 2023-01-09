import tree from "./tree.png";
import "./Image.css";

export function Tree(props) {
  const treePic = <img src={tree} alt="" />;
  return <div className="image-tree">{treePic}</div>;
}
