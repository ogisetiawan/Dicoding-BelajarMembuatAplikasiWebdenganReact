const getData = () => {
  return [
    {
      id: 1,
      title: "Babel",
      body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
      archived: false,
      createdAt: new Date("2022-04-14T04:27:34.572Z").toDateString(),
    },
    {
      id: 2,
      title: "React",
      body: "library javascript/front end framework, digunakan karena berukuran kecil",
      archived: false,
      createdAt: new Date("2022-04-14T04:27:34.572Z").toDateString(),
    },
    {
      id: 3,
      title: "Composition",
      body: "Proses menggabungkan banyak fungsi untuk menciptakan data yang lebih kompleks",
      archived: true,
      createdAt: new Date("2022-04-14T04:27:34.572Z").toDateString(),
    },
  ];
};

export { getData };
