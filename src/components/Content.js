import React from 'react'


const  notes = [
    {
        name: "Integration and Differentiation",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/chapters/Chapter_1.pdf"
    },
    {
        name: "Probability and Statistics",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/chapters/Chapter_2.pdf"
    },
    {
        name: "Linear Algebra 1",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/chapters/Chapter_3.pdf"
    },
    {
        name: "Linear Algebra 2",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/chapters/Chapter_4.pdf"
    },
    {
        name: "Linear Algebra 3",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/chapters/Chapter_5.pdf"
    },
    {
        name: "Fourier Analysis",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/chapters/Chapter_6.pdf"
    },
    {
        name: "Functions and Approximations",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/chapters/Chapter_7.pdf"
    },
    {
        name: "Differential Equations",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/chapters/Chapter_8.pdf"
    },
    {
        name: "Python Programming",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/chapters/Chapter_9.pdf"
    },
];

const  exercises = [
    {
        name: "Multivariable Calculus",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/problems/Problems_1.pdf"
    },
    {
        name: "Functions and Approximations",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/problems/Problems_2.pdf"
    },
    {
        name: "Python",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/problems/Problems_3.pdf"
    },
    {
        name: "Linear Algebra 1",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/problems/Problems_4.pdf"
    },
    {
        name: "Linear Algebra 2",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/problems/Problems_5.pdf"
    },
    {
        name: "Linear Algebra 3",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/problems/Problems_6.pdf"
    },
    {
        name: "Fourier Analysis",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/problems/Problems_7.pdf"
    },
    {
        name: "Differential Equations 1",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/problems/Problems_8.pdf"
    },
    {
        name: "Differential Equations 2",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/problems/Problems_9.pdf"
    },
    {
        name: "Probability and Statistics",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/problems/Problems_10.pdf"
    },
];

  
    export default class Content extends React.Component {
        render() {
            const notesList = notes.map((pdf) => {
                // TODO find place to store PDFs
                return (<li>
                            <a href={pdf.url} target="_blank">{pdf.name}</a>
                        </li>)
            })
            const exerciseList = exercises.map((pdf) => {
                // TODO find place to store PDFs
                return (<li>
                            <a href={pdf.url} target="_blank">{pdf.name}</a>
                        </li>)
        });

    return (
        <div>
            <h2 className="major">Content</h2>


            <p> We hope this content is useful for students, instructors, and anyone in between. 
                As published, this content is intended for personal use only. If you would like 
                to include this work in any other capacity, such as the construction of your own
                 Math Bootcamp, please contact us. </p>
                 
            <h3 className="minor">Full Text</h3>
                <a href={"https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/BootCamp2022.pdf"} target="_blank" rel="noreferrer" >Bootcamp Packet 2022</a>
                <p> </p>
            <h3 className="minor">Notes (2022)</h3>
            <ol>
                {notesList}
            </ol>
            <h3 className="Notes">Exercises (2021)</h3>
            <ol>
                {exerciseList}
            </ol>
            <h3 className="Notes">Solutions</h3>
            <p>Please contact us if you would like the solutions!</p>
            <p class='cc-license'>
                <a href="http://www.chemmathbootcamp.com/">
                    Math Bootcamp Notes: Preparation for Graduate Physical Chemistry Courses
                </a> by <span > Rachel Clune, Orion Cohen, Avishek Das, Dipti Jasrasaria, Elliot Rossomme </span> 
                is licensed under 
                <a href="http://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1" target="_blank"> CC BY-NC 4.0
                    <img class='cc-icon'
                         src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"></img>
                    <img class='cc-icon' 
                         src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"></img>
                    <img class='cc-icon'
                         src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"></img>
                </a>
            </p>
        </div>
    )
  }
}
