// export const mockData = {
//   response_code: 0,
//   results: [
//     {
//       type: "multiple",
//       difficulty: "easy",
//       category: "Sports",
//       question:
//         "Who won the premier league title in the 2015-2016 season following a fairy tale run?",
//       correct_answer: "Leicester City",
//       incorrect_answers: ["Tottenham Hotspur", "Watford", "Stoke City"],
//     },
//     {
//       type: "multiple",
//       difficulty: "easy",
//       category: "Science: Mathematics",
//       question: "What is the symbol for Displacement?",
//       correct_answer: "&Delta;r",
//       incorrect_answers: ["dr", "Dp", "r"],
//     },
//     {
//       type: "multiple",
//       difficulty: "hard",
//       category: "Entertainment: Books",
//       question:
//         "Which author co-wrote &quot;The Communist Manifesto&quot; alongside Karl Marx?",
//       correct_answer: "Friedrich Engels",
//       incorrect_answers: ["Robert Owen", "Alexander Kerensky", "Paul Lafargue"],
//     },
//     {
//       type: "multiple",
//       difficulty: "hard",
//       category: "Animals",
//       question: "Unlike on most salamanders, this part of a newt is flat?",
//       correct_answer: "Tail",
//       incorrect_answers: ["Head", "Teeth", "Feet"],
//     },
//     {
//       type: "multiple",
//       difficulty: "hard",
//       category: "Entertainment: Video Games",
//       question: "Which of these Pok&eacute;mon cannot learn Surf?",
//       correct_answer: "Arbok",
//       incorrect_answers: ["Linoone", "Tauros", "Nidoking"],
//     },
//     {
//       type: "multiple",
//       difficulty: "hard",
//       category: "History",
//       question:
//         "Before the American colonies switched to the Gregorian calendar in 1752, on what date did their new year start?",
//       correct_answer: "March 25th",
//       incorrect_answers: ["June 1st", "September 25th", "December 1st"],
//     },
//     {
//       type: "multiple",
//       difficulty: "hard",
//       category: "Entertainment: Video Games",
//       question:
//         "In the title of the game &quot;Luigi&#039;s Mansion&quot;, what is the only letter to not appear with a pair of eyes in it?",
//       correct_answer: "s",
//       incorrect_answers: ["n", "i", "m"],
//     },
//     {
//       type: "multiple",
//       difficulty: "medium",
//       category: "Entertainment: Music",
//       question:
//         "Which European capital city gives its name to a 1981 song by Ultravox?",
//       correct_answer: "Vienna",
//       incorrect_answers: ["Berlin", "Paris", "Brussels"],
//     },
//     {
//       type: "multiple",
//       difficulty: "hard",
//       category: "Vehicles",
//       question:
//         "What was the name of the first front-wheel-drive car produced by Datsun (now Nissan)?",
//       correct_answer: "Cherry",
//       incorrect_answers: ["Sunny", "Bluebird", "Skyline"],
//     },
//     {
//       type: "multiple",
//       difficulty: "medium",
//       category: "Entertainment: Music",
//       question:
//         "Which member of the British pop group &quot;The Spice Girls&quot; was known as Ginger Spice?",
//       correct_answer: "Geri Halliwell",
//       incorrect_answers: ["Melanie Brown", "Emma Bunton", "Victoria Beckham"],
//     },
//   ],

import { QuizResponse } from "@/store/quiz/types";

export const mockData: QuizResponse = {
  response_code: 0,
  results: [
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Film",
      question:
        "Who performed the opening theme song for the James Bond 007 movie &quot;Goldfinger&quot;?",
      correct_answer: "Shirley Basey",
      incorrect_answers: ["Tom Jones", "John Barry", "Sheena Easton"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Video Games",
      question:
        "Which ones of these Mario Kart games was made for the Gameboy Advance?",
      correct_answer: "Mario Kart: Super Circuit",
      incorrect_answers: [
        "Mario Kart: Double Dash",
        "Mario Kart 64",
        "Super Mario Kart",
      ],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Politics",
      question:
        "Who was the longest-serving senator in US history, serving from 1959 to 2010?",
      correct_answer: "Robert Byrd",
      incorrect_answers: ["Daniel Inouye", "Strom Thurmond", "Joe Biden"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Television",
      question:
        "What was the name of the police officer in the cartoon &quot;Top Cat&quot;?",
      correct_answer: "Dibble",
      incorrect_answers: ["Barbrady", "Mahoney", "Murphy"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "History",
      question:
        "In 1939, Britain and France declared war on Germany after it invaded which country?",
      correct_answer: "Poland",
      incorrect_answers: ["Czechoslovakia", "Austria", "Hungary"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Video Games",
      question:
        "Before it&#039;s redesign of the company logo in the year 2000, which 3D shape is NOT represented in the Electronic Arts logo?",
      correct_answer: "Cylinder",
      incorrect_answers: ["Pyramid", "Cube", "Sphere"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "General Knowledge",
      question: "Which of the following is not another name for the eggplant?",
      correct_answer: "Potimarron",
      incorrect_answers: ["Brinjal", "Guinea Squash", "Melongene"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Geography",
      question: "What is the capital of the American state of Arizona?",
      correct_answer: "Phoenix",
      incorrect_answers: ["Montgomery", "Tallahassee", "Raleigh"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Politics",
      question:
        "According to the United States Constitution, how old must a person be to be elected President of the United States?",
      correct_answer: "35",
      incorrect_answers: ["30", "40", "45"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Cartoon &amp; Animations",
      question:
        "Which city did Anger berate for ruining pizza in &quot;Inside Out&quot;?",
      correct_answer: "San Francisco",
      incorrect_answers: ["Minnesota", "Washington", "California"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Film",
      question: "Who plays the character of Po in the Kung Fu Panda movies?",
      correct_answer: "Jack Black",
      incorrect_answers: ["Mirana Jonnes", "McConahey Ramses", "Jim Petersson"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Video Games",
      question:
        "What video game sparked controversy because of its hidden &quot;Hot Coffee&quot; minigame?",
      correct_answer: "Grand Theft Auto: San Andreas",
      incorrect_answers: [
        "Grand Theft Auto: Vice City",
        "Hitman: Blood Money",
        "Cooking Mama",
      ],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Geography",
      question:
        "What is the capital of the State of Washington, United States?",
      correct_answer: "Olympia",
      incorrect_answers: ["Washington D.C.", "Seattle", "Yukon"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Video Games",
      question:
        "What is the name of the game developer who created &quot;Call Of Duty: Zombies&quot;?",
      correct_answer: "Treyarch",
      incorrect_answers: ["Sledgehammer Games", "Infinity Ward", "Naughty Dog"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Science: Computers",
      question:
        "Which of the following computer components can be built using only NAND gates?",
      correct_answer: "ALU",
      incorrect_answers: ["CPU", "RAM", "Register"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Science: Computers",
      question: "What does RAID stand for?",
      correct_answer: "Redundant Array of Independent Disks",
      incorrect_answers: [
        "Rapid Access for Indexed Devices",
        "Range of Applications with Identical Designs",
        "Randomized Abstract Identification Description",
      ],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Film",
      question:
        "What Queen song plays during the final fight scene of the film &quot;Hardcore Henry&quot;?",
      correct_answer: "Don&#039;t Stop Me Now",
      incorrect_answers: [
        "Brighton Rock",
        "Another Bites the Dust",
        "We Will Rock You",
      ],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "History",
      question: "Who was the leader of the Communist Party of Yugoslavia ?",
      correct_answer: "Josip Broz Tito",
      incorrect_answers: [
        "Karadjordje Petrovic",
        "Milos Obilic",
        "Aleskandar Petrovic",
      ],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Vehicles",
      question:
        "Which of the following car manufacturers had a war named after it?",
      correct_answer: "Toyota",
      incorrect_answers: ["Honda", "Ford", "Volkswagen"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Gadgets",
      question: "When did the CD begin to appear on the consumer market?",
      correct_answer: "1982",
      incorrect_answers: ["1992", "1972", "1962"],
    },
  ],
};
