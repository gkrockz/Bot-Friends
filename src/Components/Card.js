import './Card.css';

const Card = ({id,name,email}) => {
	return (
			<div className="tc grow custom-bg br3 pa3 ma2 dib bw2 shadow-5">
				<img src={`https://avatars.dicebear.com/api/bottts/${id*103}.svg`} alt="Bot"/>
				<div>
					<h2>{name}</h2>
					<p>{email}</p>
				</div>
			</div>
		);
}
export default Card;