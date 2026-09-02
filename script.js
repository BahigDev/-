// التفاعل عند إرسال النموذج
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة
    alert('شكراً لك! تم إرسال رسالتك بنجاح.');
    this.reset(); // تفريغ الخانات
});
