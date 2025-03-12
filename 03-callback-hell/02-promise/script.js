const janji = new Promise((resolve, reject) => {
  setTimeout(() => {
    const berhasil = false;
    if (berhasil) {
      resolve("Janji ditepati!");
    } else {
      reject("Janji dibatalkan!");
    }
  }, 2000);
});

janji
  .then((hasil) => {
    console.log(hasil);
  })
  .catch((alasan) => {
    console.log(alasan);
  });
