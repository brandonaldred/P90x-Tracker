function updateActiveExercise (number) {
    const totalNumberofExercises = document.querySelectorAll('.exercise-lower-list');
    const datasets = totalNumberofExercises[number - 1].dataset;
    console.log(totalNumberofExercises[0]);
    //Build top HTML element
}

function buildWeightRepTracker(data, last) {
    const exerciseContainer = document.createElement('DIV');

    const exerciseHeader = document.createElement('DIV');
    exerciseHeader.className('exercise-header');
    exerciseHeader.appendChild(data.querySelector('.exercise-number'));
    exerciseHeader.appendChild(data.querySelector('DIV'));

    exerciseContianer.appendChild(excerciseHeader);

    const dataset = data.dataset;

    for (item in dataset) {
        const counterContainer = document.createElement('DIV');
        counterContainer.className = 'counter-container';

        const increaseDecreaseContainer = document.createElement('DIV');
        const increasebutton = document.createElement('DIV');
        increaseButton.setAttribute('class', 'increase increase-decrease-button');
        increaseButton.textContent = '+';
        const decreaseButton = document.createElement('DIV');
        decreaseButton.className = 'increase-decrease-button';
        decreaseButton.textContent = '&#8722;';
        increaseDecreaseContainer.appendChild(increaseButton);
        increaseDecreaseContainer.appendChild(decreaseButton);

        const weightRepsContainer = document.createElement('DIV');
        weightRepsContainer.className = 'weight-reps'; 
        const input = document.createElement('INPUT');
        input.setAttribute('type', 'number');
        input.setAttribute('placeholder', '0');
        input.className('count');
        const p = document.createElement('P');
        p.textContent = item;
        weightRepsContainer.appendChild(input);
        weightRepsContainer.appendChild(p);

        counterContainer.appendChild(increaseDecreaseContainer);
        counterContainer.appendChild(weightRepsContainer);

        excerciseContainer.appendChild(counterContainer);

    }

    const a = document.createElement('A');
    a.className = 'stength-background';
    last ? a.textContent = 'Finish' : a.textContent = 'Next';
}


updateActiveExercise(10);