import React, { useState, useEffect } from 'react'
import axios from 'axios'

const AllQuotes = () => {
  const apiUrl = 'http://programming-quotes-api.herokuapp.com/quotes/'
  const [quotes, setQuotes] = useState([[]])
  const getQuoteData = async () => {
    const resp = await axios.get(apiUrl)
    setQuotes(resp.data)
  }

  useEffect(() => {
    getQuoteData()
  }, [])

  return (
    <>
      <main>
        {quotes.map((quote, i) => {
          return (
            <section className="quoteBox" key={i}>
              <p>{quote.en}</p>
              <p>- {quote.author}</p>
            </section>
          )
        })}
      </main>
    </>
  )
}

export default AllQuotes
