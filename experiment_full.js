const jsPsych = initJsPsych();

let timeline = [];

var ALLOW_SKIPS = true;

if (false) {
    const video_config = {
        type: chsRecord.VideoConfigPlugin
    };
    timeline.push(video_config);

    const video_consent = {
        type: chsRecord.VideoConsentPlugin,
        PIName: "Laura Schulz",
        institution: "Massachusetts Institute of Technology",
        PIContact: "Laura Schulz (contact: nhcoates@mit.edu)",
        payment: "After you finish the study, we will email you a $5 Amazon.com gift card within approximately 10 days from completing the study. To be eligible for the gift card your child must be in the age range for this study, you need to submit a valid consent statement, and we need to see that there is a child with you. But we will send a gift card even if you do not finish the whole study or we are not able to use your child's data! There are no other direct benefits to you or your child from participating, but we hope you will enjoy the experience.",
        procedures: "In this study, you and your child will see six stories involving things that change over time! Each time, you and your child will listen to a scenario and pick and then pick what two things change in the same way!",
        purpose: "Previous research suggests that children use features like color, shape, or number to learn about what makes objects different from each other. Now, we are studying whether children can do the same thing to make predictions-- do patterns in one domain (e.g., swings swinging or a ball toss) match patterns in another domain (e.g., flowers blooming outward)? We think the specific kinds of patterns (or functions) that kids pay attention to may tell us something about how both kids and adults understand and see patterns in the real world.",
        research_rights_statement: "You are not waiving any legal claims, rights or remedies because of your participation in this research study.  If you feel you have been treated unfairly, or you have questions regarding your rights as a research subject, you may contact the Committee On the Use of Humans as Experimental Subjects (COUHES), Massachusetts of Technology, 77 Massachusetts Avenue Cambridge, MA 02139 (contact: couhes@mit.edu)",
    };
    timeline.push(video_consent);

    const startRec = {
        type: chsRecord.StartRecordPlugin //
    };
    timeline.push(startRec);

    const preload = {
        type: jsPsychPreload,
        images: ["https://github.com/nicolehope5/Alien-Greenhouse-3/raw/refs/heads/main/img/purplearrow.png", "https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-Functions/refs/heads/main/img/left_blue.png", "https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-Functions/refs/heads/main/img/right_red.png", "https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-6/refs/heads/main/img/red_left.png", "https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-6/refs/heads/main/img/blue_right.png"],

        video: ["https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-6/refs/heads/main/mp4/Movie1_Welcome.mp4", "https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-6/refs/heads/main/mp4/Movie2_Change.mp4", "https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-6/refs/heads/main/mp4/Movie3_EachQuestion.mp4", "https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-6/refs/heads/main/mp4/Movie4_Inclusion.mp4", "https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-6/refs/heads/main/mp4/Movie6_ReadyToStart.mp4", "https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-6/refs/heads/main/mp4/Movie7_red_linear_setup.mp4", "https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-6/refs/heads/main/mp4/Movie8_red_linear_setup2.mp4", "https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-6/refs/heads/main/mp4/Movie9_red_linear_test.mp4", "https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-6/refs/heads/main/mp4/Movie10_yellow_linear_setup.mp4", "https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-6/refs/heads/main/mp4/Movie11_yellow_linear_setup2.mp4", "https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-6/refs/heads/main/mp4/Movie12_yellow_linear_test.mp4", "https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-6/refs/heads/main/mp4/Movie13_sab_ushape_setup.mp4", "https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-6/refs/heads/main/mp4/Movie14_sab_ushape_setup2.mp4", "https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-6/refs/heads/main/mp4/Movie15_sab_ushape_test.mp4", "https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-6/refs/heads/main/mp4/Movie16_nic_ushape_setup.mp4", "https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-6/refs/heads/main/mp4/Movie17_nic_ushape_setup2.mp4", "https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-6/refs/heads/main/mp4/Movie18_nic_ushape_test.mp4", "https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-6/refs/heads/main/mp4/Movie19_nic_periodic_setup.mp4", "https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-6/refs/heads/main/mp4/Movie20_nic_periodic_setup2.mp4", "https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-6/refs/heads/main/mp4/Movie21_nic_periodic_test.mp4", "https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-6/refs/heads/main/mp4/Movie22_sab_periodic_setup.mp4", "https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-6/refs/heads/main/mp4/Movie23_sab_periodic_setup2.mp4", "https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-6/refs/heads/main/mp4/Movie24_sab_periodic_test.mp4", "https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-6/refs/heads/main/mp4/halfway.mp4", "https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-6/refs/heads/main/mp4/Movie25_Done.mp4"]
    };
}
const welcome = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "Welcome! Click the button to begin.",
    choices: ["Start"]
};
timeline.push(welcome);

const instructions = [{
        type: jsPsychHtmlButtonResponse,
        stimulus: "This study requires your browser to be in Full Screen. Please put your browser in Full Screen mode now.",
        choices: ["Next"],
        button_html: (choice, choice_index) => `<button class="jspsych-btn"><img src="https://github.com/nicolehope5/Alien-Greenhouse-3/raw/refs/heads/main/img/purplearrow.png" alt="${choice}"></img></button>`,
    },
    {
        type: jsPsychHtmlButtonResponse,
        stimulus: "During this study, your child will look at videos and listen to descriptions of scenes.  <br><br>After each video, your child will be asked to make a guess about what happened in the scene.  <br><br>If your child cannot click on the answer, have them point and you can click for them. <br><br>Please do not add any additional explanations to the story, and try not to influence your child's answer.  <br><br>There is no right answer, we're just interested in how children of this age think!<br><br><br>",
        choices: ["Next"],
        button_html: (choice, choice_index) => `<button class="jspsych-btn"><img src="https://github.com/nicolehope5/Alien-Greenhouse-3/raw/refs/heads/main/img/purplearrow.png" alt="${choice}"></img></button>`,
    }
];
timeline = timeline.concat(instructions);


var task_colors = {
    coin: jsPsych.randomization.shuffle(["blue", "yellow"]),
    marble: jsPsych.randomization.shuffle(["red", "pink"]),
    spinner: jsPsych.randomization.shuffle(["orange", "purple"])
}

function create_video_image_trial(sequence_type, video_url) {
    var image_base_path = "https://raw.githubusercontent.com/maxsiegel/randomness-box/refs/heads/master/images/"

    var colors = task_colors[sequence_type]

    function reminder_function() {
        let current_picks = jsPsych.data
            .get()
            .filter({
                sequence_type: sequence_type
            })
            .select('response')
            .values
            .map((x => colors[x]))

        if (current_picks.length > 0) {
            return (image_base_path + current_picks.join('_') + '.png')
        } else {
            return image_base_path + 'background_only.png'
        }
    }

    function stimulus_function() {
        return (
            ` <div style="text-align: center;">
      <img src=${reminder_function()} style="max-width:400px; display:block; margin:auto;"/>
      <video width="1000" height="auto" autoplay muted controls>
        <source src=${video_url} type="video/mp4">
      </video>
    </div> `
        )
    }

    let trial = {
        type: jsPsychHtmlButtonResponse,
        stimulus: stimulus_function,
        choices: colors,
        button_html: function(choice, choice_index) {
            return (`<button class="jspsych-btn"><img src="${image_base_path}one_${choice}_marble.png"}></button>`);
        },
        on_finish: function(data) {
            data.sequence_type = sequence_type
            data.response_label = colors[data.response]
            data.response_layout = colors
        }
    }

    return (trial)
}

const Intro = [{
    type: jsPsychVideoButtonResponse,
    stimulus: ['https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie1_Intro.mp4'],
    choices: ["Next"],
    width: "1024",
    response_allowed_while_playing: ALLOW_SKIPS,
    button_html: (choice, choice_index) => `<button class="jspsych-btn"><img src="https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-3/refs/heads/main/img/purplearrow.png" alt="${choice}"></img></button>`
}, ];
timeline = timeline.concat(Intro);

const coin_demo = {
    type: jsPsychVideoButtonResponse,
    stimulus: ['https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie2_Coin_demo.mp4'],
    choices: ["Next"],
    width: "1024",
    response_allowed_while_playing: ALLOW_SKIPS,
    button_html: (choice, choice_index) => `<button class="jspsych-btn"><img src="https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-3/refs/heads/main/img/purplearrow.png" alt="${choice}"></img></button>`
}
timeline.push(coin_demo)

const coin_videos = [
    'https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie3_CoinFlip_1.mp4',
    'https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie3_CoinFlip_2.mp4',
    'https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie3_CoinFlip_3.mp4',
    'https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie3_CoinFlip_4.mp4',
    'https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie3_CoinFlip_5.mp4',
]

for (let vid_url of coin_videos) {
    let trial = create_video_image_trial("coin", vid_url)
    timeline.push(trial)
}

const greatjob_coin = {
    type: jsPsychVideoButtonResponse,
    stimulus: ['https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/GreatJob_1.mp4'],
    choices: ["Next"],
    width: "1024",
    response_allowed_while_playing: ALLOW_SKIPS,
    button_html: (choice, choice_index) => `<button class="jspsych-btn"><img src="https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-3/refs/heads/main/img/purplearrow.png" alt="${choice}"></img></button>`
}
timeline.push(greatjob_coin)

const marble_demo = {
    type: jsPsychVideoButtonResponse,
    stimulus: ['https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie4_Marble_demo.mp4'],
    choices: ["Next"],
    width: "1024",
    response_allowed_while_playing: ALLOW_SKIPS,
    button_html: (choice, choice_index) => `<button class="jspsych-btn"><img src="https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-3/refs/heads/main/img/purplearrow.png" alt="${choice}"></img></button>`
}
timeline.push(marble_demo)

const marble_demo2 = {
    type: jsPsychVideoButtonResponse,
    stimulus: ['https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie5_Marble_demo2.mp4'],
    choices: ["Next"],
    width: "1024",
    response_allowed_while_playing: ALLOW_SKIPS,
    button_html: (choice, choice_index) => `<button class="jspsych-btn"><img src="https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-3/refs/heads/main/img/purplearrow.png" alt="${choice}"></img></button>`
}
timeline.push(marble_demo2)

const marble_videos = [
    'https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie6_Marble_1.mp4',
    'https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie6_Marble_2.mp4',
    'https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie6_Marble_3.mp4',
    'https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie6_Marble_4.mp4',
    'https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie6_Marble_5.mp4'
]

for (let vid_url of marble_videos) {
    let trial = create_video_image_trial("marble", vid_url)
    timeline.push(trial)
}

const great_job_marbles = {
    type: jsPsychVideoButtonResponse,
    stimulus: ['https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/GreatJob_2.mp4'],
    choices: ["Next"],
    width: "1024",

    response_allowed_while_playing: ALLOW_SKIPS,
    button_html: (choice, choice_index) => `<button class="jspsych-btn"><img src="https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-3/refs/heads/main/img/purplearrow.png" alt="${choice}"></img></button>`
}
timeline.push(great_job_marbles)

const spinner_demo = {
    type: jsPsychVideoButtonResponse,
    stimulus: ['https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie7_Spinner_demo.mp4'],
    choices: ["Next"],
    width: "1024",
    response_allowed_while_playing: ALLOW_SKIPS,
    button_html: (choice, choice_index) => `<button class="jspsych-btn"><img src="https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-3/refs/heads/main/img/purplearrow.png" alt="${choice}"></img></button>`
}
timeline.push(spinner_demo)

const spinner_videos = [
    'https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie8_Spinner_1.mp4',
    'https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie8_Spinner_2.mp4',
    'https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie8_Spinner_3.mp4',
    'https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie8_Spinner_4.mp4',
    'https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie8_Spinner_5.mp4'
]

for (let vid_url of spinner_videos) {
    let trial = create_video_image_trial("spinner", vid_url)
    timeline.push(trial)
}

const greatjob_spinner = {
    type: jsPsychVideoButtonResponse,
    stimulus: ['https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/GoodJob_3.mp4'],
    choices: ["Next"],
    width: "1024",
    response_allowed_while_playing: ALLOW_SKIPS,
    button_html: (choice, choice_index) => `<button class="jspsych-btn"><img src="https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-3/refs/heads/main/img/purplearrow.png" alt="${choice}"></img></button>`
}

timeline.push(greatjob_spinner);

const inclusion1_boxes = ["images/brownbox_8_yellow.png", "images/greenbox_3_bluepink.png"]
const inclusion1_test_choices = jsPsych.randomization.shuffle(inclusion1_boxes)

const Inclusion1 = [{
        type: jsPsychVideoButtonResponse,
        stimulus: ['https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie9_Inclusionintro_1.mp4'],
        choices: ["Next"],
        width: "1024",
        response_allowed_while_playing: ALLOW_SKIPS,
        button_html: (choice, choice_index) => `<button class="jspsych-btn"><img src="https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-3/refs/heads/main/img/purplearrow.png" alt="${choice}"></img></button>`
    },
    {
        type: jsPsychVideoButtonResponse,
        stimulus: ['https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie10_Inclusion1a_videos.mp4'],
        choices: ["Next"],
        width: "1024",
        response_allowed_while_playing: ALLOW_SKIPS,
        button_html: (choice, choice_index) => `<button class="jspsych-btn"><img src="https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-3/refs/heads/main/img/purplearrow.png" alt="${choice}"></img></button>`
    },
    {
        type: jsPsychVideoButtonResponse,
        stimulus: ['https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/NextBox.mp4'],
        choices: ["Next"],
        width: "1024",
        response_allowed_while_playing: ALLOW_SKIPS,
        button_html: (choice, choice_index) => `<button class="jspsych-btn"><img src="https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-3/refs/heads/main/img/purplearrow.png" alt="${choice}"></img></button>`
    },
    {
        type: jsPsychVideoButtonResponse,
        stimulus: ['https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie11_Inclusion1b_videos.mp4'],
        choices: ["Next"],
        width: "1024",
        response_allowed_while_playing: ALLOW_SKIPS,
        button_html: (choice, choice_index) => `<button class="jspsych-btn"><img src="https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-3/refs/heads/main/img/purplearrow.png" alt="${choice}"></img></button>`
    },
    {
        type: jsPsychAudioButtonResponse,
        // stimulus: ['https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie11_Inclusion1_test.mp4'],
        stimulus: ['audio/Audio11_Inclusion1_test.wav'],
        choices: inclusion1_test_choices,
        button_html: (choice, choice_index) => `<button class="jspsych-btn" style="margin: 100px;"><img src="${choice}" width="150" height="150" alt="${choice}"></img></button>`,
        width: "1024",
        response_allowed_while_playing: ALLOW_SKIPS,
        margin_vertical: '-10px',
        margin_horizontal: '200px',
        on_finish: function(data) {
            data.response_label = inclusion1_test_choices[data.response]
            data.response_layout = inclusion1_test_choices
        }

    },
    {
        type: jsPsychVideoButtonResponse,
        stimulus: ['https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Explore_Pile.mp4'],
        choices: ["Next"],
        width: "1024",
        response_allowed_while_playing: ALLOW_SKIPS,
        button_html: (choice, choice_index) => `<button class="jspsych-btn"><img src="https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-3/refs/heads/main/img/purplearrow.png" alt="${choice}"></img></button>`
    },
];
timeline = timeline.concat(Inclusion1);

const inclusion2_boxes = ["images/bluebox_3_purpleyellow.png", "images/redbox_8_green.png"]
const inclusion2_test_choices = jsPsych.randomization.shuffle(inclusion2_boxes)
const Inclusion2 = [{
        type: jsPsychVideoButtonResponse,
        stimulus: ['https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie12_Inclusionintro_2.mp4'],
        choices: ["Next"],
        width: "1024",
        response_allowed_while_playing: ALLOW_SKIPS,
        button_html: (choice, choice_index) => `<button class="jspsych-btn"><img src="https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-3/refs/heads/main/img/purplearrow.png" alt="${choice}"></img></button>`
    },
    {
        type: jsPsychVideoButtonResponse,
        stimulus: ['https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie13_Inclusion2a_videos.mp4'],
        choices: ["Next"],
        width: "1024",
        response_allowed_while_playing: ALLOW_SKIPS,
        button_html: (choice, choice_index) => `<button class="jspsych-btn"><img src="https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-3/refs/heads/main/img/purplearrow.png" alt="${choice}"></img></button>`
    },
    {
        type: jsPsychVideoButtonResponse,
        stimulus: ['https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/NextBox.mp4'],
        choices: ["Next"],
        width: "1024",
        response_allowed_while_playing: ALLOW_SKIPS,
        button_html: (choice, choice_index) => `<button class="jspsych-btn"><img src="https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-3/refs/heads/main/img/purplearrow.png" alt="${choice}"></img></button>`
    },
    {
        type: jsPsychVideoButtonResponse,
        stimulus: ['https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie14_Inclusion2b_videos.mp4'],
        choices: ["Next"],
        width: "1024",
        response_allowed_while_playing: ALLOW_SKIPS,
        button_html: (choice, choice_index) => `<button class="jspsych-btn"><img src="https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-3/refs/heads/main/img/purplearrow.png" alt="${choice}"></img></button>`
    },
    {
        type: jsPsychAudioButtonResponse,
        // stimulus: ['https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie14_Inclusion2_test.mp4'],
        stimulus: ['audio/Audio14_Inclusion2_test.wav'],
        // choices: ["https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/img/orange_button.png", "https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/img/purple_button.png"],
        choices: inclusion2_test_choices,
        button_html: (choice, choice_index) => `<button class="jspsych-btn" style="margin: 100px;"><img src="${choice}" width="150" height="150" alt="${choice}"></img></button>`,
        width: "1024",
        response_allowed_while_playing: ALLOW_SKIPS,
        margin_vertical: '-10px',
        margin_horizontal: '200px',
        on_finish: function(data) {
            data.response_label = inclusion2_test_choices[data.response]
            data.response_layout = inclusion2_test_choices
        }

    },
    {
        type: jsPsychVideoButtonResponse,
        stimulus: ['https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Explore_Pile.mp4'],
        choices: ["Next"],
        width: "1024",
        response_allowed_while_playing: ALLOW_SKIPS,
        button_html: (choice, choice_index) => `<button class="jspsych-btn"><img src="https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-3/refs/heads/main/img/purplearrow.png" alt="${choice}"></img></button>`
    },
    {
        type: jsPsychVideoButtonResponse,
        stimulus: ['https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/GreatJob_4.mp4'],
        choices: ["Next"],
        width: "1024",
        response_allowed_while_playing: ALLOW_SKIPS,
        button_html: (choice, choice_index) => `<button class="jspsych-btn"><img src="https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-3/refs/heads/main/img/purplearrow.png" alt="${choice}"></img></button>`
    },

];
timeline = timeline.concat(Inclusion2);

const test1_boxes = ["images/greenbox_8_bluered_alternating.png", "images/brownbox_8_greenpink_alternating.png"]
const test1_choices = jsPsych.randomization.shuffle(test1_boxes)

const Test1 = [{
        type: jsPsychVideoButtonResponse,
        stimulus: ['https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie15_Test1_Intro.mp4'],
        choices: ["Next"],
        width: "1024",
        response_allowed_while_playing: ALLOW_SKIPS,
        button_html: (choice, choice_index) => `<button class="jspsych-btn"><img src="https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-3/refs/heads/main/img/purplearrow.png" alt="${choice}"></img></button>`
    },
    {
        type: jsPsychVideoButtonResponse,
        stimulus: ['https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie16_Test1a_videos.mp4'],
        choices: ["Next"],
        width: "1024",
        response_allowed_while_playing: ALLOW_SKIPS,
        button_html: (choice, choice_index) => `<button class="jspsych-btn"><img src="https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-3/refs/heads/main/img/purplearrow.png" alt="${choice}"></img></button>`
    },
    {
        type: jsPsychVideoButtonResponse,
        stimulus: ['https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/NextBox.mp4'],
        choices: ["Next"],
        width: "1024",
        response_allowed_while_playing: ALLOW_SKIPS,
        button_html: (choice, choice_index) => `<button class="jspsych-btn"><img src="https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-3/refs/heads/main/img/purplearrow.png" alt="${choice}"></img></button>`
    },
    {
        type: jsPsychVideoButtonResponse,
        stimulus: ['https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie17_Test1b_videos.mp4'],
        choices: ["Next"],
        width: "1024",
        response_allowed_while_playing: ALLOW_SKIPS,
        button_html: (choice, choice_index) => `<button class="jspsych-btn"><img src="https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-3/refs/heads/main/img/purplearrow.png" alt="${choice}"></img></button>`
    },
    {
        type: jsPsychVideoButtonResponse,
        stimulus: ['audio/Audio17_test_Test1.m4a'],
        choices: test1_choices,
        button_html: (choice, choice_index) => `<button class="jspsych-btn" style="margin: 100px;"><img src="${choice}" width="150" height="150" alt="${choice}"></img></button>`,
        width: "1024",
        response_allowed_while_playing: ALLOW_SKIPS,
        margin_vertical: '-10px',
        margin_horizontal: '200px',
        on_finish: function(data) {
            data.response_label = test1_choices[data.response]
            data.response_layout = test1_choices
        }
    },
    {
        type: jsPsychVideoButtonResponse,
        stimulus: ['https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Explore_Pile.mp4'],
        choices: ["Next"],
        width: "1024",
        response_allowed_while_playing: ALLOW_SKIPS,
        button_html: (choice, choice_index) => `<button class="jspsych-btn"><img src="https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-3/refs/heads/main/img/purplearrow.png" alt="${choice}"></img></button>`
    },
    {
        type: jsPsychVideoButtonResponse,
        stimulus: ['https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/GreatJob_5.mp4'],
        choices: ["Next"],
        width: "1024",
        response_allowed_while_playing: ALLOW_SKIPS,
        button_html: (choice, choice_index) => `<button class="jspsych-btn"><img src="https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-3/refs/heads/main/img/purplearrow.png" alt="${choice}"></img></button>`
    },

];
timeline = timeline.concat(Test1);

const test2_boxes = ["images/bluebox_8_purpleorange_alternating.png", "images/redbox_8_blueyellow_alternating.png"]
const test2_choices = jsPsych.randomization.shuffle(test2_boxes)

const Test2 = [{
        type: jsPsychVideoButtonResponse,
        stimulus: ['https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie18_Test2_Intro.mp4'],
        choices: ["Next"],
        width: "1024",
        response_allowed_while_playing: ALLOW_SKIPS,
        button_html: (choice, choice_index) => `<button class="jspsych-btn"><img src="https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-3/refs/heads/main/img/purplearrow.png" alt="${choice}"></img></button>`
    },
    {
        type: jsPsychVideoButtonResponse,
        stimulus: ['https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie19_Test2a_videos.mp4'],
        choices: ["Next"],
        width: "1024",
        response_allowed_while_playing: ALLOW_SKIPS,
        button_html: (choice, choice_index) => `<button class="jspsych-btn"><img src="https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-3/refs/heads/main/img/purplearrow.png" alt="${choice}"></img></button>`
    },
    {
        type: jsPsychVideoButtonResponse,
        stimulus: ['https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/NextBox.mp4'],
        choices: ["Next"],
        width: "1024",
        response_allowed_while_playing: ALLOW_SKIPS,
        button_html: (choice, choice_index) => `<button class="jspsych-btn"><img src="https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-3/refs/heads/main/img/purplearrow.png" alt="${choice}"></img></button>`
    },
    {
        type: jsPsychVideoButtonResponse,
        stimulus: ['https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie20_Test2b_videos.mp4'],
        choices: ["Next"],
        width: "1024",
        response_allowed_while_playing: ALLOW_SKIPS,
        button_html: (choice, choice_index) => `<button class="jspsych-btn"><img src="https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-3/refs/heads/main/img/purplearrow.png" alt="${choice}"></img></button>`
    },
    {
        type: jsPsychAudioButtonResponse,
        stimulus: ['audio/Audio21_test_Test2.wav'],
        choices: test2_choices,
        button_html: (choice, choice_index) => `<button class="jspsych-btn" style="margin: 100px;"><img src="${choice}" width="150" height="150" alt="${choice}"></img></button>`,
        width: "1024",
        response_allowed_while_playing: ALLOW_SKIPS,
        margin_vertical: '-10px',
        margin_horizontal: '200px',
        on_finish: function(data) {
            data.response_label = test2_choices[data.response]
            data.response_layout = test2_choices
        }
    },
];
timeline = timeline.concat(Test2);

const Exploration = [{
        type: jsPsychVideoButtonResponse,
        stimulus: ['https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Exploration.mp4'],
        choices: ["Next"],
        width: "1024",
        response_allowed_while_playing: ALLOW_SKIPS,
        button_html: (choice, choice_index) => `<button class="jspsych-btn"><img src="https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-3/refs/heads/main/img/purplearrow.png" alt="${choice}"></img></button>`
    },
    {
        type: jsPsychVideoButtonResponse,
        stimulus: ['https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/GreatJob_6.mp4'],
        choices: ["Next"],
        width: "1024",
        response_allowed_while_playing: ALLOW_SKIPS,
        button_html: (choice, choice_index) => `<button class="jspsych-btn"><img src="https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-3/refs/heads/main/img/purplearrow.png" alt="${choice}"></img></button>`
    },
];
timeline = timeline.concat(Exploration);


const End = [{
    type: jsPsychVideoButtonResponse,
    stimulus: ['https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/End.mp4'],
    choices: ["Next"],
    width: "1024",
    response_allowed_while_playing: ALLOW_SKIPS,
    button_html: (choice, choice_index) => `<button class="jspsych-btn"><img src="https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-3/refs/heads/main/img/purplearrow.png" alt="${choice}"></img></button>`
}, ];
timeline = timeline.concat(End);

if (false) {
    const exitSurvey = {
        type: chsSurvey.ExitSurveyPlugin
    };
    timeline.push(exitSurvey);
}
const site = '<a href="https://eccl.mit.edu">https://www.eccl.mit.edu</a>';

const debrief_string = "Many natural phenomena that children experience in their daily lives follow structured functional forms, like the ones we showed your child today. For instance, when we let go of a helium balloon, it goes up linearly. <br><br>When we throw a ball in the air and catch it as it comes back down, its trajectory follows an uspide-down U-shape function. When we swing on a swing, the motion follows a periodic function as it goes back and forth. <br><br>These motions can be mapped on other objects or other phenomena that follow the same functions, like the flowers we also showed your child today. For instnace, one set of flowers started off closed and then gradually opened (linear function). One set of flowers started closed, then gradually opened and then closed again (upside U-shape), and one set of flosers started open and then gradually closed and opened again a few times (periodic function). <br><br><br><br>On each test trial, children saw either the ball being thrown and caught, the balloon going up or the swing going back and forth, and then a contrast between sets of flowers displaying two different functions. We wanted to know if children would match the function of the ball, the balloon or the swing onto the function of one of the flowers. <br><br><br><br>This early sensitivity to different functions might contribute to how in our culture, scientists can use abstract functions to represent all kinds of different phenomena-- from changes in the economy to changes in the population of migratory birds to changes in rainfall.<br><br> If you want to learn more about studies similar to this one, please visit our lab website at " + site + "<br><br><br><b><center>The experiment is complete. Thank you for participating! You will receive an email from Lookit with your payment information. Please click the 'End' button to end this study.</center></b>";


const debrief = {
    type: jsPsychHtmlButtonResponse,
    stimulus: debrief_string,
    width: 1024,
    height: 576,
    choices: ["End"],
};

timeline.push(debrief);

if (false) {
    const stop = {
        type: chsRecord.StopRecordPlugin
    };

    timeline.push(stop);
}
// console.log(timeline);
jsPsych.run(timeline);