const Comp2 = (props) => {
    let handleTouch=props.fun
    return (  
        <div className="comp2">
            <h1>HUNK2</h1>
            <button onClick={handleTouch}>tap</button>
        </div>
    );
}
 
export default Comp2;