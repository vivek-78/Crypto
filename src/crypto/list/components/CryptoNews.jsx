import { React } from 'react';
import { Grid, Link, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
const CryptoNews = (props) => {
  // eslint-disable-next-line react/prop-types
  const { src, image, title, url, count } = props;
  if (count == 6) {
    return null;
  }
  return (
    <Grid container spacing={2} className="main">
      <Grid item direction="column" xs={3}>
        <Card sx={{ width: 350, height: 270 }}>
          <CardMedia component="img" alt="green iguana" height="140" image={image} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <Link href={url}>
                <Typography variant="subtitle2">{title}</Typography>
              </Link>
            </Typography>
            <Typography>Source: {src}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
export default CryptoNews;
