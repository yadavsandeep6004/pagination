const pageBox = document.getElementById("pageBox");
const prev = `<a href="#" data_id="prev" class="page">Prev</a>`
const next = `<a href="#" data_id="next" class="page">Next</a>`
let count = 1;

// static data
let pageSize = 15;
let datasize = 100;
let showdata = Math.ceil(datasize / pageSize);

let astr = prev;
for (let i = 1; i <= showdata; i++) {
    let cpage = count === i ? "active" : "";
    astr += `<a href="#" data_id=${i} class="page ${cpage} ">${i}</a>`
}
astr += next;
let page = astr;
pageBox.innerHTML = page;

pageBox.addEventListener('click', (e) => {
    const totalp = document.querySelectorAll(".page");
    totalp.forEach(element => {
        element.classList.remove("active");
        element.classList.remove("disble");
    })
    let ida = e.target.getAttribute("data_id");

    if (ida === "prev") {
        if (count > 1) {
            --count;
        } else {
            let d = document.querySelector(`[data_id="prev"]`);
            d.classList.add("disble")

        }
    } else if (ida === "next") {
        if (count < showdata) {
            ++count;
        } else {
            let d = document.querySelector(`[data_id="next"]`);
            d.classList.add("disble")

        }
    } else {
        let x = e.target.textContent;
        count = +x;
    }
    let currentPage = document.querySelector(`[data_id="${count}"]`);
    currentPage.classList.add("active");
})