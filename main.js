var counter = 0;


var ready = prompt("are you ready to play? yes/no");
if (ready == "yes") { 
    alert("let's start! your score is currently " + counter + ". Each prompt you get to will add 1 point to your score. The higher your score is by the end, the better!")
} else { 
    alert("ok bye")
}

alert("The year is 2039. Scientists have just discovered an alien probe travelling through our solar system. Unknown space crafts are soon found after and predicted to be coming straight towards Earth");
counter++;

alert("So, it's official. Aliens are real")
counter++;

alert("Luckily, you are a super-extra-mega smart scientist who specializes in alien diplomacy. It's up to you to represent the human race and decide what to do next")
counter++;

var choice1 = confirm("You can either try to talk to the aliens, or ignore them and hope they go away. Click OK to try to talk to the aliens, or Cancel to ignore")
counter++;

function wantSun() {
    alert("You say wassup and the aliens say hi back! They're cool, but they explain that they're here to harness our sun for a giant alien dysonsphere. They ask you really nicely (with a pretty please) if they can borrow/take your sun. What do you say?")
    counter++;
}

function takeSun() {
    alert("The aliens take our sun and it disappears from our solar system.. You are officially the worst alien diplomat ever, the end. Your final score is " + counter + ". (End of Adventure)")
}

if (choice1 == true) {
    wantSun();
    counter++;
} else {
    alert("You chose to ignore the aliens... kind of?");
    counter++;
    alert("As the aliens get closer, they use their advanced technology to find you and... leave you lots of voicemails, texts, DMs; politely letting you know they're on the way and wanna talk.")
    counter++;
    var choice2 = confirm("Are you sure you don't want to see what they want? Click OK to confirm ignore or Cancel to talk");
    counter++;
        if (choice2 == true) {
            alert("You left the aliens on read and made them mad. You read their messages and found out they wanted to use your sun to make a giant dysonsphere, but they took it without asking because you didn't respond");
            counter++;
            takeSun();
        }   else {
            wantSun();
            counter++;
        }    
    }           
var choice3 = confirm("You can be nice and tell the aliens they can take our sun, or you can tell them no. Click OK to give the aliens our sun or cancel to say no");
counter++;
    
if (choice3 == true) {
    takeSun();
} else {
    alert("You tell the aliens no and make them mad. They say they're coming to Earth now to destroy our planet AND take our sun too! What do you do?")
    counter++;
    var choice4 = confirm("You have two choices: You can tell the aliens to bring it on and fight, or you can offer to talk it out and figure out a solution. Click OK to fight or Cancel to talk it out.")
    counter++;

        if (choice4 == true) {
            alert("You chose to fight the aliens! You'll be facing off in a violent, intense, dangerous battle of... Rock, paper, scissors!!");
            counter++;

            var choice4 = prompt("You only get one chance, one match. Out of rock, paper, or scissors, pick your weapon against the aliens");
            counter++;

            alert("You chose " + choice4 + "!");
            counter++;
                if (choice4 === "rock" || "paper") {
                    alert("YOU DEFEATED THE ALIENS! Earth gets to keep their sun, and the aliens accepted their loss fair and square. They move on to a different star, the end. Your final score is " + counter + ". (End of Adventure)")
                } else {
                    alert("OH NO! The aliens defeated you with rock!");
                    takeSun();
                            }
                    }
        else {
            alert("You chose to tell the aliens you wish to peacefully reach an agreement. The aliens say...")
            counter++;
            alert("They respect you for choosing peace over war, and no longer wish to take our sun! They instead seek a symbiotic relationship where humans and aliens help each other and share stuff like technology and netflix passowrds. Your final score is " + counter + ". The end");
                    }
}
        









