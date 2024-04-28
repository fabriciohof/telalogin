document.addEventListener('DOMContentLoaded', function() {
    const circle = document.querySelector('.circle');
    const darkmodeBotao = document.querySelector('.darkmodeBotao');

    circle.onclick = function() {
        document.body.classList.toggle('dark-mode');
        this.classList.toggle('active');
        this.classList.toggle('moved');
        darkmodeBotao.classList.toggle('active');
    }
});