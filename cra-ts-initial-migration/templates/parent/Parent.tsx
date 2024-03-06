import React from 'react';
import ChildDETECTID0 from './ChildDETECTID0/ChildDETECTID0';
import ChildDETECTID1 from './ChildDETECTID1/ChildDETECTID1';
import ChildDETECTID2 from './ChildDETECTID2/ChildDETECTID2';
import ChildDETECTID3 from './ChildDETECTID3/ChildDETECTID3';
import ChildDETECTID4 from './ChildDETECTID4/ChildDETECTID4';
import ChildDETECTID5 from './ChildDETECTID5/ChildDETECTID5';
import ChildDETECTID6 from './ChildDETECTID6/ChildDETECTID6';
import ChildDETECTID7 from './ChildDETECTID7/ChildDETECTID7';
import ChildDETECTID8 from './ChildDETECTID8/ChildDETECTID8';
import ChildDETECTID9 from './ChildDETECTID9/ChildDETECTID9';
import { Grid } from '@mui/material';

export default function ParentDETECTNAME(): JSX.Element {
  const prop = { data: 'random prop' };
  return (
    <Grid item className="row">
      <ChildDETECTID0 prop={prop} />
      <ChildDETECTID1 prop={prop} />
      <ChildDETECTID2 prop={prop} />
      <ChildDETECTID3 prop={prop} />
      <ChildDETECTID4 prop={prop} />
      <ChildDETECTID5 prop={prop} />
      <ChildDETECTID6 prop={prop} />
      <ChildDETECTID7 prop={prop} />
      <ChildDETECTID8 prop={prop} />
      <ChildDETECTID9 prop={prop} />
    </Grid>
  );
}
