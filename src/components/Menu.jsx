import { useState } from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <nav>
      <ul>
        <li>
          <Link
            to="/"
            onClick={() => setSelectedCategory("all")}
            className={selectedCategory === "all" ? "active" : ""}
          >
            All
          </Link>
        </li>
        <li>
          <Link
            to="/category1"
            onClick={() => setSelectedCategory("category1")}
            className={selectedCategory === "category1" ? "active" : ""}
          >
            Category 1
          </Link>
        </li>
        <li>
          <Link
            to="/category2"
            onClick={() => setSelectedCategory("category2")}
            className={selectedCategory === "category2" ? "active" : ""}
          >
            Category 2
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
