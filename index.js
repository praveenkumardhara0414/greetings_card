const element = (
  // Write your code here.
  <div className="bg-container">
    <h1 className="heading">Congratulations</h1>
    <div className="card-container">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <h1 class="sub-heading">Praveen D</h1>
      <p className="para">
        Sreyas Institute of Engineering And Technology, Hyderabad
      </p>
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
