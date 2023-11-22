// Importing all images
import ac_bf_01 from "../Images/ac_bf_image01.jpg"
import ac_bf_02 from "../Images/ac_bf_image02.jpg"
import ac_bf_03 from "../Images/ac_bf_image03.jpg"

import ac_v_01 from "../Images/ac_v_image01.jpg"
import ac_v_02 from "../Images/ac_v_image02.jpg"
import ac_v_03 from "../Images/ac_v_image03.jpg"

import cod_mw_01 from "../Images/cod_mw_2_image01.jpg"
import cod_mw_02 from "../Images/cod_mw_2_image02.jpg"
import cod_mw_03 from "../Images/cod_mw_2_image03.jpg"

import fc4_01 from "../Images/fc4_image01.jpg"
import fc4_02 from "../Images/fc4_image02.jpg"
import fc4_03 from "../Images/fc4_image03.jpg"

import gow4_01 from "../Images/gow4_image01.jpg"
import gow4_02 from "../Images/gow4_image02.jpg"
import gow4_03 from "../Images/gow4_image03.jpg"

import gtav_01 from "../Images/gtav_image01.jpg"
import gtav_02 from "../Images/gtav_image03.jpg"
import gtav_03 from "../Images/gtav_image02.jpg"

import nfs_pb_01 from "../Images/nfs_pb_image01.jpg"
import nfs_pb_02 from "../Images/nfs_pb_image02.jpg"
import nfs_pb_03 from "../Images/nfs_pb_image03.jpg"

import rdr2_01 from "../Images/rdr2_image01.jpg"
import rdr2_02 from "../Images/rdr2_image02.jpg"
import rdr2_03 from "../Images/rdr2_image03.jpg"

import re8_01 from "../Images/re_8_image01.jpg"
import re8_02 from "../Images/re_8_image02.jpg"
import re8_03 from "../Images/re_8_image03.jpg"

import tr_01 from "../Images/tr_image01.jpg"
import tr_02 from "../Images/tr_image02.jpg"
import tr_03 from "../Images/tr_image03.jpg"

import uc4_01 from "../Images/uc4_image01.jpg"
import uc4_02 from "../Images/uc4_image02.jpg"
import uc4_03 from "../Images/uc4_image03.jpg"

import wd2_01 from "../Images/wd2_image01.png"
import wd2_02 from "../Images/wd2_image02.png"
import wd2_03 from "../Images/wd2_image03.png"

import LU2_01 from "../Images/LU2_image01.jpg"
import LU2_02 from "../Images/LU2_image02.jpg"
import LU2_03 from "../Images/LU2_image03.jpg"

import tew_01 from "../Images/tew_image01.jpg"
import tew_02 from "../Images/tew_image02.jpg"
import tew_03 from "../Images/tew_image03.jpg"

import w_01 from "../Images/w_image01.jpg"
import w_02 from "../Images/w_image02.jpg"
import w_03 from "../Images/w_image03.jpg"

import gtaiv_01 from "../Images/gtaiv_image01.jpg"
import gtaiv_02 from "../Images/gtaiv_image02.jpg"
import gtaiv_03 from "../Images/gtaiv_image03.jpg"

import fh5_01 from "../Images/fh5_image01.jpg"
import fh5_02 from "../Images/fh5_image02.jpg"
import fh5_03 from "../Images/fh5_image03.jpg"


const Data = [
    {
        id : "01",
        title : "Assassin Creed Black Flag",
        price : 6000,
        image01 : ac_bf_01,
        image02 : ac_bf_02,
        image03 : ac_bf_03,
        company : "Ubisoft",
        category : "Stealth",
        desc : "Gameplay. Assassin's Creed IV: Black Flag is an action-adventure, stealth game set in an open world environment and played from a third-person perspective. The game features three main cities: Havana, Kingston, and Nassau, which reside under Spanish, British, and pirate influence, respectively."
    },

    {
        id : "02",
        title : "Assassin Creed Valhalla",
        price : 9000,
        image01 : ac_v_01,
        image02 : ac_v_02,
        image03 : ac_v_03,
        company : "Infinty Ward",
        category : "Stealth",
        desc : "Assassin's Creed Valhalla is an action role-playing video game structured around several main story arcs and numerous optional side-missions, called \"World Events\". The player takes on the role of Eivor Varinsdottir (/ˈeɪvɔːr/), a Viking raider, as they lead their fellow Vikings against the Anglo-Saxon kingdoms.",
    },

    {
        id : "03",
        title : "Call Of Duty: Modern Warfare",
        price : 9000,
        image01 : cod_mw_01,
        image02 : cod_mw_02,
        image03 : cod_mw_03,
        company : "Infinty Ward",
        category : "Fighting",
        desc : "Call of Duty: Modern Warfare 2 is a first person shooter, and its gameplay revolves around fast-paced gunfights against enemy combatants. The player controls a soldier who can perform several actions, including jump, sprint, crouch, lay prone, and aim down their gun's iron sights."
    },
    
    {
        id : "04",
        title : "Far Cry 4",
        price : 5500,
        image01 : fc4_01,
        image02 : fc4_02,
        image03 : fc4_03,
        company : "Ubisoft",
        category : "Survival",
        desc : "In Far Cry 4, players find themselves in Kyrat, a breathtaking, perilous and wild region of the Himalayas struggling under the regime of a despotic self-appointed king. Using a vast array of weapons, vehicles, and animals, players will write their own story across an exotic open-world landscape."
    },
    
    {
        id : "05",
        title : "God Of War 4",
        price : 11000,
        image01 : gow4_01,
        image02 : gow4_02,
        image03 : gow4_03,
        company : "Ubisoft",
        category : "Adventure",
        desc : "In God of War, players control Kratos, a Spartan warrior who is sent by the Greek gods to kill Ares, the god of war. As the story progresses, Kratos is revealed to be Ares' former servant, who had been tricked into killing his own family and is haunted by terrible nightmares."
    },
    
    {
        id : "06",
        title : "Grand Theft Auto V",
        price : 14500,
        image01 : gtav_01,
        image02 : gtav_02,
        image03 : gtav_03,
        company : "Rock Star",
        category : "Theft",
        desc : " Set within the fictional state of San Andreas, based on Southern California, the single-player story follows three protagonists—retired bank robber Michael De Santa, street gangster Franklin Clinton, and drug dealer and gunrunner Trevor Philips—and their attempts to commit heists while under pressure from a corrupt government agency and powerful criminals."
    },
    
    {
        id : "07",
        title : "Need For Speed Payback",
        price : 14500,
        image01 : nfs_pb_01,
        image02 : nfs_pb_02,
        image03 : nfs_pb_03,
        company : "EA Sports",
        category : "Car drive",
        desc : "Need for Speed Payback is a racing game set in an open world environment of Fortune Valley; a fictional version of Las Vegas, Nevada. It is focused on \"action driving\" and has three playable characters (each with different sets of skills) working together to pull off action movie-like sequences."
    },
    
    {
        id : "08",
        title : "Resident Evil 8",
        price : 7000,
        image01 : re8_01,
        image02 : re8_02,
        image03 : re8_03,
        company : "Capcom and Ubitus K.K",
        category : "Survival",
        desc : "Ethan Winters' world suddenly comes crashing down when Chris Redfield's appearance sets off a chain of events that ultimately leads him to a mysterious village. Years after defeating Eveline & the Bakers. Ethan Winters' wife & daughter are kidnapped and brought to a village deep within the snowy mountains of Europe."
    },
    
    {
        id : "09",
        title : "Shadow Of Tomb Raider",
        price : 6500,
        image01 : tr_01,
        image02 : tr_02,
        image03 : tr_03,
        company : "Edios-Montreal and Nixxes Software",
        category : "Survival",
        desc : "Shadow of the Tomb Raider is an action-adventure game played from a third-person perspective; players take on the role of Lara Croft as she explores environments across Mexico and Peru. In addition to standalone areas, the game has a large hub in the hidden city of Paititi."
    },
    
    {
        id : "10",
        title : "Watch dogs 2",
        price : 9500,
        image01 : wd2_01,
        image02 : wd2_02,
        image03 : wd2_03,
        company : "Ubisoft",
        category : "Hacking",
        desc : "Team up with Dedsec, a notorious group of hackers, to execute the biggest hack in history; take down ctOS 2.0, an invasive operating system being used by criminal masterminds to monitor and manipulate citizens on a massive scale"
    },

    {
        id : "11",
        title : "Uncharted 4: A Theif's End",
        price : 10000,
        image01 : uc4_01,
        image02 : uc4_02,
        image03 : uc4_03,
        company : "Naughty Dog",
        category : "Adventure",
        desc : "Uncharted 4: A Thief's End is an action-adventure game played from a third-person perspective, with platforming elements. Players traverse several environments, moving through locations including towns, buildings, and wilderness to advance through the game's story."
    },

    {
        id : "12",
        title : "The Last Of US Part 2",
        price : 12500,
        image01 : LU2_01,
        image02 : LU2_02,
        image03 : LU2_03,
        company : "Naughty Dog",
        category : "Survival",
        desc : "The Last of Us Part II is an action-adventure game played from a third-person perspective featuring elements of the survival horror genre. The player traverses post-apocalyptic environments such as buildings and forests to advance the story."
    },
   
    {
        id : "13",
        title : "The Within",
        price : 8500,
        image01 : tew_01,
        image02 : tew_02,
        image03 : tew_03,
        company : "Tango GameWorks",
        category : "Survival",
        desc : "Developed by Tango Gameworks and directed by Resident Evil series creator Shinji Mikami, The Evil Within embodies pure survival horror. As Detective Sebastian Castellanos, seek the dark truth behind a gruesome mass murder and its connection to a deranged world where hideous creatures wander among the dead."
    },
    
    {
        id : "14",
        title : "Witcher 3",
        price : 9500,
        image01 : w_01,
        image02 : w_02,
        image03 : w_03,
        company : "CD Projekt RED and CD Projekt",
        category : "Fighting",
        desc : "The Witcher 3: Wild Hunt is an action role-playing game with a third-person perspective. Players control Geralt of Rivia, a monster slayer known as a Witcher. Geralt walks, runs, rolls and dodges, and (for the first time in the series) jumps, climbs and swims."
    },
   
    {
        id : "15",
        title : "Grand Theft Auto IV",
        price : 7500,
        image01 : gtaiv_01,
        image02 : gtaiv_02,
        image03 : gtaiv_03,
        company : "Rock Star",
        category : "Theft",
        desc : "Grand Theft Auto IV is an action-adventure game played from a third-person perspective. Players complete missions—linear scenarios with set objectives—to progress through the story. It is possible to have several active missions running at one time, as some require players to wait for further instructions or events."
    },

    {
        id : "16",
        title : "Red Dead Redemption 2",
        price : 17500,
        image01 : rdr2_01,
        image02 : rdr2_02,
        image03 : rdr2_03,
        company : "Rock Star",
        category : "Theft",
        desc : "After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive."
    },
    {
        id : "17",
        title : "Forza Horizan 5",
        price : 16500,
        image01 : fh5_01,
        image02 : fh5_02,
        image03 : fh5_03,
        company : "Playground Games",
        category : "Car drive",
        desc : "Forza Horizon 5 is a racing video game set in an open world environment based in a fictional representation of Mexico. The game has the largest map in the entire Forza Horizon series, being 50% larger than its predecessor."
    },





]

export default Data