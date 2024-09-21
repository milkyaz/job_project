import "./animation.css";
const TheHeader = () => {
  return (
    <header className="header">
      <div className="box">
        <div className="coast">
          <div className="wave-rel-wrap">
            <div className="wave"></div>
          </div>
        </div>
        <div className="coast delay">
          <div className="wave-rel-wrap">
            <div className="wave delay"></div>
          </div>
        </div>
        <div className="text text-w">J</div>
        <div className="text text-a">o</div>
        <div className="text text-v">b</div>
        <div className="text text-v icon-job">
          <img src="./icon-job.png" alt="" />
        </div>
      </div>
    </header>
  );
};

export { TheHeader };
