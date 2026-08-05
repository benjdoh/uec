export default defineEventHandler(async (event) => {
  const tname = getCookie(event, "uec-theatre");

  console.log(tname);
  if (!tname) return setResponseStatus(event, 400);
  const tidx = THEATRE_LOCATIONS.findIndex((v) => v.name === tname) + 1;
  if (tidx < 1) return setResponseStatus(event, 400);

  const response = await $fetch<SiteDataRoot>(
    "https://api-v3.mobilemoviegoing.cloud/include/app/get_site.php",
    {
      method: "POST",
      headers: {
        origin: "https://www.uecmovies.com",
        TE: "trailers",
        host: "api-v3.mobilemoviegoing.cloud",
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64; rv:153.0) Gecko/20100101 Firefox/153.0",
      },
      body: {
        eid: "8f24e18d-6f72-4574-b0e5-1cad75b95b27",
        location: `00001-00001-000${tidx > 9 ? tidx : "0" + tidx}`,
      },
    },
  );
});
