interface VolunteerInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
}

const ShowVolunteer = ({ info }: { info: VolunteerInfo }) => {
  return (
    <tr>
      <th>{info.name}</th>
      <td>{info.email}</td>
      <td>{info.phone}</td>
      <td>{info.location}</td>
    </tr>
  );
};

export default ShowVolunteer;
