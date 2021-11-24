import {useState, useEffect, useRef} from 'react'

function MyForm() {
  const [companyName, setCompanyName] = useState('')
  const [companyCin, setCompanyCin] = useState('')
  const [gdprText, setGdprText] = useState('')
  const [createGdprText, setCreateGdprText] = useState(false)

  const companyNameField = useRef(null)
  const companyCinField = useRef(null)

  useEffect(() => {
    let interval = setInterval(() => {
      if (companyNameField.current) {
        setCompanyName(companyNameField.current.value)
        setCompanyCin(companyCinField.current.value)
        console.log('asldfkjals', companyName)
        //do the same for all autofilled fields
        clearInterval(interval)
      }
    }, 100)
  })

  useEffect(() => {
    console.log('running')
  },[companyName, companyCin])

  const setValues = () => {
    setCompanyName(companyNameField.current.value)
    setCompanyCin(companyCinField.current.value)

    let interval = setInterval(() => {
      if (companyNameField.current) {
        setCompanyName(companyNameField.current.value)
        setCompanyCin(companyCinField.current.value)
        clearInterval(interval)
      }
    }, 100)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setCreateGdprText(true)
  }

  const gdprTextElement = () => {
    let theText = `This is GDPR text for ${companyName} with CIN ${companyCin}`

    if (createGdprText) {
      return <div>
        <button onClick={() => {
          navigator.clipboard.writeText(theText)
        }}>COPY
        </button>
        <p>{theText}</p>
      </div>
    }
  }

  return (
    <div>
      <form
        data-slovensko-digital-autoform="85e66d0d6dba2147f210947819c5629462753658ea80a2d20b6b2b9e7580ce24cb9b65aad8c4c6d5">
        <p>
          <label htmlFor="name">Názov</label><br/>
          <input
            ref={companyNameField}
            onChange={e => setCompanyName(e.target.value)}
            type="text"
            name="companyName"
            data-slovensko-digital-autoform="name"
          />
        </p>
        <p>
          <label htmlFor="cin">IČO</label><br/>
          <input
            ref={companyCinField}
            onChange={e => setCompanyCin(e.target.value)}
            type="text"
            name="companyCin"
            data-slovensko-digital-autoform="cin"
          />
        </p>
        <p>
          <label htmlFor="formatted_address">Adresa</label><br/>
          <input type="text" name="formatted_address" data-slovensko-digital-autoform="formatted-address"/>
        </p>
        <p>
          <label htmlFor="tin">DIČ</label><br/>
          <input type="text" name="tin" data-slovensko-digital-autoform="tin"/>
        </p>
        <p>
          <label htmlFor="vatin">IČ-DPH</label><br/>
          <input type="text" name="vatin" data-slovensko-digital-autoform="vatin"/>
        </p>

        <div>
          <button type={'submit'} onClick={handleSubmit}>Submit</button>
        </div>
      </form>

      {gdprTextElement()}
    </div>
  )
}

export default MyForm
