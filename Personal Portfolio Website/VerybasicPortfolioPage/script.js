/* ===== Sidebar expansion / collapse ===== */
document.querySelectorAll('.toggle').forEach(btn=>{
    btn.addEventListener('click',()=>{
        document.getElementById(btn.dataset.target)
                .classList.toggle('expanded');
    });
});

/* ===== Header enhancements ===== */
const header   = document.getElementById('appHeader');   // sticky app‑bar
const burger   = document.getElementById('hamburger');   // mobile hamburger
const drawer   = document.getElementById('drawer');      // mobile nav drawer

/* 1. Scroll‑shrink effect */
window.addEventListener('scroll',()=>{
    if (window.scrollY > 20) header.classList.add('scrolled');
    else                     header.classList.remove('scrolled');
});

/* 2. Mobile drawer toggle */
burger?.addEventListener('click',()=>drawer.classList.toggle('open'));

/* 3. Auto‑close drawer after navigation */
drawer?.querySelectorAll('a').forEach(link=>{
    link.addEventListener('click',()=>drawer.classList.remove('open'));
});
