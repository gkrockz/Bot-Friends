import Card from './Card';
const CardList = ({bots}) =>
{
	const botCards = bots.map((user,i) => 
		{
			return <Card key={i} id={bots[i].id} name={bots[i].name} email = {bots[i].email} />
		});
	return (
	  <div>
		  	{botCards} 
      </div>
		);
}

export default CardList;