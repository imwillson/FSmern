import PropTypes from 'prop-types'

import express from 'express';

const router = express.Router();

router.get('/', (req,res) => {
  res.send( {data: []} );
})

// always remember to export
export default router