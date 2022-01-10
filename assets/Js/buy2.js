
const A = document.querySelector.bind(document);
const AA = document.querySelectorAll.bind(document);





const imgChange = A('.img-change');

const buy = AA('.buyClick');

for (modern = 0; modern < buy.length; modern++) {
    buy[0].onclick = function () {
        imgChange.src = 'https://clickbuy.com.vn/uploads/2021/11/13.jpg';
        A('.active.buyClick').classList.remove('active');
        this.classList.add('active')
    }

    buy[1].onclick = function () {
        imgChange.src = 'https://clickbuy.com.vn/uploads/2021/11/13-1.jpg';
        A('.active.buyClick').classList.remove('active');
        this.classList.add('active')
    }

    buy[2].onclick = function () {
        imgChange.src = 'https://clickbuy.com.vn/uploads/2021/11/13-2.jpg';
        A('.active.buyClick').classList.remove('active');
        this.classList.add('active')
    }
    buy[3].onclick = function () {
        imgChange.src = 'https://clickbuy.com.vn/uploads/2021/11/13-3.jpg';
        A('.active.buyClick').classList.remove('active');
        this.classList.add('active')
    }
}

const buyIP = A('.Buy-category--btn');
const buyIPopen = A('.buy-IP');

buyIP.onclick = function() {
    modalBig.classList.add('modal-open');
    buyIPopen.classList.add('open')

}

modalBig.onclick = function() {
    buyIPopen.classList.remove('open')

}

buyIPopen.onclick = function(e) {
    e.stopPropagation()
}
// modalBasic.onclick = function() {
//     buyIPopen.classList.remove('open')
// }

const closeBuy = A('.buy-IP-icon');

closeBuy.onclick = function() {
    modalBig.classList.remove('modal-open');
    buyIPopen.classList.remove('open')
}