const subjectElement = document.getElementById('subject');
const durationElement = document.getElementById('duration');
const startTimeElement = document.getElementById('startTime');
const endTimeElement = document.getElementById('endTime');
const countdownElement = document.getElementById('countdownTime');

const examDate = new Date('March 1, 2025 08:15:00').getTime();
const examEndDate = new Date('March 1, 2025 10:15:00').getTime();
const generalCultureDate = new Date('March 1, 2025 10:30:00').getTime();
const generalCultureEndDate = new Date('March 1, 2025 11:30:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    let distance;

    if (now < examDate) {
        // រាប់ថយក្រោយដល់ម៉ោងចាប់ផ្តើម
        distance = examDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else if (now >= examDate && now < examEndDate) {
        // រាប់ថយក្រោយម៉ោងប្រឡងវិញ្ញាសាឯកទេស
        distance = examEndDate - now;
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        countdownElement.textContent = `${minutes}m ${seconds}s`;
    } else if (now >= examEndDate && now < generalCultureDate) {
        // រង់ចាំវិញ្ញាសាវប្បធម៌ទូទៅ
        distance = generalCultureDate - now;
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        countdownElement.textContent = `${minutes}m ${seconds}s`;
    } else if (now >= generalCultureDate && now < generalCultureEndDate) {
        // រាប់ថយក្រោយវិញ្ញាសាវប្បធម៌ទូទៅ
        subjectElement.textContent = 'វិញ្ញាសា៖ វប្បធម៌ទូទៅ';
        durationElement.textContent = '៦០';
        endTimeElement.textContent = '១១:៣០';
        distance = generalCultureEndDate - now;
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        countdownElement.textContent = `${minutes}m ${seconds}s`;
    } else {
        clearInterval(x);
        countdownElement.textContent = "ចប់ម៉ោងប្រឡង";
    }
}

updateCountdown();
const x = setInterval(updateCountdown, 1000);