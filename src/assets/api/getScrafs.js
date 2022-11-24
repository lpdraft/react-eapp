export const getScarfs = async () => {
  try {
    const resp = await fetch("http://localhost:3000/scarf");
    // const jsonData = await resp.json();
    const [scarf] = await resp.json();
    console.log(scarf);
  } catch (error) {
    alert("Falló el servidor");
  }
};
getScarfs();
