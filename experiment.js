const jsPsych = initJsPsych({
    override_safe_mode: true,
    on_finish: function() {
        jsPsych.data.displayData();
    }
});

// Store choices globally
let userChoices = [];

// Drawing trial
const drawing_trial = {
    type: jsPsychCanvasKeyboardResponse,
    stimulus: function(c) {
        var ctx = c.getContext('2d');
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, c.width, c.height);

        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Draw anything you like!', c.width/2, 50);
        ctx.fillText('Press SPACE when finished', c.width/2, c.height - 30);

        // Add drawing functionality directly in the stimulus function
        let drawing = false;

        c.addEventListener('mousedown', function(e) {
            drawing = true;
            const rect = c.getBoundingClientRect();
            ctx.beginPath();
            ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
        });

        c.addEventListener('mousemove', function(e) {
            if (drawing) {
                const rect = c.getBoundingClientRect();
                ctx.lineWidth = 2;
                ctx.lineCap = 'round';
                ctx.strokeStyle = 'blue';
                ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
            }
        });

        c.addEventListener('mouseup', function() {
            drawing = false;
        });

        c.addEventListener('mouseleave', function() {
            drawing = false;
        });
    },
    canvas_size: [600, 400],
    choices: [' '],
    prompt: '<p>Use your mouse to draw on the canvas above.</p>'
};

// Function to draw marbles in tube
function drawMarblesInTube(c, choices) {
    const ctx = c.getContext('2d');
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, c.width, c.height);

    // Draw tube
    const tubeWidth = 100;
    const tubeHeight = 300;
    const tubeX = c.width/2 - tubeWidth/2;
    const tubeY = 100;

    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    ctx.strokeRect(tubeX, tubeY, tubeWidth, tubeHeight);

    // Draw marbles
    const marbleRadius = 20;
    const marbleSpacing = marbleRadius * 2 + 5;

    for (let i = 0; i < choices.length; i++) {
        const marbleX = tubeX + tubeWidth/2;
        const marbleY = tubeY + tubeHeight - marbleRadius - (i * marbleSpacing);

        ctx.beginPath();
        ctx.arc(marbleX, marbleY, marbleRadius, 0, 2 * Math.PI);
        ctx.fillStyle = choices[i].toLowerCase();
        ctx.fill();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.stroke();
    }

    // Add title
    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Your choices so far:', c.width/2, 50);
}

const choice_trials = [];

// Create 5 separate trials for each choice
for (let i = 1; i <= 5; i++) {
    choice_trials.push({
        type: jsPsychCanvasKeyboardResponse,
        stimulus: function(c) {
            const ctx = c.getContext('2d');
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, c.width, c.height);

            // Show previous choices as marbles if any exist
            if (userChoices.length > 0) {
                drawMarblesInTube(c, userChoices);
            }

            // Add choice prompt
            ctx.fillStyle = 'black';
            ctx.font = '24px Arial';
            ctx.textAlign = 'center';
            const promptY = userChoices.length > 0 ? 450 : 200;
            ctx.fillText(`Choice ${i}: Press R for Red, G for Green`, c.width/2, promptY);
        },
        canvas_size: [600, 500],
        choices: ['r', 'g'],
        on_finish: function(data) {
            const choice = data.response === 'r' ? 'Red' : 'Green';
            userChoices.push(choice);
        }
    });
}

const results_trial = {
    type: jsPsychCanvasKeyboardResponse,
    stimulus: function(c) {
        drawMarblesInTube(c, userChoices);

        // Add final message
        const ctx = c.getContext('2d');
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Experiment Complete!', c.width/2, 450);
        ctx.font = '16px Arial';
        ctx.fillText('Press any key to finish', c.width/2, 480);
    },
    canvas_size: [600, 500],
    choices: "ALL_KEYS"
};

const timeline = [drawing_trial, ...choice_trials, results_trial];

jsPsych.run(timeline);