const Discord = require("discord.js")
const logger = require("winston")
const fs = require("fs")
const ss = require("string-similarity");

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
})
logger.level = "debug"
// Initialize Discord Bot
var bot = new Discord.Client({ disableMentions: 'everyone' })
var badWords = []//["gay", "fag", "retard", "cuck", "slut", "autis", "discord.gg/", "discordapp.com/invite/", "nigg", "💣"];
var lowmessage = "";
var logChannel = ["531433553225842700", "661250272781271040", "677144555220631552", "699308186384990258"];
var modRole = ["606659573159428169", "547671836624683014", "642134467162537985", "694241749840822403"];
var muteRole = "";
var guildID = ["531433553225842698", "543725541895700490", "642128391482507264", "694240883561988107"]; //Testing, Phoenix Bloom, Mythos, Evernight
var guildNum = -1;
var modChannel = "694243587118071848";
var logMessage = "";
var undoChannelLog = "695203807369494559";
var secretChannels = ["547671272923070465", "643113455070478383"];
var nsfwChannels = ["602661034200662016", "676813858790178856", "642129263021129729", "679727058204622949", "681307914107093002", "688171047648100432"];
var permissionsFlags = ["ADMINISTRATOR", "CREATE_INSTANT_INVITE", "KICK_MEMBERS", "BAN_MEMBERS", "MANAGE_CHANNELS", "MANAGE_GUILD", "ADD_REACTIONS", "VIEW_AUDIT_LOG", "PRIORITY_SPEAKER", "VIEW_CHANNEL", "SEND_MESSAGES", "SEND_TTS_MESSAGES", "MANAGE_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", "READ_MESSAGE_HISTORY", "MENTION_EVERYONE", "USE_EXTERNAL_EMOJIS", "CONNECT", "SPEAK", "MUTE_MEMBERS", "DEAFEN_MEMBERS", "MOVE_MEMBERS", "USE_VAD", "CHANGE_NICKNAME", "MANAGE_NICKNAMES", "MANAGE_ROLES", "MANAGE_WEBHOOKS", "MANAGE_EMOJIS"];
var gottemRole = "687132744710619153";
var gettemRoles = ["643116465418928177", "654356970593058859", "654382397885906962"];
var queueList = "";
var memberList = "";
var gymList = "";
var gymList2 = "";
var botCommandTest = "694243743087198250";
var progressRoles = ["694320232126218301", "694320792367923211", "694321919222349834", "694323226389643335", "694325290809294919", "694325747912802366", "694716872150745199"];
var queueChannel = "694262354573000785";
var gymChannel = "734952163612295230";
var gymChannel2 = "757662644231471196";
var resultChannel = "694367643796504606";
var registrationChannel = "694245908807942154";
var plazaRole = "696492437127954512";
var reportList = "";
var deleteList = "";
var theImages = "";
var seasonImage = "";
var levelRoles = "";
var categoryRoles = ["655016155148320778", "655019109926567947", "655017277426499605", "655019664983982090", "655019758114177045", "662837584959111169"];
var categoryLists = ["814971400276148301", "814971422626545674", "814977192471035915", "814977266735382580", "814978568991932428", "814978774243344484"];

bot.on("ready", async function() {
    logger.info("Connected")
    logger.info("Logged in as: ")
    logger.info(bot.user.username + " - (" + bot.user.id + ")")
    bot.channels.cache.get("531433553225842700").send("Salutations!");
    watchingMessage();
})

bot.once("ready", async function() {
    /*logMessage = await bot.channels.cache.get(logChannel).messages.fetch("633472791982768158");
    var str = await logMessage.content;
    while (str.includes("\n") && str.length > 2) {
        str = str.slice(str.indexOf("\n") + 1);
        var timeIn = 0;
        if (!str.includes("\n")) {
            timeIn = str.split(" ")[1];
        }
        else {
            timeIn = str.substring(str.indexOf(" ") + 1, str.indexOf("\n"));
        }
        var mutedID = str.split(" ")[0];
        var d = new Date();
        var timer = 0;
        if (str.includes("\n")) { timer = parseInt(str.substring(str.indexOf(" ") + 1, str.indexOf("\n"))); }
        else { timer = parseInt(str.substring(str.indexOf(" "))); }
        timer -= d.getTime();
        if (timer <= 0) { unmute(mutedID); }
        else {
            setTimeout(function () {
                unmute(mutedID);
            }, timer)
        }
    }*/
    watchingMessage();
    bot.channels.cache.get("531433553225842700").send("I am combat ready!");
    levelRoles = await bot.channels.cache.get("643113455070478383").messages.fetch("811482073448841226");
    //memberList = await bot.channels.cache.get(botCommandTest).messages.fetch("694323864074977360");
    /*queueList = await bot.channels.cache.get(queueChannel).messages.fetch("694767481935364199");
    gymList = await bot.channels.cache.get(gymChannel).messages.fetch("734959868200615957");
    gymList2 = await bot.channels.cache.get(gymChannel2).messages.fetch("757671621568757901");
    reportList = await bot.channels.cache.get("694243587118071848").messages.fetch("702173563482013767");
    deleteList = await bot.channels.cache.get("694243587118071848").messages.fetch("702173564413018252");
    theImages = await bot.channels.cache.get("694243743087198250").messages.fetch("736470576281157652");
    seasonImage = await bot.channels.cache.get("694243743087198250").messages.fetch("756962186227613736");
    var leaderboardPost = await bot.channels.cache.get("694292374175875182").messages.fetch("694534165533687908");*/
    //var leaderboardPostTest = await bot.channels.cache.get(logChannel[0]).messages.fetch("696619749240471623");
    var d = new Date();
    /*setTimeout(function () {
        plazaNotice();
    }, ((25200000) - (d.getTime() % 14400000)) % 14400000);*/
    /*for (var x = 1; x < queueList.content.split("\n").length; x++) {
        var id = queueList.content.split("\n")[x].split(" ")[0];
        var elo = queueList.content.split("\n")[x].split(" ")[1];
        var diff = queueList.content.split("\n")[x].split(" ")[2];
        matchmake(id, elo, diff);
    }*/
    /*setTimeout(function () {
        journalReminder();
    }, ((88200000) - (d.getTime() % 86400000)) % 86400000);*/
    //setTimeout(function () {
        //orderedList(botCommandTest, leaderboardPost);
    /*}, ((3600000) - (d.getTime() % 3600000)) % 3600000);
    orderedList(botCommandTest, leaderboardPostTest);*/
    /*var memberList = await fs.readFileSync("member_list.txt", "utf8");
    var newMemberList = memberList.split("\n")[0];
    for (var x = 1; x < memberList.split("\n").length; x++) {
        //if (!isNaN(memberList.content.split("\n")[x].split(" ")[0]) && memberList.content.split("\n")[x].split(" ")[0].length > 1) { newMemberList += "\n" + memberList.content.split("\n")[x]; }
        newMemberList += "\n" + memberList.split("\n")[x] + " 0 0 0";
    }
    fs.writeFile("member_list.txt", newMemberList, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });*/
    /*var initialList = await memberList.content;
    fs.writeFile("member_list.txt", initialList, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });*/
})

async function plazaNotice() {
    //await bot.guilds.cache.get(guildID[3]).roles.cache.get(plazaRole).setMentionable(true);
    var theMessage = await bot.channels.cache.get(queueChannel).send(`The ${bot.guilds.cache.get(guildID[3]).roles.cache.get(plazaRole)} has opened!\n(If you would like to join the ${bot.guilds.cache.get(guildID[3]).roles.cache.get(plazaRole)}, use the command \`,plaza\`.)`);
    //await bot.guilds.cache.get(guildID[3]).roles.cache.get(plazaRole).setMentionable(false);
    //var d = new Date();
    setTimeout(function() {
        selfCleaner(theMessage);
    }, 7200000);
    setTimeout(function () {
        plazaNotice();
    }, 14400000)
}



/*async function fixThis(x) {
    var results = ["694999805675700338", "695002381632405674", "695010114490335322", "695015394787852389", "695016772755259473", "695018848109199360", "695021685434482749", "695022525872341123", "695023719994884136", "695025248965492788", "695027012162814024", "695032723680526456", "695035832628805722", "695036230852935761", "695037934511980705", "695039151208267817", "695039278446542948", "695040733203267644", "695040930650128385", "695043101647175731", "695045351438286868", "695045658989559848", "695047144272298114", "695049025728020490", "695053100943409232"]
    //for (var x = 0; x < results[x]; x++) {
    var resultCommand = await bot.channels.cache.get(resultChannel).messages.fetch(results[x]);
    bot.channels.cache.get(logChannel[0]).send(resultCommand.content);
    lowmessage = await resultCommand.content.toLowerCase();
    await eloUpdate(resultCommand);
    x++;
    if (x == results.length) { return; }
    setTimeout(function () {
        fixThis(x);
    }, 5000);
    //};
}*/

function watchingMessage() {
    /*let watchingType = Math.floor(Math.random() * 44)
    let duration = Math.floor(Math.random() * 600000)
    switch (watchingType) {
        case 0: observing = "Everything"; break;
        case 1: observing = "Innistrad"; break;
        case 2: observing = "Ravnica"; break;
        case 3: observing = "Dominaria"; break;
        case 4: observing = "Mirrodin"; break;
        case 5: observing = "Kamigawa"; break;
        case 6: observing = "Ixalan"; break;
        case 7: observing = "Alara"; break;
        case 8: observing = "Lorwyn"; break;
        case 9: observing = "Zendikar"; break;
        case 10: observing = "Mercadia"; break;
        case 11: observing = "Rath"; break;
        case 12: observing = "Theros"; break;
        case 13: observing = "Ikoria"; break;
        case 14: observing = "Kaladesh"; break;
        case 15: observing = "Regatha"; break;
        case 16: observing = "Bant"; break;
        case 17: observing = "Naya"; break;
        case 18: observing = "Esper"; break;
        case 19: observing = "Jund"; break;
        case 20: observing = "Grixis"; break;
        case 21: observing = "Equilor"; break;
        case 22: observing = "Shandalar"; break;
        case 23: observing = "Eldraine"; break;
        case 24: observing = "Amonkhet"; break;
        case 25: observing = "Magic & Chill"; break;
        case 26: observing = "You"; break;
        case 27: observing = "The Multiverse"; break;
        case 28: observing = "a Magic: the Gathering tournament"; break;
        case 29: observing = "Vryn"; break;
        case 30: observing = "Phyrexia"; break;
        case 31: observing = "New Phyrexia"; break;
        case 32: observing = "Rabiah"; break;
        case 33: observing = "Segovia"; break;
        case 34: observing = "Serra's Realm"; break;
        case 35: observing = "Ulgrotha"; break;
        case 36: observing = "Meditation Plane"; break;
        case 37: observing = "Shadowmoor"; break;
        case 38: observing = "Fiora"; break;
        case 39: observing = "Kaldheim"; break;
        case 40: observing = "Kylem"; break;
        case 41: observing = "Bablovia"; break;
        case 42: observing = "Skalla"; break;
        case 43: playingMessage(); return;
    }*/
    bot.user.setActivity("Evernight TV", { type: 'WATCHING'});
    /*setTimeout(function() {
        watchingMessage();
    }, duration)*/
}

async function badWordsReporter(message, messageMember, isEdit) {
    var badWordsLog = "";
    var messageToLink = message;
    var reporting = false;
    var deleteWords = await deleteList.content.split("\n");
    var reportWords = await reportList.content.split("\n");
    for (let i = 1; i < deleteWords.length; i++) {
        if (lowmessage.indexOf(deleteWords[i]) != -1) {
            reporting = true;
            await message.delete();
            messageToLink = await message.channel.send("")
            break;
        }
    }
    for (let i = 1; i < reportWords.length; i++) {
        if (lowmessage.indexOf(reportWords[i]) != -1) {
            reporting = true;
            break;
        }
    }
    if (reporting) {
        badWordsLog = new Discord.MessageEmbed().setTitle("Message by " + messageMember.displayName + " (" + messageMember.id + ")").addField("Content:", message.content).addField("Location:", message.channel + ": " + messageToLink.url);
        if (isEdit) { badWordsLog.setFooter("This was an edit."); }
        await bot.channels.cache.get(logChannel[3]).send(badWordsLog);
    }
}

function role(message, messageMember) {
    if (lowmessage.indexOf(",role") == 0 || lowmessage.indexOf(",plaza") == 0) {
        if (lowmessage.includes("plaza")) {
            if (messageMember.roles.cache.has(plazaRole)) {
                messageMember.roles.remove(message.guild.roles.cache.get(plazaRole));
                message.channel.send("Plaza role removed!")
            }
            else {
                messageMember.roles.add(message.guild.roles.cache.get(plazaRole));
                message.channel.send("Plaza role added!")
            }
        }
    }
}

/*async function mute(message, isMod) {
    if (lowmessage.indexOf(",mute") == 0) {
        if (isMod) {
            if (message.mentions.users.size != 0) {
                var muteHours = lowmessage.split(" ")[1];
                message.mentions.users.forEach(async function(value, key) {
                    var muteMember = await message.guild.members.fetch(value)
                    if (!isNaN(muteHours)) {
                        setTimeout(function () {
                            unmute(muteMember);
                        }, muteHours * 3600000)
                        if (logMessage.content.includes(key)) {
                            var logs = logMessage.content;
                            var newLog = logs.slice(0, logs.indexOf(key) - 1) + logs.slice(logs.indexOf(key) + key.length + 14);
                            logMessage.edit(newLog);
                        }
                        d = new Date();
                        unmuteTime = muteHours * 3600000 + d.getTime();
                        logMessage.edit(logMessage.content + "\n" + key + " " + unmuteTime);
                    }
                    await muteMember.roles.add(message.guild.roles.cache.get(muteRole));
                    await message.channel.send("Member " + muteMember.displayName + " (id " + key + ") muted for " + muteHours + " hours.");
                    var muteMessage = await "You have been muted for " + muteHours + " hours";
                    if (message.content.includes("Reason: ")) { muteMessage += await " with reason \"" + message.content.split("Reason: ")[1] + "\""; }
                    else if (message.content.includes("reason: ")) { muteMessage += await " with reason \"" + message.content.split("reason: ")[1] + "\""; }
                    else if (message.content.includes("REASON: ")) { muteMessage += await " with reason \"" + message.content.split("REASON: ")[1] + "\""; }
                    else { muteMessage += await "."; }
                    await value.send(muteMessage);
                })
            }
            else { message.channel.send("Please include a mention for the person you would like to mute. If they do not have access to this channel, that can be done with <@ID>."); }
        }
        else { message.channel.send("You must be a mod or admin to use this function."); }
    }
}

async function unmute(id) {
    if (!bot.guilds.cache.get(guildID[guildNum]).members.has(id)) {
        bot.channels.cache.get(logChannel).send("Member <@" + id + "> has left before scheduled unmute time.");
    }
    else {
        member = await bot.guilds.cache.get(guildID[guildNum]).members.fetch(id);
        member.roles.remove(member.guild.roles.cache.get(muteRole));
        bot.channels.cache.get(logChannel).send("Member " + member.displayName + " (id " + member.id + ") unmuted.");
    }
    var logs = logMessage.content;
    var newLog = logs.slice(0, logs.indexOf(id.toString())) + logs.slice(logs.indexOf(id.toString()) + id.toString().length + 14);
    logMessage.edit(newLog);
}*/

function raidBan(message, messageMember) {
    if ((Date.now() - messageMember.joinedAt < 3600000) && message.mentions.users.size > 20) {
        messageMember.ban({
            days: 1,
            reason: "Mention spam"
        });
        if (guildID.indexOf(message.guild.id) < 3) {
            bot.channels.cache.get(logChannel[guildID.indexOf(message.guild.id)]).send(messageMember.displayName + " (id " + messageMember.id + ") banned for spamming mentions.  Message: ```" + message.cleanContent + "```");
        }
    }
}

async function deleteReporter(message) {
    var channelToNotify = null;
    if (message.guild === null) {return;}
    if (!message.guild.available) {return;}
    for (var x = 0; x < guildID.length; x++) {
        if (message.guild.id == guildID[x]) {channelToNotify = logChannel[x];}
    }
    if (message.channel.id == "634062321538433084") {channelToNotify = "792428129339703296";}
    if (message.content.indexOf("P!") == 0) {return;}
    if (message.channel.id == "649061726599512074" || message.channel.id == "659132325350735913" || message.channel.id == "547671272923070465") {channelToNotify = "676966363050409984";}
    if (message.channel.id == "687397068461178883" || message.channel.id == "686267125421441117" || message.channel.id == "643113455070478383") {channelToNotify = "687406074709803038";}
    if (channelToNotify == null) {return;}
    //if (secretChannels.includes(message.channel.id)) {return;}
    if (message.author.bot) {
        if (message.author.id == bot.user.id && logChannel.includes(message.channel.id)) {
            message.channel.send("One of my logs was deleted from here.");
        }
        return;
    }
    if (message.content.length < 5 && message.attachments.array().length == 0) {return;}
    const entry = await message.guild.fetchAuditLogs({type: 'MESSAGE_DELETE'}).then(audit => audit.entries.first())
    let user = ""
    if (entry.extra.channel.id === message.channel.id
      && (entry.target.id === message.author.id)
      && (entry.createdTimestamp > (Date.now() - 5000))
      && (entry.extra.count >= 1)) {
        user = entry.executor;
    } else {
        user = message.author;
    }
    var deleteLog = ""
    if (message.cleanContent != "") {
        deleteLog += "The following";
    } else {
        deleteLog += "A textless";
    }
    deleteLog += " message by ";
    deleteLog += message.author.username;
    deleteLog += " (id ";
    deleteLog += message.author.id;
    deleteLog += ")";
    if (message.guild.id == guildID[0]) {
        var hrAgo = Math.floor((Date.now() - message.createdTimestamp) / 3600000)
        var minAgo = Math.floor((Date.now() - message.createdTimestamp) / 60000) % 60;
        if (hrAgo > 0) { deleteLog += " sent " + hrAgo + " hour(s) and " + minAgo + " minute(s) ago"; }
        else { deleteLog += " sent " + minAgo + " minute(s) ago"; }
    }
    var attachmessage = "";
    var attaches = message.attachments.array();
    var attachnames = "";
    for (i = 0; i < attaches.length; i++) {
        if (i == attaches.length -1 && i != 0) {attachnames += "and ";}
        if (nsfwChannels.includes(message.channel.id) || message.channel.nsfw) {attachnames += "<";}
        attachnames += attaches[i].proxyURL()
        if (nsfwChannels.includes(message.channel.id) || message.channel.nsfw) {attachnames += ">";}
        if (i != attaches.length -1 && attaches.length != 2) {attachnames += ", ";}
        if (i != attaches.length -1 && attaches.length == 2) {attachnames += " ";}
    }
    if (attaches.length > 1) {attachmessage = " with attachments " + attachnames;}
    if (attaches.length == 1) {attachmessage = " with an attachment " + attachnames;}
    deleteLog += attachmessage;
    deleteLog += " was deleted from <#";
    deleteLog += message.channel.id;
    deleteLog += "> by ";
    deleteLog += user;
    if (message.cleanContent != "") {
        deleteLog += ": ```";
        deleteLog += message.cleanContent.replace(/```/g, "​`​`​`​");
        deleteLog += "```";
    }
    //messageMember = await message.guild.members.fetch(message.author);
    //if (/*message.guild.id == guildID[0] &&*/attaches.length == 0) { deleteLog = new Discord.MessageEmbed().setAuthor(messageMember.displayAvatarURL()).setTitle("Deletion: " + messageMember.displayName + " (" + message.author.id + ")").addField("Deleted by " + user, message.channel + ": " + message.cleanContent); }
    //bot.channels.cache.get(channelToNotify).send(deleteLog);
    messageMember = await message.guild.members.fetch(message.author);
    var deleteMember = await message.guild.members.fetch(user);
    if (messageMember.id == deleteMember.id) { deleteLog = new Discord.MessageEmbed().setAuthor(messageMember.displayName + " (" + messageMember.id + ")", messageMember.user.displayAvatarURL()).addField("Deletion", message.channel + ": " + message.content); }
    else { deleteLog = new Discord.MessageEmbed().setAuthor(messageMember.displayName + " (" + messageMember.id + ")", messageMember.user.displayAvatarURL()).setFooter("Deleted by " + deleteMember.displayName + " (" + deleteMember.id + ")", deleteMember.user.displayAvatarURL()).addField("Deletion", message.channel + ": " + message.content); }
    if (attaches.length == 0) {
        bot.channels.cache.get(channelToNotify).send(deleteLog);
    }
    else if (attaches.length == 1 && !(nsfwChannels.includes(message.channel.id) || message.channel.nsfw)) {
        deleteLog.setImage(attaches[0].proxyURL());
        bot.channels.cache.get(channelToNotify).send(deleteLog);
    }
    else {
        bot.channels.cache.get(channelToNotify).send("The following " + attachmessage, deleteLog);
    }
}

/*function help(channel) {
    if (lowmessage.indexOf(",help") == 0) {
        var helpMessage = "I will provide links to the Un-set FAQs with `,unglued`, `,unhinged`, or `,unstable`.\nI will provide a link to the Mechanical Color Pie and relevant changes since with `,colorpie`.\nI can tell you the sets legal in Pioneer with `,pioneer` or in Modern with `,modern`.\nI will give or remove the leak role with `,leak`.\nIf either <@268547439714238465> or <@240537940378386442> is offline, I will point you to the other one with some basic syntax for similar functions.";
        if (channel.id == modChannel) {
            helpMessage = "Mute: `,mute 24 <@631014834057641994> Reason: Imprisoning Emrakul` would mute me for 24 hours and DM me the reason \"Imprisoning Emrakul\".\nBan, kick, or unmute: Just send `,ban @MENTION`, `,kick @MEMBER`, or `,unmute @MENTION`\nCurrent bad words list to report: `" + badWords + "`. If you wish to add or remove anything from this list, please @ Ash K. and it will be done.\nDelete message logging: Deletions will be logged *unless* one of the following is true and it contains no attachments: The message was from a bot, the message contained a typical bot call (`!card`, `[[`, `]]`, etc.), or the message was less than five characters long.  If you have any suggestions on improvements on catching only relevant deletions, feel free to suggest them.\n\n" + helpMessage;
        }
        else {
            helpMessage += "\nI assist the moderators with various things.";
        }
        helpMessage += "\n\nAll commands are case insensitive. If you have suggestions for new or improved commands, please @ Ash K. with them."
        channel.send(helpMessage);
    }
}*/

function permissionCheck(message, isMod) {
    if (lowmessage.indexOf(",permission") == 0 && isMod) {
        if (permissionsFlags.includes(message.content.split(" ")[1].toUpperCase())) {
            var roleList = "The following roles have " + message.content.split(" ")[1].toUpperCase() + ": ";
            bot.guilds.cache.get(guildID[guildNum]).roles.forEach(function(value, key) {
                if (value.permissions.has(message.content.split(" ")[1].toUpperCase())) {
                    if (roleList.length > 1900) {
                        message.channel.send(roleList);
                        roleList = "";
                    }
                    roleList += value.name + ", ";
                }
            })
            message.channel.send(roleList.substring(0, roleList.length -2));
        }
        else {message.channel.send("Permission flag not recognized. The permission flags are " + permissionsFlags.toString().replace(/,/g, ", "));}
    }
    if (lowmessage.indexOf(",exactpermission") == 0 && isMod) {
        if (permissionsFlags.includes(message.content.split(" ")[1].toUpperCase())) {
            var roleList = "The following roles have " + message.content.split(" ")[1].toUpperCase() + ": ";
            bot.guilds.cache.get(guildID[guildNum]).roles.forEach(function(value, key) {
                if (value.permissions.has(message.content.split(" ")[1].toUpperCase()) && (message.content.split(" ")[1].toUpperCase() == "ADMINISTRATOR" || !value.permissions.has("ADMINISTRATOR"))) {
                    if (roleList.length > 1900) {
                        message.channel.send(roleList);
                        roleList = "";
                    }
                    roleList += value.name + ", ";
                }
            })
            message.channel.send(roleList.substring(0, roleList.length -2));
        }
        else {message.channel.send("Permission flag not recognized. The permission flags are " + permissionsFlags.toString().replace(/,/g, ", "));}
    }
}

function messagePassing(message) {
    if (message.author.id == "135999597947387904" && bot.channels.has(message.content.split(",send ")[0])) {
        bot.channels.cache.get(message.content.split(",send ")[0]).send(message.content.split(",send ")[1]);
    }
}

async function journalReminder() {
    //var winter = bot.users.fetch("135867398241648640")
    //winter.send("You should keep a journal of your adventures!");
    bot.channels.cache.get("531433553225842700").send("<@135867398241648640> You should keep a journal of your adventures!");
    setTimeout(function () {
        journalReminder();
    }, 86400000);
}

/*async function sleepTalk(message) {
    if (lowmessage.indexOf(",sleeptalk") == 0 && message.author.id == "135999597947387904") {
        var initialList = "🙉" + fs.readFileSync("mew.txt", "utf8").replace(/\n/g, "").replace(/\r/g, "").replace(/, /g, "🙉").replace(/,/g, "🙉").replace(/TMs: /gi, "🙉").replace(/HMs: /gi, "🙉").replace(/BMs: /gi, "🙉").replace(/MTs: /gi, "🙉").replace(/SMs: /gi, "🙉").replace(/Normal Moves: /gi, "").replace(/Taught Moves: /gi, "🙉").replace(/Level-Up Moves: /gi, "").replace(/Levelup Moves: /gi, "").replace(/Level Up Moves: /gi, "").replace(/EMs: /gi, "🙉").replace(/EM(s): /gi, "🙉").replace(/Extra Moves: /gi, "🙉").replace(/Extra Move(s): /gi, "🙉").replace();
        var numberedList = initialList;
        var x = 1;
        while (numberedList.indexOf("🙉") != -1) {
            numberedList = numberedList.replace("🙉", "\n" + x + ". ");
            x++;
            if (numberedList.indexOf("🙉") > 1900) {
                await message.channel.send(numberedList.split("🙉")[0]);
                numberedList = numberedList.substring(numberedList.indexOf("🙉"));
            }
        }
        if (numberedList.length <= 2000) {
            await message.channel.send(numberedList);
        }
        else {
            await message.channel.send("I'm afraid your list is too long to fit in Discord at " + numberedList.length + " characters after formatting, but I counted " + (x - 1) + " moves and rolled a " + roll + ", which by my count is " + initialList.split("🙉")[roll] + "!");
        }
    }
}*/

/*function testingEmbed(message) {
    if (message.author.id == "135999597947387904" && lowmessage.indexOf(",card levitate") == 0) {
        //var thisIsRich = new Discord.MessageEmbed().setTitle("Help").addField("Informational commands:", "`,stats`: Stats links for any number of URPG members.\n`,rank`: How to acquire Pokémon in URPG.\n`,rse`, `,dppt`, and `,oras`: Contest information for moves.\n`,clause`: Info on a particular battle rule.\n`,effective`: Effectiveness of each type against a given gen 1-7 Pokémon.\n`,coverage type1 type2...`: Number of recognized Pokémon/forms hit at each effecitveness by the given types.\n`,beatup PKMN` or `,beatup STAT`: I will tell you the BP of a Beat Up from a gen 1-7 Pokémon or by its URPG Attack stat!\n`,sr`: Damage from Stealth Rock to a given Pokémon (not rounded).\n`,contestlog`: Outputs a template for a judge log of the given type, rank, and attribute.\n`,hp`: Recommended Hidden Power type for a given Pokémon.\n`,wildcard`: List of all allowed wildcards, or `,wildcard TYPE` for only TYPE's wildcards.\nSee `,help COMMAND` for more detailed information on any specific COMMAND.").addField("Restricted Commands:", "`,anonreply # message`: Sends a reply to the `reply:` anonymous report with the given number. Required channel: staff or any in Teams & Projects.\n`,archive`: Archives the channel, putting it in the archive category and removes access to all non-staff. Use `,archive public` or `,publicarchive` for public channels and `,archive`, `,archive private`, or `,privatearchive` for private channels. Required role: content-upkeeper\n`,contestboss`: Creates the temporary rooms for a contest boss. Required role: Death Eater.\n`,reftest`, `,judgetest`, or `,rangertest`: Creates a temporary test channel. If the command contains a mention, also adds that member to the channel. Required role: Appropriate section senior.\n`,end`: Deletes a temporary channel. Only works in a temporary channel and requires the same role required to create that channel.\n`,fixorder`: Resets profession chat order. Required role: content-upkeeper.\n`,pkmnspoilerseason THING-TO-SPOIL`: changes the name of <#440004235635982336> to #spoilers-THING-TO-SPOIL and removes pkmnspoilers role from everyone. Required role: content-upkeeper or Manage Channels permission.").addField("Restricted Commands (cont.):" , "`,otherspoilerseason THING-TO-SPOIL`: changes the name of <#597314223483387905> to #spoilers-THING-TO-SPOIL and removes otherspoilers role from everyone. Required role: content-upkeeper or Manage Channels permission.\n`,newdiscussion CHANNEL-NAME`: Creates a new staff discussion channel with the given name. Required channel: staff.\n`,newproject CHANNEL-NAME`: Creates a new project discussion channel with the given name. Required channel: Any in the Teams & Projects category.\n`,payday @MEMBER1 @MEMBER2...`: Lets you know which of the mentioned members has received Pay Day this week, and adds all others to the log of who has. Required role: Referee or Judge.\n`,pin MESSAGEID`, `,unpin MESSAGEID`: Pins/unpins message with ID MESSAGEID in this channel. Required role/channel: Referee in battle chat or Judge in contest chat.").addField("For other commands, please see the following:", "`,help link`; `,help convert`; `,help mention`; `,help profession`; `,help restricted`; `,help magic`; `,help avatar`; `,help sleeptalk`").addField("Other functions:", "Send me a direct message beginning with `noreply:` and I'll relay your feedback anonymously to staff.\nSend me a direct message beginning with `reply:` and I'll send your feedback to staff along with a way for them to respond (but no way to find who sent the message directly).\nI keep records of members leaving the server, majorly edited messages, deleted messages, and messages with potential offensive content.\nI add <:ffa_gg:246070314163896320> to applicable messages in FFA chats!\nI bump our server with Discord Center and remind you to bump it with DISBOARD!\nIf you have any suggestions for new or improved fucntions, please @ Ash K. If you're curious, you can see my full code pinned in <#420675341036814337>.");
        var thisIsRich = new Discord.MessageEmbed().setImage("https://cdn.discordapp.com/attachments/681611965696573485/684147895565418521/pasted_image_0-1.png");
        message.channel.send(thisIsRich);
    }
}*/

function callCard(message) {
    if (lowmessage.indexOf(",card ") == 0) {
        cardName = lowmessage.substring(6);
        var cardList = fs.readFileSync("combat_call.txt", "utf8");
        var thisIsRich = new Discord.MessageEmbed().setImage(cardList.substring(cardList.toLowerCase().indexOf(cardName) + cardName.length + 1).split("\n")[0]);
        message.channel.send(thisIsRich);
    }
}

async function register(message) {
    if (lowmessage.indexOf(",register") == 0 && (message.channel.id == registrationChannel || message.channel.id == botCommandTest)) {
        var member = await message.guild.members.fetch(message.author);
        var id = message.author.id;
        var theList = await fs.readFileSync("member_list.txt", "utf8");
        if (member.roles.cache.has(modRole[3]) && message.mentions.users.size > 0) { id = message.mentions.users.first().id; }
        if (!theList.includes(id)) {
            //memberList.edit(memberList.content + "\n" + id + " 2000 100 0");
            fs.writeFile("member_list.txt", theList + "\n" + id + " 2000 100 0 0 0 0 2000 0 0 2000", (err) => {
                if (err) throw err;
                console.log('The file has been saved!');
            });
            var member = await message.channel.guild.members.fetch(id)
            await member.roles.add(progressRoles[6]);
            await member.roles.add("694250616754667667");
            if (member.roles.cache.has("694244397314867314")) { member.roles.remove("694244397314867314"); }
            message.channel.send("Registration complete!");
        }
        else { message.channel.send("You're already registered."); }
    }
}

async function gymnasiumQ(message) {
    if (message.channel.id == gymChannel) {
        if (lowmessage.indexOf(",request") == 0) {
            gymList = await bot.channels.cache.get(gymChannel).messages.fetch("734959868200615957");
            if (gymList.content.includes(message.author.id)) {
                message.channel.send("It appears you're already on my list.");
            }
            else {
                await gymList.edit(gymList.content + "\n" + message.author.id);
                var theMessage = "You've been added to the list in position " + (gymList.content.split("\n").length - 1) + "!";
                if (gymList.content.split("\n").length > 2) {
                    theMessage += "  If you would rather accept the request of someone else on the list, please use `,accept`.";
                }
                await message.channel.send(theMessage);
            }
        }
        if (lowmessage.indexOf(",accept") == 0) {
            gymList = await bot.channels.cache.get(gymChannel).messages.fetch("734959868200615957");
            if (gymList.content.split("\n") < 2) {
                message.channel.send("I'm afraid there's no one here requesting you.  If you would like to make your own request, please use `,request`.");
            }
            else {
                var loc = 1;
                if (gymList.content.split("\n")[1] == message.author.id) {
                    if (gymList.content.split("\n") < 3) {
                        message.channel.send("I'm afraid you seem to be alone here.");
                        return;
                    }
                    else { loc = 2; }
                }
                message.channel.send("<@" + gymList.content.split("\n")[loc] + ">, your request has been accepted by <@" + message.author.id + ">!");
                newGymList = gymList.content.split("\n")[0];
                for (var i = 1; i < gymList.content.split("\n").length; i++) {
                    if (i != loc && gymList.content.split("\n")[i] != message.author.id) { newGymList += "\n" + gymList.content.split("\n")[i]; }
                }
                gymList.edit(newGymList);
            }
        }
        if (lowmessage.indexOf(",leave") == 0 && gymList.content.includes(message.author.id)) {
            gymList = await bot.channels.cache.get(gymChannel).messages.fetch("734959868200615957");
            var newGymList = gymList.content.split("\n")[0];
            for (var x = 1; x < gymList.content.split("\n").length; x++) {
                if (!gymList.content.split("\n")[x].includes(message.author.id)) { newGymList += await "\n" + gymList.content.split("\n")[x]; }
            }
            await gymList.edit(newGymList);
            message.channel.send("You've been removed from the list.")
        }
    }
}

async function gymnasiumQ2(message) {
    if (message.channel.id == gymChannel2) {
        if (lowmessage.indexOf(",request") == 0) {
            gymList2 = await bot.channels.cache.get(gymChannel2).messages.fetch("757671621568757901");
            if (gymList2.content.includes(message.author.id)) {
                message.channel.send("It appears you're already on my list.");
            }
            else {
                await gymList2.edit(gymList2.content + "\n" + message.author.id);
                var theMessage = "You've been added to the list in position " + (gymList2.content.split("\n").length - 1) + "!";
                if (gymList2.content.split("\n").length > 2) {
                    theMessage += "  If you would rather accept the request of someone else on the list, please use `,accept`.";
                }
                await message.channel.send(theMessage);
            }
        }
        if (lowmessage.indexOf(",accept") == 0) {
            gymList2 = await bot.channels.cache.get(gymChannel2).messages.fetch("757671621568757901");
            if (gymList2.content.split("\n") < 2) {
                message.channel.send("I'm afraid there's no one here requesting you.  If you would like to make your own request, please use `,request`.");
            }
            else {
                var loc = 1;
                if (gymList2.content.split("\n")[1] == message.author.id) {
                    if (gymList2.content.split("\n") < 3) {
                        message.channel.send("I'm afraid you seem to be alone here.");
                        return;
                    }
                    else { loc = 2; }
                }
                message.channel.send("<@" + gymList2.content.split("\n")[loc] + ">, your request has been accepted by <@" + message.author.id + ">!");
                newGymList = gymList2.content.split("\n")[0];
                for (var i = 1; i < gymList2.content.split("\n").length; i++) {
                    if (i != loc && gymList2.content.split("\n")[i] != message.author.id) { newGymList += "\n" + gymList2.content.split("\n")[i]; }
                }
                gymList2.edit(newGymList);
            }
        }
        if (lowmessage.indexOf(",leave") == 0 && gymList2.content.includes(message.author.id)) {
            gymList2 = await bot.channels.cache.get(gymChannel2).messages.fetch("757671621568757901");
            var newGymList = gymList2.content.split("\n")[0];
            for (var x = 1; x < gymList2.content.split("\n").length; x++) {
                if (!gymList2.content.split("\n")[x].includes(message.author.id)) { newGymList += await "\n" + gymList2.content.split("\n")[x]; }
            }
            await gymList2.edit(newGymList);
            message.channel.send("You've been removed from the list.")
        }
    }
}

async function queue(message) {
    if (message.channel.id == queueChannel) {
        var elo = null;
        var theList = await fs.readFileSync("member_list.txt", "utf8");
        for (var x = 1; x < theList.split("\n").length; x++) {
            if (theList.split("\n")[x].includes(message.author.id)) { elo = theList.split("\n")[x].split(" ")[1]; }
        }
        if (elo == null && lowmessage.indexOf(",join") == 0) {
            message.channel.send("Please add yourself to the member list with `,register` first.");
            return;
        }
        if (queueList.content.includes(message.author.id)) {
            if (lowmessage.indexOf(",join") == 0) { message.channel.send("I appreciate the enthusiasm but you're already here!"); }
            if (lowmessage.indexOf(",leave") != 0) { return; }
            dequeue(message.author.id);
            message.channel.send("Removed you from the queue.");
        }
        else if (lowmessage.indexOf(",join") == 0) {
            /*if (queueList.content.includes("\n") && queueList.content.split("\n")[1].length > 1) {
                var opponent = queueList.content.split("\n")[1].split(" ")[0];
                message.channel.send("<@" + message.member.id + ">, you've been paired with <@" + opponent + ">!");
                var newQueueList = "";
                for (var x = 0; x < queueList.content.split("\n").length; x++) {
                    if (!queueList.content.split("\n")[x].includes(opponent)) { newQueueList += queueList.content.split("\n")[x]; }
                }
                queueList.edit(newQueueList);
            }
            else {*/
                await queueList.edit(queueList.content + "\n" + message.author.id + " " + elo + " 200");
                await message.channel.send("Added you to the queue!");
                await matchmake(message.author.id, elo, 200);
            //}
        }
        //queueList = bot.channels.cache.get(botCommandTest).messages.fetch("694323896928829491");
    }
}

async function dequeue(id) {
    queueList = await bot.channels.cache.get(queueChannel).messages.fetch("694767481935364199");
    var newQueueList = "Queue:";
    for (var x = 1; x < queueList.content.split("\n").length; x++) {
        if (!queueList.content.split("\n")[x].includes(id)) { newQueueList += await "\n" + queueList.content.split("\n")[x]; }
    }
    await queueList.edit(newQueueList);
}

async function matchmake(id, elo, diff) {
    queueList = await bot.channels.cache.get(queueChannel).messages.fetch("694767481935364199");
    var opponent = null;
    var waiting = false;
    for (var i = 1; i < queueList.content.split("\n").length; i++) {
        if (queueList.content.split("\n")[i].split(" ")[0] != id && (queueList.content.split("\n")[i].split(" ")[1] - Math.min(diff, queueList.content.split("\n")[i].split(" ")[2])) < elo && queueList.content.split("\n")[i].split(" ")[1] > (elo - Math.min(diff, queueList.content.split("\n")[i].split(" ")[2]))) { opponent = queueList.content.split("\n")[i].split(" ")[0]; }
        if (queueList.content.split("\n")[i].split(" ")[0] == id) {
            waiting = true;
            rowNum = i;
        }
    }
    if (waiting) {
        if (opponent != null) {
            await bot.channels.cache.get(queueChannel).send("<@" + id + ">, <@" + opponent + ">, you have been matched!");
            await dequeue(id);
            await dequeue(opponent);
            return;
        }
        var newDiff = diff - 1 + 101;
        var delay = 12000;
        if (newDiff > 500) { delay *= 2; }
        queueList.edit(queueList.content.replace(id + " " + elo + " " + diff, id + " " + elo + " " + newDiff));
        setTimeout(function () {
            matchmake(id, elo, newDiff);
        }, delay);
    }
}

async function eloUpdate(message) {
    if ((lowmessage.indexOf(",result") == 0 || lowmessage.indexOf(",tie") == 0) && ((message.mentions.users.size == 2 && message.channel.id == resultChannel) || (lowmessage.split(" ")[1].length > 2 && lowmessage.split(" ")[2].length > 2 && !isNaN(lowmessage.split(" ")[1]) && !isNaN(lowmessage.split(" ")[2]) && message.author.id == "135999597947387904" && message.channel.id == botCommandTest))) {
        if (message.content.includes("<@")) {
            var winner = message.content.split("<@")[1].split(">")[0].replace(/\!/g, "");
            var loser = message.content.split("<@")[2].split(">")[0].replace(/\!/g, "");
        }
        else {
            var winner = lowmessage.split(" ")[1];
            var loser = lowmessage.split(" ")[2];
        }
        if (loser == winner) {
            message.channel.send("This is why we can't have nice things.");
            return;
        }
        //if (!memberList.content.includes(winner)) { addMember(winner, message.channel); }
        //if (!memberList.content.includes(loser)) { addMember(loser, message.channel); }
        var winnerRow = null;
        var loserRow = null;
        var originalW = "";
        var originalL = "";
        var theList = await fs.readFileSync("member_list.txt", "utf8");
        for (var x = 1; x < theList.split("\n").length; x++) {
            if (theList.split("\n")[x].includes(winner)) {
                winnerRow = x;
                originalW = theList.split("\n")[x];
            }
            if (theList.split("\n")[x].includes(loser)) {
                loserRow = x;
                originalL = theList.split("\n")[x];
            }
        }
        if (winnerRow == null) {
            message.channel.send("Error: winner not registered yet");
            return;
        }
        if (loserRow == null) {
            message.channel.send("Error: loser not registered yet");
            return;
        }
        var undoMessage = await bot.channels.cache.get(undoChannelLog).send(originalW + "\n" + originalL);
        var undoID = await undoMessage.id;
        var winnerELO = theList.split("\n")[winnerRow].split(" ")[1];
        if (theList.split("\n")[0].split(" ")[1] > 2) { winnerELO += 10; }
        var loserELO = theList.split("\n")[loserRow].split(" ")[1];
        var winnerK = theList.split("\n")[winnerRow].split(" ")[2];
        var loserK = theList.split("\n")[loserRow].split(" ")[2];
        var winnerNum = theList.split("\n")[winnerRow].split(" ")[3];
        var loserNum = theList.split("\n")[loserRow].split(" ")[3];
        var winnerNewELO = Math.round((winnerELO - 1 + 1 + (winnerK * (1 - 1 / (1 + Math.pow(10, (loserELO - winnerELO) / 850))))) * 1000) / 1000;
        var loserNewELO = Math.round((loserELO - (loserK * (1 / (1 + Math.pow(10, (winnerELO - loserELO) / 850))))) * 1000) / 1000;
        var winnerRecord = (theList.split("\n")[winnerRow].split(" ")[4] - 1 + 2) + " " + theList.split("\n")[winnerRow].split(" ")[5] + " " + theList.split("\n")[winnerRow].split(" ")[6];
        var loserRecord = theList.split("\n")[loserRow].split(" ")[4] + " " + (theList.split("\n")[loserRow].split(" ")[5] - 1 + 2) + " " + theList.split("\n")[loserRow].split(" ")[6];
        if (message.content.toLowerCase().indexOf(",tie") == 0) {
            winnerNewELO = Math.round((winnerELO - 1 + 1 + (winnerK * (0.5 - 1 / (1 + Math.pow(10, (loserELO - winnerELO) / 850))))) * 1000) / 1000;
            loserNewELO = Math.round((loserELO - 1 + 1 + (loserK * (0.5 - 1 / (1 + Math.pow(10, (winnerELO - loserELO) / 850))))) * 1000) / 1000;
            winnerRecord = theList.split("\n")[winnerRow].split(" ")[4] + " " + theList.split("\n")[winnerRow].split(" ")[5] + " " + (theList.split("\n")[winnerRow].split(" ")[6] - 1 + 2);
            loserRecord = theList.split("\n")[loserRow].split(" ")[4] + " " + theList.split("\n")[loserRow].split(" ")[5] + " " + (theList.split("\n")[loserRow].split(" ")[6] - 1 + 2);
        }
        winnerNum++;
        loserNum++;
        if (winnerNum > 5) { winnerK = Math.max(30, 50 - Math.pow(10, (winnerNum - 5) / 430)); }
        if (loserNum > 5) { loserK = Math.max(30, 50 - Math.pow(10, (loserNum - 5) / 430)); }
        var winnerStats = "";
        var loserStats = "";
        if (theList.split("\n")[winnerRow].length > 9) {
            if (message.content.toLowerCase().indexOf(",tie") == 0) {
                if (theList.split("\n")[winnerRow].split(" ")[7] > winnerNewELO) {
                    winnerStats += " " + theList.split("\n")[winnerRow].split(" ")[7];
                }
                else {
                    winnerStats += " " + winnerNewELO;
                }
                winnerStats += " " + theList.split("\n")[winnerRow].split(" ")[8] + " " + theList.split("\n")[winnerRow].split(" ")[9];
            }
            else {
                if (theList.split("\n")[winnerRow].split(" ")[7] > winnerNewELO) {
                    winnerStats += " " + theList.split("\n")[winnerRow].split(" ")[7];
                }
                else {
                    winnerStats += " " + winnerNewELO;
                }
                var winnerStreak = theList.split("\n")[winnerRow].split(" ")[8] - 1 + 2;
                winnerStats += " " + winnerStreak;
                if (winnerStreak > theList.split("\n")[winnerRow].split(" ")[9]) {
                    winnerStats += " " + winnerStreak;
                }
                else {
                    winnerStats += " " + theList.split("\n")[winnerRow].split(" ")[9];
                }
            } 
        }
        if (theList.split("\n")[loserRow].length > 9) {
            if (message.content.toLowerCase().indexOf(",tie") == 0) {
                if (theList.split("\n")[loserRow].split(" ")[7] > loserNewELO) {
                    loserStats += " " + theList.split("\n")[loserRow].split(" ")[7];
                }
                else {
                    loserStats += " " + loserNewELO;
                }
                loserStats += " " + theList.split("\n")[loserRow].split(" ")[8] + " " + theList.split("\n")[loserRow].split(" ")[9];
            }
            else {
                loserStats += " " + theList.split("\n")[loserRow].split(" ")[7] + " 0 " + theList.split("\n")[loserRow].split(" ")[9];
            }
        }
        var newMemberList = theList.split("\n")[0];
        for (var x = 1; x < theList.split("\n").length; x++) {
            if (theList.split("\n")[x].includes(winner)) { newMemberList += "\n" + winner + " " + winnerNewELO + " " + winnerK + " " + winnerNum + " " + winnerRecord + winnerStats; }
            else if (theList.split("\n")[x].includes(loser)) { newMemberList += "\n" + loser + " " + loserNewELO + " " + loserK + " " + loserNum + " " + loserRecord + loserStats; }
            else { newMemberList += "\n" + theList.split("\n")[x]; }
        }
        var winnerMember = await message.guild.members.fetch(winner);
        var loserMember = await message.guild.members.fetch(loser);
        if (winnerNewELO < 1600 && !winnerMember.roles.cache.has(progressRoles[0])) {
            for (var i = 0; i < progressRoles.length; i++) {
                if (winnerMember.roles.cache.has(progressRoles[i])) { winnerMember.roles.remove(progressRoles[i]); }
            }
            winnerMember.roles.add(progressRoles[0]);
            message.channel.send(winnerMember.displayName + " is now Bronze.");
        }
        if (winnerNewELO >= 1600 && winnerNewELO < 2000 && !winnerMember.roles.cache.has(progressRoles[1])) {
            for (var i = 0; i < progressRoles.length; i++) {
                if (winnerMember.roles.cache.has(progressRoles[i])) { winnerMember.roles.remove(progressRoles[i]); }
            }
            winnerMember.roles.add(progressRoles[1]);
            message.channel.send(winnerMember.displayName + " is now Silver.");
        }
        if (winnerNewELO >= 2000 && winnerNewELO < 2400 && !winnerMember.roles.cache.has(progressRoles[2])) {
            for (var i = 0; i < progressRoles.length; i++) {
                if (winnerMember.roles.cache.has(progressRoles[i])) { winnerMember.roles.remove(progressRoles[i]); }
            }
            winnerMember.roles.add(progressRoles[2]);
            message.channel.send(winnerMember.displayName + " is now Gold.");
        }
        if (winnerNewELO >= 2400 && winnerNewELO < 2700 && !winnerMember.roles.cache.has(progressRoles[3])) {
            for (var i = 0; i < progressRoles.length; i++) {
                if (winnerMember.roles.cache.has(progressRoles[i])) { winnerMember.roles.remove(progressRoles[i]); }
            }
            winnerMember.roles.add(progressRoles[3]);
            message.channel.send(winnerMember.displayName + " is now Platinum.");
        }
        if (winnerNewELO >= 2700 && winnerNewELO < 3000 && !winnerMember.roles.cache.has(progressRoles[4])) {
            for (var i = 0; i < progressRoles.length; i++) {
                if (winnerMember.roles.cache.has(progressRoles[i])) { winnerMember.roles.remove(progressRoles[i]); }
            }
            winnerMember.roles.add(progressRoles[4]);
            message.channel.send(winnerMember.displayName + " is now Master.");
        }
        if (winnerNewELO >= 3000 && !winnerMember.roles.cache.has(progressRoles[5])) {
            for (var i = 0; i < progressRoles.length; i++) {
                if (winnerMember.roles.cache.has(progressRoles[i])) { winnerMember.roles.remove(progressRoles[i]); }
            }
            winnerMember.roles.add(progressRoles[5]);
            message.channel.send(winnerMember.displayName + " is now Challenger.");
        }
        if (loserNewELO < 1600 && !loserMember.roles.cache.has(progressRoles[0])) {
            for (var i = 0; i < progressRoles.length; i++) {
                if (loserMember.roles.cache.has(progressRoles[i])) { loserMember.roles.remove(progressRoles[i]); }
            }
            loserMember.roles.add(progressRoles[0]);
            message.channel.send(loserMember.displayName + " is now Bronze.");
        }
        if (loserNewELO >= 1600 && loserNewELO < 2000 && !loserMember.roles.cache.has(progressRoles[1])) {
            for (var i = 0; i < progressRoles.length; i++) {
                if (loserMember.roles.cache.has(progressRoles[i])) { loserMember.roles.remove(progressRoles[i]); }
            }
            loserMember.roles.add(progressRoles[1]);
            message.channel.send(loserMember.displayName + " is now Silver.");
        }
        if (loserNewELO >= 2000 && loserNewELO < 2400 && !loserMember.roles.cache.has(progressRoles[2])) {
            for (var i = 0; i < progressRoles.length; i++) {
                if (loserMember.roles.cache.has(progressRoles[i])) { loserMember.roles.remove(progressRoles[i]); }
            }
            loserMember.roles.add(progressRoles[2]);
            message.channel.send(loserMember.displayName + " is now Gold.");
        }
        if (loserNewELO >= 2400 && loserNewELO < 2700 && !loserMember.roles.cache.has(progressRoles[3])) {
            for (var i = 0; i < progressRoles.length; i++) {
                if (loserMember.roles.cache.has(progressRoles[i])) { loserMember.roles.remove(progressRoles[i]); }
            }
            loserMember.roles.add(progressRoles[3]);
            message.channel.send(loserMember.displayName + " is now Platinum.");
        }
        if (loserNewELO >= 2700 && winnerNewELO < 3000 && !loserMember.roles.cache.has(progressRoles[4])) {
            for (var i = 0; i < progressRoles.length; i++) {
                if (loserMember.roles.cache.has(progressRoles[i])) { loserMember.roles.remove(progressRoles[i]); }
            }
            loserMember.roles.add(progressRoles[4]);
            message.channel.send(loserMember.displayName + " is now Master.");
        }
        if (loserNewELO >= 3000 && !loserMember.roles.cache.has(progressRoles[5])) {
            for (var i = 0; i < progressRoles.length; i++) {
                if (loserMember.roles.cache.has(progressRoles[i])) { loserMember.roles.remove(progressRoles[i]); }
            }
            loserMember.roles.add(progressRoles[5]);
            message.channel.send(loserMember.displayName + " is now Challenger.");
        }
        //memberList.edit(newMemberList);
        await fs.writeFile("member_list.txt", newMemberList, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
        if (message.content.toLowerCase().indexOf(",tie") == 0) { await message.channel.send("Player " + message.mentions.members.cache.get(winner).displayName + " ELO: " + winnerELO + " --> " + winnerNewELO + "\nPlayer " + message.mentions.members.cache.get(loser).displayName + " ELO: " + loserELO + " --> " + loserNewELO + "\nUndo code: " + undoMessage.id); }
        else { await message.channel.send("Winner " + message.mentions.members.cache.get(winner).displayName + " ELO: " + winnerELO + " --> " + winnerNewELO + "\nLoser " + message.mentions.members.cache.get(loser).displayName + " ELO: " + loserELO + " --> " + loserNewELO + "\nUndo code: " + undoMessage.id); }
        var leaderboardPost = await bot.channels.cache.get("694292374175875182").messages.fetch("694534165533687908");
        //var leaderboardPostTest = await bot.channels.cache.get(logChannel[0]).messages.fetch("696619749240471623");
        //setTimeout(function () {
            await orderedList(botCommandTest, leaderboardPost);
        //}, 10000);
    }
}

async function undoChanges(message) {
    if (lowmessage.indexOf(",undo ") == 0 && lowmessage.split(" ")[1].length > 2 && !isNaN(lowmessage.split(" ")[1]) && (message.channel.id == resultChannel || message.channel.id == botCommandTest)) {
        var previous = await bot.channels.cache.get(undoChannelLog).messages.fetch(lowmessage.split(" ")[1]);
        var prevW = previous.content.split("\n")[0];
        var prevL = previous.content.split("\n")[1];
        var theList = await fs.readFileSync("member_list.txt", "utf8");
        var newMemberList = theList.split("\n")[0];
        for (var x = 1; x < theList.split("\n").length; x++) {
            if (theList.split("\n")[x].includes(prevW.split(" ")[0])) {
                if (theList.split("\n")[x].split(" ")[3] - 1 == prevW.split(" ")[3]) {
                    newMemberList += "\n" + prevW;
                }
                else {
                    message.channel.send("The winner of that match seems to have had other matches since.  You will need to undo those before you can undo this one.");
                    return;
                }
            }
            else if (theList.split("\n")[x].includes(prevL.split(" ")[0])) {
                if (theList.split("\n")[x].split(" ")[3] - 1 == prevL.split(" ")[3]) {
                    newMemberList += "\n" + prevL;
                }
                else {
                    message.channel.send("The loser of that match seems to have had other matches since.  You will need to undo those before you can undo this one.");
                    return;
                }
            }
            else {
                newMemberList += "\n" + theList.split("\n")[x];
            }
        }
        await fs.writeFile("member_list.txt", newMemberList, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
        if (message.channel.id == resultChannel) {
            message.channel.send("<@" + prevW.split(" ")[0] + "> has been reverted to " + prevW.split(" ")[1] + " ELO.\n<@" + prevL.split(" ")[0] + "> has been reverted to " + prevL.split(" ")[1] + " ELO.");
        }
        else {
            message.channel.send(prevW.split(" ")[0] + " has been reverted to " + prevW.split(" ")[1] + " ELO.\n" + prevL.split(" ")[0] + " has been reverted to " + prevL.split(" ")[1] + " ELO.");
        }
    }
}

/*function resetELO(message) {
    if (lowmessage.indexOf(",resetelo") == 0 && message.author.id == "135999597947387904") {
        var newMemberList = memberList.content.split("\n")[0];
        for (var x = 1; x < memberList.content.split("\n").length; x++) {
            newMemberList += "\n" + memberList.content.split("\n")[x].split(" ")[0] + " 2000 100 0";
        }
        memberList.edit(newMemberList);
    }
}*/

async function newSeason() {
    var theList = await fs.readFileSync("member_list.txt", "utf8");
    var oldSeason = theList.split("\n")[0].split(" ")[1] - 1 + 1;
    var season = oldSeason + 1;
    seasonImage.edit(theImages.content.split("\n")[1]);
    var newList = theList.split("\n")[0].split(" ")[0] + " " + season + " " + theList.split("\n")[0].split(" ")[2];
    for (var x = 1; x < theList.split("\n").length; x++) {
        var newELO = (theList.split("\n")[x].split(" ")[1] * 0.5) + 1000;
        /*var oldList = await fs.readFileSync("member_list_season2_final.txt", "utf8");
        var oldMax = 0;
        var oldStreak = 0;
        for (var i = 1; i < oldList.split("\n").length; i++) {
            if (oldList.split("\n")[i].split(" ")[0] == theList.split("\n")[x].split(" ")[0]) {
                oldMax = oldList.split("\n")[i].split(" ")[7];
                oldStreak = oldList.split("\n")[i].split(" ")[9];
            }
        }*/
        var maxStreak = theList.split("\n")[x].split(" ")[9];
        var maxELO = Math.max(theList.split("\n")[x].split(" ")[1], newELO);
        newList += "\n" + theList.split("\n")[x].split(" ")[0] + " " + newELO + " 100 0 0 0 0 " + newELO + " 0 " + maxStreak + " " + maxELO;
        if (bot.guilds.cache.get(guildID[3]).members.has(theList.split("\n")[x].split(" ")[0])) {
            var theMember = await bot.guilds.cache.get(guildID[3]).members.fetch(theList.split("\n")[x].split(" ")[0]);
            for (var i = 0; i < 6; i++) {
                if (theMember.roles.cache.has(progressRoles[i])) { theMember.roles.remove(progressRoles[i]); }
            }
            theMember.roles.add(progressRoles[6]);
        }
    }
    await fs.writeFile("member_list_season" + oldSeason + "_final.txt", theList, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
    await fs.writeFile("member_list.txt", newList, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
    announceSeason(season, false);
}

async function announceSeason(season, test) {
    //if (season == 2) {
    if (test) { var theChannel = bot.channels.cache.get(botCommandTest); }
    else { var theChannel = bot.channels.cache.get("694634964347781130"); }
    var i1 = new Discord.MessageEmbed().setImage(theImages.content.split("\n")[1]);
    var i2 = new Discord.MessageEmbed().setImage(theImages.content.split("\n")[2]);
    var i3 = new Discord.MessageEmbed().setImage(theImages.content.split("\n")[3]);
    await theChannel.send("**__Welcome to Season " + theImages.content.split("\n")[4] + "__**\n\n> - This season ends **" + theImages.content.split("\n")[5] + "**\n> - ELO has been reset!", i1);
    await theChannel.send(i2);
    await theChannel.send(i3);
    //}
}

function setResources(message, messageMember) {
    if (lowmessage.indexOf(",setresources") == 0 && messageMember.roles.cache.has(modRole[3]) && message.content.split(" ").length == 7 && message.content.split(" ")[1].indexOf("http") == 0 && message.content.split(" ")[2].indexOf("http") == 0 && message.content.split(" ")[3].indexOf("http") == 0) {
        var oldResources = theImages.content;
        theImages.edit("New Season Resources:\n" + message.content.split(" ")[1] + "\n" + message.content.split(" ")[2] + "\n" + message.content.split(" ")[3] + "\n" + message.content.split(" ")[4] + "\n" + message.content.split(" ")[5] + " " + message.content.split(" ")[6]);
        message.channel.send("Season resources updated!  Here's a log of what used to be there in case you need it later.", new Discord.MessageEmbed().addField("Last Season's Resources:", oldResources))
    }
}

/*async function orderedList(channel, theMessage) {
    var theList = await fs.readFileSync("member_list.txt", "utf8");
    var members = [];
    var elos = [];
    for (var x = 1; x < theList.split("\n").length; x++) {
        if (theList.split("\n")[x].split(" ")[3] > 0) {
            if (bot.guilds.cache.get(guildID[3]).members.has(theList.split("\n")[x].split(" ")[0])) {
                members.push(theList.split("\n")[x].split(" ")[0]);
                elos.push(theList.split("\n")[x].split(" ")[1]);
            }
        }
    }
    if (theMessage == null) { var theMessage = await channel.send("Calculating leaderboard, please wait."); }
    /*else if (theMessage.guild.id == guildID[3]) {
        setTimeout(function () {
            orderedList(channel, theMessage);
        }, 3600000);
    }* /
    //bot.channels.cache.get(logChannel[0]).send(members + "\n" + elos);
    mergeSort(elos, members, 0, members.length);
    var output = "Season " + theList.split("\n")[0].split(" ")[1] + " Leaderboard:";
    var place = 1;
    for (var i = members.length - 1; i > 0; i--) {
        output += "\n" + place + ". <@" + members[i] + "> " + Math.floor(elos[i]);
        place++;
        //bot.channels.cache.get(logChannel[0]).send(output);
    }
    if (output.length < 30) { return; }
    if (output.length > 2000) {
        bot.channels.cache.get(logChannel[0]).send("<@135999597947387904>, the leaderboard is full")
    }
    theMessage.edit(output);
}*/

async function orderedList(channel, theMessage) {
    var theList = await fs.readFileSync("member_list.txt", "utf8");
    var members = [];
    var elos = [];
    for (var x = 1; x < theList.split("\n").length; x++) {
        if (theList.split("\n")[x].split(" ")[3] > 0) {
            //if (bot.guilds.cache.get(guildID[3]).members.has(theList.split("\n")[x].split(" ")[0])) {
                members.push(theList.split("\n")[x].split(" ")[0]);
                elos.push(theList.split("\n")[x].split(" ")[1]);
            //}
        }
    }
    mergeSort(elos, members, 0, members.length);

    var output = [""];
    var place = 1;
    var sect = 0;
    var dividers = [9, 41, 71, 101, 131, 161, 191, 221, 251];
    for (var i = members.length - 1; i > 0; i--) {
        if (dividers.includes(place)) {
            sect++;
            output[sect] = "";
        }
        output[sect] += "\n" + place + ". <@" + members[i] + "> " + Math.floor(elos[i]);
        place++;
        //channel.send("Current output:" + output);
    }
    var theLeaderboard = new Discord.MessageEmbed().setAuthor("Season " + theList.split("\n")[0].split(" ")[1] + " Leaderboard", seasonImage.content).setColor("9d0458").addField("Top 8:", output[0])
    for (var x = 1; x < output.length; x++) {
        theLeaderboard.addField("Leaderboard Part " + (x - 1 + 2), output[x]);
    }
    if (theMessage == null) {
        channel.send(theLeaderboard);
    }
    else {
        theMessage.edit(theLeaderboard);
    }
}

function mergeSort(elos, members, start, end) {
    if (start < end) {
        var mid = Math.floor((start + end) / 2);
        mergeSort(elos, members, start, mid);
        mergeSort(elos, members, mid + 1, end);
        merge(elos, members, start, mid, end);
    }
}

function merge(elos, members, start, mid, end) {
    var p = start;
    var q = mid + 1;
    var newELOs = [];
    var newMembers = [];
    var k = 0;
    for (var i = start; i <= end; i++) {
        if (p > mid) {
            newELOs[k] = elos[q];
            newMembers[k] = members[q];
            k++;
            q++;
        }
        else if (q > end) {
            newELOs[k] = elos[p];
            newMembers[k] = members[p];
            k++;
            p++;
        }
        else if (elos[p] < elos[q]) {
            newELOs[k] = elos[p];
            newMembers[k] = members[p];
            k++;
            p++;
        }
        else {
            newELOs[k] = elos[q];
            newMembers[k] = members[q];
            k++;
            q++;
        }
    }
    for (var i = 0; i < k; i++) {
        elos[start] = newELOs[i];
        members[start] = newMembers[i];
        start++;
    }
}

async function showELO(message) {
    if (lowmessage.indexOf(",elobest") == 0) {
        var theList = await fs.readFileSync("member_list.txt", "utf8");
        var target = null;
        for (var x = 1; x < theList.split("\n").length; x++) {
            if (theList.split("\n")[x].includes(message.member.id)) { target = theList.split("\n")[x].split(" ")[7]; }
        }
        if (target == null) { message.channel.send("Please register first with `,register` in <#" + registrationChannel + ">."); }
        else { message.channel.send("Your best ELO was " + Math.floor(target) + "!"); }
    }
    else if (lowmessage.indexOf(",elo") == 0) {
        var theList = await fs.readFileSync("member_list.txt", "utf8");
        var target = null;
        for (var x = 1; x < theList.split("\n").length; x++) {
            if (theList.split("\n")[x].includes(message.member.id)) { target = theList.split("\n")[x].split(" ")[1]; }
        }
        if (target == null) { message.channel.send("Please register first with `,register` in <#" + registrationChannel + ">."); }
        else { message.channel.send("Your current ELO is " + Math.floor(target) + "!"); }
    }
    if (lowmessage.indexOf(",streakbest") == 0) {
        var theList = await fs.readFileSync("member_list.txt", "utf8");
        var target = null;
        for (var x = 1; x < theList.split("\n").length; x++) {
            if (theList.split("\n")[x].includes(message.member.id)) { target = theList.split("\n")[x].split(" ")[9]; }
        }
        if (target == null) { message.channel.send("Please register first with `,register` in <#" + registrationChannel + ">."); }
        else { message.channel.send("Your best win streak was " + target + "!"); }
    }
    else if (lowmessage.indexOf(",streak") == 0) {
        var theList = await fs.readFileSync("member_list.txt", "utf8");
        var target = null;
        for (var x = 1; x < theList.split("\n").length; x++) {
            if (theList.split("\n")[x].includes(message.member.id)) { target = theList.split("\n")[x].split(" ")[8]; }
        }
        if (target == null) { message.channel.send("Please register first with `,register` in <#" + registrationChannel + ">."); }
        else { message.channel.send("Your current win streak is " + target + "!"); }
    }
    if (lowmessage.indexOf(",playtime") == 0) {
        var theList = await fs.readFileSync("member_list.txt", "utf8");
        var target = null;
        for (var x = 1; x < theList.split("\n").length; x++) {
            if (theList.split("\n")[x].includes(message.member.id)) { target = theList.split("\n")[x].split(" ")[3]; }
        }
        if (target == null) { message.channel.send("Please register first with `,register` in <#" + registrationChannel + ">."); }
        else { message.channel.send("You have played a total of " + target + " matches!"); }
    }
    if (lowmessage.indexOf(",wintotal") == 0) {
        var theList = await fs.readFileSync("member_list.txt", "utf8");
        var target = null;
        var target2 = null;
        var target3 = null;
        for (var x = 1; x < theList.split("\n").length; x++) {
            if (theList.split("\n")[x].includes(message.member.id)) {
                target = theList.split("\n")[x].split(" ")[4];
                target2 = theList.split("\n")[x].split(" ")[5];
                target3 = theList.split("\n")[x].split(" ")[6];
            }
        }
        if (target == null) { message.channel.send("Please register first with `,register` in <#" + registrationChannel + ">."); }
        else { message.channel.send("Your current record is " + target + " wins, " + target2 + " losses, and " + target3 + " draws!"); }
    }
    if (lowmessage.indexOf(",winrate") == 0) {
        var theList = await fs.readFileSync("member_list.txt", "utf8");
        var target = null;
        var target2 = null;
        var target3 = null;
        for (var x = 1; x < theList.split("\n").length; x++) {
            if (theList.split("\n")[x].includes(message.member.id)) {
                target = theList.split("\n")[x].split(" ")[4];
                target2 = theList.split("\n")[x].split(" ")[6];
                target3 = theList.split("\n")[x].split(" ")[3];
            }
        }
        if (target == null) { message.channel.send("Please register first with `,register` in <#" + registrationChannel + ">."); }
        else {
            var winrate = Math.floor(10000 * (target + (0.5 * target2)) / target3) / 100;
            message.channel.send("Your current record is " + winrate + "%!");
        }
    }
    if (lowmessage.indexOf(",stats") == 0) {
        showStats(message.member.id, message.channel)
        /*var theList = await fs.readFileSync("member_list.txt", "utf8");
        var elo = 0;
        var games = 0;
        var wins = 0;
        var losses = 0;
        var draws = 0;
        var maxELO = 0;
        var streak = 0;
        var maxStreak = 0;
        var season = theList.split("\n")[0].split(" ")[1];
        for (var x = 1; x < theList.split("\n").length; x++) {
            if (theList.split("\n")[x].includes(message.member.id)) {
                elo = theList.split("\n")[x].split(" ")[1];
                games = theList.split("\n")[x].split(" ")[3];
                wins = theList.split("\n")[x].split(" ")[4];
                losses = theList.split("\n")[x].split(" ")[5];
                draws = theList.split("\n")[x].split(" ")[6];
                maxELO = theList.split("\n")[x].split(" ")[7];
                streak = theList.split("\n")[x].split(" ")[8];
                maxStreak = theList.split("\n")[x].split(" ")[9];
            }
        }
        if (elo == 0) { message.channel.send("Please register first with `,register` in <#" + registrationChannel + ">."); }
        else {
            var messageMember = await message.guild.members.fetch(message.author);
            var thisIsRich = new Discord.MessageEmbed().setThumbnail(message.author.displayAvatarURL()).setTitle(message.author.username + "'s Evernight Season " + season + " Stats:").addField("ELO:", elo).addField("Matches Played:", games).addField("Win/Loss/Draw Record:", wins + "/" + losses + "/" + draws).addField("Current Win Streak:", streak).addField("Highest Win Streak:", maxStreak).addField("Maximum ELO:", maxELO).setColor(messageMember.displayHexColor);
            message.channel.send(thisIsRich);
        }*/
    }
}

async function showStats(id, channel) {
    var theList = await fs.readFileSync("member_list.txt", "utf8");
    var elo = 0;
    var games = 0;
    var wins = 0;
    var losses = 0;
    var draws = 0;
    var maxELO = 0;
    var streak = 0;
    var maxStreak = 0;
    var maxELOLife = 0;
    var season = theList.split("\n")[0].split(" ")[1];
    for (var x = 1; x < theList.split("\n").length; x++) {
        if (theList.split("\n")[x].includes(id)) {
            elo = theList.split("\n")[x].split(" ")[1];
            games = theList.split("\n")[x].split(" ")[3];
            wins = theList.split("\n")[x].split(" ")[4];
            losses = theList.split("\n")[x].split(" ")[5];
            draws = theList.split("\n")[x].split(" ")[6];
            maxELO = theList.split("\n")[x].split(" ")[7];
            streak = theList.split("\n")[x].split(" ")[8];
            maxStreak = theList.split("\n")[x].split(" ")[9];
            maxELOLife = theList.split("\n")[x].split(" ")[10];
        }
    }
    if (elo == 0) { channel.send("Please register first with `,register` in <#" + registrationChannel + ">."); }
    else {
        var messageMember = await channel.guild.members.fetch(id);
        var thisIsRich = new Discord.MessageEmbed().setThumbnail(messageMember.user.displayAvatarURL()).setTitle(messageMember.user.username + "'s Evernight Season " + season + " Stats:").addField("ELO:", elo).addField("Matches Played:", games).addField("Win/Loss/Draw Record:", wins + "/" + losses + "/" + draws).addField("Current Win Streak:", streak).addField("Highest Win Streak:", maxStreak).addField("Maximum ELO This Season:", maxELO).addField("Overall Maximum ELO:", maxELOLife).setColor(messageMember.displayHexColor);
        channel.send(thisIsRich);
    }
}

async function help(message, guildNum) {
    if (lowmessage.indexOf(",help") == 0) {
        if (guildNum == 3) {
            var helpMessage = "" //"To register, please use `,register`."
            var messageMember = await bot.guilds.cache.get(guildID[guildNum]).members.fetch(message.author);
            if (messageMember.roles.cache.has(modRole[3]) && (message.channel.id == modChannel || message.channel.id == botCommandTest)) {
                helpMessage += "To add a word or phrase to the list of things to immediately delete: `,banword [THING]` For instance, if you want to immediately delete `Cinder Fall` you would say `,banword Cinder Fall` and all future mentions of `Cinder Fall` will be deleted and logged.  This is case insensitive.  Likewise for just reporting, use `,reportword Cinder Fall`.  For removing from the appropriate lists, use `,unbanword Cinder Fall` or `,unreportword Cinder Fall`"
            }
            message.channel.send(new Discord.MessageEmbed().setTitle("Commands:").addField("Basic Commands:", "`,register`: Register in <#"+ registrationChannel + "> and gain access to the server.\n`,join`: Use in <#" + queueChannel + "> to find an opponent!\n`,leave`: Use in <#" + queueChannel + "> to exit the queue for a match or in <#" + gymChannel + "> to exit the request list.\n`,request`: Use in <#" + gymChannel + "> to request a friendly match.\n`,accept`: Use in <#" + gymChannel + "> to accept the first waiting opponent's friendly challenge.\n`,plaza`: Give or remove the Plaza role to be notified when it opens.").addField("Informational Commands:", "`,leaderboard`; `,stats`; `,elo`; `,elobest`; `,streakbest`; `,streak`; `,playtime`; `,wintotal`; `,winrate`").addField("Scorekeeper Commands:", ",result  <@" + bot.user.id + "> <@172002275412279296>: Score a match where  <@" + bot.user.id + "> defeated <@172002275412279296>.\n,tie <@" + bot.user.id + "> <@172002275412279296>: Score a match where  <@" + bot.user.id + "> and <@172002275412279296> tied.\n`,undo ID`: Undo the match that gave undo code `ID`.\n`,react ID`: Add a <:salute:694295553701314674> to message with ID `ID` in <#694257977942605894>."));
            if (helpMessage.length > 0) {
                message.channel.send(helpMessage);
            }
        }
    }
}

function updateWords(message, messageMember) {
    if (messageMember.roles.cache.has(modRole[3])) {
        if (lowmessage.indexOf(",banword ") == 0) {
            var newDeleteList = deleteList.content;
            newDeleteList += "\n" + lowmessage.split(",banword ")[1]
            deleteList.edit(newDeleteList);
            message.channel.send("`" + lowmessage.split(",banword ")[1] + "` added to list of words/phrases to immediately delete.");
        }
        if (lowmessage.indexOf(",reportword ") == 0) {
            var newDeleteList = reportList.content;
            newDeleteList += "\n" + lowmessage.split(",banword ")[1]
            reportList.edit(newDeleteList);
            message.channel.send("`" + lowmessage.split(",reportword ")[1] + "` added to list of words/phrases to report.");
        }
        if (lowmessage.indexOf(",unbanword ") == 0 && deleteList.content.split("\n").indexOf(lowmessage.split(",unbanword ")[1]) > 0) {
            var newDeleteList = deleteList.content.split("\n")[0];
            for (var x = 1; x < deleteList.content.split("\n").length; x++) {
                if (!deleteList.content.split("\n")[x] == lowmessage.split(",unbanword ")[1]) { newDeleteList += "\n" + deleteList.content.split("\n")[x]; }
            }
            deleteList.edit(newDeleteList);
            message.channel.send("`" + lowmessage.split(",unbanword ")[1] + "` removed from list of words/phases to immediately delete.");
        }
        if (lowmessage.indexOf(",unreportword ") == 0 && deleteList.content.split("\n").indexOf(lowmessage.split(",unreportword ")[1]) > 0) {
            var newDeleteList = reportList.content.split("\n")[0];
            for (var x = 1; x < reportList.content.split("\n").length; x++) {
                if (!reportList.content.split("\n")[x] == lowmessage.split(",unreportword ")[1]) { newDeleteList += "\n" + reportList.content.split("\n")[x]; }
            }
            reportList.edit(newDeleteList);
            message.channel.send("`" + lowmessage.split(",unreportword ")[1] + "` removed from list of words/phases to report.");
        }
    }
}

async function myGods(message) {
    if (message.channel.id == "703396810324181043") {
        await message.react(message.guild.emojis.cache.get("703398142032347248"));
        await message.react(message.guild.emojis.cache.get("703398141973758012"));
    }
}

async function salute(message, messageMember) {
    if (lowmessage.indexOf(",react") == 0 && !isNaN(lowmessage.split(" ")[1]) && (messageMember.roles.cache.has("694631037082533972") || messageMember.roles.cache.has("694241749840822403"))) {
        theMessage = await bot.channels.cache.get("694257977942605894").messages.fetch(lowmessage.split(" ")[1]);
        await theMessage.react(bot.guilds.cache.get(guildID[3]).emojis.cache.get("694295553701314674"));
    }
}

function levelUp(message) {
    if (message.author.id == "159985870458322944" && message.guild.id == guildID[2]) {
        if (message.content.includes("you just advanced to level ")) {
            var theLevel = message.content.split(" to level ")[1].split("!")[0]
            if (isNaN(theLevel)) {
                return;
            }
            else {
                theLevel -= 0;
            }
        }
        var found = false;
        for (var x = levelRoles.content.split("\n").length - 1; x > 0; x--) {
            if (theLevel >= (levelRoles.content.split("\n")[x].split(":")[0] - 0)) {
                if (!message.mentions.members.first().roles.has(levelRoles.content.split("\n")[x].split(":")[1]) && !found) {
                    message.mentions.members.first().roles.add(levelRoles.content.split("\n")[x].split(":")[1]);
                }
                else if (found) {
                    message.mentions.members.first().roles.remove(levelRoles.content.split("\n")[x].split(":")[1]);
                }
                found = true;
            }
        }
    }
}

async function addLevel(message, messageMember) {
    if (message.content.toLowerCase().indexOf(",level ") == 0 && messageMember.permissions.has("MANAGE_ROLES") && message.guild.id == guildID[2] && message.guild.roles.has(message.content.split(":")[1]) && !isNaN(message.content.substring(7).split(":")[0]) && message.content.indexOf(":") == message.content.lastIndexOf(":")) {
        await levelRoles.edit(levelRoles.content + "\n" + message.content.substring(7));
        levelRoles = await bot.channels.cache.get("643113455070478383").messages.fetch("811482073448841226");
        message.react("👍");
    }
}

bot.on("message", async function(message) {
    if (message.guild != null && message.guild.id == "864295708491644958") {return;}
    lowmessage = message.content.toLowerCase();

    if (message.author.id == "135999597947387904" && message.content.indexOf(",eval ") == 0 && message.channel.id != "531433553225842700") {
        message.channel.send("```javascript\n" + eval(message.content.split(",eval ")[1]) + "```");
    }

    if (message.guild != null && message.guild.id == "694240883561988107") {
        await register(message);

        await queue(message);

        await gymnasiumQ(message);

        await gymnasiumQ2(message);

        await eloUpdate(message);

        await undoChanges(message);

        await showELO(message);

        var messageMember = await message.guild.members.fetch(message.author);

        await raidBan(message, messageMember);

        await badWordsReporter(message, messageMember, false);

        await help(message, 3);

        await updateWords(message, messageMember);

        await myGods(message);

        await salute(message, messageMember);

        await role(message, messageMember);

        await setResources(message, messageMember);

        if (message.author.id == "135999597947387904" && lowmessage.indexOf(",gods ") == 0) {
            var theMessage = await bot.channels.cache.get("703396810324181043").messages.fetch(lowmessage.split(" ")[1]);
            myGods(theMessage);
        }

        //if (message.author.id == "135999597947387904" && lowmessage.indexOf(",announcetest") == 0) { announceSeason(2); }

        //if (lowmessage.indexOf(",fix") == 0 && message.channel.id == logChannel[0]) { fixThis(0); }

        if (lowmessage.indexOf(",leaderboard") == 0) { orderedList(message.channel, null); }

        if (lowmessage == ",newseason" && messageMember.roles.cache.has(modRole[3])) {
            var theMessage = await message.channel.send("Are you sure you want to end this season and start a new season?");
            await theMessage.react("👍");
            await theMessage.react("👎");
        }

        return;
    }

    await levelUp(message);

    if (message.author.bot) {return;}
    if (guildID.includes(lowmessage.split(",")[0])) {
        guildNum = guildID.indexOf(lowmessage.split(",")[0]);
        lowmessage = lowmessage.substring(lowmessage.indexOf(","));
    }
    else if (message.guild != null) {guildNum = guildID.indexOf(message.guild.id);}
    if(guildNum == -1) {return;}
    var isMod = false;
    var messageMember = await bot.guilds.cache.get(guildID[guildNum]).members.fetch(message.author);
    if (messageMember.roles.cache.has(modRole[guildNum]) || messageMember.hasPermission("ADMINISTRATOR")) { isMod = true; }

    await permissionCheck(message, isMod);

    await raidBan(message, messageMember);

    await messagePassing(message);

    await callCard(message);

    await addLevel(message, messageMember);

    /*if (isMod && message.content.indexOf(",unmute") == 0 && message.mentions.users.size != 0) {
        message.mentions.users.forEach(async function(value, key) {
            await unmute(key, guildNum);
        });
    }*/
})

async function linkCleaner(message, messageMember) {
    if (guildNum == 0 && lowmessage.indexOf("http") != -1 && lowmessage.indexOf("urpg") == -1 && !message.author.bot) {
        message.delete();
        var cleaningMessage = await message.channel.send("<@" + message.author.id + "> please become a member before posting links here.");
        setTimeout(function() {
            selfCleaner(cleaningMessage);
        }, 30000);
    }
}

function selfCleaner(message) {
    message.delete();
}

bot.on("messageUpdate", async function(oldMessage, newMessage) {
    if (newMessage.guild == null || newMessage.guild.id != guildID[3]) { return; }
    lowmessage = newMessage.content.toLowerCase();
    var messageMember = await newMessage.guild.members.fetch(newMessage.author);
    await badWordsReporter(newMessage, messageMember, true);
})

bot.on("guildMemberAdd", async function(member) {
    if (member.guild.id == guildID[3]) {
        var theList = await fs.readFileSync("member_list.txt", "utf8");
        if (theList.includes(member.id)) {
            member.roles.add("694250616754667667");
            if (member.roles.cache.has("694244397314867314")) { member.roles.remove("694244397314867314"); }
            var elo = -1;
            for (var x = 1; x < theList.split("\n").length; x++) {
                if (theList.split("\n")[x].includes(member.id)) {
                    elo = theList.split("\n")[x].split(" ")[1];
                    if (theList.split("\n")[x].split(" ")[3] == 0) {
                        member.roles.add(progressRoles[6]);
                        bot.channels.cache.get("694242104196595722").send("Welcome back! Your roles have been reassigned.");
                        return;
                    }
                }
            }
            if (elo != -1) {
                if (elo < 1500) { member.roles.add(progressRoles[0]); }
                if (elo >= 1500 && elo < 2000) { member.roles.add(progressRoles[1]); }
                if (elo >= 2000 && elo < 2500) { member.roles.add(progressRoles[2]); }
                if (elo >= 2500 && elo < 3000) { member.roles.add(progressRoles[3]); }
                if (elo >= 3000 && elo < 3500) { member.roles.add(progressRoles[4]); }
                if (elo >= 3500) { member.roles.add(progressRoles[5]); }
                bot.channels.cache.get("694242104196595722").send("Welcome back! Your roles have been reassigned.");
            }
        }
        else {
            member.roles.add("694244397314867314");
        }
    } 
})

/*bot.on("guildMemberRemove", function(member) {
    if (member.roles.cache.has(muteRole) && !logMessage.content.includes(member.id + " ")) {
        var d = new Date();
        var unmuteTime = d.getTime() + 604800000;
        logMessage.edit(logMessage.content + "\n" + member.id + " " + unmuteTime);
        bot.channels.cache.get(logChannel).send(member.displayName + " (id " + member.id + ") left while muted with no fixed duration and has been muted for one week in case they return. If you wish to change the duration, please use `,mute HOURS <@" + member.id + ">`.");
    }
})*/

bot.on("messageDelete", async function(message) {
    if (message.guild.id == "694240883561988107") {return;}
    if (message.guild.id == "864295708491644958") {return;}
    deleteReporter(message);
})

bot.on("guildMemberUpdate", async function(oldMember, newMember) {
    if (newMember.guild.id == guildID[1] && newMember.roles.cache.has(gottemRole)) {
        for (var x = 0; x < gettemRoles.length; x++) {
            if (newMember.roles.cache.has(gettemRoles[x])) { newMember.roles.remove(gettemRoles[x]); }
        }
    }
    if (newMember.guild.id == guildID[3] && newMember.roles.cache.has("694244397314867314") && !newMember.roles.cache.has("694250616754667667") && !newMember.roles.cache.has(progressRoles[6])) {
        var theList = await fs.readFileSync("member_list.txt", "utf8");
        if (theList.includes(newMember.id)) {
            newMember.roles.remove("694244397314867314");
            member.roles.add("694250616754667667");
        }
    }
    for (var x = 0; x < categoryRoles.length; x++) {
        if (!newMember.roles.cache.has(categoryRoles[x])) {
            var thePost = bot.channels.cache.get("643113455070478383").messages.fetch(categoryLists[x]);
            for (var y = 1; y < thePost.content.split("\n").length; y++) {
                if (newMember.roles.cache.has(thePost.content.split("\n")[y]) && !newMember.roles.cache.has(categoryRoles[x])) {
                    newMember.roles.add(categoryRoles[x]);
                } 
            }
        }
    }
})

bot.on("messageReactionAdd", async function(messageReaction, user) {
    if (messageReaction.message.content == "Are you sure you want to end this season and start a new season?" && !user.bot && messageReaction.message.author.id == bot.user.id && messageReaction.count == 2) {
        var reactionMember = await messageReaction.message.guild.members.fetch(user);
        if (reactionMember.roles.cache.has(modRole[3])) {
            if (messageReaction.emoji.name == "👍") {
                messageReaction.message.edit("Season reset underway.");
                newSeason();
            }
            else if (messageReaction.emoji.name == "👎") {
                messageReaction.message.edit("Season reset cancelled.");
            }
        }
    }
})

/*bot.on("guildMemberRemove", async function(member) {
    if (member.guild.id != "531433553225842698") {return;}
    var leaveLog = "Member ";
    leaveLog += member.displayName;
    if (member.roles.size > 1) {
        leaveLog += " with roles "
        member.roles.forEach(function(value, key) {
            leaveLog += value.name + " ";
        });
    }
    const entry = await member.guild.fetchAuditLogs({type: 'MEMBER_BAN_ADD'}).then(audit => audit.entries.first())
    const entry2 = await member.guild.fetchAuditLogs({type: 'MEMBER_KICK'}).then(audit => audit.entries.first())
    if (entry != null && (entry.target.id === member.id) && (entry.createdTimestamp > (Date.now() - 5000))) {
        leaveLog += " was banned by ";
        leaveLog += entry.executor.username;
    }
    else if (entry2 != null && (entry2.target.id === member.id) && (entry2.createdTimestamp > (Date.now() - 5000))) {
        leaveLog += " was kicked by ";
        leaveLog += entry.executor.username;
    }
    else {leaveLog += " has left."}
    bot.channels.cache.get(logsChannel).send(leaveLog);
})*/

bot.login(process.env.token)
