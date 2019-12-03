import React, { useState, useEffect } from 'react'
import axios from 'axios'

const AllQuotes = () => {
  const apiUrl = 'http://programming-quotes-api.herokuapp.com/quotes/'
  const [quotes, setQuotes] = useState([[]])
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
        {quotes.map((quote, i) => {
          return (
            <section key={i}>
              <p>Author - {quote.author}</p>
              <p>Quote - {quote.en}</p>
            </section>
          )
        })}
      </main>
    </>
  )
}

export default AllQuotes
