var Question = require('../model/question');
var Answer = require('../model/answer');
    
    questions = [];
    


    // FIRST QUESTION

    var question1 = new Question("You've got a project you must assign to someone. The deadline is yesterday and almost all Blippers are busy. Do your magic and pick up one of the options!");

    var answer11 = new Answer("Brendan Eich", "feedback 1.1", 100);
    var answer12 = new Answer("Random Young Intern", "It was a really easy task for him. As he was tired from the last night he decided to take a nap at the amazing Blip's Nap Room. However he fell asleep more than he wished and although he managed to finish the project it was not in perfect conditions", 250);
    var answer13 = new Answer("João Araújo", "As soon as you asked him, he got really enthusiastic about it because there were some new things he wanted to learn in this project. So he started immediately", 500);
    
    question1.possibleAnswers.push(answer11);
    question1.possibleAnswers.push(answer12);
    question1.possibleAnswers.push(answer13);
    
    questions.push(question1);
    
    // SECOND QUESTION
    
    var question2 = new Question("One of your Delivery Managers is leaving the company and he can't finish his work on the project he was involved in. <br>You must find an efficient ");

    var answer21 = new Answer("José Mourinho", "Come on! He is great at managing football teams but he doesn't understand anything about web development.", 100);
    var answer22 = new Answer("Random Young Intern", "feedback 2.2", 250);
    var answer23 = new Answer("João Araújo", "feedback 2.3", 500);
    
    question2.possibleAnswers.push(answer21);
    question2.possibleAnswers.push(answer22);
    question2.possibleAnswers.push(answer23);
    
    questions.push(question2);
    
    // THIRD QUESTION
    
    var question3 = new Question("There was a security breach at Gaia Zoo and several animals escaped. Somehow a lion got to Blip.pt office. You've got to choose someone to calm down Blippers and take care of the huge lion.");

    var answer31 = new Answer("Random Young Intern", "feedback 3.1", 100);
    var answer32 = new Answer("João Araújo", "feedback 3.2", 250);
    var answer33 = new Answer("Kevin Richardson", "feedback 3.3", 500);
    
    question3.possibleAnswers.push(answer31);
    question3.possibleAnswers.push(answer32);
    question3.possibleAnswers.push(answer33);
    
    questions.push(question3);
    
    // FOURTH QUESTION
    
    var question4 = new Question("You've got an amazing idea for the company and it should be presented today to the big bosses. However you won't be able to do it. Your son will be born today and you've got to be at hospital. You've got 10 minutes to pass all info and choose someone available to present it. Who do you choose?");

    var answer41 = new Answer("Random Young Intern", "feedback 4.1", 100);
    var answer42 = new Answer("Ricardo Araújo Pereira", "feedback 4.2", 250);
    var answer43 = new Answer("João Araújo", "feedback 4.3", 500);
    
    question4.possibleAnswers.push(answer41);
    question4.possibleAnswers.push(answer42);
    question4.possibleAnswers.push(answer43);
    
    questions.push(question4);
    
    // FIFTH QUESTION
    
    var question5 = new Question("Some amazing people from other headquarters are visiting Blip today. You want to impress them by showing the Blip environment and make them feel like home. Unfortunately you were out of the country and can't get there on time because of another airline strike.");

    var answer51 = new Answer("Random Young Intern", "feedback 5.1", 100);
    var answer52 = new Answer("Some awesome tourist guide", "feedback 5.2", 250);
    var answer53 = new Answer("João Araújo", "feedback 5.3", 500);
    
    question5.possibleAnswers.push(answer51);
    question5.possibleAnswers.push(answer52);
    question5.possibleAnswers.push(answer53);
    
    questions.push(question5);
    
    // SIXTH QUESTION
    
    var question6 = new Question("Every teams got product deliveries today and everybody is real busy with that. You noticed there's one intern who needs help with his task to keep doing it. Find out someone available who can help him.");

    var answer61 = new Answer("Another Random Young Intern", "When you asked him, the problem was already solved. Some Blipper had already volunteered to help the intern to solve the problem. That's pure Blip culture!", 0);
    var answer62 = new Answer("Some tech expert", "You have to call him back not to come in or just drink a coffee with him. Before his arrival, some Blipper had already volunteered to help the intern to solve the problem. That's pure Blip culture! ", 0);
    var answer63 = new Answer("João Araújo", "Before you asked him, he had already volunteered to help the intern and together they solved the problem!", 0);
    
    question6.possibleAnswers.push(answer61);
    question6.possibleAnswers.push(answer62);
    question6.possibleAnswers.push(answer63);
    
    questions.push(question6);

module.exports = questions;