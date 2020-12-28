import React from "react";

export default function Foods({ factors, pick }) {
  return (
    <>
      {foods.map((food) => {
        return (
          <div
            className={factors.includes(food) ? "active" : ""}
            onClick={() => pick(food)}
          >
            {food}
          </div>
        );
      })}
    </>
  );
}

const foods = [
  "Sugar",
  "Gluten",
  "Non-gluten Grains",
  "Rice",
  "Dairy",
  "Meat",
  "Fish",
  "Nuts",
  "Fruit",
  "Veggies",
  "Caffeine",
  "Legumes",
  "Eggs",
];
