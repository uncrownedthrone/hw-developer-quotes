import React, { useState, useEffect } from 'react'
import axios from 'axios'

const QuoteBox = () => {
  const apiUrl = 'http://programming-quotes-api.herokuapp.com/quotes/random'
  const [quotes, setQuotes] = useState([])
  const getQuoteData = async () => {
    const resp = await axios.get(apiUrl)
    console.log(resp)
  }

  useEffect(() => {
    getQuoteData()
  }, [])

  return (
    <>
      <section>
        <h1>Developer Quotes</h1>
        <img src="" alt="" />
        <p>Quote</p>
        <p>- Name</p>
      </section>
    </>
  )
}

export default QuoteBox
