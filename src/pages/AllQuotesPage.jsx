import React, { useState, useEffect } from 'react'
import axios from 'axios'

const AllQuotes = () => {
  const apiUrl = 'http://programming-quotes-api.herokuapp.com/quotes/page/1'
  const [quotes, setQuotes] = useState([])
  const getQuoteData = async () => {
    const resp = await axios.get(apiUrl)
    console.log(resp.data[0])
    setQuotes(resp.data[0])
  }

  useEffect(() => {
    getQuoteData()
  }, [])

  return (
    <>
      <main>
        <section>
          <p>Author - {quotes.author}</p>
          <p>Quote - {quotes.en}</p>
        </section>
      </main>
    </>
  )
}

export default AllQuotes
