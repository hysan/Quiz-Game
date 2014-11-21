// Set Global Variables
// numberOfTeams = 6;
// gameName = "Jeopardy!";
categoryNames = [
    "What's wrong?",
    "Q & A",
    "A & Q",
    "Same Word",
    "What am I?",
    "Other Subjects"
    ];
// questionsPerCategory = 7;
questionJSON = {
    "categories" : [
        {
            "category" : "Find the error(s) in the sentence(s).",
            "questions" : [
                {
                    "question" : "I am watching TV yesterday.",
                    "hint" : "Hint: 1 mistake.",
                    "answer" : 'I <span class="error-correction">was</span> watching TV yesterday.',
                    "videoBonus" : null
                },
                {
                    "question" : "Spring wants be a tour guide.",
                    "hint" : "Hint: 1 mistake.",
                    "answer" : 'Spring wants <span class="error-correction">to</span> be a tour guide.',
                    "videoBonus" : null
                },
                {
                    "question" : "May you help me with my homework?",
                    "hint" : "Hint: 1 mistake.",
                    "answer" : '<span class="error-correction">Could</span> you help me with my homework?',
                    "videoBonus" : null
                },
                {
                    "question" : "Sakura must to speak English in America.",
                    "hint" : "Hint: 1 mistakes.",
                    "answer" : 'Sakura <span class="error-correction">has</span> to speak English in America.',
                    "videoBonus" : null
                },
                {
                    "question" : "<strong>A:</strong> May I speak to Becky please?</p><p><strong>B:</strong> Sorry. But she's in right now.",
                    "hint" : "Hint: 2 mistakes.",
                    "answer" : '<strong>A:</strong> May I speak to Becky<span class="error-correction">,</span> please?</p><p><strong>B:</strong> Sorry. But she\'s <span class="error-correction">out</span> right now.',
                    "videoBonus" : null
                },
                {
                    "question" : "<strong>A:</strong> What do you has to do tomorrow?</p><p><strong>B:</strong> I have to visit to my grandmother in Iwate.",
                    "hint" : "Hint: 2 mistakes.",
                    "answer" : '<strong>A:</strong> What do you <span class="error-correction">have</span> to do tomorrow?</p><p><strong>B:</strong> I have to visit <span class="error-correction"><del>to</del></span> my grandmother in Iwate.',
                    "videoBonus" : null
                },
                {
                    "question" : "<strong>Kevin:</strong> Hello.</p><p><strong>Sakura:</strong> Hello, Kevin? That is Sakura.</p><p><strong>Kevin:</strong> Oh! Hi, Sakura.",
                    "hint" : "Hint: 2 mistakes.",
                    "answer" : '<strong>Kevin:</strong> Hello<span class="error-correction">?</span></p><p><strong>Sakura:</strong> Hello, Kevin? <span class="error-correction">This</span> is Sakura.</p><p><strong>Kevin:</strong> Oh! Hi, Sakura.',
                    "videoBonus" : null
                }
            ]
        },
        {
            "category" : "Question & Answer",
            "questions" : [
                {
                    "question" : 'What will you do this weekend?',
                    "hint" : null,
                    "answer" : "I will...",
                    "videoBonus" : null
                },
                {
                    "question" : "What mustn't Carlo do?",
                    "hint" : null,
                    "answer" : "He mustn't compare host families.",
                    "videoBonus" : null
                },
                {
                    "question" : "Did you sleep well?",
                    "hint" : null,
                    "answer" : "Yes, thank you. | No, I didn't.",
                    "videoBonus" : null
                },
                /*{
                    "question" : "May I cut your hair?",
                    "hint" : null,
                    "answer" : "Sure. | Sorry, you can't.",
                    "videoBonus" : null
                },*/
                {
                    "question" : "What does Mr. Cheng call his mother?",
                    "hint" : null,
                    "answer" : "Mom",
                    "videoBonus" : null
                },
                {
                    "question" : "What must this father do?",
                    "hint" : null,
                    "answer" : "He (Marlin) must find Nemo.",
                    "videoBonus" : "Finding-Nemo"
                },
                {
                    "question" : "How do the people look on page thirty-three?",
                    "hint" : null,
                    "answer" : "They look happy. (excited, etc.)",
                    "videoBonus" : null
                },
                {
                    "question" : "Why did twelve people join the English club in Sakura's class?",
                    "hint" : null,
                    "answer" : "To make friends with foreign people.",
                    "videoBonus" : null
                }
            ]
        },
        {
            "category" : "Answer & Question",
            "questions" : [
                {
                    "question" : 'Yes, he will.',
                    "hint" : null,
                    "answer" : "Will [name] ~ ?",
                    "videoBonus" : null
                },
                {
                    "question" : "Sure. Just a minute.",
                    "hint" : null,
                    "answer" : "May I speak to ~, please?",
                    "videoBonus" : null
                },
                {
                    "question" : "She has to play volleyball after school.",
                    "hint" : null,
                    "answer" : "What does [name] have to do after school?",
                    "videoBonus" : null
                },
                {
                    "question" : "He will steal the moon.",
                    "hint" : null,
                    "answer" : "What will Gru steal?",
                    "videoBonus" : "Despicable-Me"
                },
                {
                    "question" : "Sightseeing.",
                    "hint" : null,
                    "answer" : "What's the purpose of your visit?",
                    "videoBonus" : null
                },
                {
                    "question" : "To buy some snacks.",
                    "hint" : null,
                    "answer" : "Why are you going to Itoku? (etc.)",
                    "videoBonus" : null
                },
                {
                    "question" : "I want to be an astronaut.",
                    "hint" : null,
                    "answer" : "What do you want to be (in the future)?",
                    "videoBonus" : null
                }
            ]
        },
        {
            "category" : "Same Word",
            "questions" : [
                {
                    "question" : "have",
                    "hint" : null,
                    "answer" : "eat",
                    "videoBonus" : null
                },
                {
                    "question" : "have to",
                    "hint" : null,
                    "answer" : "must",
                    "videoBonus" : null
                },
                {
                    "question" : "be going to",
                    "hint" : null,
                    "answer" : "will",
                    "videoBonus" : null
                },
                /*{
                    "question" : "hard",
                    "hint" : null,
                    "answer" : "difficult",
                    "videoBonus" : null
                },*/
                {
                    "question" : "sleep",
                    "hint" : null,
                    "answer" : "go to bed",
                    "videoBonus" : null
                },
                {
                    "question" : "look for",
                    "hint" : null,
                    "answer" : "find",
                    "videoBonus" : null
                },
                {
                    "question" : 'In the textbook, who speaks the fourth language in this video?',
                    "hint" : null,
                    "answer" : "Orange does.",
                    "videoBonus" : "Let-It-Go"
                },
                {
                    "question" : "many",
                    "hint" : null,
                    "answer" : "a lot of",
                    "videoBonus" : null
                }
            ]
        },
        {
            "category" : "What am I?",
            "questions" : [
                {
                    "question" : "Shh! Be quiet.</p><p>Many books are here.",
                    "hint" : null,
                    "answer" : "library",
                    "videoBonus" : null
                },
                {
                    "question" : "I'm orange.</p><p>I can be scary.</p><p>Many Americans buy me near Halloween.",
                    "hint" : null,
                    "answer" : "pumpkin",
                    "videoBonus" : null
                },
                {
                    "question" : "These two characters study here.",
                    "hint" : null,
                    "answer" : "university or college or Monsters University",
                    "videoBonus" : "Monsters-University"
                },
                {
                    "question" : "In America, I am blue.</p><p>But in Japan, I am red.</p><p>You need me to visit other countries.",
                    "hint" : null,
                    "answer" : "passport",
                    "videoBonus" : null
                },
                {
                    "question" : "You must study me in school.</p><p>I will be useful in the future.</p><p>I was Mr. Cheng's favorite subject in junior high school.",
                    "hint" : null,
                    "answer" : "math",
                    "videoBonus" : null
                },
                {
                    "question" : "You can eat me in Japan.</p><p>But in America, you cannot.</p><p>In America, I help you cook.",
                    "hint" : null,
                    "answer" : "pan",
                    "videoBonus" : null
                },
                {
                    "question" : "I show you many things.</p><p>I was only black and white a long time ago.</p><p>People call me \"telly\" in the UK.",
                    "hint" : null,
                    "answer" : "TV or television",
                    "videoBonus" : null
                }
            ]
        },
        {
            "category" : "Other Subjects",
            "questions" : [
                {
                    "question" : "Math</p><p>How many meters are in three kilometers?",
                    "hint" : null,
                    "answer" : "three thousand (3000)",
                    "videoBonus" : null
                },
                {
                    "question" : "Music</p><p>Who wrote this song?<br/><br/><br/><audio controls=\"controls\"><source src=\"music/Beethoven-Symphony-No-9-4th-Movement.ogg\" /></audio>",
                    "hint" : null,
                    "answer" : "Ludwig van Beethoven",
                    "videoBonus" : null
                },
                {
                    "question" : "Computer Science</p><p>Who made Microsoft?",
                    "hint" : null,
                    "answer" : "Bill Gates",
                    "videoBonus" : null
                },
                {
                    "question" : "Geography</p><p>Is Sweden east or west of Finland?",
                    "hint" : null,
                    "answer" : "west",
                    "videoBonus" : null
                },
                {
                    "question" : "Science</p><p>What other name do people call \"deoxyribonucleic acid\"?",
                    "hint" : null,
                    "answer" : "DNA",
                    "videoBonus" : null
                },
                {
                    "question" : "Social Studies</p><p>In what year was Oda Nobunaga born?",
                    "hint" : null,
                    "answer" : "1534 (June 23rd)",
                    "videoBonus" : null
                },
                {
                    "question" : "Art</p><p>Who made this painting?<br/><br/><img src=\"images/Jardin-a-Sainte-Adresse.jpg\" style=\"height:400px;\" />",
                    "hint" : null,
                    "answer" : "Oscar-Claude Monet (Claude Monet)",
                    "videoBonus" : null
                }
            ]
        }
    ]
};