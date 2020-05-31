/*
------------------ENGINE.JS V 1.5---------------------
              MADE BY THEMINECRAFTER05

ENGLISH:

-->DO NOT COPY THE SCRIPT OR PARTS OF IT!!!<--

-->DO NOT CHANGE THE CODE, IT CAN STOP WORKING IF YOU DO IT!!!<--

USE DISCORD.JS VERSION 12.2 FOR THE ENGINE, IT CAN STOP WORKING IN OTHER VERSIONS

IF YOU HAVE BUGS OR ERRORS AND YOU DIDNT CHANGE SOMETHING, PLS CONTACT ME: -->TheMinecrafter05#5942<--

GERMAN:

-->KOPIERE NICHT DAS SCRIPT ODER TEILE DARAUS!!!<--

-->VERÄNDERE NICHT DEN CODE, ES KANN DANACH NICHT MEHR FUNKTIONIEREN!!!<--

NUTZE DISCORD.JS VERSION 12.2 FÜR DIE ENGINE, ES KANN IN ANDEREN VERSIONEN NICHT MEHR FUNKTIONIEREN

WENN DU BUGS ODER FEHLER HAST, OHNE DAS DU WAS VERÄNDERT HAST, BITTE KONTAKTIERE MICH: -->TheMinecrafter05#5942<--

------------------ENGINE.JS V 1.5----------------------
*/

const Discord = require("discord.js");
var bot
var owner
var messageLog = false;
module.exports = {
    "createBot":function(token="",botOwner="",logMessage=""){
        bot  = new Discord.Client();
        if(!token) return console.error("Kein Token angegeben!");
        if(!botOwner) return console.error("Kein Owner angegeben, bitte gebe deinen Discord Namen an.")
        owner = botOwner;
        if(botOwner.length > 16) return console.error("BotOwner Name zu lang!");
        bot.login(token)
        bot.setMaxListeners(100)

        bot.on("ready",()=>{

            if(logMessage){
                console.log(logMessage)
            }else{
                console.log("Bot gestartet als "+bot.user.username)
            }
        })

        bot.on("message",function(message){
            if(message.content==="engine.help"){
                //let user = message.mentions.users.first();
                if(message.author.username != owner) return message.reply("Sorry, aber du bist nicht der Bot Owner oder du hast nicht deinen Discord namen angegeben.").then(msg=>msg.delete({timeout:"5000"}))
                message.delete()
                let embed = new Discord.MessageEmbed()
                .setTitle("engine.js Hilfe | __(__command__)__ = not required / __<__command__>__ = required")
                .setColor("YELLOW")
                .setThumbnail(bot.user.avatarURL())
                .setURL("https://sites.google.com/view/simple-HTMLGames-de")
                .addField("**engine.createBot(<token>,<botOwner>,(logMessage))**","token: Bot Token\nbotOwner: Discord Name von dir\nlogMessage: Was in der Console steht wenn der Bot startet")
                .addField("**engine.sendMessage(<command>,<content>)**","command: Bei welchem Command das ausgeführt werden soll\ncontent: Was in der Nachricht stehen soll")
                .addField("**engine.createEmbed(<command>,<title>,<desc>,<color>)**","command: Bei welchem Command das ausgeführt werden soll\ntitle: Titel\n desc: Beschreibung\ncolor: Farbe (RANDOM,RED,YELLOW,GREEN,0x0ff674...)\nfooter: Fußzeile")
                .addField("**engine.clearCommand(<command>)**","command: Bei welchem Command das ausgeführt werden soll")
                .addField("**engine.kickCommand(<command>)**", "command: Bei welchem Command das ausgeführt werden soll")
                .addField("**engine.banCommand(<command>)**", "command: Bei welchem Command das ausgeführt werden soll")
                .addField("**engine.botStatus(<status>,<statusType>,(mode))**","status: Status Text\nstatusType: den Typ: __playing__, __listening__,__watching__\nmode: Der StatusModus: __dnd__ (Bitte Nicht Stören), __idle__ (Abwesend), __online__ (Online)")
                .addField("**engine.random(<command>,<minNumber>,<maxNumber>,<output>**", "command: Bei welchem Command das ausgeführt werden soll\nminNumber: Die kleinste Zahl die kommen kann\nmaxNumber: Die größte Zahl die kommen kann\noutput: Der Text vor der Nummer")
                .addField("**engine.twoOutRandom(<command>,<output1>,<output2>)**","command: Bei welchem Command das ausgeführt werden soll\noutput1: Die erste Möglichkeit\noutput2: Die 2te Möglichkeit")
                .addField("**engine.threeOutRandom(<command>,<output1>,<output2>,<output3>)**","command: Bei welchem Command das ausgeführt werden soll\noutput1: Die erste Möglichkeit\noutput2: Die 2te Möglichkeit\noutput1: Die 3te Möglichkeit")
                .addField("**engine.fourOutRandom(<command>,<output1>,<output2>,<output3>,<output4>)**","command: Bei welchem Command das ausgeführt werden soll\noutput1: Die erste Möglichkeit\noutput2: Die 2te Möglichkeit\noutput1: Die 3te Möglichkeit\noutput1: Die 4te Möglichkeit")
                .addField("**engine.welcome(<channelName>,(message))**","channelName: Der Name des Kanals\nmessage: Die Nachricht vor der User Erwähnung")
                .addField("**engine.leave(<channelName>,(message))**","channelName: Der Name des Kanals\nmessage: Die Nachricht vor der User Erwähnung")
                .addField("**engine.welcomeEmbed(<channelName>,(thumbnail),(message),(color))**","channelName: Der Name des Kanals\nmessage: Die Nachricht vor der User Erwähnung")
                .addField("**engine.leaveEmbed(<channelName>,(thumbnail),(message),(color))**","channelName: Der Name des Kanals\nmessage: Die Nachricht vor der User Erwähnung")
                .addField("**engine.speak(<command>)**","command: Bei welchem Command das ausgeführt werden soll")
                .addField("**engine.logMessage(<state>)**","state: legt fest ob Nachrichten geloggt werden sollen oder nicht: __true__: Ja / __false__: Nein")
                .addField("**engine.addRole(<command>)**","command: Bei welchem Command das ausgeführt werden soll")
                .addField("**engine.welcomeRole(<roleName>)","roleName: Name der Rolle")
                .addField("**engine.botPing(<command>, <state>)","command: Bei welchem Command das ausgeführt werden soll\nstate: legt fest ob der Befehl aktiviert sein soll oder nicht: __true__: Ja / __false__: Nein")
                .setFooter("Made with engine.js by TheMinecrafter05")
                message.author.send(embed)
            }

            if(messageLog){
                if(message.author.bot) return;
                console.log(`${message.author.username}: ${message.content}`);
            }
        })
    },
    "createEmbed": function(command="",title="", desc="",color="",thumbnail=""){
        bot.on("message",async message=>{
            if(!message.guild) return;
            if(!command) return console.error("Keinen Command angegeben.")
            if(message.content === command){
                if(!title) return console.error("Title is not defined!");if(!desc) return console.error("Description is not defined!");if(!color) return console.error("Color is not defined!");if(!thumbnail){
                    let embed = new Discord.MessageEmbed().setTitle(title).setDescription(desc).setColor(color).setFooter("Made with engine.js by TheMinecrafter05").setURL("https://sites.google.com/view/simple-HTMLGames-de")
                    message.channel.send(embed)
                }else{
                    if(!thumbnail.startsWith("http")) return console.error("Thumbnail ist kien link!");
                    let embed = new Discord.MessageEmbed().setTitle(title).setDescription(desc).setColor(color).setFooter("Made with engine.js by TheMinecrafter05").setURL("https://sites.google.com/view/simple-HTMLGames-de").setThumbnail(thumbnail)
                    message.channel.send(embed)
                }
            }
        })

    },
    "sendMessage":function(command="",content=""){
        bot.on("message",async message=>{
            if(!message.guild) return;
            if(!command) return console.error("Keinen Command angegeben.")
            if(!content) return console.error("Kein content angegeben!");
            if(message.content === command){
                message.channel.send(content);
            }
        })
    },
    "clearCommand": function(command=""){
        bot.on("message",async message=>{
            if(!message.guild) return;
            if(!command) return console.error("Keinen Command angegeben.")
            if(message.content.startsWith(command)){
                message.delete()
                if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Du hast keine Rechte dafür!").then(msg=>{
                    msg.delete({timeout:"5000"});
                });
                if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.reply("Ich habe keine Rechte dafür!").then(msg=>{
                    msg.delete({timeout:"5000"});
                })
                let messages = message.content.split(" ").slice(1).join("");
                Number(messages)
                if(isNaN(messages)) return message.reply("Du hast keine Zahl zum löschen angegeben!").then(msg=>{
                    msg.delete({timeout:"5000"});
                });
                if(messages > 100) return message.reply("Du kannst nicht mehr als 100 Nachrichten löschen.").then(msg=>{
                    msg.delete({timeout:"5000"});
                });
                if(messages < 1) return message.reply("Du kannst keine 0 Nachrichten löschen.").then(msg=>{
                    msg.delete({timeout:"5000"});
                });
                message.channel.bulkDelete(messages).then(()=>{
                    message.channel.send(`Habe ${messages} Nachrichten gelöscht.`).then(msg=>{
                        msg.delete({timeout:"5000"});
                    })
                }).catch(()=>{
                    message.reply("Einige von den "+messages+" Nachrichten sind älter als 14 Tage.").then(msg=>{
                        msg.delete({timeout:"5000"});
                    })
                })
            }
        })
    },

    "kickCommand":function(command=""){
        bot.on("message",async message=>{
            if(!message.guild) return;
            if(!command) return console.error("Keinen Command angegeben.")
            if(message.content.startsWith(command)){
                message.delete()
                let user = message.mentions.users.first();
                if(!user) return message.reply("Du hast keinen Nutzer @erwähnt").then(msg=>msg.delete({timeout:"5000"}))
                if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Du hast keine Rechte dafür!").then(msg=>{
                    msg.delete({timeout:"5000"});
                })
                if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("Ich habe keine Kick Rechte!").then(msg=>{
                    msg.delete({timeout:"5000"});
                })

                if(message.guild.member(user).kickable == false) return message.channel.send("Ich kann diesen Nutzer nicht kicken! Ich habe eine zu niedrige Rolle oder es ist der Besitzer des Server.").then(msg=>{
                    msg.delete({timeout:"5000"});
                })
                message.guild.member(user).kick()
                message.channel.send("Nutzer erfolgreich gekickt!").then(msg=>{
                    msg.delete({timeout:"5000"});
                })
            }
        })
    },

    "banCommand":function(command=""){
        bot.on("message",async message=>{
            if(!message.guild) return;
            if(message.content.startsWith(command)){
                message.delete();
                let user = message.mentions.users.first();
                if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Du hast keine Rechte dafür!").then(msg=>{
                    msg.delete({timeout:"5000"});
                })
                if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply("Ich habe keine Bann Rechte!").then(msg=>{
                    msg.delete({timeout:"5000"});
                })

                if(message.guild.member(user).banable == false) return message.channel.send("Ich kann diesen Nutzer nicht bannen! Ich habe eine zu niedrige Rolle oder es ist der Besitzer des Server.").then(msg=>{
                    msg.delete({timeout:"5000"});
                })
                message.guild.member(user).ban()
                message.channel.send("Nutzer erfolgreich gebannt!").then(msg=>{
                    msg.delete({timeout:"5000"});
                })
            }
        })
    },

    "botStatus":function(status="",statusType="",mode=""){
        bot.on("ready",()=>{
            bot.user.setActivity(status,{type:`${statusType.toUpperCase()}`});
            if(mode){
                bot.user.setStatus(mode);
            }
        })
    },

    "random":function(command="",maxNumber=0,output=""){
        bot.on("message", async message=>{
            if(!message.guild) return;
            if(message.content.startsWith(command)){
                let r = Math.floor(Math.random() * maxNumber + 1)

                message.channel.send(`${output} ${r}`)
            }
        })
    },

    "twoOutRandom":function(command="",output1="",output2=""){
        bot.on("message", async message=>{
            if(!message.guild) return;
            if(message.content === command){
                let chance = Math.floor(Math.random() * 2);
                if(chance == 0){
                    message.channel.send(output1)
                }else{
                    message.channel.send(output2)
                }
            }
        })
    },

    "threeOutRandom":function(command="",output1="",output2="",output3=""){
        bot.on("message", async message=>{
            if(!message.guild) return;
            if(message.content === command){
                let chance = Math.floor(Math.random() * 3);
                if(chance == 0){
                    message.channel.send(output1)
                }
                if(chance == 1){
                    message.channel.send(output2)
                }
                if(chance == 2){
                    message.channel.send(output3)
                }
            }
        })
    },

    "fourOutRandom":function(command="",output1="",output2="",output3="",output4="",){
        bot.on("message", async message=>{
            if(!message.guild) return;
            if(message.content === command){
                let chance = Math.floor(Math.random() * 4);
                if(chance == 0){
                    message.channel.send(output1)
                }
                if(chance == 1){
                    message.channel.send(output2)
                }
                if(chance == 2){
                    message.channel.send(output3)
                }
                if(chance == 3){
                    message.channel.send(output4)
                }
            }
        })
    },

    "welcome":function(channelName="",message=""){
        if(!channelName ||channelName == "") return console.error("Keinen Willkommens Kanal angegeben!");
        bot.on("guildMemberAdd",async member=>{
            const channel = member.guild.channels.cache.find(ch => ch.name === `${channelName}`);
            if(!channel) return console.error("Kann den Kanal **"+channelName+"** nicht finden!")
            if(message){
            channel.send(message + ` <@${member.id}>`);
            }else{
                channel.send(`Willkommen auf dem Server <@${member.id}>!`);
            }
        })
    },

    "leave":function(channelName="",message=""){
        if(!channelName ||channelName == "") return console.error("Keinen Verlassens Kanal angegeben!");
        bot.on("guildMemberRemove",async member=>{
            const channel = member.guild.channels.cache.find(ch => ch.name === `${channelName}`);
            if(!channel) return console.error("Kann den Kanal **"+channelName+"** nicht finden!")
            if(message){
            channel.send(message + ` <@${member.id}>`);
            }else{
                channel.send(`Auf Wiedersehen <@${member.id}>!`);
            }
        })
    },

    "welcomeEmbed":function(channelName="",thumbnail="",message="",color=""){
        if(!channelName ||channelName == "") return console.error("Keinen Willkommens Kanal angegeben!");
        if(!thumbnail || thumbnail == "" || !thumbnail.startsWith("http")) return console.error("Kein Thumbnail angegeben")
        bot.on("guildMemberAdd",async member=>{
            const channel = member.guild.channels.cache.find(ch => ch.name === `${channelName}`);
            if(!channel) return console.error("Kann den Kanal **"+channelName+"** nicht finden!")
            if(message){
                let embed = new Discord.MessageEmbed()
                .setTitle("__**Willkommens Nachricht**__")
                .setURL("https://sites.google.com/view/simple-htmlgames-de")
                .setDescription(message + ` <@${member.id}>`)
                .setFooter("Made with engine.js by TheMinecrafter05")
                if(!color){
                    embed.setColor("RANDOM")
                }else{
                    embed.setColor(color)
                }
                if(thumbnail){
                    embed.setThumbnail(thumbnail)
                }
                channel.send(embed);
            }else{
                let embed = new Discord.MessageEmbed()
                .setTitle("__**Willkommens Nachricht**__")
                .setURL("https://sites.google.com/view/simple-htmlgames-de")
                .setDescription(`Willkommen <@${member.id}>`)
                .setFooter("Made with engine.js by TheMinecrafter05")
                if(!color){
                    embed.setColor("RANDOM")
                }else{
                    embed.setColor(color)
                }
                if(thumbnail){
                    embed.setThumbnail(thumbnail)
                }
                channel.send(embed);
            }
        })
    },



    "leaveEmbed":function(channelName="",thumbnail="",message="",color=""){
        if(!channelName ||channelName == "") return console.error("Keinen Verlassens Kanal angegeben!");
        if(!thumbnail || thumbnail == "" || !thumbnail.startsWith("http")) return console.error("Kein Thumbnail angegeben")
        bot.on("guildMemberRemove",async member=>{
            const channel = member.guild.channels.cache.find(ch => ch.name === `${channelName}`);
            if(!channel) return console.error("Kann den Kanal **"+channelName+"** nicht finden!")
            if(message){
                let embed = new Discord.MessageEmbed()
                .setTitle("__**Verlassens Nachricht**__")
                .setURL("https://sites.google.com/view/simple-htmlgames-de")
                .setDescription(message + ` <@${member.id}>`)
                .setFooter("Made with engine.js by TheMinecrafter05")
                if(!color){
                    embed.setColor("RANDOM")
                }else{
                    embed.setColor(color)
                }
                if(thumbnail){
                    embed.setThumbnail(thumbnail)
                }
                channel.send(embed);
            }else{
                let embed = new Discord.MessageEmbed()
                .setTitle("__**Verlassens Nachricht**__")
                .setURL("https://sites.google.com/view/simple-htmlgames-de")
                .setDescription(`Auf wiedersehen <@${member.id}>`)
                .setFooter("Made with engine.js by TheMinecrafter05")
                if(!color){
                    embed.setColor("RANDOM")
                }else{
                    embed.setColor(color)
                }
                if(thumbnail){
                    embed.setThumbnail(thumbnail)
                }
                channel.send(embed);
            }
        })
    },

    "userinfo":function(command="",name=true,id=true,discriminator=false,isbot=false,createtAt=false){
        bot.on("message", async message=>{
            if(!message.guild) return;
            if(!command) return console.error("Kein", )
        })
    },

    "serverinfo":function(command="",name=true,id=true,members=true,location=false,owner=false){
        bot.on("message", async message=>{
            if(!message.guild) return;

        })
    },

    "speak":function(command=""){
        bot.on("message",async message=>{
            if(!message.guild) return;
            if(message.content.startsWith(command)){
                let text = message.content.split(" ").slice(1).join(" ");
                if(!text) return message.reply("Du hast vergessen was ich sagen soll.").then(msg=>{
                    msg.delete({timeout:"5000"})
                });
                message.delete();
                message.channel.send(text)
            }
        })
    },

    "logMessages":function(state=false){
        if(state){
            messageLog = true;
        }else{
            messageLog = false;
        }
    },

    "addRole":function(command=""){
        bot.on("message", async message=>{

            if(!command) return console.error("Kein Command angegeben!")

            if(message.content.startsWith(command)){

            let user = message.mentions.members.first();
            let role = message.mentions.roles.first();

            if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("Du hast keine Rechte dafür!").then(msg=>{
                msg.delete({timeout:"5000"});
            })
            if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.reply("Ich habe keine Rechte!").then(msg=>{
                msg.delete({timeout:"5000"});
            })

            if(!user) return message.reply("Keinen Nutzer angegeben!").then(msg=>{
                msg.delete({timeout:"5000"});
            });

            if(!role) return message.reply("Keine Rolle angegeben!").then(msg=>{
                msg.delete({timeout:"5000"});
            });

                message.delete()

                user.roles.add(role).then(message.channel.send("Rolle erfolgreich hinzugefügt!").then(msg=>msg.delete({timeout:"5000"})))
            }
        })
    },

    "welcomeRole":function(roleName=""){
        if(!roleName) return console.error("Keine Willkommens Rolle angegeben!")
        bot.on("guildMemberAdd",(member)=>{
            let role = member.guild.roles.cache.find(rl=>rl.name === roleName);

            member.roles.add(role)
        })
    },

    "botPing":function(command="",state=false){
        if(state == false) return;
        if(!command) return console.error("Keinen Command angegeben.")

        bot.on("message",async message=>{
            if(message.content === command){
                message.channel.send("Pong! :ping_pong: Dauerte "+bot.ws.ping+"ms!")
            }
        })

    },

    "report":function(command="", reportChannel=""){
        if(!command) return console.error("Kein Command angegeben!");
        if(!reportChannel) return console.error("Kein Report Kanal angegeben!")

        bot.on("message",async message=>{
            if(message.content.startsWith(command)){
                let channel = message.guild.channels.cache.find(ch=>ch.name === reportChannel);

                let user = message.mentions.users.first();

                let text = message.content.split(" ").slice(2).join(" ");

                if(!user) return message.reply("Keinen Nutzer zum Reporten angegeben!").then(msg=>msg.delete({timeout:"5000"}))

                if(!text) return message.reply("Du hast keinen grund angegeben! oder an die falsche Stelle gesetzt!").then(msg=>msg.delete({timeout:"5000"}))

                channel.send("``"+message.author.tag+"``"+" möchte ``"+user.tag+"`` reporten wegen:\n\n``"+text+"``")
            }
        })

    }
}


//bug report

//bot info

//userinfo

//serverinfo
