import React from 'react'
import pic01 from '../images/pic01.jpg'


const  notes = [
    {
        name: "Multivariable Calculus (Notes).pdf",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/exercises/1.+Multivariable+Calculus+(Notes).pdf"
    },
    {
        name: "Functions and Approximations (Notes).pdf",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/exercises/2.+Functions+and+Approximations+(Notes).pdf"
    },
    {
        name: "Python (Notes).pdf",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/exercises/3.+Python+(Notes).pdf"
    },
    {
        name: "Linear Algebra 1 (Notes).pdf",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/exercises/4.+Linear+Algebra+1+(Notes).pdf"
    },
    {
        name: "Linear Algebra 2 (Notes).pdf",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/exercises/5.+Linear+Algebra+2+(Notes).pdf"
    },
    {
        name: "Linear Algebra 3 (Notes).pdf",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/exercises/6.+Linear+Algebra+3+(Notes).pdf"
    },
    {
        name: "Fourier Analysis (Notes).pdf",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/exercises/7.+Fourier+Analysis+(Notes).pdf"
    },
    {
        name: "Differential Equations 1 (Notes).pdf",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/exercises/8.+Differential+Equations+1+(Notes).pdf"
    },
    {
        name: "Differential Equations 2 (Notes).pdf",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/exercises/9.+Differential+Equations+2+(Notes).pdf"
    },
    {
        name: "Probability and Statistics (Notes).pdf",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/exercises/10.+Probability+and+Statistics+(Notes).pdf"
    },
];

const  exercises = [
    {
        name: "Multivariable Calculus (Exercises).pdf",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/exercises/1.+Multivariable+Calculus+(Exercises).pdf"
    },
    {
        name: "Functions and Approximations (Exercises).pdf",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/exercises/2.+Functions+and+Approximations+(Exercises).pdf"
    },
    {
        name: "Python (Exercises).pdf",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/exercises/3.+Python+(Exercises).pdf"
    },
    {
        name: "Linear Algebra 1 (Exercises).pdf",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/exercises/4.+Linear+Algebra+1+(Exercises).pdf"
    },
    {
        name: "Linear Algebra 2 (Exercises).pdf",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/exercises/5.+Linear+Algebra+2+(Exercises).pdf"
    },
    {
        name: "Linear Algebra 3 (Exercises).pdf",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/exercises/6.+Linear+Algebra+3+(Exercises).pdf"
    },
    {
        name: "Fourier Analysis (Exercises).pdf",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/exercises/7.+Fourier+Analysis+(Exercises).pdf"
    },
    {
        name: "Differential Equations 1 (Exercises).pdf",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/exercises/8.+Differential+Equations+1+(Exercises).pdf"
    },
    {
        name: "Differential Equations 2 (Exercises).pdf",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/exercises/9.+Differential+Equations+2+(Exercises).pdf"
    },
    {
        name: "Probability and Statistics (Exercises).pdf",
        url: "https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/exercises/10.+Probability+and+Statistics+(Exercises).pdf"
    },
];
    
    
    export default class Content extends React.Component {
        render() {
            const notesList = exercises.map((pdf) => {
                // TODO find place to store PDFs
                return (<li>
                            <a href={pdf.url}>{pdf.name}</a>
                        </li>)
            })
            const exerciseList = exercises.map((pdf) => {
                // TODO find place to store PDFs
                return (<li>
                            <a href={pdf.url}>{pdf.name}</a>
                        </li>)
        });

    return (
        <div>
            <h2 className="major">Content</h2>
            <h3 className="minor">Full Text</h3>
                <a href={"https://ucb-math-bootcamp.s3.us-west-1.amazonaws.com/BootCamp2021.pdf"}>Bootcamp Packet 2021</a>
                <p> </p>
            <h3 className="minor">Notes</h3>
            <ol>
                {notesList}
            </ol>
            <h3 className="Notes">Exercises</h3>
            <ol>
                {exerciseList}
            </ol>
        </div>
    )
  }
}
