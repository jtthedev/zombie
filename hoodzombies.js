// Zombie in the Hood JS game 

alert("What's good Bruh Bruh? You were knocked out for a long time. What's your name?");
prompt("What is your name?");
alert("IT DOESNT MATTER WHAT YOUR NAME IS!.... I always wanted to do that. \
	Well, I don't use names so I'm just gonna call you Dumbass");
prompt("Is that ok?");
alert("Bitch, I don't care if you say it's ok or not!... Ok, time to get real.");
alert(" I don't know how much you remember, but shit is all fucked up right now. We got zombie out her mane.\
	Yeah bruh, zombies is real and they took this bitch over");
alert("Ohh you dont believe me? You think I'm crazy?... Then look behind you...");
alert("*You see two zombies behind you*");
alert("Yeah, you believe me now don't you, Dumbass?!");
alert("Well that's yo ass, Mr Postman..");
alert(" HAHA Nah I ain't gonna leave you like that. Ok, if you answer this question right, I'll help you...");

var q1 = prompt(" What is (2 + 2) - 1 ?");
		if(q1 == 3) {
				alert("WRONG ANSWER! Get ready to throw them hands!");
		} else if(q1 == "Quick Math" || ( q1 == "quick math") || (q1 == "Quick Mafs" ) || (q1 == "quick mafs")){
			alert("Ayyyye! You got The Sauce, no Ketchup! Here's Da Ting!");
		} else{
			alert(" You are so dumb. You are really dumb..... Fuck outta here! *You die of stupidity* ");
		}

function runHands(){
		alert("*The zombie approaches, ready to bite you..* (You have a 50% chance of winning this fight. Good luck, Dumbass)");
		var zoBite = Math.round(Math.random());
		if(zoBite === 0){
			alert("You live to fight another day... but you still a bitch, so another zombie appears behind you and bites your beautiful neck meats\
				! YOU'RE STILL DEAD! FOH!!");
		}
		else{
			alert("OOOOO He got yo ass! You're dead, Dumbass!");
		}
	}
	
function daTingGoes(){
		alert("What's this? This bitch ass zombie bought his bitch ass friends? *A group of 30 zombies slowly start to move towards you*");
		alert("But they don't know! You bout that action! Show them what Da Ting do!");
		alert("Da Ting goes SKRRRAHH! pap, pap, ka-ka-ka.")
		alert("Skidiki-pap-pap")
		alert("and a pu-pu-pudrrrr-BOOM!")
		alert("Skya!")
		alert("du-du-ku-ku-dun-dun!");
		alert("Poom, poom!");
		alert("They dun know!");
		alert("Good job! You win, Dumbass!")
		alert("You killed..."); 
		alert("Just...");
		alert("EVERYBODY!");
		alert("Help yourself to the big ass bag of money, and chicken wings");
}
if(q1 == 3){
		runHands();
}
else if(q1 == "Quick Math" || ( q1 == "quick math") || (q1 == "Quick Mafs" ) || (q1 == "quick mafs")){
		daTingGoes();
}