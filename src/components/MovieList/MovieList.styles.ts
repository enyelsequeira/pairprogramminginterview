import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const CardStyle = makeStyles(() =>
  createStyles({
    card: {
      border: "1px solid red"
    },

    media:{
      height: "400px",
      border: "2px solid black"
    }
   
  }),
);

export  default CardStyle