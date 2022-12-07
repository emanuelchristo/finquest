var months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
var tommorow = new Date();
tommorow.setDate(tommorow.getDate() + 1);

const tmw = {
  dd: String(tommorow.getDate()).padStart(1, "0"),
  mm: months[String(tommorow.getMonth()).padStart(2, "0")],
  yy: String(tommorow.getFullYear()).padStart(2, "0"),
};
