let phoneN = document.getElementById("phone");
let subscriptionChange = document.querySelector(".subs")
function changePhone() {
    phoneN.innerHTML = `+381 64 6425724`
}

function sendMessage() {
    var request = new XMLHttpRequest();
    var fname = document.getElementById("fname").value;

    if (fname !== "") {
        document.getElementById("fname").value = "";
        request.open(
            "POST",
            "https://discord.com/api/webhooks/992524447292596309/x0XgGpxbaK_wMYx2V7kuX5tVRCBuG6pZIjNeK48p-2h7vywR4g0X24wqsiIJs7t2AOqY"
        );

        request.setRequestHeader("Content-type", "application/json");

        var params = {
            username: "Lazarevic Official Server ",
            content:
                "**Neko zeli da vas prati !**" +
                "\n*mail:* " + fname
                
        };

        request.send(JSON.stringify(params));
        subscriptionChange.innerHTML = `<p class="subsCha" >Hvala Vam, <br> Blagovremeno ćemo Vas obavestiti o svim novinama na našem sajtu</p>`
    }
}

let firstBtn = document.getElementById("first")
let secondBtn = document.getElementById("second")
let thirdBtn = document.getElementById("third")
let textKontent = document.getElementById("text")
let naslovContent = document.getElementById("naslov")

const slideOne = {
    naslov: `Slažemo li se ?`,
    text: `"Fotografija pomaže ljudima da vide" <br> <br>
    <span align="center">- Berenice Abbott</span>`
}
const slideTwo = {
    naslov: `Zato...`,
    text: `Širom otvorite oči <br> I radite sa najboljima`
}
const slideThree = {
    naslov: `<center><i class="fa-brands fa-instagram"></i>lazarevicfoto</center>`,
    text: `Zabeležite svaki Vaš trenutak u životu !`
}

firstBtn.addEventListener('click', function() {
    naslovContent.innerHTML = slideOne.naslov;
    textKontent.innerHTML = slideOne.text;
})
secondBtn.addEventListener('click', function() {
    naslovContent.innerHTML = slideTwo.naslov;
    textKontent.innerHTML = slideTwo.text;
})
thirdBtn.addEventListener('click', function() {
    naslovContent.innerHTML = slideThree.naslov;
    textKontent.innerHTML = slideThree.text;
})