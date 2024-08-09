#! /usr/bin/env node
 import inquirer from "inquirer";
 import chalk from "chalk";

 console.log(chalk.bold.bgMagentaBright("\n   *** WELCOME TO THE QUIZ PROJECT ***  \n"));
async function startQuiz() {
    let score = 0;

    // Define your questions array
    const questions = [
        {
            type: 'list',
            name: 'question_1',
            message: "Which of the following is a correct way to define a variable in TypeScript?",
            choices: ["var name: string;", "let name: string;", "const name: number;", "all of the above"],
            correctAnswer: "all of the above"
        },
        {
            type: 'list',
            name: 'question_2',
            message: "Which of the following is a TypeScript data type?",
            choices: ["string", "number", "boolean", "all of the above"],
            correctAnswer: "all of the above"
        },
        {
            type: 'list',
            name: 'question_3',
            message: "How do you define an array of strings in TypeScript?",
            choices: ["let arr: string[];", "let arr: Array<string>;", "let arr: [string];", "Both 1 and 2"],
            correctAnswer: "Both 1 and 2"
        },
        {
            type: 'list',
            name: 'question_4',
            message: "Which of the following is a way to declare a tuple in TypeScript?",
            choices: ["let tuple: [string, number];", "let tuple: (string, number);", "let tuple: [string, number, boolean];", "None of the above"],
            correctAnswer: "let tuple: [string, number];"
        },
        {
            type: 'list',
            name: 'question_5',
            message: "What is the default access modifier in TypeScript?",
            choices: ["public", "private", "protected", "readonly"],
            correctAnswer: "public"
        },
        {
            type: 'list',
            name: 'question_6',
            message: "Which of the following keywords is used to define an interface in TypeScript?",
            choices: ["interface", "class", "type", "module"],
            correctAnswer: "interface"
        },
        {
            type: 'list',
            name: 'question_7',
            message: "What is the purpose of the `super` keyword in TypeScript?",
            choices: [
                "It refers to the constructor of a derived class.",
                "It calls the constructor of the base class.",
                "It refers to a method in the same class.",
                "It creates a new class instance."
            ],
            correctAnswer: "It calls the constructor of the base class."
        },
        {
            type: 'list',
            name: 'question_8',
            message: "Which access modifier allows a class member to be accessed within the same class and its subclasses, but not outside?",
            choices: ["public", "private", "protected", "readonly"],
            correctAnswer: "protected"
        },
        {
            type: 'list',
            name: 'question_9',
            message: "Which TypeScript feature allows you to specify default implementations for methods in a class that other classes can inherit?",
            choices: ["Abstract class", "Interface", "Type alias", "Module"],
            correctAnswer: "Abstract class"
        },
        {
            type: 'list',
            name: 'question_10',
            message: "In TypeScript, how can you enforce that a class implements certain properties or methods?",
            choices: [
                "By using the `implements` keyword with an interface",
                "By using the `extends` keyword with a class",
                "By using the `export` keyword with a module",
                "By using the `abstract` keyword with a class"
            ],
            correctAnswer: "By using the `implements` keyword with an interface"
        }
    ];

    // Ask each question using inquirer
    for (let i = 0; i < questions.length; i++) {
        const question = questions[i];
        const answer = await inquirer.prompt([question]);

        // Use a switch statement to check the answer
        switch (answer[`question_${i + 1}`]) {
            case question.correctAnswer:
                console.log(chalk.bold.bgGreenBright(" Correct! ✔ \n"));
                score++;
                break;
            default:
                console.log(chalk.bold.bgRedBright(" Wrong! \n"));
                break;
        }
    }

    return score;
}

async function showResult(score: number, totalQuestions: number) {
    console.log(chalk.bold.bgBlueBright(` You scored ${score} out of ${totalQuestions}! `));

    switch (true) {
        case score === totalQuestions:
            console.log(chalk.bold.bgGreenBright("\n Excellent 👌! You know your TypeScript! "));
            break;
        case score >= totalQuestions / 2:
            console.log(chalk.bold.bgYellowBright("\n Good job!👍 Keep practicing to improve. "));
            break;
        default:
            console.log(chalk.bold.bgRedBright("\n You might need to review TypeScript. "));
            break;
    }
}

// Main function to start the quiz
async function main() {
    const totalQuestions = 10;
    const score = await startQuiz();
    await showResult(score, totalQuestions);
}

main();