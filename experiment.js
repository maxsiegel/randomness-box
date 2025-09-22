const jsPsych = initJsPsych({
    override_safe_mode: true,
    on_finish: function() {
        jsPsych.data.displayData();
    }
});


colors = ['blue', 'yellow']

function reminder_function() {
    current_picks = jsPsych.data
        .get()
        .select('response')
        .values
        .map((x => colors[x]))

    if (current_picks.length > 0) {
        return ('images/' + current_picks.join('_') + '.png')
    } else {
        return 'images/background_only.png'
    }
}

function stimulus_function() {
    return (
        ` <div style="text-align: center;">
      <img src=${reminder_function()} style="max-width:400px; display:block; margin:auto;"/>
      <video width="1000" height="auto" autoplay muted controls>
        <source src=${vidpath} type="video/mp4">
      </video>
    </div> `
    )
}

let vidpath = 'video.mp4'

var image_above_video = {
    type: jsPsychHtmlButtonResponse,
    stimulus: stimulus_function,
    choices: colors,
    button_html: function(choice, choice_index) {
        return (`<button class="jspsych-btn"><img src="images/one_${choice}_marble.png"></button>`);
    }
};

const timeline = [
    image_above_video,
    image_above_video,
    image_above_video,
    image_above_video,
    image_above_video
]

jsPsych.run(timeline);