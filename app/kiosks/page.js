import { cache } from "react";
import Link from "next/link";
import CreateKiosk from "./createKiosk";

const getKiosks = async () => {
  const res = await fetch("http://localhost:3001/kiosks", {
    cache: "no-store",
  });

  const data = await res.json();

  return data;
};

const Kiosks = async () => {
  const kiosks = await getKiosks();

  return (
    <div>
      {kiosks?.map((kiosk) => {
        return <Kiosk key={kiosk.id} kiosk={kiosk} />;
      })}
      <h1>kiosks</h1>
      <CreateKiosk />
    </div>
  );
};

const Kiosk = ({ kiosk }) => {
  const { id, name } = kiosk || {};
  return (
    <Link href={`/kiosks/${id}`}>
      <div>
        <h2>
          {id}: {name}
        </h2>
      </div>
    </Link>
  );
};

export default Kiosks;
