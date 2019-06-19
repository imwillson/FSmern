import React from 'react';
import PropTypes from 'prop-types'



const ContestPreview = (contest) => {
  // console.log(contest);
  return (
    <div className="ContextPreview">
      <div>{contest.categoryName}</div>
      <div>{contest.contestName}</div>
    </div>
  )
}

export default ContestPreview;