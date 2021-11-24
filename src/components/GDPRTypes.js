import React from 'react'

const GDPRTypes = ({handleCheckbox, nextStep, values}) => {
  return (
    <div>
      <div>
        <label>Kontaktný formulár - {values.hasContactForm}
          <input
            type="checkbox"
            checked={values.hasContactForm}
            onChange={handleCheckbox('hasContactForm')}
          />
        </label>
      </div>
      <div>
        <label>Cookies
          <input
            type="checkbox"
            checked={values.hasCookies}
            onChange={handleCheckbox('hasCookies')}
          />
        </label>
      </div>
      <button onClick={nextStep}>Ďalší krok</button>
    </div>
  )
}

export default GDPRTypes
