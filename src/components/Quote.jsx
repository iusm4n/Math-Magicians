import React, { useState, useEffect } from 'react';
import './Quote.css';

const Quote = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const categories = [
          "age", "alone", "amazing", "anger", "architecture", "art", "attitude", "beauty", "best", "birthday",
          "business", "car", "change", "communication", "computers", "cool", "courage", "dad", "dating", "death",
          "design", "dreams", "education", "environmental", "equality", "experience", "failure", "faith", "family",
          "famous", "fear", "fitness", "food", "forgiveness", "freedom", "friendship", "funny", "future", "god",
          "good", "government", "graduation", "great", "happiness", "health", "history", "home", "hope", "humor",
          "imagination", "inspirational", "intelligence", "jealousy", "knowledge", "leadership", "learning", "legal",
          "life", "love", "marriage", "medical", "men", "mom", "money", "morning", "movies", "success"
        ];

        const response = await fetch(
          "https://api.api-ninjas.com/v1/quotes?category=" + categories[Math.floor(Math.random() * categories.length)],
          {
            method: "GET",
            headers: {
              "X-Api-Key": "4fJti4m5xnjkwXo8jm0iGA==rYiXvr5fw8plR5M9",
              "Content-Type": "application/json",
            },
          }
        );

        const result = await response.json();

        if (result && result.length > 0) {
          setQuote(result[0].quote);
        } else {
          setQuote('No quote available.');
        }
      } catch (error) {
        console.error('Error fetching quote:', error);
        setQuote('Error fetching quote.');
      }
    };

    fetchQuote();
  }, []); // Empty dependency array to fetch the quote only on component mount

  return (
    <>
      <section className="Quote-container">
        <p className='Quote'>{quote}</p>
      </section>
    </>
  );
};

export default Quote;
