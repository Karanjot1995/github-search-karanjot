import React, { Component } from 'react'
import styled from 'styled-components'
// import Card from './Card'

class CardList extends Component {
  render() {
    const {repo} = this.props
    return (
    <li key={repo.id} className="col-12 d-md-flex width-full py-4 border-bottom color-border-secondary public source" itemprop="owns" itemscope="" itemtype="http://schema.org/Code">
      <div className="col-10 col-lg-9 d-inline-block">
        <div className="d-inline-block mb-1">
          <h3 className="wb-break-all">
            <a href={repo.html_url} target="_blank" itemprop="name codeRepository">{repo.name}</a>
          </h3>
        </div>

        <div>
            <p className="col-9 d-inline-block color-text-secondary mb-2 pr-4" itemprop="description">
              {repo.description}
            </p>
        </div>


        <div className="f6 color-text-secondary mt-2">

          <span className="ml-0 mr-3">
            <span className="repo-language-color" style={{"background-color": "#f1e05a"}}></span>
            <span itemprop="programmingLanguage">{repo.language}</span>
          </span>Created at  <relative-time datetime={repo.updated_at} className="no-wrap">{repo.updated_at}</relative-time>
              
        </div>
      </div>

      <div className="col-2 col-lg-3 d-flex flex-column flex-justify-around">
        <div className="text-right">  
          <div className="d-inline-block js-social-container js-form-toggle-container">
            <form className="js-social-form js-form-toggle-target" action="/Karanjot1995/Authentication/star" accept-charset="UTF-8" method="post">
              <input type="hidden" name="authenticity_token" value="AFEmWkoqJYPPKLYisx1xg+t9/8xZiPrybNWaPMUMZONyctEOPafwoBsXS+sb4PQZgdiRkZYBA40egoZw/0F36Q=="/>
              <input type="hidden" name="context" value="user_stars"/>
              <button className="btn btn-sm " type="submit" value="Star" aria-label="Star this repository" title="Star Karanjot1995/Authentication" data-ga-click="Repository, click star button, action:profiles/repositories#index; text:Star">
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-star mr-1">
                  <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                </svg>Star
              </button>
            </form>
          </div>
        </div>

        <div className="text-right hide-lg hide-md hide-sm hide-xs ">
          <span className="tooltipped tooltipped-s" aria-label="Past year of activity">
            <svg width="155" height="30">
              <defs>
                <linearGradient id="gradient-282420946" x1="0" x2="0" y1="1" y2="0">
                    <stop offset="10%" stop-color="#9be9a8"></stop>
                    <stop offset="33%" stop-color="#40c463"></stop>
                    <stop offset="66%" stop-color="#30a14e"></stop>
                    <stop offset="90%" stop-color="#216e39"></stop>
                </linearGradient>
                <mask id="sparkline-282420946" x="0" y="0" width="155" height="28">
                  <polyline transform="translate(0, 28) scale(1,-1)" points="0,1 3,1 6,1 9,1 12,1 15,1 18,1 21,1 24,1 27,1 30,1 33,1 36,1 39,1 42,1 45,1 48,1 51,1 54,1 57,1 60,1 63,1 66,1 69,1 72,1 75,1 78,1 81,1 84,1 87,1 90,1 93,1 96,1 99,1 102,1 105,1 108,1 111,1 114,1 117,1 120,1 123,1 126,1 129,1 132,1 135,1 138,1 141,1 144,1 147,1 150,1 153,1 " fill="transparent" stroke="#8cc665" stroke-width="2">
                  </polyline>
                </mask>
              </defs>

              <g transform="translate(0, -12)">
                <rect x="0" y="-2" width="155" height="30" style={{"stroke": "none", "fill": "url(#gradient-282420946)", "mask": "url(#sparkline-282420946)"}}></rect>
              </g>
            </svg>
          </span>
        </div>
      </div>
    </li>
    )
  }
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export default CardList
