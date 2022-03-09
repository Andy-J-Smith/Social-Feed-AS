function ButtonOne(props) {
const btnClass = `button ${props.type}`
    return ( 
        <button className={btnClass} onClick={props.handleClick} onSubmit={props.handlePost}>{props.children}</button>
     );
}
 
export default ButtonOne;
