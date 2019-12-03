import React, { useState, useEffect } from 'react'
import axios from 'axios'

const QuoteBox = () => {
  const apiUrl = 'http://programming-quotes-api.herokuapp.com/quotes/random'
  const [quotes, setQuotes] = useState([])
  const [showText, setShowText] = useState(false)
  const getQuoteData = async () => {
    const resp = await axios.get(apiUrl)
    setQuotes(resp.data)
  }

  useEffect(() => {
    getQuoteData()
    setShowText()
  }, [])

  const refresh = () => {
    window.location.reload()
  }

  return (
    <>
      <section className="quoteBox">
        <p>"{quotes.en}"</p>
        {showText && <p>- {quotes.author}</p>}
      </section>
      <section className="buttons">
        <button onClick={() => setShowText(!showText)}>
          I give up. Who said that?
        </button>
        <button onClick={() => refresh()}>Get A New Quote</button>
      </section>
    </>
  )
}

export default QuoteBox
