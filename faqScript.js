function buildFAQs(){
    const faqs = document.querySelectorAll('.faq');
    faqs.forEach(faq => {
        const question = faq.querySelector('.faqQuestion');
        question.addEventListener('click', () => {
            faq.classList.toggle('inactive');
        });
    });
}

window.addEventListener('DOMContentLoaded', buildFAQs);