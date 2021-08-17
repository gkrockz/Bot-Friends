const Scroll = (props) => {
	return (
		<div style = {{overflowY:'scroll',border:'4px solid black',height:'500px',borderRadius:'10px'}} >
		    {props.children}
		</div>
		)
}

export default Scroll;