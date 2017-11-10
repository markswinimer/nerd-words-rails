import React from 'react'
import ListElement from './ListElement.js'

const ResultTile = props => {

  let wordList;
  if(props.result) {
    wordList = props.result.words.map(word => {
      return(
        <div>
          <ListElement
            key={word.id}
            id={word.id}
            name={word.name}
          />
          <hr className="hrRound"/>
        </div>
      )
    })
  }
  return(
    <div className="small-6 large-6 columns resultTile">
      <div className="small-5 large-5 columns resultWordList">
        <div className="large-12 columns resultName">{props.result.name}</div>
        <div className="large-12 columns resultWords">
          {wordList}
        </div>
      </div>
        <div className="small-7 large-7 columns resultInfo">

          <div className="infoPoint">
            <h4>Creator</h4>
            <div className="infoText">{props.result.creator}</div>
          </div>

          <div className="infoPoint">
            <h4>Date</h4>
            <div className="infoText">{Date(props.result.data.created_at).toString().substring(3,15)}</div>
          </div>

          <div className="infoPoint">
            <h4>Word Count</h4>
            <div className="infoText">{props.result.words.length}</div>
          </div>

          <div className="infoPoint">
            <i id="faFavorites" className="fa fa-star" aria-hidden="true"></i>
            <div className="infoText">{props.result.data.favorite_count}</div>
          </div>

          <div className="infoPoint">
            <i id="faViews" className="fa fa-gamepad" aria-hidden="true"></i>
            <div className="infoText">{props.result.data.play_count}</div>
          </div>
          <button onClick={props.handleFavorite} name={props.result.data.id} className="searchBarButton">
            <i name={props.result.data.id} id="faFave" className="fa fa-star" aria-hidden="true"></i>
          </button>

        </div>
      </div>
  )
}
export default ResultTile
