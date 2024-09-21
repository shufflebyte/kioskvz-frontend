"use client";

import { useState } from "react";

const CreateKiosk = () => {
  const [kioskName, setKioskName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const createIt = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", kioskName);
    //console.log(JSON.stringify({ name: kioskName }));
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:3001/kiosks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: kioskName,
        }),
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      console.log("Response received:", response);
    } catch (err) {
      console.error(err);
    }

    setIsLoading(false);
    setKioskName("");
  };

  return (
    <form onSubmit={createIt}>
      <input
        type="text"
        id="kioskName"
        placeholder="Bennenne das Kiosk"
        value={kioskName}
        onChange={(e) => setKioskName(e.target.value)}
      ></input>
      <button type="submit">
        {isLoading ? "Loading..." : "Neuen Kiosk erstellen"}
      </button>
    </form>
  );
};

export default CreateKiosk;
