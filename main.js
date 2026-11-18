// عداد الأرقام
let s = 0, v = 0;
let timer = setInterval(() => {
  s += 50; v += 10;
  document.getElementById("students").textContent = s + "+";
  document.getElementById("videos").textContent = v + "+";
  if (s >= 5000) clearInterval(timer);
}, 20);

function scrollToPrice() {
  document.getElementById("price").scrollIntoView({behavior:"smooth"});
}
function selectSubject(name) {
  document.getElementById("selected").textContent = "✅ اخترت مادة: " + name + " - اشترك دلوقتي بـ 1000ج وشوف كل فيديوهاتها";
}
function toggleFaq(btn) {
  btn.parentElement.classList.toggle("active");
}
function openModal() {
  document.getElementById("modal").style.display = "flex";
}
function closeModal() {
  document.getElementById("modal").style.display = "none";
}
function subscribe() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let msg = document.getElementById("msg");
  if (!name || !phone) {
    msg.textContent = "⚠️ اكتب اسمك ورقم الواتساب الأول";
    msg.style.color = "red";
    return;
  }
  msg.textContent = "🎉 تمام يا " + name + "! ابعت 1000ج على فودافون كاش وهنفعلك حسابك، هنكلمك على " + phone;
  msg.style.color = "green";
}
function playVideo() {
  alert("🎬 فيديو مجاني: شرح أول درس مع مستر يوسف مصطفي - اشترك عشان تشوف باقي الفيديوهات");
}
