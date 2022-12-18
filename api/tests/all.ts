function syncDelay(milliseconds) {
  const start = new Date().getTime();
  let end = 0;

  while ((end - start) < milliseconds) {
    end = new Date().getTime();
  }
}

export default async function fetchAll() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/tests/all`);
  const data = await res.json();

  syncDelay(5000);

  return data;
}
