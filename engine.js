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
                if(message.author.username != owner) return message.reply("Sorry, aber du bist nicht der Bot Owner oder du hast nicht deinen Discord namen angegeben.").then(msg=>msg.delete({timeout:"5000"}))
                if(message.guild) message.delete()
                let embedallgemein = new Discord.MessageEmbed()
                .setTitle("engine.js Hilfe | Allgemein")
                .setColor("YELLOW")
                .setThumbnail(bot.user.avatarURL())
                .setURL("https://sites.google.com/view/simple-HTMLGames-de")
                .addField("**ACHTUNG!!!**","die <> oder () nicht mitschreiben! Das was darin steht auch nicht! BSP: als __<command>__ schreib __!help__ \n __<__command__>__ = pflicht, __(__command__)__ = freiwillig")
                .addField("**engine.createBot(<token>,<botOwner>,(logMessage))**","__token__: Bot Token\n\n__botOwner__: Discord Name von dir <ohne #nummer>\n\n__logMessage__: Was in der Console steht wenn der Bot startet")
                .addField("**engine.sendMessage(<command>,<content>)**","__command__: Bei welchem Command das ausgeführt werden soll\n\n__content__: Was in der Nachricht stehen soll")
                .addField("**engine.createEmbed(<command>,<title>,<desc>,<color>)**","__command__: Bei welchem Command das ausgeführt werden soll\n\n__title__: Titel\n\n__desc__: Beschreibung\n\n__color__: Farbe (RANDOM,RED,YELLOW,GREEN,0x0ff674...)")
                .addField("**engine.botStatus(<status>,<statusType>,(mode))**","__status__: Status Text\n\n__statusType__: den Typ: __playing__, __listening__,__watching__\n\n__mode__: Der StatusModus: __dnd__ (Bitte Nicht Stören), __idle__ (Abwesend), __online__ (Online)")
                .addField("**engine.changeStatus(<[status1,status2,status3...]>,<statusType>,(mode))**","__status 1, 2, 3...__: Status Text\n\n__statusType__: den Typ: __playing__, __listening__,__watching__\n\n__mode__: Der StatusModus: __dnd__ (Bitte Nicht Stören), __idle__ (Abwesend), __online__ (Online)")
                .addField("**engine.logMessage(<state>)**","__state__: legt fest ob Nachrichten geloggt werden sollen oder nicht: __true__: Ja / __false__: Nein")
                .addField("**engine.botPing(<command>, <state>)**","__command__: Bei welchem Command das ausgeführt werden soll\n\n__state__: legt fest ob der Befehl aktiviert sein soll oder nicht: __true__: Ja / __false__: Nein")
                .setFooter("Made with engine.js by TheMinecrafter05")


                let embedmessages = new Discord.MessageEmbed()
                .setTitle("engine.js Hilfe | Commands / Messages")
                .setColor("RED")
                .setThumbnail(bot.user.avatarURL())
                .setURL("https://sites.google.com/view/simple-HTMLGames-de")
                .addField("**ACHTUNG!!!**","die <> oder () nicht mitschreiben! Das was darin steht auch nicht! BSP: als __<command>__ schreib __!help__ \n __<__command__>__ = pflicht, __(__command__)__ = freiwillig")
                .addField("**engine.clearCommand(<command>)**","__command__: Bei welchem Command das ausgeführt werden soll")
                .addField("**engine.kickCommand(<command>)**", "__command__: Bei welchem Command das ausgeführt werden soll")
                .addField("**engine.banCommand(<command>)**", "__command__: Bei welchem Command das ausgeführt werden soll")
                .addField("**engine.random(<command>,<maxNumber>,<output>**", "__command__: Bei welchem Command das ausgeführt werden soll\n\n__maxNumber__: Die größte Zahl die kommen kann\n\n__output__: Der Text vor der Nummer")
                .addField("**engine.twoOutRandom(<command>,<output1>,<output2>)**","__command__: Bei welchem Command das ausgeführt werden soll\n\n__output1__: Die erste Möglichkeit\n\n__output2__: Die 2te Möglichkeit")
                .addField("**engine.threeOutRandom(<command>,<output1>,<output2>,<output3>)**","__command__: Bei welchem Command das ausgeführt werden soll\n\n__output1__: Die erste Möglichkeit\n\n__output2__: Die 2te Möglichkeit\n\n__output3__: Die 3te Möglichkeit")
                .addField("**engine.fourOutRandom(<command>,<output1>,<output2>,<output3>,<output4>)**","__command__: Bei welchem Command das ausgeführt werden soll\n\n__output1__: Die erste Möglichkeit\n\n__output2__: Die 2te Möglichkeit\n\n__output3__: Die 3te Möglichkeit\n\n__output4__: Die 4te Möglichkeit")
                .addField("**engine.addRole(<command>)**","__command__: Bei welchem Command das ausgeführt werden soll")
                .addField("**engine.speak(<command>)**","__command__: Bei welchem Command das ausgeführt werden soll")
                .setFooter("Made with engine.js by TheMinecrafter05")



                let embedwelcome = new Discord.MessageEmbed()
                .setTitle("engine.js Hilfe | Welcome / Leave")
                .setColor("GREEN")
                .setThumbnail(bot.user.avatarURL())
                .setURL("https://sites.google.com/view/simple-HTMLGames-de")
                .addField("**ACHTUNG!!!**","die <> oder () nicht mitschreiben! Das was darin steht auch nicht! BSP: als __<command>__ schreib __!help__ \n __<__command__>__ = pflicht, __(__command__)__ = freiwillig")
                .addField("**engine.welcome(<channelName>,(message))**","__channelName__: Der Name des Kanals\n\n__message__: Die Nachricht vor der User Erwähnung")
                .addField("**engine.leave(<channelName>,(message))**","__channelName__: Der Name des Kanals\n\n__message__: Die Nachricht vor der User Erwähnung")
                .addField("**engine.welcomeEmbed(<channelName>,(thumbnail),(message),(color))**","__channelName__: Der Name des Kanals\n\n__thumbnail__: Das Bild in dem Embed\n\n__message__: Die Nachricht vor der User Erwähnung\n\n__color__: Die farbe des Embeds")
                .addField("**engine.leaveEmbed(<channelName>,(thumbnail),(message),(color))**","__channelName__: Der Name des Kanals\n\n__thumbnail__: Das Bild in dem Embed\n\n__message__: Die Nachricht vor der User Erwähnung\n\n__color__: Die farbe des Embeds")
                .addField("**engine.welcomeRole(<roleName>)**","__roleName__: Name der Rolle")
                .setFooter("Made with engine.js by TheMinecrafter05")


                let embeduser = new Discord.MessageEmbed()
                .setTitle("engine.js Hilfe | User / Server")
                .setColor("BLUE")
                .setThumbnail(bot.user.avatarURL())
                .setURL("https://sites.google.com/view/simple-HTMLGames-de")
                .addField("**ACHTUNG!!!**","die <> oder () nicht mitschreiben! Das was darin steht auch nicht! BSP: als __<command>__ schreib __!help__ \n __<__command__>__ = pflicht, __(__command__)__ = freiwillig")
                .addField("**engine.userinfo(<command>,<name>,<id>,<discriminator>,<isbot>,<createtAt>,(color))","__command__: Bei welchem Command das ausgeführt werden soll\n__name__:ob der der name angezeigt wird: __true__: Ja / __false__: Nein\n\n__id__: Ob die ID angezeigt werden soll: __true__: Ja / __false__: Nein\n\n__discriminator__: Ob die Nummer angezeigt werden soll: __true__: Ja / __false__: Nein\n\n__isbot__: Ob die Botbestätigung angezeigt werden soll: __true__: Ja / __false__: Nein\n\n__createtAt__: ob das Erstelldatum des Nutzers angezeigt werden soll: __true__: Ja / __false__: Nein\n\n__color__: Farbe des Embeds")
                .addField("**engine.serverinfo(<command>,<name>,<id>,<members>,<location>,<owner>,(color))","__command__: Bei welchem Command das ausgeführt werden soll\n__name__:ob der der name angezeigt wird: __true__: Ja / __false__: Nein\n\n__id__: Ob die ID angezeigt werden soll: __true__: Ja / __false__: Nein\n\n__members__: Ob die Mitgliedernummer angezeigt werden soll: __true__: Ja / __false__: Nein\n\n__location__: Ob die Region angezeigt werden soll: __true__: Ja / __false__: Nein\n\n__owner__: ob der Ersteller des Servers angezeigt werden soll: __true__: Ja / __false__: Nein\n\n__color__: Farbe des Embeds")
                .addField("**engine.botInfo(<command>,<state>,(color))**","__command__: Bei welchem Command das ausgeführt werden soll\n\n__state__: legt fest ob der Befehl aktiviert sein soll oder nicht: __true__: Ja / __false__: Nein\n\n__color__: Farbe des Embeds")
                .setFooter("Made with engine.js by TheMinecrafter05")

                message.author.send(embedallgemein)
                message.author.send(embedmessages)
                message.author.send(embedwelcome)
                message.author.send(embeduser)
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

    "changeStatus":function(status=[],statusType="",mode=""){
        bot.on("ready",()=>{

            if(status.length < 2) return console.error("Es müssen mindestens 2 Status sein.")

            let rstatus

            setInterval(()=>{
                rstatus = status[Math.floor(Math.random() * status.length)]
                bot.user.setActivity(rstatus,{type:`${statusType.toUpperCase()}`});
            },5000)
            
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

    "welcomeEmbed":function(channelName="",message="",color="",thumbnail=""){
        if(!channelName ||channelName == "") return console.error("Keinen Willkommens Kanal angegeben!");
        if(!thumbnail.startsWith("http")) return console.error("thumbnail ist keine URL")
        bot.on("guildMemberAdd",async member=>{
            const channel = member.guild.channels.cache.find(ch => ch.name === `${channelName}`);
            if(!channel) return console.error("Kann den Kanal **"+channelName+"** nicht finden!")
            if(!thumbnail || thumbnail == "") thumbnail = member.avatarURL();
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

    "userinfo":function(command="",name=true,id=true,discriminator=false,isbot=false,createtAt=false,color=""){
        bot.on("message", async message=>{
            if(!message.guild) return;
            if(!command) return console.error("Kein Command angegeben!");

            if(message.content.startsWith(command)){

                var user = message.mentions.users.first() || message.author;

                let timetime = `${user.createdAt}`

                let day = `${user.createdAt}`

                let daydate = `${user.createdAt}`

                let month = `${user.createdAt}`

                let year = `${user.createdAt}`

                day = day.split(" ").slice(0,1)

                daydate = daydate.split(" ").slice(2,3)

                month = month.split(" ").slice(1,2)

                year = year.split(" ").slice(3,4)

                timetime = timetime.split(" ").slice(4,5)

                if(day == "Mon") day = "Montag"
                if(day == "Tue") day = "Dienstag"
                if(day == "Wed") day = "Mittwoch"
                if(day == "Thu") day = "Donnerstag"
                if(day == "Fri") day = "Freitag"
                if(day == "Sat") day = "Samstag"
                if(day == "Sun") day = "Sonntag"

                if(month == "Jan") month = "Januar"
                if(month == "Feb") month = "Februar"
                if(month == "Mar") month = "März"
                if(month == "Apr") month = "April"
                if(month == "May") month = "Mai"
                if(month == "Jun") month = "Juni"
                if(month == "Jul") month = "Juli"
                if(month == "Aug") month = "August"
                if(month == "Sep") month = "September"
                if(month == "Oct") month = "Oktober"
                if(month == "Nov") month = "November"
                if(month == "Dec") month = "September"

                let time = `${day}, der ${daydate}. ${month} ${year} um ${timetime}`

                let userinfo = {
                    "avatar":user.avatarURL(),
                    "tag":user.tag,
                    "name":user.username,
                    "id":user.id,
                    "discrim":user.discriminator,
                    "createt":user.createdAt,
                    "bot":user.bot
                }

                if(name == false || name == "" && id == false || id == "" && discriminator == false || discriminator == "" && isbot == false || isbot == "" && createtAt == false || createtAt == ""){
                    return message.reply("Es muss mindestens ein Feld augefüllt sein!").then(msg=>{
                        msg.delete({timeout:"5000"})
                    })
                }

                let embed = new Discord.MessageEmbed()
                .setTitle("**User Info von** "+user.tag)
                .setURL("https://sites.google.com/view/simple-htmlgames-de")
                .setThumbnail(userinfo.avatar)
                if(name == true){
                    embed.addField("Name:",userinfo.name)
                }

                if(id == true){
                    embed.addField("ID",userinfo.id)
                }

                if(discriminator == true){
                    embed.addField("Nummer:",userinfo.discrim)
                }

                if(isbot == true){
                    embed.addField("Bot:",userinfo.bot)
                }

                if(createtAt == true){
                    embed.addField("Erstellt am:",time)
                }

                if(!color ||color == ""){
                    color = "RANDOM"
                }      

                embed.setColor(color)
                embed.setFooter("Made with engine.js by TheMinecrafter05")

                message.channel.send(embed)
            }
        })
    },

    "serverinfo":function(command="",name=true,id=true,members=true,location=false,owner=false,color=""){
        bot.on("message", async message=>{
            if(!message.guild) return;
            if(message.content === command){
                let serverinfo = {
                    "name":message.guild.name,
                    "id":message.guild.id,
                    "members":message.guild.members.cache.size,
                    "location":message.guild.region,
                    "owner":message.guild.owner.user.tag
                }

                let embed = new Discord.MessageEmbed()
                .setTitle("**SERVERINFO**")
                .setThumbnail(message.guild.iconURL())
                if(name == true){
                    embed.addField("Name: ",serverinfo.name)
                }
                if(id == true){
                    embed.addField("ID: ",serverinfo.id)
                }
                if(members == true){
                    embed.addField("Mitglieder: ",serverinfo.members)
                }
                if(location == true){
                    if(serverinfo.location == "europe") serverinfo.location = "Europa"
                    if(serverinfo.location == "brazil") serverinfo.location = "Brasilien"
                    if(serverinfo.location == "hongkong") serverinfo.location = "Hong Kong"
                    if(serverinfo.location == "india") serverinfo.location = "Indien"
                    if(serverinfo.location == "japan") serverinfo.location = "Japan"
                    if(serverinfo.location == "russia") serverinfo.location = "Russland"
                    if(serverinfo.location == "singapore") serverinfo.location = "Singapur"
                    if(serverinfo.location == "southafrica") serverinfo.location = "Süd Afrika"
                    if(serverinfo.location == "sydney") serverinfo.location = "Sydney"
                    if(serverinfo.location == "us-central") serverinfo.location = "USA Mitte"
                    if(serverinfo.location == "us-east") serverinfo.location = "USA Osten"
                    if(serverinfo.location == "us-south") serverinfo.location = "USA Süden"
                    if(serverinfo.location == "us-west") serverinfo.location = "USA Westen"
                    embed.addField("Region: ",serverinfo.location)
                }
                if(owner == true){
                    embed.addField("Owner: ",serverinfo.owner)
                }
                if(!color || color == ""){
                    color = "RANDOM"
                }
                embed.setColor(color)

                if(name == "" || !name && id == "" || !id && members == "" || !members && location == "" || !location && owner == "" ||!owner){
                    console.error("Es muss mindestens ein Feld ausgefüllt sein!")
                    return;
                }

                message.channel.send(embed)
                
            }
        })
    },

    "botinfo":function(command="",state=false,color=""){
        bot.on("message", async message=>{
            if(message.content == command && state == true){

                let timetime = `${bot.user.createdAt}`

                let day = `${bot.user.createdAt}`

                let daydate = `${bot.user.createdAt}`

                let month = `${bot.user.createdAt}`

                let year = `${bot.user.createdAt}`

                day = day.split(" ").slice(0,1)

                daydate = daydate.split(" ").slice(2,3)

                month = month.split(" ").slice(1,2)

                year = year.split(" ").slice(3,4)

                timetime = timetime.split(" ").slice(4,5)

                if(day == "Mon") day = "Montag"
                if(day == "Tue") day = "Dienstag"
                if(day == "Wed") day = "Mittwoch"
                if(day == "Thu") day = "Donnerstag"
                if(day == "Fri") day = "Freitag"
                if(day == "Sat") day = "Samstag"
                if(day == "Sun") day = "Sonntag"

                if(month == "Jan") month = "Januar"
                if(month == "Feb") month = "Februar"
                if(month == "Mar") month = "März"
                if(month == "Apr") month = "April"
                if(month == "May") month = "Mai"
                if(month == "Jun") month = "Juni"
                if(month == "Jul") month = "Juli"
                if(month == "Aug") month = "August"
                if(month == "Sep") month = "September"
                if(month == "Oct") month = "Oktober"
                if(month == "Nov") month = "November"
                if(month == "Dec") month = "September"

                let time = `${day}, der ${daydate}. ${month} ${year} um ${timetime}`

                let embed = new Discord.MessageEmbed()
                .setTitle("**BOT Info**")
                .setThumbnail(bot.user.avatarURL())
                .addField("Name:",bot.user.username)
                .addField("ID: ",bot.user.id)
                .addField("Erstellt am: ",time)
                .addField("Owner: ",owner)
                .addField("Bot erstellt mit:","engine.js by TheMinecrafter05 [[CLICK]](https://sites.google.com/view/simple-htmlgames-de/engine-js) to download")
                .setFooter("Made with engine.js by TheMinecrafter05")
                if(color){
                    embed.setColor(color)
                }else{
                    embed.setColor("RANDOM")
                }

                message.channel.send(embed)
            }
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
            if(!message.guild) return;
            if(message.content === command){
                message.channel.send("Pong! :ping_pong: Dauerte "+bot.ws.ping+"ms!")
            }
        })

    },

    "report":function(command="", reportChannel=""){
        if(!command) return console.error("Kein Command angegeben!");
        if(!reportChannel) return console.error("Kein Report Kanal angegeben!")

        bot.on("message",async message=>{
            if(!message.guild) return;
            if(message.content.startsWith(command)){
                let channel = message.guild.channels.cache.find(ch=>ch.name === reportChannel);

                let user = message.mentions.users.first();

                let text = message.content.split(" ").slice(2).join(" ");

                if(!user) return message.reply("Keinen Nutzer zum Reporten angegeben!").then(msg=>msg.delete({timeout:"5000"}))

                if(!text) return message.reply("Du hast keinen grund angegeben! oder an die falsche Stelle gesetzt!").then(msg=>msg.delete({timeout:"5000"}))

                let embed = new Discord.MessageEmbed()
                .setTitle("**REPORT**")
                .setThumbnail(user.avatarURL())
                .setDescription("``"+message.author.tag+"``"+" möchte ``"+user.tag+"`` reporten.\n\nGrund: ``"+text+"``")
                .setColor("RED")
                .setFooter("Made with engine.js by TheMinecrafter05")
                channel.send(embed)
            }
        })

    }

    
}


//-------------NEXT VERSION-------------

//xp system

//money system

//private channel system

//permissionCommand

//permissionEmbed
