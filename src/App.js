import "./App.css";

import { useState } from "react";

import FinalComponent from "./components/FinalComponent";
import AppComponent from "./components/AppComponent";

function App() {
  const [selectedRating, setSelectedRating] = useState();
  const [isSubmited, setIsSubmited] = useState(false);

  function handleRatingClicked(rating) {
    setSelectedRating(rating);
  }

  function handleFormSubmited(e) {
    e.preventDefault();
    setIsSubmited(true);
  }
  return isSubmited ? (
    <FinalComponent selectedRating={selectedRating} />
  ) : (
    <AppComponent
      handleFormSubmited={handleFormSubmited}
      handleRatingClicked={handleRatingClicked}
      selectedRating={selectedRating}
    />
  );
}

export default App;
