import React from "react";
import "./cards.component";
import CountUp from "react-countup";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading ...";
  }

  return (
    <div className="ui cards">
      <div className="yellow card">
        <div className="content">
          <div className="header">Infected</div>
          <div className="meta">{new Date(lastUpdate).toDateString()}</div>
          <div className="extra content">
            <div className="center aligned">
              <span className="ui yellow circular label massive">
                {" "}
                <CountUp
                  start={0}
                  end={confirmed.value}
                  duration={1.75}
                  separator=","
                />
              </span>
            </div>
          </div>
          <div className="description">Number of active cases of COVID-19</div>
        </div>
      </div>
      <div className="green card">
        <div className="content">
          <div className="header">Recovered</div>
          <div className="meta">{new Date(lastUpdate).toDateString()}</div>
          <div className="extra content">
            <div className="center aligned">
              <span className="ui green circular label massive">
                <CountUp
                  start={0}
                  end={recovered.value}
                  duration={1.75}
                  separator=","
                />
              </span>
            </div>
          </div>
          <div className="description">Number of recoveries from COVID-19</div>
        </div>
      </div>
      <div className="red card">
        <div className="content">
          <div className="header">Deaths</div>
          <div className="meta">{new Date(lastUpdate).toDateString()}</div>
          <div className="extra content">
            <div className="center aligned">
              <span className="ui red circular label massive">
                <CountUp
                  start={0}
                  end={deaths.value}
                  duration={2.75}
                  separator=","
                />
              </span>
            </div>
          </div>
          <div className="description">Number of deaths caused by COVID-19.</div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
