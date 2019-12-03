import React, { useState, useEffect } from 'react'
import axios from 'axios'

const QuoteBox = () => {
  const apiUrl = 'http://programming-quotes-api.herokuapp.com/quotes/random'
  const [quotes, setQuotes] = useState([])
  const getQuoteData = async () => {
    const resp = await axios.get(apiUrl)
    console.log(resp.data)
    setQuotes(resp.data)
  }

  useEffect(() => {
    getQuoteData()
  }, [])

  return (
    <>
      <main>
        <section>
          <img src="" alt="" />
          <p>{quotes.en}</p>
          <p>- {quotes.author}</p>
        </section>
      </main>
    </>
  )
}

export default QuoteBox
