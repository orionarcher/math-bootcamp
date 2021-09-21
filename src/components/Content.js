import React from 'react'


const  notes = [
    {
        name: "Multivariable Calculus",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/notes/1.+Multivariable+Calculus+(Notes).pdf"
    },
    {
        name: "Functions and Approximations",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/notes/2.+Functions+and+Approximations+(Notes).pdf"
    },
    {
        name: "Python",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/notes/3.+Python+(Notes).pdf"
    },
    {
        name: "Linear Algebra 1",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/notes/4.+Linear+Algebra+1+(Notes).pdf"
    },
    {
        name: "Linear Algebra 2",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/notes/5.+Linear+Algebra+2+(Notes).pdf"
    },
    {
        name: "Linear Algebra 3",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/notes/6.+Linear+Algebra+3+(Notes).pdf"
    },
    {
        name: "Fourier Analysis",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/notes/7.+Fourier+Analysis+(Notes).pdf"
    },
    {
        name: "Differential Equations 1",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/notes/8.+Differential+Equations+1+(Notes).pdf"
    },
    {
        name: "Differential Equations 2",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/notes/9.+Differential+Equations+2+(Notes).pdf"
    },
    {
        name: "Probability and Statistics",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/notes/10.+Probability+and+Statistics+(Notes).pdf"
    },
];

const  exercises = [
    {
        name: "Multivariable Calculus",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/exercises/1.+Multivariable+Calculus+(Exercises).pdf"
    },
    {
        name: "Functions and Approximations",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/exercises/2.+Functions+and+Approximations+(Exercises).pdf"
    },
    {
        name: "Python",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/exercises/3.+Python+(Exercises).pdf"
    },
    {
        name: "Linear Algebra 1",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/exercises/4.+Linear+Algebra+1+(Exercises).pdf"
    },
    {
        name: "Linear Algebra 2",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/exercises/5.+Linear+Algebra+2+(Exercises).pdf"
    },
    {
        name: "Linear Algebra 3",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/exercises/6.+Linear+Algebra+3+(Exercises).pdf"
    },
    {
        name: "Fourier Analysis",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/exercises/7.+Fourier+Analysis+(Exercises).pdf"
    },
    {
        name: "Differential Equations 1",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/exercises/8.+Differential+Equations+1+(Exercises).pdf"
    },
    {
        name: "Differential Equations 2",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/exercises/9.+Differential+Equations+2+(Exercises).pdf"
    },
    {
        name: "Probability and Statistics",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/exercises/10.+Probability+and+Statistics+(Exercises).pdf"
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
                <a href={"https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/BootCamp2021_new.pdf"} target="_blank" rel="noreferrer" >Bootcamp Packet 2021</a>
                <p> </p>
            <h3 className="minor">Notes</h3>
            <ol>
                {notesList}
            </ol>
            <h3 className="Notes">Exercises</h3>
            <ol>
                {exerciseList}
            </ol>
            <h3 className="Notes">Solutions</h3>
            <p>Please contact us if you would like the solutions!</p>
        </div>
    )
  }
}
