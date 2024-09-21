const getKioskById = async (id) => {
  const res = await fetch(`http://localhost:3001/kiosks/${id}`, {
    next: { revalidate: 5 },
  });

  const data = res.json();
  return data;
};

const Kiosk = async ({ params }) => {
  const { id, name } = await getKioskById(params.id);
  return (
    <div>
      <h2>id:{id}</h2>
      <h2>name: {name}</h2>
    </div>
  );
};

export default Kiosk;
