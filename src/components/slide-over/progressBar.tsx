import * as React from 'react';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress
          sx={{
          }}
          variant="determinate" {...props}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography
          variant="body2"

          color="text.secondary">{`${Math.round(props.value,)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

interface Props {
  value: number
}


export default function LinearWithValueLabel({
  value
}: Props) {

  React.useEffect(() => {

  }, [value]);

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgressWithLabel value={value} />
    </Box>
  );
}
