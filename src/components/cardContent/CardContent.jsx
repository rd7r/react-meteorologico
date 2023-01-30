export const CardContent = (props) => {
    return (
        <>
          <h1>{props.name}</h1>
          <h2>{props.temperatura}°</h2>
          <h3>{props.conditionText}</h3>
          <img src={props.conditionIcon} alt={props.conditionIcon} />
        </>);
}