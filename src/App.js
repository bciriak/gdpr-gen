import './App.css'
import TheForm from './components/TheForm'

function App() {

  // 1. user picks what they use on their website (contact form, cookies...)
  // 2. texts change based on their choices
  // 3. user fills in company info
  // 4. copies the gdpr text

  return (
    <div className="container">
      <TheForm />
    </div>
  )
}

export default App
