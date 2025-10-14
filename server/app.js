const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
const { Configuration, OpenAIApi } = require('openai')
require('dotenv').config()

// Initialize OpenAI API
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)
// Initialize Express app

// define a post endpoint to take {name} as input and return a greeting message
app.post('/api/greet', (req, res) => {
  const { name } = req.body
  if (!name) {
    return res.status(400).json({ error: 'Name is required' })
  }
  res.json({ message: `Hello, ${name}! Welcome to my portfolio.` })
})

app.post('/api/generate-text', async (req, res) => {
  const { prompt } = req.body
  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: prompt,
      max_tokens: 150,
      temperature: 0.7,
    })
    res.json({ text: response.data.choices[0].text.trim() })
  } catch (error) {
    console.error('Error generating text:', error)
    res.status(500).json({ error: 'Error generating text' })
  }
})
// Start server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
