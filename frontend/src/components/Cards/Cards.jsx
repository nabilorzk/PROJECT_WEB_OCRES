import React from "react";

// Material equivalent de Bootstrap
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import { spacing } from "@material-ui/system";

import CountUp from "react-countup";
import cx from "classnames";

//css
import styles from "./Cards.module.css";

// On recupère les données avev PROPS
// Cards = {props} => on le destructure comme ça on peut acceder directement aux valeurs de data (dont à a accés depuis App.js)
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  let getCurrentDate = (separator = "/") => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}${date}`;
  };

  if (!confirmed) {
    // si confirmed n'est pas encore chargé alors on retourne Loading...
    return "Loading...";
  }
  // sinon
  return (
    <div className={styles.container}>
      {/* Sur les petits devices (xs = 12) 12 veut dire que ça prendra toute la place de l'écran */}
      {/* md={3} veut dire que sur les écrans moyen et + grands ça prendra que 3/12eme de la place de l'écran */}
      <Typography variant="h6" className={styles.covidTitle}>
        Rappel CoVid-19
      </Typography>
      <Typography variant="body2" className={styles.covidsubTitle}>
        <Alert
          style={{ marginTop: "1rem", width: "inherit" }}
          severity="warning"
        >
          Le port du masque est toujours obligatoire à l'école
        </Alert>
      </Typography>
      <Grid container justify="space-between" className={styles.containerCard}>
        <Grid
          item
          component={Card}
          className={cx(styles.card, styles.infected)}
          xs={12}
          md={3}
        >
          <CardContent>
            <Typography color="textSeconday" className={styles.titleCard}>
              Infectés
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator={","}
              />
            </Typography>{" "}
            {/* {confirmed.value}  */}
            <Typography color="textSeconday" className={styles.currentDate}>
              {getCurrentDate()}
            </Typography>
            <Typography variant="body2">
              {" "}
              Nombre <strong>d'infectés</strong> du Covid-19
            </Typography>
          </CardContent>
        </Grid>

        {/*  */}

        <Grid
          item
          component={Card}
          className={cx(styles.card, styles.recovered)}
          xs={12}
          md={3}
        >
          <CardContent>
            <Typography color="textSeconday" className={styles.titleCard}>
              {" "}
              Guéris
            </Typography>
            <Typography variant="h5">
              {" "}
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator={","}
              />
            </Typography>
            <Typography color="textSeconday" className={styles.currentDate}>
              {getCurrentDate()}
            </Typography>
            <Typography variant="body2">
              {" "}
              Nombre de <strong>guéris</strong> du Covid-19{" "}
            </Typography>
          </CardContent>
        </Grid>

        {/*  */}

        <Grid
          item
          component={Card}
          className={cx(styles.card, styles.deaths)}
          xs={12}
          md={3}
        >
          <CardContent>
            <Typography color="textSeconday" className={styles.titleCard}>
              {" "}
              Décés
            </Typography>
            <Typography variant="h5">
              {" "}
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator={","}
              />
            </Typography>
            <Typography color="textSeconday" className={styles.currentDate}>
              {getCurrentDate()}
            </Typography>
            <Typography variant="body2">
              {" "}
              Nombre de <strong>décés</strong> du Covid-19
            </Typography>
          </CardContent>
        </Grid>

        {/*  */}
      </Grid>
    </div>
  );
};

export default Cards;
