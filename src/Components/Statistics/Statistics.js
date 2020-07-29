import React from "react";
import PropTypes from "prop-types";
import classes from "./Statistics.module.css";
import generateColor from "./../../functions/generateColor";

const Statistics = ({ title, stats }) => {
  return (
    <section className={classes.statistic}>
      {title && <h2 className={classes.title}>{title}</h2>}
      <ul className={classes["stats-list"]}>
        {stats.map((el) => (
          <li
            className={classes.item}
            key={el.id}
            style={{
              backgroundColor: generateColor(),
            }}
          >
            <span className={classes.label}>{el.label}</span>
            <span className={classes.percentage}>{el.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

Statistics.defaultProps = {
  title: "",
};

export default Statistics;
