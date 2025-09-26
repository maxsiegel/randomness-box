const jsPsych = initJsPsych();

let timeline = [];

var ALLOW_SKIPS = true;

if (!ALLOW_SKIPS) {
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
        procedures: "In this study your child will first make guesses about the outcome of coin flips, color wheels and spinners. Then your child will answer questions about marbles that fell out of a box after shaking the box a few times.",
        purpose: "Previous research has shown that both children and adults show systematic similarities when generating sequences from random samples. Now, we are studying whether, even if children generate patterned sequences (e.g., alternating HT), they might also find the outcome of alternation surprising when judging outcomes that have already been generated. We hope to further understand children’s understanding of randomness, and explore their reasoning about randomness in different contexts.",
        research_rights_statement: "You are not waiving any legal claims, rights or remedies because of your participation in this research study.  If you feel you have been treated unfairly, or you have questions regarding your rights as a research subject, you may contact the Committee On the Use of Humans as Experimental Subjects (COUHES), Massachusetts of Technology, 77 Massachusetts Avenue Cambridge, MA 02139 (contact: couhes@mit.edu)",
    };
    timeline.push(video_consent);

    const startRec = {
        type: chsRecord.StartRecordPlugin //
    };
    timeline.push(startRec);

    const preload = {
        type: jsPsychPreload,
        images: ["https://github.com/nicolehope5/Alien-Greenhouse-3/raw/refs/heads/main/img/purplearrow.png", "https://raw.githubusercontent.com/maxsiegel/randomness-box/refs/heads/master/images/bluebox_8_purpleorange_alternating_updated.png", "https://raw.githubusercontent.com/maxsiegel/randomness-box/refs/heads/master/images/redbox_8_blueyellow_alternating_updated.png", "https://raw.githubusercontent.com/maxsiegel/randomness-box/refs/heads/master/images/redbox_8_blueyellow_alternating_updated.png", "https://raw.githubusercontent.com/maxsiegel/randomness-box/refs/heads/master/images/greenbox_8_bluered_alternating_updated.png", "https://raw.githubusercontent.com/maxsiegel/randomness-box/refs/heads/master/images/brownbox_8_greenpink_alternating_updated.png", "https://raw.githubusercontent.com/maxsiegel/randomness-box/refs/heads/master/images/brownbox_8_greenpink_alternating_updated.png", "https://raw.githubusercontent.com/maxsiegel/randomness-box/refs/heads/master/images/greenbox_3_bluepink_updated.png", "https://raw.githubusercontent.com/maxsiegel/randomness-box/refs/heads/master/images/brownbox_8_yellow_updated.png", "https://raw.githubusercontent.com/maxsiegel/randomness-box/refs/heads/master/images/bluebox_3_purpleyellow.png", "https://raw.githubusercontent.com/maxsiegel/randomness-box/refs/heads/master/images/redbox_8_green.png"],


        video: ["https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie1_Intro.mp4", "https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie2_Coin_demo.mp4", "https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie3_CoinFlip_1.mp4", "https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie3_CoinFlip_2.mp4", "https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie3_CoinFlip_3.mp4", "https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie3_CoinFlip_4.mp4", "https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie3_CoinFlip_5.mp4", "https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/GreatJob_1.mp4", "https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie4_Marble_demo.mp4", "https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie5_Marble_demo2.mp4", "https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie6_Marble_1.mp4", "https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie6_Marble_2.mp4", "https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie6_Marble_3.mp4", "https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie6_Marble_4.mp4", "https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie6_Marble_5.mp4", 'https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/GreatJob_2.mp4', 'https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie7_Spinner_demo.mp4', 'https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie8_Spinner_1.mp4', 'https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie8_Spinner_2.mp4', 'https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie8_Spinner_3.mp4', 'https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie8_Spinner_4.mp4', 'https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie8_Spinner_5.mp4', 'https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/GoodJob_3.mp4', 'https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie9_Inclusionintro_1.mp4', 'https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie10_Inclusion1a_videos.mp4', 'https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/NextBox.mp4', 'https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie11_Inclusion1b_videos.mp4', 'https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Explore_Pile.mp4', 'https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie12_Inclusionintro_2.mp4', 'https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie13_Inclusion2a_videos.mp4', 'https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/NextBox.mp4', 'https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie14_Inclusion2b_videos.mp4', 'https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Explore_Pile.mp4', 'https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/GreatJob_4.mp4', 'https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie15_Test1_Intro.mp4', 'https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie16_Test1a_videos.mp4', 'https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/NextBox.mp4', 'https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie17_Test1b_videos.mp4', 'https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Explore_Pile.mp4', 'https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/GreatJob_5.mp4', 'https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie18_Test2_Intro.mp4', 'https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie19_Test2a_videos.mp4', 'https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/NextBox.mp4', 'https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Movie20_Test2b_videos.mp4', 'https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Exploration.mp4', 'https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/GreatJob_6.mp4', 'https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/End.mp4'],
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
        response_allowed_while_playing: ALLOW_SKIPS,
    },
    {
        type: jsPsychHtmlButtonResponse,
        stimulus: "During this study, your child will look at videos and listen to descriptions of scenes.  <br><br>After each video, your child will be asked to make a guess about what happened in the scene.  <br><br>If your child cannot click on the answer, have them point and you can click for them. <br><br>Please do not add any additional explanations to the story, and try not to influence your child's answer.  <br><br>There is no right answer, we're just interested in how children of this age think!<br><br><br>",
        choices: ["Next"],
        button_html: (choice, choice_index) => `<button class="jspsych-btn"><img src="https://github.com/nicolehope5/Alien-Greenhouse-3/raw/refs/heads/main/img/purplearrow.png" alt="${choice}"></img></button>`,
        response_allowed_while_playing: ALLOW_SKIPS,
    }
];
timeline = timeline.concat(instructions);


var task_colors = {
    coin: jsPsych.randomization.shuffle(["blue", "yellow"]),
    marble: jsPsych.randomization.shuffle(["red", "pink"]),
    spinner: jsPsych.randomization.shuffle(["orange", "purple"])
}

function create_video_image_trial(sequence_type, video_url) {
    const image_base_path = "https://raw.githubusercontent.com/maxsiegel/randomness-box/refs/heads/master/images/"

    const colors = task_colors[sequence_type]

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
      <video id="stimvid" width="1000" height="auto" autoplay>
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
            if (ALLOW_SKIPS) {
                return (`<button class="jspsych-btn"><img src="${image_base_path}one_${choice}_marble.png"}></button>`);
            } else {
                return (`<button class="jspsych-btn" disabled><img src="${image_base_path}one_${choice}_marble.png"}></button>`);
            }
        },
        on_load: function() {
            let vid = document.getElementById('stimvid');
            let btns = document.querySelectorAll('.jspsych-btn');
            // enable buttons only after video ends
            vid.onended = function() {
                btns.forEach(b => b.removeAttribute('disabled'));
            };
        },
        on_finish: function(data) {
            data.sequence_type = sequence_type
            data.response_label = colors[data.response]
            data.response_layout = colors
        }
    }

    return (trial)
}

function create_audio_trial(box_urls, audio_url) {
    const image_base_path = "https://raw.githubusercontent.com/maxsiegel/randomness-box/refs/heads/master/images/"
    const audio_base_path = "https://raw.githubusercontent.com/maxsiegel/randomness-box/refs/heads/master/audio/"

    const box_images = jsPsych.randomization.shuffle(box_urls)

    function stimulus_function() {
        return (
            ` <div style="text-align: center;">
<audio autoplay>
<source src=${audio_base_path}${audio_url} type="audio/mp3">
</audio>
    </div> `
        )
    }


    //   let trial = {
    //      type: jsPsychHtmlButtonResponse,
    //      stimulus: stimulus_function,
    //      choices: box_images,
    //      button_html: function(choice, choice_index) {
    //          if (ALLOW_SKIPS) {
    //return (`<button class="jspsych-btn"><img src="${image_base_path}${choice}"}></button>`);
    //          } else {
    //              return (`<button class="jspsych-btn" disabled><img src="${image_base_path}${choice}"}></button>`);
    //          }
    //      },
    //      on_finish: function(data) {
    //         data.response_label = box_images[data.response]
    //         data.response_layout = box_images
    //     }
    // }

    // return (trial)
    //}

    const IMG = 300; // <-- set the size you want (px)
    const GAP = 50; // optional spacing between buttons
    let trial = {
        type: jsPsychHtmlButtonResponse,
        stimulus: stimulus_function,
        choices: box_images,
        button_html: function(choice, choice_index) {
            if (ALLOW_SKIPS) {
                return (`<button class="jspsych-btn" style="padding:0; margin:0 ${GAP}px; border:none; background:transparent;"><img src="${image_base_path}${choice}" alt="choice ${choice_index+1}" height="${IMG}px" style="display:block;"/></button>`);
            } else {
                return (`<button class="jspsych-btn" style="padding:0; margin:0 ${GAP}px; border:none; background:transparent;" disabled><img src="${image_base_path}${choice}" alt="choice ${choice_index+1}" height="${IMG}px" style="display:block;"/></button>`);

            }
        },
        on_finish: function(data) {
            data.response_label = box_images[data.response]
            data.response_layout = box_images
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
    }
]

const inclusion1_boxes = ["brownbox_8_yellow_updated.png", "greenbox_3_bluepink_updated.png"]
const inclusion1_audio_trial = create_audio_trial(inclusion1_boxes, "Audio11_Inclusion1_test.mp3")

Inclusion1.push(inclusion1_audio_trial)

Inclusion1.push({
    type: jsPsychVideoButtonResponse,
    stimulus: ['https://raw.githubusercontent.com/nicolehope5/randomness-study1/refs/heads/main/mp4/Explore_Pile.mp4'],
    choices: ["Next"],
    width: "1024",
    response_allowed_while_playing: ALLOW_SKIPS,
    button_html: (choice, choice_index) => `<button class="jspsych-btn"><img src="https://raw.githubusercontent.com/nicolehope5/Alien-Greenhouse-3/refs/heads/main/img/purplearrow.png" alt="${choice}"></img></button>`
})

timeline = timeline.concat(Inclusion1);


var Inclusion2 = [{
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
    }
]
const inclusion2_boxes = ["bluebox_3_purpleyellow_updated.png", "redbox_8_green_updated.png"]
const inclusion2_audio_trial = create_audio_trial(inclusion2_boxes, "Audio14_Inclusion2_test.mp3")
Inclusion2.push(inclusion2_audio_trial)

Inclusion2 = Inclusion2.concat([{
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
    }
])
timeline = timeline.concat(Inclusion2);


var Test1 = [{
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
    }
]

const test1_boxes = ["greenbox_8_bluered_alternating_updated.png", "brownbox_8_greenpink_alternating_updated.png"]
const test1_audio_trial = create_audio_trial(test1_boxes, "Audio17_test_Test1.mp3")
Test1.push(test1_audio_trial)

Test1 = Test1.concat([{
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
]);

timeline = timeline.concat(Test1);

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
    }
]

const test2_boxes = ["bluebox_8_purpleorange_alternating_updated.png", "redbox_8_blueyellow_alternating_updated.png"]
const test2_audio_trial = create_audio_trial(test2_boxes, "Audio21_test_Test2.mp3")

Test2.push(test2_audio_trial)
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

if (!ALLOW_SKIPS) {
    const exitSurvey = {
        type: chsSurvey.ExitSurveyPlugin
    };
    timeline.push(exitSurvey);
}
const site = '<a href="https://eccl.mit.edu">https://www.eccl.mit.edu</a>';

const debrief_string = `Children are remarkably good at noticing structure in the world. They can track how a ball moves when thrown, recognize things that are likely or unlikely to happen, and detect patterns in everyday events (for example, the changing colors of leaves in the fall).
In this study, we were interested in how children think about situations that don’t have an obvious structure — that is, random events. To explore this, we used three kinds of activities: coin flips, marbles falling out of a box, and spins of a spinner.
Part 1: We showed your child short sequences of random events and asked them to make their own guesses about the outcomes. We were curious whether children’s guesses would look random (e.g., HTHHT) or whether they might build in patterns, such as strict alternation (e.g., HTHTH).


Parts 2 & 3: We asked your child to identify a “tricky box.” Sometimes the tricky box always produced the same color (a biased outcome). Other times the tricky box produced an alternating sequence, which looks patterned and therefore also “tricky.” Even if children create alternating sequences themselves when guessing, they might still view an alternating outcome as surprising or suspicious — which tells us something important about how they understand randomness.


By comparing children’s responses across these tasks, we hope to better understand how children reason about randomness — both when they generate it and when they evaluate it.`


const debrief = {
    type: jsPsychHtmlButtonResponse,
    stimulus: debrief_string,
    width: 1024,
    height: 576,
    choices: ["End"],
};

timeline.push(debrief);

if (!ALLOW_SKIPS) {
    const stop = {
        type: chsRecord.StopRecordPlugin
    };

    timeline.push(stop);
}
// console.log(timeline);
jsPsych.run(timeline);