import React from 'react'
import orion from '../images/instructors/Orion.jpg'
import dipti from '../images/instructors/Dipti.png'
import elliot from '../images/instructors/Elliot.png'
import avishek from '../images/instructors/Avishek.jpg'
import rachel from '../images/instructors/Rachel.png'
import sonja from '../images/instructors/Sonja.jpg'
import richard from '../images/instructors/Richard.jpg'
import bailey from '../images/instructors/Bailey.jpg'
import aditya from '../images/instructors/Aditya.jpg'
import tarini from '../images/instructors/Tarini.jpg'
import harrison from '../images/instructors/Harrison.jpeg'
import christian from '../images/instructors/Christian.jpg'
import tommy from '../images/instructors/Tommy.jpg'
import michelle from '../images/instructors/Michelle.png'
import wendy from '../images/instructors/Wendy.png'
import alex from '../images/instructors/Alex.jpg'
import songela from '../images/instructors/Songela.jpg'
import stephen from '../images/instructors/Stephen.jpg'
import xiao from '../images/instructors/Xiao.jpg'
import sam from '../images/instructors/Sam.jpg'
import rahoul from '../images/instructors/Rahoul.jpg'
import chaitali from '../images/instructors/Chaitali.jpg'
import dylanA from '../images/instructors/DylanA.jpg'
import dylanC from '../images/instructors/DylanC.png'
import jason from '../images/instructors/Jason.jpg'
import korina from '../images/instructors/Korina.jpg'
import ozgur from '../images/instructors/Ozgur.jpg'
import sohom from '../images/instructors/Sohom.jpg'
import wilma from '../images/instructors/Wilma.jpg'
import ygor from '../images/instructors/Ygor.jpg'
import qasim from '../images/instructors/Qasim.jpg'


const  peopleu = [
    {
        name: "Orion Cohen",
        photo: orion,
        email: "orion@lbl.gov",
        website: "https://orioncohen.com/",
    },
    {
        name: "Dipti Jasrasaria",
        photo: dipti,
        email: "djasrasaria@berkeley.edu",
        website: "https://diptijasrasaria.com/",
    },
    {
        name: "Elliot Rossomme",
        photo: elliot,
        email: "elliot_rossomme@berkeley.edu",
    },
    {
        name: "Avishek Das",
        photo: avishek,
        email: "avishek_das@berkeley.edu",
        website: "https://kavli.berkeley.edu/avishek-das",
    },
    {
        name: "Rachel Clune",
        photo: rachel,
        email: "rclune4b@berkeley.edu",
        website: "https://www.linkedin.com/in/rclune/",
    },
    {
        name: "Sonja Bumann",
        photo: sonja,
        email: "skbumann@berkeley.edu",
    },
    {
        name: "Richard Kang",
        photo: richard,
        email: "richard.kang@berkeley.edu",
    },
    {
        name: "Bailey Nebgen",
        photo: bailey,
        email: "email@berkeley.edu",
    },
    {
        name: "Aditya Singh",
        photo: aditya,
        email: "ansingh@berkeley.edu",
    },
    {
        name: "Tarini Hardikar",
        photo: tarini,
        email: "tarinihardikar@berkeley.edu",
        website: "https://www.linkedin.com/in/tarinihardikar/",
    },
    {
        name: "Harrison Tuckman",
        photo: harrison,
        email: "hgtuckman@berkeley.edu",
    },
    {
        name: "Christian Tanner",
        photo: christian,
        email: "hgtuckman@berkeley.edu",
        website: "http://www.cchem.berkeley.edu/nsggrp/group.html",
    },
    {
        name: "Tommy Lin",
        photo: tommy,
        email: "hgtuckman@berkeley.edu",
        website: "https://www.linkedin.com/in/tommy-lin/",
    },
    {
        name: "Michelle Anderson",
        photo: michelle,
        email: "hgtuckman@berkeley.edu",
    },
    {
        name: "Wendy Billings",
        photo: wendy,
        email: "hgtuckman@berkeley.edu",
    },
    {
        name: "Aleksandr Smirnov",
        photo: alex,
        email: "alexsmirnov@berkeley.edu",
    },
    {
        name: "Songela Chen",
        photo: songela,
        email: "songela@berkeley.edu",
    },
    {
        name: "Stephen Quiton",
        photo: stephen,
        email: "stephen.quiton@berkeley.edu",
    },
    {
        name: "Xiao Liu",
        photo: xiao,
        email: "xiao_liu@berkeley.edu",
    },
    {
        name: "Sam Oaks-Leaf",
        photo: sam,
        email: "sam_oaks@berkeley.edu",
    },
    {
        name: "Rahoul Banerjee Ghosh",
        photo: rahoul,
        email: "rahoulbanerjeeghosh@berkeley.edu",
    },
    {
        name: "Özgür Şahin",
        photo: ozgur,
        email: "ozgur_sahin@berkeley.edu",
    },
    {
        name: "Dylan Almeida",
        photo: dylanA,
        email: "daalmeida@berkeley.edu",
    },
    {
        name: "Dylan Cleveland",
        photo: dylanC,
        email: "dcleveland@berkeley.edu",
    },
    {
        name: "Jason Tae Yi",
        photo: jason,
        email: "jtyi@berkeley.edu",
    },
    {
        name: "Korina Vlahos",
        photo: korina,
        email: "kvlahos@berkeley.edu",
    },
    {
        name: "Sohom Das",
        photo: sohom,
        email: "sohom_das@berkeley.edu",
    },
    {
        name: "Wilma Rishko",
        photo: wilma,
        email: "wrishko@berkeley.edu",
    },
    {
        name: "Ygor de Santana y Moura",
        photo: ygor,
        email: "ygor@berkeley.edu",
    },
    {
        name: "Chaitali Shah",
        photo: chaitali,
        email: "chaitali_shah@berkeley.edu",
    },
    {
        name: "Qasim Javed",
        photo: qasim,
        email: "qasim_javed@berkeley.edu",
    },
]
// alphabetize
const people = peopleu.sort((a, b) => a.name.split(' ')[1] > b.name.split(' ')[1] ? 1 : -1)
const leaderNames = [
    "Aleksandr Smirnov",
    "Rahoul Banerjee Ghosh",
    "Xiao Liu",
    "Sam Oaks-Leaf",
    "Songela Chen",
    "Stephen Quiton",
    "Chaitali Shah",
    "Özgür Şahin",
    "Dylan Almeida",
    "Dylan Cleveland",
    "Jason Tae Yi",
    "Korina Vlahos",
    "Sohom Das",
    "Wilma Rishko",
    "Ygor de Santana y Moura",
    "Qasim Javed",
]
const leaders = people.filter(person => leaderNames.includes(person.name))
const lecturerNames = [
    
    "Sam Oaks-Leaf",
    "Songela Chen",
    "Stephen Quiton",
    "Korina Vlahos",
    "Jason Tae Yi",
]
const lecturers = people.filter(person => lecturerNames.includes(person.name))
const founderNames = [
    "Orion Cohen", 
    "Dipti Jasrasaria", 
    "Elliot Rossomme",
    "Avishek Das",
]
const founders = people.filter(person => founderNames.includes(person.name))
const alumniNames = [
    "Dipti Jasrasaria",
    "Elliot Rossomme",
    "Avishek Das",
    "Orion Cohen", 
    "Rachel Clune",
    "Tarini Hardikar",
    "Aditya Singh",
    "Richard Kang",
    "Sonja Bumann",
    "Bailey Nebgen",
    "Harrison Tuckman",
    "Tommy Lin",
    "Christian Tanner",
    "Michelle Anderson",
    "Wendy Billings",
]
const alumni = people.filter(person => alumniNames.includes(person.name))


export default class People extends React.Component {
  render() {

    function peopleDivMaker(peopleArray) {
        return peopleArray.map((person) => {
            let classes = "person-picture";
            if (person.website) {
                return (<div class='person has-website'>
                            <a class='person-holder' href={person.website} target="_blank" rel="noreferrer" >
                                <img class="person-picture has-website" src={person.photo} alt="Instructor"></img>
                                <div class="logo-holder">
                                    <span className="icon fa-address-card website"></span>
                                </div>
                            </a>
                            <h3 class="person-name">{person.name}</h3>
                        </div>)
            } else {
                return (<div class='person'>
                            <img class="person-picture" src={person.photo} alt="Instructor"></img>
                            <h3 class="person-name">{person.name}</h3>
                        </div>)
            }
       });
    }
    
    const leaderDivs = peopleDivMaker(leaders);
    const lecturerDivs = peopleDivMaker(lecturers);
    const founderDivs = peopleDivMaker(founders);
    const alumniDivs = peopleDivMaker(alumni);


    return (
        <div>
            <div>
                <h2 className="major">People</h2>
            </div>
            <p>
                The bootcamp was made possible by the dedication
                of graduate students in the UC Berkeley Department
                of Chemistry. In addition to organizing and hosting a week
                of classes, the students below wrote all the content, lectures,
                exercises, and solutions.
            </p>
            <h3 className="minor align-center">Content Developers and Lecturers</h3>
                <div class="people_grid">
                    {lecturerDivs}
                </div>
            <h3 className="minor align-center">Discussion Leaders</h3>
                <div class="people_grid">
                    {leaderDivs}
                </div>
            <h3 className="minor align-center">Founders</h3>
                <div class="people_grid founder">
                    {founderDivs}
                </div>    
            <h3 className="minor align-center">Alumni</h3>
            <div className="people_grid">
                {alumniDivs}
            </div>

            
        </div>
    )
  }
}
