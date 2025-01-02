import Player from './Player';

function PlayersList({ players }) {
  return (
    <div>
      {players.map((player) => (
        <Player player={player} key={player.id} />
      ))}
    </div>
  );
}

export default PlayersList;
