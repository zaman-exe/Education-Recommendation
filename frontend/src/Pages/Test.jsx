import React, { useState } from "react";
import { toast } from "react-toastify";

const Test = () => {
  const [page, setPage] = useState(1); // Track current page
  const [answers, setAnswers] = useState(Array(10).fill("")); // Initialize array for 10 answers
  const maxPage = 5; // Maximum number of pages

  const questions = [
    "What are your top  skill or strength that you believe are essential for your future career?",
    "What type of work environment do you thrive in the most? ",
    "What are your long-term career goals, and how do you plan to achieve them?",
    "Describe a time when you successfully solved a challenging problem or overcame a significant obstacle. How did you handle it?",
    "What subjects or activities do you enjoy the most?",
    "What are your values and priorities when it comes to choosing a career?",
    "Describe a past experience where you demonstrated leadership or took initiative. How did it make you feel?",
    "How do you handle failure or setbacks in your academic or professional life?",
    "What industries or fields are you most interested in exploring for your future career? Why?",
    "Describe your ideal job role or position. What responsibilities and tasks would you like to have?",
  ];

  const labels = [
    ["Analytical", "Creative", "Organized", "Adaptable"],
    ["Collaborative", "Independent", "Fast-paced", "Structured"],
    ["Growth", "Leadership", "Work-life balance", "Financial success"],
    ["Problem-solving", "Decision-making", "Time management", "Conflict resolution"],
    ["STEM", "Humanities", "Arts", "Sports"],
    ["Work-life balance", "Salary", "Impact on society", "Job security"],
    ["Confident", "Empowered", "Motivated", "Responsible"],
    ["Learning opportunity", "Lesson for improvement", "Motivation to work harder", "Acceptance of reality"],
    ["Technology", "Healthcare", "Finance", "Education"],
    ["Leadership", "Problem-solving", "Creative thinking", "Team collaboration"],
  ];

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all questions are answered
    if (answers.some((answer) => answer === "")) {
      toast.error("Please answer all questions before submitting.");
    } else {
      // Here you can send answers to your backend or handle them as needed
      setPage(maxPage); // Move to results page
    }
  };

  const handlePageChange = (direction) => {
    if (direction === "next" && page < maxPage) {
      if (
        (page === 1 && answers.slice(0, 3).some(answer => answer === "")) ||
        (page === 2 && answers.slice(3, 6).some(answer => answer === "")) ||
        (page === 3 && answers.slice(6, 9).some(answer => answer === "")) ||
        (page === 4 && answers.slice(9).some(answer => answer === ""))
      ) {
        toast.error("Please answer all questions before proceeding.");
      } else {
        setPage(page + 1);
      }
    } else if (direction === "prev" && page > 1) {
      setPage(page - 1);
    }
  };

  const calculateAccuracy = () => {
    const answeredCount = answers.filter(answer => answer !== "").length;
    return ((answeredCount / questions.length) * 100).toFixed(2);
  };

  const handleRetakeTest = () => {
    setPage(1);
    setAnswers(Array(10).fill(""));
  };

  const handleClearResults = () => {
    setAnswers(Array(10).fill(""));
    setPage(1);
  };

  return (
    <div style={{ margin: "150px auto", maxWidth: "900px" }}>
      {page === maxPage ? (
        <div style={{ padding: "20px", border: "1px solid #ccc", marginBottom: "20px" }}>
          <h2>Test Results</h2>
          <div style={{ textAlign: "center" }}>
            <svg width="100" height="100">
              <circle cx="50" cy="50" r="40" stroke="#007bff" strokeWidth="8" fill="none" />
              <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="20" fill="#007bff">
                {calculateAccuracy()}%
              </text>
            </svg>
          </div>
          <div>
            <h2>Your Recommended degree is :</h2>
            <p>DEGREE 1</p>
            <p>DEGREE 2</p>
            <p>DEGREE 3</p>
          </div>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button
              style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer", backgroundColor: "#28a745", color: "#fff", border: "none", borderRadius: "5px", marginRight: "10px" }}
              onClick={handleRetakeTest}
            >
              Retake Test
            </button>
            <button
              style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer", backgroundColor: "#dc3545", color: "#fff", border: "none", borderRadius: "5px" }}
              onClick={handleClearResults}
            >
              Clear All Results
            </button>
          </div>
        </div>
      ) : (
        <>
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <h2>Page {page}</h2>
          </div>
          <form onSubmit={page === maxPage - 1 ? handleSubmit : undefined}>
            {questions.slice((page - 1) * 3, page === maxPage - 1 ? page * 3 + 1 : page * 3).map((question, index) => (
              <div key={index} style={{ marginBottom: "20px", padding: "10px", border: "1px solid #ccc", backgroundColor: "#f9f9f9" }}>
                <h5 style={{ marginBottom: "10px" }}>{question}</h5>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px", padding:"30px"}}>
                  {labels[(page - 1) * 3 + index].map((label, labelIndex) => (
                    <label key={labelIndex} style={{ marginBottom: "5px", fontSize: "16px" }}>
                      <input
                        type="radio"
                        name={`question-${(page - 1) * 3 + index}`}
                        value={label}
                        onChange={(e) => handleAnswerChange((page - 1) * 3 + index, e.target.value)}
                        checked={answers[(page - 1) * 3 + index] === label}
                      />
                      {label}
                    </label>
                  ))}
                </div>
              </div>
            ))}
            {page > 1 && (
              <button
                style={{ margin: "20px 10px", padding: "10px 20px", fontSize: "16px", cursor: "pointer", backgroundColor: "#dc3545", color: "#fff", border: "none", borderRadius: "5px" }}
                onClick={() => handlePageChange("prev")}
              >
                Previous Page
              </button>
            )}
            {page < maxPage && (
              <button
                style={{ margin: "20px 10px", padding: "10px 20px", fontSize: "16px", cursor: "pointer", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "5px" }}
                type="button"
                onClick={() => handlePageChange("next")}
              >
                Next Page
              </button>
            )}
            {page === maxPage - 1 && (
              <button
                style={{ margin: "20px 10px", padding: "10px 20px", fontSize: "16px", cursor: "pointer", backgroundColor: "#28a745", color: "#fff", border: "none", borderRadius: "5px" }}
                type="submit"
              >
                Submit Test
              </button>
            )}
          </form>
        </>
      )}
    </div>
  );
};

export default Test;
