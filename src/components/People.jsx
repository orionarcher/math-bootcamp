import React from 'react'
import gs from '../images/gatsby-icon.png'
import orion from '../images/instructors/Orion.jpg'
import dipti from '../images/instructors/Dipti.jpg'
import elliot from '../images/instructors/Elliot.jpg'
import avishek from '../images/instructors/Avishek.jpg'
import rachel from '../images/instructors/Rachel.jpg'
import sonja from '../images/instructors/Sonja.jpg'
import richard from '../images/instructors/Richard.jpg'
import bailey from '../images/instructors/Bailey.jpg'
import aditya from '../images/instructors/Aditya.jpg'
import tarini from '../images/instructors/Tarini.jpg'

const  peopleu = [
    {
        name: "Orion Cohen",
        photo: orion,
        email: "orion@lbl.gov",
    },
    {
        name: "Dipti Jasrasaria",
        photo: dipti,
        email: "djasrasaria@berkeley.edu",
    },
    {
        name: "Elliot Rossome",
        photo: elliot,
        email: "elliot_rossomme@berkeley.edu",
    },
    {
        name: "Avishek Das",
        photo: avishek,
        email: "avishek_das@berkeley.edu",
    },
    {
        name: "Rachel Clune",
        photo: rachel,
        email: "rclune4b@berkeley.edu",
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
    }
];
const people = peopleu.sort((a, b) => a.name.split(' ')[1] > b.name.split(' ')[1] ? 1 : -1)


export default class People extends React.Component {
  render() {

    const people_divs = people.map((person) => {
        // TODO find place to store PDFs
        return (<div class='person'>
                    <img class="person-picture" src={person.photo} alt="Instructor"></img>
                    <h3 class="person-name">{person.name}</h3>
                    {/* <p class="person-email">{person.email}</p> */}

                </div>)
    });


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
            <div id="people_grid">
                {people_divs}
            </div>
            
        </div>
    )
  }
}
