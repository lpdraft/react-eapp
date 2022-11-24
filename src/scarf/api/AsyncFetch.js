export const AsyncFetch = async (urlEnd) => {
  try {
    const resp = await fetch(urlEnd);
    const json = await resp.json();
    return json;
  } catch (err) {
    alert(err);
  }
};
