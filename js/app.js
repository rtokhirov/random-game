let title = document.querySelector("#number")

const form = document.querySelector("form")

const body = document.querySelector('body')

const smileImg = document.getElementById('smile')
smileImg.style.display = "none";

const badImg = document.getElementById('bad')
badImg.style.display = "none";

const inputEl = document.getElementsByClassName('form-control')



form.addEventListener('submit', function(e) {
    let randomNum = Math.floor(Math.random() * 11);
    e.preventDefault();
    console.log(randomNum);
    const ism = form.name.value;
    const num = form.number.value;
    inputEl.disabled = true;

    if (num >= 0 && num < 11) {
        if (num == randomNum) {
            document.body.style.background = "green"
            result.textContent = `Tabriklaymiz ${ism}`
            result2.textContent = `Siz g'alaba qozondiz`
            randomSon.textContent = `Men o'ylagan son: ${randomNum}`;

            smileImg.style.display = "block"
            badImg.style.display = "none"

        } else {
            document.body.style.background = "tomato"
            result.textContent = `Afsus ${ism}`
            result2.textContent = `Siz yutkazdingiz`
            randomSon.textContent = `Men o'ylagan son: ${randomNum}`;
            smileImg.style.display = "none"
            badImg.style.display = "block"

        }
    } else {
        result2.textContent = `Siz notogri qiymat kiritdingiz`
        result.textContent = `${ism}`
        randomSon.textContent = ``;
        smileImg.style.display = "none"
        badImg.style.display = "none"
        document.body.style.background = " linear-gradient(to left bottom, #9548c7, #e343a3, #ff637c, #ff9361, #ffc461, #f6bc60, #ecb35e, #e3ab5d, #ce7055, #a43e58, #661e56, #131048)"
    }
    document.body.style.height = "100%"
})