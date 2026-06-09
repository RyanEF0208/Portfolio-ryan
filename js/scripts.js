const text = "Ryan Escane";
const typing = document.getElementById("typing");

let index = 0;

function type() {

    if(index < text.length){

        typing.innerHTML += text.charAt(index);
        index++;

        setTimeout(type, 120);
    }
}

type();

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

});

document.querySelectorAll(".section").forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(80px)";
    section.style.transition = ".8s";

    observer.observe(section);

});