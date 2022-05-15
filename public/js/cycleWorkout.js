function buildWeightRepTracker(data, last) {
    //build main container to house info & inputs
    const exerciseContainer = document.createElement('DIV');
    
    const exerciseHeader = document.createElement('DIV');
    exerciseHeader.className = 'exercise-header';
    exerciseHeader.appendChild(data.querySelector('.exercise-number'));
    exerciseHeader.appendChild(data.querySelector('DIV'));

    exerciseContainer.appendChild(exerciseHeader);

    //Query all attributes and build out input fields that need to be tracked with the workout. i.e. Time, Weight, Reps.
    const dataset = data.dataset;

    for (item in dataset) {
        const counterContainer = document.createElement('DIV');
        counterContainer.className = 'counter-container';

        const increaseDecreaseContainer = document.createElement('DIV');
        increaseDecreaseContainer.className = 'button-container';
        const increaseButton = document.createElement('DIV');
        increaseButton.setAttribute('class', 'increase increase-decrease-button');
        increaseButton.textContent = '+';
        const decreaseButton = document.createElement('DIV');
        decreaseButton.className = 'increase-decrease-button';
        decreaseButton.textContent = '−';
        increaseDecreaseContainer.appendChild(increaseButton);
        increaseDecreaseContainer.appendChild(decreaseButton);

        const weightRepsContainer = document.createElement('DIV');
        weightRepsContainer.className = 'weight-reps'; 
        const input = document.createElement('INPUT');
        input.setAttribute('type', 'number');
        input.setAttribute('placeholder', '0');
        input.className = 'count';
        const p = document.createElement('P');
        p.textContent = item;
        weightRepsContainer.appendChild(input);
        weightRepsContainer.appendChild(p);

        counterContainer.appendChild(increaseDecreaseContainer);
        counterContainer.appendChild(weightRepsContainer);

        /* 
            When ready to add the quick select code:
            <div class="qty-quick-select">
                <ul>
                    <li>5</li>
                    <li>10</li>
                    <li>15</li>
                    <li>20</li>
                    <li>25</li>
                </ul>
            </div>
        */

        exerciseContainer.appendChild(counterContainer);

    }

    const a = document.createElement('A');
    a.className = 'strength-background';
    a.setAttribute('href', '#');
    last ? a.textContent = 'Finish' : a.textContent = 'Next';
    exerciseContainer.appendChild(a);

    a.addEventListener('click', (e) => {
        const num = parseInt(document.querySelector('.exercise-number').textContent);
        updateActiveExercise(num);
        
    });

    const insertHere = document.getElementById('exercise-container');
    insertHere.appendChild(exerciseContainer);

}

function updateActiveExercise (number) {
    const totalNumberofExercises = document.querySelectorAll('.exercise-lower-list');
    const data = totalNumberofExercises[number];
    //Build top HTML element
    mainContainer = document.getElementById('exercise-container');
    tossDiv = mainContainer.querySelector('DIV');
    tossDiv ? tossDiv.remove() : buildWeightRepTracker(data, false);
}

updateActiveExercise(0);