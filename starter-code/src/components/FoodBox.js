import React from 'react'
import 'bulma/css/bulma.css';

export default function Foodbox({data}) {
  return(
    <div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={data.image} alt={data.name} />
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{data.name}</strong> <br />
          <small>{data.calories}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input
            className="input"
            type="number" 
            value="1"
          />
        </div>
        <div className="control">
          <button className="button is-info">
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>
  )
}
