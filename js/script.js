function message(){
    var name = document.getElementById("Name");
    var email = document.getElementById("Email");
    var subject = document.getElementById("Subject");
    var message = document.getElementById("Message");
    const success = document.getElementById("success");
    const danger = document.getElementById("danger");

    if(name.value === "" || email.value === "" || subject.value === "" || message.value === "" )
    {
        danger.style.display = "block";
    }
    else{
        setTimeout(() => {
            name.value = "";
            email.value = "";
            subject.value = "";
            message.value = "";
        }, 2000);

        success.style.display = "block";
    }

    setTimeout(() => {
        danger.style.display = "none"
    }, 3000)

    setTimeout(() => {
        success.style.display = "none"
    }, 2000)

}

const filterButtons = document.querySelector("#filter-btns").children;
const items = document.querySelector(".portfolio-gallery").children;

for(let i=0; i<filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function (){
        for(let j=0; j<filterButtons.length; j++) {
            filterButtons[j].classList.remove("active")
        }
        this.classList.add("active");
        const target = this.getAttribute("data-target")

        for(let k=0; k<items.length; k++) {
            items[k].style.display = "none";
            if(target == items[k].getAttribute("data-id")) {
                items[k].style.display = "block";
            }
            if(target == "all"){
                items[k].style.display = "block";
            }
        }
    })
}

var btnClick = document.getElementById("btnClick");
var btnClickingText = document.getElementById("btnText");

const nav = document.querySelector(".nav"),
navList = nav.querySelectorAll("li"),
totalNavList = navList.length,
allSection = document.querySelectorAll(".section"),
totalSection = allSection.length;
for(let i=0; i<totalNavList; i++)
{
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function()
    {
        removeBackSection();
        for(let j=0; j<totalNavList; j++)
        {
            if(navList[j].querySelector("a").classList.contains("active"))
            {
                addBackSection(j);
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if(window.innerWidth < 1200)
        {
            asideSectionTogglerBtn();
        }
    })
}
function removeBackSection()
{
    for(let i=0; i<totalSection; i++)
    {
        allSection[i].classList.remove("back-section");
    }
}
function addBackSection(num)
{
    allSection[num].classList.add("back-section");
}
function showSection(element)
{
    for(let i=0; i<totalSection; i++)
    {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}
function updateNav(element)
{
    for(let i=0; i<totalNavList; i++)
    {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
        {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".hire-me").addEventListener("click", function()
{
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})

const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
    navTogglerBtn.addEventListener("click", () => 
    {
        asideSectionTogglerBtn();
    })
    function asideSectionTogglerBtn()
    {
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.toggle("open");
        }
    }