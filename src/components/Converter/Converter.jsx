import React, {useState, useEffect} from 'react'
import './Converter.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

function Converter () {

  const [text, setText] = useState()
  const [text2, setText2] = useState()
  const [country, setCountry] = useState([])
  const [country2, setCountry2] = useState([])
  const [value, setValue] = useState(1)
  const [value2, setValue2] = useState(1)

  useEffect(() => {
    getdata();
  }, [])

  async function getdata() {
    const result = await axios.get(
      `http://data.fixer.io/api/latest?access_key=2e3a0e63f9d075825db91c1fe0ae4c5f`
    )

    setCountry(result.data.rates)
    setCountry2(result.data.rates)
  }

  function convert(e) {
    e.preventDefault()
    let num = (value2/value) * text
    setText2(num)
  }

    return (
      <>
      <Paper className="paper" id="paper-id">
        <h1>Curency Converter</h1>
        <form onSubmit={convert}>
          <div>
            <TextField type="number" variant="outlined" value={text || ""} onChange={(e) => setText(e.target.value)} placeholder="Enter your number"/>
            <FormControl className="dropdown" variant="outlined" onChange={(e) => setValue(e.target.value)}>
              <Select native>
                {Object.keys(country).map((value) => <option value={country[value]}> {value} </option>)}
              </Select>
            </FormControl>
          </div>
          <div>
            <TextField type="number" variant="outlined" value={text2 || ""} placeholder="Converted amount"/>
            <FormControl className="dropdown" variant="outlined" onChange={(e) => setValue2(e.target.value)}>
              <Select native>
                {Object.keys(country2).map((value) => <option value={country2[value]}> {value} </option>)}
              </Select>
            </FormControl>
          </div>
          <Button id="button" type="submit" variant="contained">Convert</Button>
        </form>
      </Paper>
      <div className="link">
      <Link 
        className="link-rates"
          to={{
            pathname: `/about`,
            state: country
          }}
        >
          Exchange Rates
        </Link>
      </div>
      </>
    )
}

export default Converter;