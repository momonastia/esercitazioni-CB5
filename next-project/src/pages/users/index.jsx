const Users = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <>
          <p>{user.id}</p>
          <p>{user.firstName}</p>
          <p>{user.lastName}</p>
          <p>{user.email}</p>
          <br />
        </>
      ))}
    </div>
  );
};

export default Users;

export async function getStaticProps() {
  const res = await fetch("https://dummyjson.com/users");
  const data = await res.json();

  console.log("Console log server side");

  return {
    props: {
      users: data.users,
    },
  };
}
