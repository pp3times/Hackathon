/* STUPID HACKATHON THAILAND 5 - team 07
* หิวชาบู
*/

// make start button can't drag
$(".start-btn").attr('draggable', false);

// toggle start menu
$(window).click((e) => {
  if (e.target != $(".start-btn")[0]) {
    $(".start-menu-win").removeClass("active-menu");
  } else {
    $(".start-menu-win").toggleClass("active-menu");
  }
})

// stupid time
const getTime = () => {
  const date = new Date();
  let hour = date.getHours();
  let hourarray = ["เที่ยงคืน", "ตีหนึ่ง", "ตีสอง", "ตีสาม", "ตีสี่", "ตีห้า", "หกโมง", "เจ็ดโมง", "แปดโมง", "เก้าโมง", "สิบโมง", "สิบเอ็ดโมง", "เที่ยง", "บ่ายโมง", "บ่ายสอง", "บ่ายสาม", "สี่โมง", "ห้าโมง", "หกโมง", "หนึ่งทุ่ม", "สองทุ่ม", "สามทุ่ม", "สี่ทุ่ม", "ห้าทุ่ม"]
  let min = date.getMinutes();
  let pmin = Math.floor(min/10)
  let smin = min%10;
  let minarray = ["", "หนึ่ง", "สอง", "สาม", "สี่", "ห้า", "หก", "เจ็ด", "แปด", "เก้า"]
  let preminarray = ["", "สิบ", "ยี่สิบ", "สามสิบ", "สี่สิบ", "ห้าสิบ"]
  return `${hourarray[hour]}${preminarray[pmin]}${minarray[smin]}${(pmin === 0) ? "นาที" : ""}`
}

// update and random stupid time text color
setInterval(() => {
  document.querySelector(".time").innerHTML = getTime();
  $(".time").css("color", `hsl(${Math.random()*360}, ${100}%, ${50}%)`);
}, 1000);