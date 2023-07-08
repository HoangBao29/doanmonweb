var loginActive = localStorage.getItem("login");
if (!loginActive) {
    var cartRender = document.querySelector(".cart");
    cartRender.remove();
    console.log(cartRender);
}
console.log(loginActive);

var renderLogin = document.getElementById("account")
console.log(renderLogin);
if(loginActive !== null) {
    var dataLogin = JSON.parse(loginActive)
    renderLogin.innerHTML=`<ul id="account">
    <li><a href="profile.html">${dataLogin.name}</a></li>
    <span>/</span>
    <li><a onclick="handleLogout()">Đăng xuất</a></li>
</ul>`
}