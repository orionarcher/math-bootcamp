import React from 'react'
import gs from '../images/gatsby-icon.png'


const  peopleu = [
    {
        name: "Orion Cohen",
        photo: "../gatsby-icon.png",
        email: "orion@lbl.gov",
    },
    {
        name: "Dipti Jasrasaria",
        photo: "../gatsby-icon.png",
        email: "djasrasaria@berkeley.edu",
    },
    {
        name: "Elliot Rossome",
        photo: "../gatsby-icon.png",
        email: "elliot_rossomme@berkeley.edu",
    },
    {
        name: "Avishek Das",
        photo: "images/gatsby-icon.png",
        email: "avishek_das@berkeley.edu",
    },
    {
        name: "Rachel Clune",
        photo: "images/gatsby-icon.png",
        email: "rclune4b@berkeley.edu",
    },
    {
        name: "Sonja Bumann",
        photo: "../gatsby-icon.png",
        email: "skbumann@berkeley.edu",
    },
    {
        name: "Richard Kang",
        photo: "../gatsby-icon.png",
        email: "richard.kang@berkeley.edu",
    },
    {
        name: "Bailey Nebgen",
        photo: "../gatsby-icon.png",
        email: "email@berkeley.edu",
    },
    {
        name: "Aditya Singh",
        photo: "images/gatsby-icon.png",
        email: "ansingh@berkeley.edu",
    },
    {
        name: "Tarini Hardikar",
        photo: "images/gatsby-icon.png",
        email: "tarinihardikar@berkeley.edu",
    }
];
const people = peopleu.sort((a, b) => a.name.split(' ')[1] > b.name.split(' ')[1] ? 1 : -1)


export default class People extends React.Component {
  render() {

    const people_divs = people.map((person) => {
        // TODO find place to store PDFs
        return (<div class='person'>
                    <img class="person-picture" src={gs} alt="Instructor"></img>
                    <h3 class="person-name">{person.name}</h3>
                    {/* <p class="person-email">{person.email}</p> */}

                </div>)
    });

    const people_divs2 = people.map((person) => {
        // TODO find place to store PDFs
        return (<div class='person'>
                    <img class="person-picture" src={gs} alt="Instructor"></img>
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
