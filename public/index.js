/* STUPID HACKATHON THAILAND 5 - team 07
* หิวชาบู
*/

// make start button can't drag
$(".start-btn").attr('draggable', false);

// toggle start menu
$("body").click((e) => {
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
  return `${hourarray[hour]}${preminarray[pmin]}${minarray[smin]}${(min !== 0) ? "นาที" : ""}`
}

// update and random stupid time text color
setInterval(() => {
  document.querySelector(".time").innerHTML = getTime();
}, 1000);

var x = 0;
setInterval(() => {
  $(".rainbow").css("color", `hsl(${x}, ${100}%, ${50}%)`);
  $(".power").css("outline-color", `hsl(${x}, ${100}%, ${50}%)`);
  $(".profile").css("border-color", `hsl(${x}, ${100}%, ${50}%)`);
  if (x >= 360) {
    x = 0;
  }
  x++;
}, 10)

// start menu credits
var y = 1;
setInterval(() => {
  $(".profile").attr("src", `img/uac/${y}.bmp`);
  let user = ["Poom", "Neng", "Fang", "Phufah", "Fahfilly", "Boss", "Thun", "Pol", "Jean", "Jeng", "Mind", "Puifai", "Wave", "Hydra", "Admin", "Stupid", "Hackathon", "Thailand", "sth5", "User", "account1", "Shabu", "ง่วง"]
  $(".profile-name").html(user[y-1]);
  if (y == 23) {
    y = 1;
  }
  y++;
}, 500);

// select and highlight desktop icon
$(".win-icon").click((e) => {
  $(e.currentTarget).children().each((index, val) => {
    if (index === 0) {
      $(val).addClass("icon-selected");
    } else if (index === 1) {
      $(val).addClass("text-selected");
    }
  })
})

var lo = 5;
var ls = ["กำลังค้นหา", "กำลังค้นหา.", "กำลังค้นหา..", "กำลังค้นหา...", "กำลังค้นหา....", "กำลังค้นหา...."]
setInterval(() => {
  $(".start-items-text").each((id, el) => {
    $(el).html(ls[lo]);
    lo--;
    if (lo == -1) {
      lo = 5
    }
  })
}, 300)

// open e-preaw
// open_E_Preaw = () => {
//   $("#e-preaw").css("display", "flex");
//   var div = document.createElement('div');
//   let html1 = "";
//   for(let i=0; i<40; i++){
//     html1 += `<div style="height: 129px; width: 96px; left: ${i}%; position: absolute; bottom: ${i/30}%;" class="card nine"></div>`
//     $(() => $(".card").draggable());
//   }
//   for(let i=0; i<40; i++){
//     html1 += `<div style="height: 129px; width: 96px; top: ${i}%; position: absolute; right: ${i/30}%;;" class="card four"></div>`
//     $(() => $(".card").draggable());
//   }
//   document.getElementsByClassName("e-preaw")[0].innerHTML += html1;
// };

// drag epreaw
// $("#e-preaw").draggable({handle:".windowTitle"});

// epreawCloseWindow = () => $("#e-preaw").css("display", "none");