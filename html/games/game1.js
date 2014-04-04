// Set Global Variables
// numberOfTeams = 6;
// gameName = "Jeopardy!";
categoryNames = [
    "What's wrong?",
    "Q&A",
    "A&Q",
    "Fill in the blank",
    "Who am I?",
    "Other Subjects"
    ];
// questionsPerCategory = 7;
questionJSON = {
    "categories" : [
        {
            "category" : "Find the error(s) in the sentence(s).",
            "questions" : [
                {
                    "question" : "He speak English well.",
                    "hint" : "Hint: 1 mistake.",
                    "answer" : 'He <span class="error-correction">speaks</span> English well?',
                    "videoBonus" : null
                },
                {
                    "question" : "Stitch is eat lunch.",
                    "hint" : "Hint: 1 mistake.",
                    "answer" : 'Stitch is <span class="error-correction">eating</span> lunch.',
                    "videoBonus" : null
                },
                {
                    "question" : "How many book do you have?",
                    "hint" : "Hint: 1 mistake.",
                    "answer" : 'How many <span class="error-correction">books</span> do you have?',
                    "videoBonus" : null
                },
                {
                    "question" : "Who bag is under the table?",
                    "hint" : "Hint: 1 mistakes.",
                    "answer" : '<span class="error-correction">Whose</span> bag is under the table?',
                    "videoBonus" : null
                },
                {
                    "question" : "<strong>A:</strong> What is they making?</p><p><strong>B:</strong> They are making fortune cookies.",
                    "hint" : "Hint: 1 mistakes.",
                    "answer" : '<strong>A:</strong> What <span class="error-correction">are</span> they making?</p><p><strong>B:</strong> They are making fortune cookies.',
                    "videoBonus" : null
                },
                {
                    "question" : "<strong>A:</strong> Did you studied English yesterday?</p><p><strong>B:</strong> No, I did.",
                    "hint" : "Hint: 2 mistakes.",
                    "answer" : '<strong>A:</strong> Did you <span class="error-correction">study</span> English yesterday?</p><p><strong>B:</strong> No, I <span class="error-correction">didn\'t / did not</span>.',
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
                    "question" : '<p>What movie is this from?</p><div id="video1"></div>',
                    "hint" : null,
                    "answer" : "Toy Story",
                    "videoBonus" : "Toy-Story"
                },
                {
                    "question" : "",
                    "hint" : null,
                    "answer" : "",
                    "videoBonus" : null
                },
                {
                    "question" : "",
                    "hint" : null,
                    "answer" : "",
                    "videoBonus" : null
                },
                {
                    "question" : "",
                    "hint" : null,
                    "answer" : "",
                    "videoBonus" : null
                },
                {
                    "question" : "",
                    "hint" : null,
                    "answer" : "",
                    "videoBonus" : null
                },
                {
                    "question" : "",
                    "hint" : null,
                    "answer" : "",
                    "videoBonus" : null
                },
                {
                    "question" : "",
                    "hint" : null,
                    "answer" : "",
                    "videoBonus" : null
                }
            ]
        },
        {
            "category" : "Question & Answer",
            "questions" : [
                {
                    "question" : "",
                    "hint" : null,
                    "answer" : "",
                    "videoBonus" : null
                },
                {
                    "question" : "",
                    "hint" : null,
                    "answer" : "",
                    "videoBonus" : null
                },
                {
                    "question" : "",
                    "hint" : null,
                    "answer" : "",
                    "videoBonus" : null
                },
                {
                    "question" : "",
                    "hint" : null,
                    "answer" : "",
                    "videoBonus" : null
                },
                {
                    "question" : "",
                    "hint" : null,
                    "answer" : "",
                    "videoBonus" : null
                },
                {
                    "question" : "",
                    "hint" : null,
                    "answer" : "",
                    "videoBonus" : null
                },
                {
                    "question" : "",
                    "hint" : null,
                    "answer" : "",
                    "videoBonus" : null
                }
            ]
        },
        {
            "category" : "Question & Answer",
            "questions" : [
                {
                    "question" : "",
                    "hint" : null,
                    "answer" : "",
                    "videoBonus" : null
                },
                {
                    "question" : "",
                    "hint" : null,
                    "answer" : "",
                    "videoBonus" : null
                },
                {
                    "question" : "",
                    "hint" : null,
                    "answer" : "",
                    "videoBonus" : null
                },
                {
                    "question" : "",
                    "hint" : null,
                    "answer" : "",
                    "videoBonus" : null
                },
                {
                    "question" : "",
                    "hint" : null,
                    "answer" : "",
                    "videoBonus" : null
                },
                {
                    "question" : "",
                    "hint" : null,
                    "answer" : "",
                    "videoBonus" : null
                },
                {
                    "question" : "",
                    "hint" : null,
                    "answer" : "",
                    "videoBonus" : null
                },
                {
                    "question" : "",
                    "hint" : null,
                    "answer" : "",
                    "videoBonus" : null
                }
            ]
        },
        {
            "category" : "Question & Answer",
            "questions" : [
                {
                    "question" : "",
                    "hint" : null,
                    "answer" : "",
                    "videoBonus" : null
                },
                {
                    "question" : "",
                    "hint" : null,
                    "answer" : "",
                    "videoBonus" : null
                },
                {
                    "question" : "",
                    "hint" : null,
                    "answer" : "",
                    "videoBonus" : null
                },
                {
                    "question" : "",
                    "hint" : null,
                    "answer" : "",
                    "videoBonus" : null
                },
                {
                    "question" : "",
                    "hint" : null,
                    "answer" : "",
                    "videoBonus" : null
                },
                {
                    "question" : "",
                    "hint" : null,
                    "answer" : "",
                    "videoBonus" : null
                },
                {
                    "question" : "",
                    "hint" : null,
                    "answer" : "",
                    "videoBonus" : null
                },
                {
                    "question" : "",
                    "hint" : null,
                    "answer" : "",
                    "videoBonus" : null
                }
            ]
        },
        {
            "category" : "Question & Answer",
            "questions" : [
                {
                    "question" : "",
                    "hint" : null,
                    "answer" : "",
                    "videoBonus" : null
                },
                {
                    "question" : "",
                    "hint" : null,
                    "answer" : "",
                    "videoBonus" : null
                },
                {
                    "question" : "",
                    "hint" : null,
                    "answer" : "",
                    "videoBonus" : null
                },
                {
                    "question" : "",
                    "hint" : null,
                    "answer" : "",
                    "videoBonus" : null
                },
                {
                    "question" : "",
                    "hint" : null,
                    "answer" : "",
                    "videoBonus" : null
                },
                {
                    "question" : "",
                    "hint" : null,
                    "answer" : "",
                    "videoBonus" : null
                },
                {
                    "question" : "",
                    "hint" : null,
                    "answer" : "",
                    "videoBonus" : null
                }
            ]
        },
        {
            "category" : "Question & Answer",
            "questions" : [
                {
                    "question" : "",
                    "hint" : null,
                    "answer" : "",
                    "videoBonus" : null
                },
                {
                    "question" : "",
                    "hint" : null,
                    "answer" : "",
                    "videoBonus" : null
                },
                {
                    "question" : "",
                    "hint" : null,
                    "answer" : "",
                    "videoBonus" : null
                },
                {
                    "question" : "",
                    "hint" : null,
                    "answer" : "",
                    "videoBonus" : null
                },
                {
                    "question" : "",
                    "hint" : null,
                    "answer" : "",
                    "videoBonus" : null
                },
                {
                    "question" : "",
                    "hint" : null,
                    "answer" : "",
                    "videoBonus" : null
                },
                {
                    "question" : "",
                    "hint" : null,
                    "answer" : "",
                    "videoBonus" : null
                }
            ]
        }
    ]
};