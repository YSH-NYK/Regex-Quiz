
let questions = [
    {
        "id": 1,
        "question": "Write a regular expression to match a single digit (0-9).",
        "hint": "Use \\d to match any digit.",
        "testcases": ["0", "5", "9", "1", "7"]
    },
    {
        "id": 2,
        "question": "Write a regular expression to match a lowercase letter (a-z).",
        "hint": "Use [a-z] to match any lowercase letter.",
        "testcases": ["a", "m", "z", "b", "y"]
    },
    {
        "id": 3,
        "question": "Write a regular expression to match an uppercase letter (A-Z).",
        "hint": "Use [A-Z] to match any uppercase letter.",
        "testcases": ["A", "M", "Z", "B", "Y"]
    },
    {
        "id": 4,
        "question": "Write a regular expression to match any word character (alphanumeric or underscore).",
        "hint": "Use \\w to match any word character.",
        "testcases": ["a", "Z", "5", "_", "9"]
    },
    {
        "id": 5,
        "question": "Write a regular expression to match any whitespace character.",
        "hint": "Use \\s to match any whitespace character.",
        "testcases": [" ", "\\t", "\\n", "\\r", "\\f"]
    },
    {
        "id": 6,
        "question": "Write a regular expression to match a literal period (.) character.",
        "hint": "Use \\ to escape special characters.",
        "testcases": [".", "a.b", "1.2", "x.y", "test."]
    },
    {
        "id": 7,
        "question": "Write a regular expression to match the word 'hello' in a string.",
        "hint": "Just use the word 'hello' in your regex.",
        "testcases": ["hello", "ahello", "hello!", "sayhello", "123hello"]
    },
    {
        "id": 8,
        "question": "Write a regular expression to match a string that starts with 'a'.",
        "hint": "Use ^ to indicate the start of a string.",
        "testcases": ["a", "abc", "apple", "a123", "an"]
    },
    {
        "id": 9,
        "question": "Write a regular expression to match a string that ends with 'z'.",
        "hint": "Use $ to indicate the end of a string.",
        "testcases": ["z", "buzz", "jazz", "xyz", "topz"]
    },
    {
        "id": 10,
        "question": "Write a regular expression to match a string that contains 'cat'.",
        "hint": "Just use the word 'cat' in your regex.",
        "testcases": ["cat", "cater", "scat", "concatenate", "bobcat"]
    },
    {
        "id": 11,
        "question": "Write a regular expression to match a single hexadecimal digit (0-9, A-F).",
        "hint": "Use [0-9A-F] to match any hexadecimal digit.",
        "testcases": ["0", "5", "A", "F", "C"]
    },
    {
        "id": 12,
        "question": "Write a regular expression to match a vowel (a, e, i, o, u).",
        "hint": "Use [aeiou] to match any vowel.",
        "testcases": ["a", "e", "i", "o", "u"]
    },
    {
        "id": 13,
        "question": "Write a regular expression to match a string containing only digits.",
        "hint": "Use \\d+ to match one or more digits.",
        "testcases": ["123", "456", "7890", "111", "2345"]
    },
    {
        "id": 14,
        "question": "Write a regular expression to match a string containing only letters.",
        "hint": "Use [a-zA-Z]+ to match one or more letters.",
        "testcases": ["abc", "XYZ", "Hello", "world", "test"]
    },
    {
        "id": 15,
        "question": "Write a regular expression to match a string containing a digit followed by a letter.",
        "hint": "Use \\d[a-zA-Z] to match a digit followed by a letter.",
        "testcases": ["1a", "2b", "3c", "4D", "5E"]
    },
    {
        "id": 16,
        "question": "Write a regular expression to match a string that starts with a digit.",
        "hint": "Use ^\\d to indicate the start of the string with a digit.",
        "testcases": ["1abc", "2xyz", "3hello", "4world", "5test"]
    },
    {
        "id": 17,
        "question": "Write a regular expression to match a string that ends with a digit.",
        "hint": "Use \\d$ to indicate the end of the string with a digit.",
        "testcases": ["abc1", "xyz2", "hello3", "world4", "test5"]
    },
    {
        "id": 18,
        "question": "Write a regular expression to match a string containing a sequence of three digits.",
        "hint": "Use \\d{3} to match exactly three digits.",
        "testcases": ["123", "456", "789", "111", "234"]
    },
    {
        "id": 19,
        "question": "Write a regular expression to match a string containing a word boundary followed by 'cat'.",
        "hint": "Use \\b to match a word boundary.",
        "testcases": ["cat", "cat.", "a cat", "cat!", "cat"]
    },
    {
        "id": 20,
        "question": "Write a regular expression to match a string containing only non-digit characters.",
        "hint": "Use \\D+ to match one or more non-digit characters.",
        "testcases": ["abc", "XYZ", "hello", "world", "test"]
    },
    {
        "id": 21,
        "question": "Write a regular expression to match a string containing one or more whitespace characters.",
        "hint": "Use \\s+ to match one or more whitespace characters.",
        "testcases": [" ", "  ", "\\t\\t", "\\n", "   "]
    },
    {
        "id": 22,
        "question": "Write a regular expression to match a string containing zero or more digits.",
        "hint": "Use \\d* to match zero or more digits.",
        "testcases": ["123", "", "4567", "0", "89"]
    },
    {
        "id": 23,
        "question": "Write a regular expression to match a string containing zero or more letters.",
        "hint": "Use [a-zA-Z]* to match zero or more letters.",
        "testcases": ["abc", "", "XYZ", "hello", "world"]
    },
    {
        "id": 24,
        "question": "Write a regular expression to match a string containing exactly two digits.",
        "hint": "Use \\d{2} to match exactly two digits.",
        "testcases": ["12", "34", "56", "78", "90"]
    },
    {
        "id": 25,
        "question": "Write a regular expression to match a string containing exactly four letters.",
        "hint": "Use [a-zA-Z]{4} to match exactly four letters.",
        "testcases": ["test", "abcd", "EFGH", "ijkl", "mnop"]
    },
    {
        "id": 26,
        "question": "Write a regular expression to match a string containing one or more word characters.",
        "hint": "Use \\w+ to match one or more word characters.",
        "testcases": ["word", "hello", "1234", "_underscore", "text"]
    },
    {
        "id": 27,
        "question": "Write a regular expression to match a string containing a digit followed by a word character.",
        "hint": "Use \\d\\w to match a digit followed by a word character.",
        "testcases": ["1a", "2b", "3c", "4_", "5Z"]
    },
    {
        "id": 28,
        "question": "Write a regular expression to match a string containing a non-word character.",
        "hint": "Use \\W to match any non-word character.",
        "testcases": ["!", "@", "#", "$", "%"]
    },
    {
        "id": 29,
        "question": "Write a regular expression to match a string containing a sequence of exactly three letters.",
        "hint": "Use [a-zA-Z]{3} to match exactly three letters.",
        "testcases": ["abc", "DEF", "xyz", "GHI", "jkl"]
    },
    {
        "id": 30,
        "question": "Write a regular expression to match a string containing exactly one uppercase letter followed by one lowercase letter.",
        "hint": "Use [A-Z][a-z] to match an uppercase letter followed by a lowercase letter.",
        "testcases": ["Aa", "Bb", "Cc", "Dd", "Zz"]
    }]

function random() {
    let usedNumbers = [];
    if (usedNumbers.length === 30) {
        usedNumbers = [];
    }

    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * 30) + 1;
    } while (usedNumbers.includes(randomNumber));

    usedNumbers.push(randomNumber);

    return randomNumber;
}


// console.log(questions);
// let qb = JSON.stringify(questions);
// console.log(qb);


function loadQuestion() {
    const ques = document.querySelector('#question');
    let x = random();
    console.log(x);
    console.log(questions[x].question);
    y=questions[x].id-1
    console.log(y);
    for (let i = 1; i < questions.length; i++) {
        if (y == x) {
            ques.textContent = questions[y-1].question;
            console.log(ques);
            const hint = document.getElementById('hint');
            const hintimg = document.getElementById('hintimg');
            hintimg.addEventListener('click', function () {
                hint.textContent = `Hint : ${questions[y-1].hint}`;
               
            });
            ques.setAttribute('data-question-id', y);
        }
    }
}

function checkAnswer() {
    const ans = document.getElementById('ans').value;  
    const regex = new RegExp(ans, 'i'); 
    const questionId = parseInt(document.querySelector('#question').getAttribute('data-question-id'));
    console.log(questionId);
    const currentQuestion = questions.find(q => q.id === questionId);
    let allPassed = true;

    currentQuestion.testcases.forEach(testcase => {
        const isMatch = regex.test(testcase);
        if (!isMatch) {
            allPassed = false;
            alert(`Test case failed: "${testcase}" does not match the regular expression.`);
        }
    });

    if (allPassed) {
        return true;
    } else {
        return false;
    }
}


window.onload = loadQuestion();

const qno = document.getElementById('qno');
const btn = document.getElementById('next');
let j = 2;

btn.addEventListener('click', function () {
    const ans = document.getElementById('ans').value;
    if (checkAnswer()&&ans!="") {
        if (j == 10) {
            btn.textContent = "Submit";
            btn.addEventListener('click', function () {
                window.location.href = 'Done.html';
            });
        }
        if (j <= 10) {
            qno.textContent = `Question: ${j} / 10`;
            const ans = document.getElementById('ans');  
            ans.value="";
            loadQuestion();
            j++;
        }
    }
});


         
            
               
               






