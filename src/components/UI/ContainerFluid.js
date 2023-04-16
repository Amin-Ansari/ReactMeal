import "./ContainerFluid.css";

const ContainerFluid = (props) => {
  return (
    <div className={`container-fluid ${props.className}`}>{props.children}</div>
  );
};

export default ContainerFluid;
