
const Client = ({ client }) => {
  return (
    <ul>
      <li xs={9}>
        <li>
          {client.firstName} {client.lastName} {client.gender} {client.province}
        </li>
      </li>
    </ul>
  );
};

export default Client;
