document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.getElementById("back-to-top");

    // Показать/скрыть кнопку при прокрутке страницы
    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    // Плавная прокрутка при клике на кнопку
    backToTop.addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

document.querySelectorAll('.elem').forEach(elem => {
    elem.addEventListener('mouseenter', () => {
    elem.style.transform = 'scale(1.1)';
    });
    
    elem.addEventListener('mouseleave', () => {
    elem.style.transform = 'scale(1)';
    });
    });
    i=0;
    dt=new Array("#0000A0", "#A00000", "#00A000", "#00A0A0", "#A000A0", "#A0A000");
    function cl() // эта функция будет менять цвет текста
    {document.getElementById("web").style.color=dt[i++];
        if (i>dt.length) i=0;
        setTimeout("cl()",1000);}
setTimeout("cl()",1000);
