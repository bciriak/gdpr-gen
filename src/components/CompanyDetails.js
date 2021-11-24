import React from 'react'

const CompanyDetails = ({values, handleChange, nextStep, prevStep}) => {
  return (
    <div>
      <div>
        <label>Názov firmy
          <input
            type="text"
            value={values.companyName}
            onChange={handleChange('companyName')}
          />
        </label>
      </div>
      <div>
        <label>Adresa firmy
          <input
            type="text"
            value={values.companyAddress}
            onChange={handleChange('companyAddress')}
          />
        </label>
      </div>
      <div>
        <label>IČO
          <input
            type="text"
            value={values.companyCin}
            onChange={handleChange('companyCin')}
          />
        </label>
      </div>
      <button onClick={prevStep}>Predošlý krok</button>
      <button onClick={nextStep}>Ďalší krok</button>
    </div>
  )
}

export default CompanyDetails
