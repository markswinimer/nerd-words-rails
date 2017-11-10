import React from 'react'

const ResultTile = props => {

  return(
    <div className="small-6 large-6 columns resultTile">
      <div className="small-5 large-5 columns resultWordList">
        <div className="large-12 columns resultName">Scooby-Doo</div>
        <div className="large-12 columns resultWords">
          Weapon
          <hr className="hrRound"/>
          Sheep
          <hr className="hrRound"/>
          Windmill
          <hr className="hrRound"/>
          Dog Food
          <hr className="hrRound"/>
          Weapon
          <hr className="hrRound"/>
          Sheep
          <hr className="hrRound"/>
          Windmill
          <hr className="hrRound"/>
          Dog Food
          <hr className="hrRound"/>
          Weapon
          <hr className="hrRound"/>
          Sheep
          <hr className="hrRound"/>
          Windmill
          <hr className="hrRound"/>
          Dog Food
          <hr className="hrRound"/>
        </div>
        <div className="favoriteButton">
          <i id="faFave" className="fa fa-star" aria-hidden="true"></i>
        </div>
      </div>
        <div className="small-7 large-7 columns resultInfo">
          <div className="infoPoint">
            <h4>Creator</h4>
            <div className="infoText">
              Arknova
            </div>
          </div>

          <div className="infoPoint">
            <h4>Date</h4>
            <div className="infoText">May 15th 2017</div>
          </div>

          <div className="infoPoint">
            <h4>Word Count</h4>
            <div className="infoText">217</div>
          </div>

          <div className="infoPoint">
            <i id="faFavorites" className="fa fa-star" aria-hidden="true"></i>
            <div className="infoText">217</div>
          </div>

          <div className="infoPoint">
            <i id="faViews" className="fa fa-gamepad" aria-hidden="true"></i>
            <div className="infoText">12</div>
          </div>

        </div>
      </div>
  )
}
export default ResultTile
