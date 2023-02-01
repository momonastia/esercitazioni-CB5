import { useRouter } from "next/router";

const Users = () => {
  const router = useRouter();

  const id = router.query.id;
  const path = router.asPath;

  console.log(router);

  return (
    <>
      <h1>Dymanic user page {id} </h1>
      <h1>Page path: {path} </h1>;
    </>
  );
};

export default Users;
