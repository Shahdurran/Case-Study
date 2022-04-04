import React from "react";
import { useState } from "react";

const Task2 = () => {
  const [input, setInput] = useState("");
  const [movies, setMovies] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const page1 = await getMovieTitles(1);
    const page2 = await getMovieTitles(2);
    let result = page1.concat(page2);
    result = result.sort();
    setTimeout(setMovies(result), 5000);
  };
  const getMovieTitles = async (num) => {
    if (input != null) {
      try {
        const response = await fetch(
          `https://jsonmock.hackerrank.com/api/movies/search/?Title=${input}&page=${num}`
        );
        const data = await response.json();
        if (data.data != null) {
          var arr = [];
          for (let i = 0; i < data.data.length; i++) {
            arr[i] = data.data[i].Title;
          }
        }
        return arr;
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div>
      <h1>TASK 2</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter Movie Title"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
      <h2>Output</h2>
      {movies ? (
        movies.map((data) => {
          return data;
        })
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Task2;
