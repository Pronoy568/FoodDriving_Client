interface LeaderboardInfo {
  name: string;
  email: string;
  category: string;
  quantity: string;
}

const ShowLeaderboard = ({ info }: { info: LeaderboardInfo }) => {
  return (
    <tr>
      <th>{info.name}</th>
      <td>{info.email}</td>
      <td>{info.category}</td>
      <td>{info.quantity}</td>
    </tr>
  );
};

export default ShowLeaderboard;
