/**
 * Main JavaScript file for MOFA Website
 * Handles Navbar Dropdowns, Mobile Menu, and Global Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. القوائم المنسدلة في شريط التنقل (Navbar Dropdowns)
    const navDropdowns = document.querySelectorAll('.dropdownHover');
    const navDropdownBtns = document.querySelectorAll('.dropdownHoverButton');

    navDropdownBtns.forEach((btn, i) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const currentMenu = navDropdowns[i];
            if (!currentMenu) return;

            const isOpen = !currentMenu.classList.contains('hidden');

            // إغلاق جميع القوائم الأخرى
            navDropdowns.forEach(menu => menu.classList.add('hidden'));

            // تبديل حالة القائمة الحالية
            if (!isOpen) {
                currentMenu.classList.remove('hidden');
            }
        });
    });

    // إغلاق القوائم المنسدلة عند النقر في أي مكان آخر بالصفحة
    document.addEventListener('click', (e) => {
        navDropdowns.forEach(menu => {
            if (!menu.contains(e.target)) {
                menu.classList.add('hidden');
            }
        });
    });

    // 2. قائمة الهواتف الذكية (Mobile Hamburger Menu)
    const menuButton = document.querySelector('.menu_bar_btn');
    const mobileMenu = document.querySelector('.menu_mobile');

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenu.classList.toggle('hidden');
            const isExpanded = !mobileMenu.classList.contains('hidden');
            menuButton.setAttribute('aria-expanded', isExpanded);
        });
    }

    // 3. تحديث سنة حقوق الملكية تلقائياً
    const footerYears = document.querySelectorAll('.footer-year');
    const currentYear = new Date().getFullYear();
    footerYears.forEach(el => {
        el.textContent = currentYear;
    });
});

