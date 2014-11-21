// Set Global Variables
// numberOfTeams = 6;
// gameName = "Jeopardy!";
categoryNames = [
    "What's wrong?",
    "Make a sentence",
    "Who am I?",
    "Fill in the blank",
    "Sounds like...",
    "Other Subjects"
    ];
// questionsPerCategory = 7;
questionJSON = {
    "categories" : [
        {
            "category" : "Find the error(s) in the sentence(s).",
            "questions" : [
                {
                    "question" : "Do you study math last night?",
                    "hint" : "Hint: 1 mistake.",
                    "answer" : '<span class="error-correction">Did</span> you study math last night? ',
                    "videoBonus" : null
                },
                {
                    "question" : "Kevin has 15 pens, 1 pencil, and 101 dog.",
                    "hint" : "Hint: 1 mistake.",
                    "answer" : 'Kevin has 15 pens, 1 pencil, and 101 <span class="error-correction">dogs</span>.',
                    "videoBonus" : null
                },
                {
                    "question" : "What movie is this from?",
                    "hint" : null,
                    "answer" : 'Toy Story',
                    "videoBonus" : "Toy-Story"
                },
                {
                    "question" : "<strong>A:</strong>: Which spaceship goes to the moon?</p><p><strong>B:</strong> Take spaceship number 3. It's by flowershop.",
                    "hint" : "Hint: 1 mistakes.",
                    "answer" : '<strong>A:</strong>: Which spaceship goes to the moon?</p><p><strong>B:</strong> Take spaceship number 3. It\'s by <span class="error-correction">the</span>flowershop.',
                    "videoBonus" : null
                },
                {
                    "question" : "<strong>A:</strong> How long do it take to get to Tokyo?</p><p><strong>B:</strong> About 3 hour.",
                    "hint" : "Hint: 2 mistakes.",
                    "answer" : '<strong>A:</strong> How long <span class="error-correction">does</span> it take to get to Tokyo?</p><p><strong>B:</strong> About 3 hour<span class="error-correction">s</span>.',
                    "videoBonus" : null
                },
                {
                    "question" : "<strong>A:</strong> Why do you like basketball?</p><p><strong>B:</strong> Because its fun.",
                    "hint" : "Hint: 1 mistakes.",
                    "answer" : '<strong>A:</strong> Why do you like basketball?</p><p><strong>B:</strong> Because <span class="error-correction">it\'s</span> fun.',
                    "videoBonus" : null
                },
                {
                    "question" : "<strong>Ms. Brown:</strong> Where is Ms. Green?</p><p><strong>Ichiro:</strong> She's at Japan.</p><p><strong>Ms. Brown:</strong> Oh, I see.",
                    "hint" : "Hint: 1 mistakes.",
                    "answer" : '<strong>Ms. Brown:</strong> Where is Ms. Green?</p><p><strong>Ichiro:</strong> She\'s <span class="error-correction">in</span> Japan.</p><p><strong>Ms. Brown:</strong> Oh, I see.',
                    "videoBonus" : null
                }
            ]
        },
        {
            "category" : "Rearrange these words to make a sentence.",
            "questions" : [
                {
                    "question" : "[?] [you] [makes] [what] [happy]",
                    "hint" : null,
                    "answer" : "What makes you happy?",
                    "videoBonus" : null
                },
                {
                    "question" : "[.] [Friday] [Monday] [he] [better] [likes] [than]",
                    "hint" : null,
                    "answer" : "He likes Friday better than Monday.</p><p>OR</p><p>He likes Monday better than Friday.",
                    "videoBonus" : null
                },
                {
                    "question" : "[.] [fun] [English] [very] [studying] [is]",
                    "hint" : null,
                    "answer" : "Studying English is very fun.",
                    "videoBonus" : null
                },
                {
                    "question" : "[.] [fifteen] [school] [am] [go] [to] [to] [minutes] [in] [going] [I]",
                    "hint" : null,
                    "answer" : "I am going to go to school in fifteen minutes.",
                    "videoBonus" : null
                },
                {
                    "question" : "[?] [Ms. Green] [did] [at] [see] [the] [you] [station]",
                    "hint" : null,
                    "answer" : "Did you see Ms. Green at the station?",
                    "videoBonus" : null
                },
                {
                    "question" : "[.] [let's] [free] [are] [you] [play] [if] [volleyball]",
                    "hint" : "Hint: There is no comma [,]",
                    "answer" : "Let's play volleyball if you are free.",
                    "videoBonus" : null
                },
                {
                    "question" : "[.] [elementary school] [junior high school] [Mondays] [teach]</p><p>[at] [on] [the] [the] [go] [has] [to] [to] [Mr. Cheng] [he]</p><p>[because] [doesn't]",
                    "hint" : null,
                    "answer" : "Mr. Cheng doesn't go to the junior high school on Mondays</p><p>because he has to teach at the elementary school.",
                    "videoBonus" : null
                }
            ]
        },
        {
            "category" : "Who am I?",
            "questions" : [
                {
                    "question" : "I'm a robot.</p><p>I'm a cat.</p><p>I have a special pocket.",
                    "hint" : null,
                    "answer" : "Doraemon",
                    "videoBonus" : null
                },
                {
                    "question" : "I'm a mouse.</p><p>I can make lightning.</p><p>I am yellow.",
                    "hint" : null,
                    "answer" : "Pikachu",
                    "videoBonus" : null
                },
                {
                    "question" : "I'm a plumber.</p><p>Eating mushrooms makes me taller.</p><p>I like red.",
                    "hint" : null,
                    "answer" : "Mario",
                    "videoBonus" : null
                },
                {
                    "question" : "What movie is this from?",
                    "hint" : null,
                    "answer" : "Spirited Away</p><p>千と千尋の神隠し",
                    "videoBonus" : "Spirited-Away"
                },
                {
                    "question" : "I like to sing.</p><p>I was born in 1952.</p><p>I'm blind.",
                    "hint" : null,
                    "answer" : "Aragaki Tsutomu",
                    "videoBonus" : null
                },
                {
                    "question" : "I am strong and like to eat.</p><p>I have two sons.</p><p>I usually have black hair but sometimes have yellow hair.",
                    "hint" : null,
                    "answer" : "Son Goku",
                    "videoBonus" : null
                },
                {
                    "question" : "I live in Gotham City.</p><p>I fight crime everyday.</p><p>I am very rich.",
                    "hint" : null,
                    "answer" : "Batman OR Bruce Wayne",
                    "videoBonus" : null
                }
            ]
        },
        {
            "category" : "Fill in the blanks with the correct word(s).",
            "questions" : [
                {
                    "question" : "It's a magic box. ______ a wish and you can get ______.",
                    "hint" : null,
                    "answer" : "It's a magic box. <span class=\"fill-in-the-blank\">Make</span> a wish and you can get <span class=\"fill-in-the-blank\">anything</span>.",
                    "videoBonus" : null
                },
                {
                    "question" : "Mount Everest is the _______ mountain in the world.",
                    "hint" : null,
                    "answer" : "Mount Everest is the <span class=\"fill-in-the-blank\">tallest</span> mountain in the world. ",
                    "videoBonus" : null
                },
                {
                    "question" : "Italy is ______ than Russia.",
                    "hint" : null,
                    "answer" : "Italy is <span class=\"fill-in-the-blank\">smaller</span> than Russia. ",
                    "videoBonus" : null
                },
                {
                    "question" : "We ______ our English textbook New ______.",
                    "hint" : null,
                    "answer" : "We <span class=\"fill-in-the-blank\">call</span> our English textbook New <span class=\"fill-in-the-blank\">Horizon</span>.",
                    "videoBonus" : null
                },
                {
                    "question" : "______ ______. Which train goes to New York City?",
                    "hint" : null,
                    "answer" : "<span class=\"fill-in-the-blank\">Excuse me</span> . Which train goes to New York City? ",
                    "videoBonus" : null
                },
                {
                    "question" : "Playing ______ is fun because ____________."
                    "hint" : 'Hint: Use a sentence after "because".',
                    "answer" : 'Playing <span class="fill-in-the-blank">[noun]</span> is fun because <span class="fill-in-the-blank">[reason (sentence)]</span>.',
                    "videoBonus" : null
                },
                {
                    "question" : "My favorite ______ is ______ because ____________.",
                    "hint" : 'Hint: Use a sentence after "because".',
                    "answer" : "My favorite <span class=\"fill-in-the-blank\">[noun]</span> is <span class=\"fill-in-the-blank\">[noun]</span> because <span class=\"fill-in-the-blank\">[reason (sentence)]</span>.",
                    "videoBonus" : null
                }
            ]
        },
        {
            "category" : "What other word(s) sounds like ~ ? Spell it.",
            "questions" : [
                {
                    "question" : "ate",
                    "hint" : null,
                    "answer" : "eight",
                    "videoBonus" : null
                },
                {
                    "question" : "red",
                    "hint" : null,
                    "answer" : "read",
                    "videoBonus" : null
                },
                {
                    "question" : "here",
                    "hint" : null,
                    "answer" : "hear",
                    "videoBonus" : null
                },
                {
                    "question" : "right",
                    "hint" : null,
                    "answer" : "write",
                    "videoBonus" : null
                },
                {
                    "question" : "to",
                    "hint" : "Hint: There are two answers.",
                    "answer" : "too</p><p>two",
                    "videoBonus" : null
                },
                {
                    "question" : "buy",
                    "hint" : "Hint: There are two answers.",
                    "answer" : "by</p><p>bye",
                    "videoBonus" : null
                },
                {
                    "question" : "there",
                    "hint" : "Hint: There are two answers.",
                    "answer" : "their</p><p>they're",
                    "videoBonus" : null
                }
            ]
        },
        {
            "category" : "Other Subjects",
            "questions" : [
                {
                    "question" : "Science</p><p>What is NaCl in English?",
                    "hint" : null,
                    "answer" : "salt",
                    "videoBonus" : null
                },
                {
                    "question" : "Math</p><p>What is C?<br/><br/><img src=\"images/5-12-13-right-triangle.png\" style=\"height:400px;\" />",
                    "hint" : "a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>",
                    "answer" : "13",
                    "videoBonus" : null
                },
                {
                    "question" : 'Art</p><p>When you mix <span class="color-box" style="background-color: yellow;">yellow</span> and <span class="color-box" style="background-color: red;">red</span>, what color do you get?',
                    "hint" : null,
                    "answer" : '<span class="color-box" style="background-color: orange;">orange</span>',
                    "videoBonus" : null
                },
                {
                    "question" : "What movie is this from?",
                    "hint" : null,
                    "answer" : "Tokyo Godfathers</p><p>東京ゴッドファーザーズ",
                    "videoBonus" : "Tokyo-Godfathers"
                },
                {
                    "question" : "Geography</p><p>What is the capital of Italy?",
                    "hint" : "Hint: The capital of Japan is Tokyo.",
                    "answer" : "Rome",
                    "videoBonus" : null
                },
                {
                    "question" : "Computer Science</p><p>On a keyboard, what letter is to the right of the J key?",
                    "hint" : "Hint: It comes next in the alphabet.",
                    "answer" : "K",
                    "videoBonus" : null
                },
                {
                    "question" : "Social Studies</p><p>Put these in order from earliest to latest:</p><p><strong>(A)</strong> Nara period - 奈良時代</p><p><strong>(B)</strong> Kamakura period - 鎌倉時代</p><p><strong>(C)</strong> Kofun period - 古墳時代",
                    "hint" : null,
                    "answer" : "<strong>(C)</strong> Kofun period - 古墳時代 - AD 250 to 538 (about)</p><p><strong>(A)</strong> Nara period - 奈良時代 - AD 710 to 794</p><p><strong>(B)</strong> Kamakura period - 鎌倉時代 - AD 1185 to 1333",
                    "videoBonus" : null
                }
            ]
        }
    ]
};