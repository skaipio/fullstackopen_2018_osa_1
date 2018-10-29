import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({name}) => (
  <h1>{ name }</h1>
)

const Statistic = ({arvosana, maara}) => (
  <tr><td>{arvosana}</td><td>{maara}</td></tr>
)

const Statistics = ({hyva, neutraali, huono}) => {
  if (!hyva && !neutraali && !huono) {
    return (
      <div>
        <Header name="statistiikka" />
        <p>ei yhtään palautetta annettu</p>
      </div>
    )
  }
  const yhteensa = hyva + neutraali + huono
  const keskiarvo = yhteensa !== 0 ? (hyva - huono) / yhteensa : 0
  const positiivisiaProsentti = yhteensa !== 0 ? hyva / yhteensa : 0
  return (
    <div>
      <Header name="statistiikka" />
      <table>
        <tbody>
          <Statistic arvosana="hyvä" maara={hyva} />
          <Statistic arvosana="neutraali" maara={neutraali} />
          <Statistic arvosana="huono" maara={huono} />
          <Statistic arvosana="keskiarvo" maara={keskiarvo} />
          <Statistic arvosana="positiivisia" maara={positiivisiaProsentti + " %"} />
        </tbody>
      </table>
    </div>
  )
}

const Button = ({onClick, name}) =>
  <button onClick={onClick}>{ name }</button>

const Palaute = ({lisaaArvosana}) => {
  const clickHandler = (arvosana) => () => lisaaArvosana(arvosana)
  return (
    <div>
      <Header name="anna palautetta" />
      <Button onClick={clickHandler('hyva')} name="hyvä"/>
      <Button onClick={clickHandler('neutraali')} name="neutraali"/>
      <Button onClick={clickHandler('huono')} name="huono"/>
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'hyva': 0,
      'neutraali': 0,
      'huono': 0
    }
  }

  lisaaArvosana = (arvosana) => {
    this.setState((prevState) => ({
      [arvosana]: prevState[arvosana] + 1
    }))
  }

  render() {
    return (
      <div>        
        <Palaute lisaaArvosana={this.lisaaArvosana} />
        <Statistics hyva={this.state.hyva} neutraali={this.state.neutraali} huono={this.state.huono} />        
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)