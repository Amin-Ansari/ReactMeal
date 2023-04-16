import classes from "./ContainerFluid.module.css";

const ContainerFluid = (props) => {
  return <div className={classes["container-fluid"]}>{props.children}</div>;
};

export default ContainerFluid;
