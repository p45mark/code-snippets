import React from "react";
import { Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";

interface Props {
  color: string;
}
const useStyles = makeStyles<Theme, Props>((theme: Theme) => ({
  root: props => ({
    color: props.color,
    padding: theme.spacing()
  })
}));

const Tester: React.FC<Props> = ({ color }) => {
  const classes = useStyles({ color });
  return <section className={classes.root}>What color am I? {color}</section>;
};

export default Tester;

/*
Useage: <Tester color="gray" />
*/
