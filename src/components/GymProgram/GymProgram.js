/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Icon from "../GlobalComponents/Icon";
import GymTitle from "./GymTitle";
import GymSubtitle from "./GymSubtitle";
import GymProgramCard from "./GymProgramCard";
import Container from "../GlobalComponents/Container";

const GymProgram = () => (
  <div css={styles} className="gymProgram">
    <GymTitle />
    <Icon />
    <GymSubtitle />
    <Container>
      <GymProgramCard
        title="Basic Fitness"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet erat interdum, convallis lorem sit amet, mattis neque. Vivamus in mauris augue."
      />
      <GymProgramCard
        title="Advanced Muscle Course"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet erat interdum, convallis lorem sit amet, mattis neque. Vivamus in mauris augue."
      />
      <GymProgramCard
        title="New Gym Training"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet erat interdum, convallis lorem sit amet, mattis neque. Vivamus in mauris augue."
      />
      <GymProgramCard
        title="Yoga Training"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet erat interdum, convallis lorem sit amet, mattis neque. Vivamus in mauris augue."
      />
      <GymProgramCard
        title="Basic Muscle Course"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet erat interdum, convallis lorem sit amet, mattis neque. Vivamus in mauris augue."
      />
      <GymProgramCard
        title="Body Building Course"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet erat interdum, convallis lorem sit amet, mattis neque. Vivamus in mauris augue."
      />
    </Container>
  </div>
);

const styles = css`
  width: 100%;
  min-height: 100vh;
  text-align: center;
  padding: 120px 0;
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 40px 0;
  }
  @media (max-width: 700px) {
    .container {
      flex-direction: column;
      justify-content: flex-start;
    }
  }
  @media (min-width: 701px) and (max-width: 1100px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default GymProgram;
