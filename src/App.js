import React, { useState } from "react";
import "./styles.css";

var gamesDB = {
  "Role Playing (RPG)": [
    {
      title: "The Witcher 3: Wild Hunt",
      rating: "⭐ 4.8/5",
      description:
        "There's nothing quite like The Witcher 3, where one moment you can help put the soul of a noonwraith to rest and the next you can head to the Passiflora and engage in some heavy petting (that you paid for).This is the best damn RPG you can play right now, so toss a coin to your witcher, you've got the time."
    },
    {
      title: "Fallout: New Vegas",
      rating: "⭐ 4.75/5",
      description:
        "Join one of the many fierce factions, try to become the Savior of the Damned by boosting your good karma, or simply create your own goals. Collect all the teddy bears in the land. Clear Quarry Junction from its, er…pest problem. It's up to you."
    },
    {
      title: "Mass Effect 2",
      rating: "⭐ 4.6/5",
      description:
        "In this sequel, BioWare takes the foundation laid in Mass Effect (Commander Shepherd must navigate space racism and the potential predetermined destruction of the universe alongside a motley crew of aliens) and builds a beautiful shiny space house on top of it."
    }
  ],
  "Multiplayer Online Battle Arena (MOBA)": [
    {
      title: "League of Legends",
      rating: "⭐ 4.8/5",
      description:
        "League of Legends might not have been the first MOBA, but it's certainly proved to be the biggest. More accessible than DOTA 2, and with a greater focus on its characters and their personalities, it's established itself as the definitive MOBA, especially if you're just starting out."
    },
    {
      title: "DOTA 2",
      rating: "⭐ 4.8/5",
      description:
        "Technically the sequel to the proto-MOBA, Defense of the Ancients, Valve scooped up that original team and made DOTA 2 its very own. It's one of the more punishing games on this list due to the sheer depth of its mechanics, but that does at least mean it'll keep most of its fans playing for thousands of hours."
    },
    {
      title: "Heroes of the Storm",
      rating: "⭐ 4.5/5",
      description:
        "Blizzard released Heroes of the Storm back in 2015, creating a multiverse of sorts where some of the most iconic characters across franchises like Diablo, Starcraft and Overwatch joined forces together, and battled in all sorts of familiar maps and arenas completing objectives. The biggest highlight, however, lies upon the dynamic of each match."
    }
  ],
  "Real time strategy (RTS)": [
    {
      title: "Starcraft 2",
      rating: "⭐ 4.9/5",
      description:
        "Starcraft was the first taste of the RTS genre for many, and for good reason. Its gritty sci-fi aesthetic, interesting characters with solid voice acting, and of course, non-stop combat and resource management in real time made it stand out for years to come. The sequel brought much of what had worked well in its predecessor packed in a new campaign and multiplayer modes."
    },
    {
      title: "Halo Wars: Definitive Edition",
      rating: "⭐ 4.8/5",
      description:
        "This list couldn’t miss the addition of Halo Wars, one of the most interesting RTS out there. Not just because of the fact that it’s a polished and worthy spin on the genre, but also in terms of how well it adapts everything that makes Halo so rich into uncharted territory for the franchise. You can expect the same buck wild, frantic action of Halo’s intense battles in a different perspective, leading several units at a time and looking for the best approach for every encounter."
    },
    {
      title: "Ages of Empires 2: Definitive Edition",
      rating: "⭐ 4.75/5",
      description:
        "It’s no wonder that after all these years Age of Empires is still one of the first recommendations that come to mind when talking about RTS games. Everything from the design to the charm (and often silliness) of the units makes it for a title that rarely misses. The Definitive Edition isn’t exactly groundbreaking in terms of changes, but it’s one of those cases where any drastic changes would have raised some brows."
    }
  ]
};

export default function App() {
  var genresWeKnow = Object.keys(gamesDB);
  var [genreClicked, setGenreClicked] = useState("Role Playing (RPG)");
  var listOfBooks = gamesDB[genreClicked];

  function genreClickHandler(genre) {
    setGenreClicked(genre);
  }

  return (
    <div className="App">
      <h1> 🎮 Video Game Suggestions 🎮</h1>
      <p>
        Here is a curated list of games for different tastes. Click on each
        category to find the recommendations.
      </p>

      <div>
        {genresWeKnow.map((genre) => {
          return (
            <span key={genre}>
              <button onClick={() => genreClickHandler(genre)}>{genre}</button>
            </span>
          );
        })}
      </div>

      <ul>
        {listOfBooks.map((gamesDB) => {
          return (
            <li className="list" key={gamesDB.title}>
              <h2 className="title">{gamesDB.title}</h2>
              <small className="description">{gamesDB.description}</small>
              <p>{gamesDB.rating}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
