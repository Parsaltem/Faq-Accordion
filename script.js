const paragraphContainer = document.getElementById('paragraph-container');

const textData = [
    {
    id: 1,
    head: "What is Frontend Mentor, and how will it help me?",
    text: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },
    {
    id: 2,
    head: "Is Frontend Mentor free?",
    text: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    },
    {
    id: 3,
    head: "Can I use Frontend Mentor projects in my portfolio?",
    text: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    },
    {
    id: 4,
    head: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    text: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
    },
]

const fulfillWithText = () => {

    const textContainer = textData.map(({id, head, text}) => {
        return `
        <div class="heads" id="${id}-paragraph">
            <h2>${head}</h2>
            <img class="plus_icon" src="assets/images/icon-plus.svg" alt="plus-icon">
            <img class="minus_icon hide" src="assets/images/icon-minus.svg" alt="minus-icon">
        </div>
        <p class="hide">${text}</p>
        <hr>
        `;
    }).join('');

    paragraphContainer.innerHTML = textContainer;

    plusAndMinusIcons()

};

const plusAndMinusIcons = () => {

    const plusIcons = document.querySelectorAll('.plus_icon');
    const minusIcons = document.querySelectorAll('.minus_icon');

    const openAndClose = (array, className) => {
        Array.from(array).forEach(item => {
            item.addEventListener('click', (e) => {
                e.target.classList.toggle('hide');
                e.target.parentElement.nextElementSibling.classList.toggle('hide');
                e.target.parentElement.querySelector(className).classList.toggle('hide');
            });
        });

    }

    openAndClose(plusIcons, '.minus_icon');
    openAndClose(minusIcons, '.plus_icon');

}

fulfillWithText()