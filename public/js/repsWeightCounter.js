function increaseDecreaseCount() {
    const increaseDecrease = document.querySelectorAll('.increase-decrease-button');
    increaseDecrease.forEach(item => {
        item.addEventListener('click', (e) => {
            let value = parseInt(e.target.parentNode.nextElementSibling.firstElementChild.value);
            value = isNaN(value) ? 0 : value;
            item.textContent == '+' ? value++ : value > 0 ? value-- : value;
            e.target.parentNode.nextElementSibling.firstElementChild.value = value;
        });
    });
}

increaseDecreaseCount();