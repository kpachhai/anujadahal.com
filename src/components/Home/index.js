import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const blockchainEngineerArray = [
    'M',
    'e',
    'd',
    'i',
    'c',
    'a',
    'l',
    ' ',
    'L',
    'a',
    'b',
    ' ',
    'T',
    'e',
    'c',
    'h',
  ]
  const webDeveloperArray = [
    'P',
    'r',
    'o',
    's',
    'p',
    'e',
    'c',
    't',
    'i',
    'v',
    'e',
    ' ',
    'D',
    'a',
    't',
    'a',
    ' ',
    'A',
    'n',
    'a',
    'l',
    'y',
    's',
    't',
    '.',
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(timer)
    }
  })

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <span> </span>
            <span className={`${letterClass} _14`}>a</span>
            <span> </span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={blockchainEngineerArray}
              idx={15}
            />
            <br />
            <span className={`${letterClass} _15`}>and a</span>
            <span> </span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={webDeveloperArray}
              idx={10}
            />
          </h1>
          <h2>"Data Analyst / Medical Lab Technician / Freelancer"</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
