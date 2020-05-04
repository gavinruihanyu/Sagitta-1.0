module.exports = (message,args) => {
    if (!args.length) {
        return message.reply('Roast target not specified')
    }



    let randNum = Math.floor((Math.random() * 2) );
    listOfRoasts = ["Not only do I feel dumber for trying to verbalize what you try to type, but I'm slowly losing the will to live. I do not want to live in a world where people like you are given the opportunity to work or have a say in anyone's future, let alone reproduce. I'm an atheist but I still pray, not for you, but fore the rest of us. God help us all, except you. I'm fucking surprised you weren't thrown out with the after birth, or aborted at the age of six, when you were finally able to speak, and your parents realize they made a mistake with you. I hope this is getting to you, because we know you struggle with simple things, like reading, writing and basic addition, but that's besides the point. We want you to know, we don't support you, hell, we barely tolerate you at times. I'd mind you less if you'd stop wasting our oxygen, and valuable resources on your stupid insignificant life. Do the world a favour and jump off a bridge.\n" +
        "\n" + "Why the fuck are you still here? I thought I told you to go poison someone else with your mindless irrational thoughts, you foul chunk of shit. The only good you could do for this world at this point is to allow your self to decompose in the woods to aid the surrounding flora in replacing the oxygen you waste on a daily basis. But given who you are, I wager you'd somehow fail to do that properly. Please, leave and let the responsible people take care of what's left of the world you almost singlehandedly destroyed by existing."
        , "The only thing worse than your logic is your manners. I have snipped away most of your of what you wrote, because, well ... it didn't really say anything. Your attempt at constructing a creative flame was pitiful. I mean, really, stringing together a bunch of insults among a load of babbling was hardly effective... Maybe later in life, after you have learned to read, write, spell, and count, you will have more success. True, these are rudimentary skills that many of us \"normal\" people take for granted that everyone has an easy time of mastering. But we sometimes forget that there are \"challenged\" persons in this world who find these things to be difficult. If I had known that this was true in your case then I would have never have exposed myself to what you wrote. It just wouldn't have been \"right.\" Sort of like parking in a handicap space. I wish you the best of luck in the emotional, and social struggles that seem to be placing such a demand on you."
        ,"You are hypocritical, greedy, violent, malevolent, vengeful, cowardly, deadly, mendacious, meretricious, loathsome, despicable, belligerent, opportunistic, barratrous, contemptible, criminal, fascistic, bigoted, racist, sexist, avaricious, tasteless, idiotic, brain-damaged, imbecilic, insane, arrogant, deceitful, demented, lame, self-righteous, byzantine, conspiratorial, satanic, fraudulent, libelous, bilious, splenetic, spastic, ignorant, clueless, EDLINoid, illegitimate, harmful, destructive, dumb, evasive, double-talking, devious, revisionist, narrow, manipulative, paternalistic, fundamentalist, dogmatic, idolatrous, unethical, cultic, diseased, suppressive, controlling, restrictive, malignant, deceptive, dim, crazy, weird, dyspeptic, stifling, uncaring, plantigrade, grim, unsympathetic, jargon-spouting, censorious, secretive, aggressive, mind-numbing, arassive, poisonous, flagrant, self-destructive, abusive, socially-retarded, puerile, pinguid, and Generally Not Good."



    ]
    if (args[1]==undefined){
        message.channel.send("@"+args[0]+", "+listOfRoasts[randNum]);
    }
    if (args[1]!=undefined&&args[2]==undefined){
        message.channel.send("@"+args[0]+" "+args[1]+", "+listOfRoasts[randNum]);
    }
    if (args[2]!=undefined&&args[3]==undefined){
        message.channel.send("@"+args[0]+" "+args[1]+args[2]+", "+listOfRoasts[randNum]);
    }
    if (args[3]!=undefined){
        message.channel.send("@"+args[0]+" "+args[1]+" "+args[2]+" "+args[3]+", "+listOfRoasts[randNum]);
    }



}

