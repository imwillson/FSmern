import React from 'react';
import PropTypes from 'prop-types'



const ContestPreview = (contest) => {
  // console.log(contest);
  return (
    <div className="ContestPreview">
      <div className="category-name">{contest.categoryName}</div>
      <div className="contest-name">{contest.contestName}</div>
    </div>
  )
}

// test

export default ContestPreview;