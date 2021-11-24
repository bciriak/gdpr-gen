import React, {Component} from 'react'
import GDPRTypes from './GDPRTypes'
import CompanyDetails from './CompanyDetails'
import Success from './Success'

class TheForm extends Component {
  state = {
    step: 1,
    hasContactForm: false,
    hasCookies: false,
    companyName: '',
    companyAddress: '',
    companyCin: '',
  }

  prevStep = () => {
    const {step} = this.state
    this.setState({step: step - 1})
  }

  nextStep = () => {
    const {step} = this.state
    this.setState({step: step + 1})
  }

  handleChange = (input) => e => {
    this.setState({ [input]: e.target.value })
  }

  handleCheckbox = (input) => e => {
    this.setState({ [input]: !this.state[input] })
  }

  render() {
    const {step} = this.state
    const {hasContactForm, hasCookies, companyName, companyAddress, companyCin} = this.state
    const values = {hasContactForm, hasCookies, companyName, companyAddress, companyCin}

    switch (step) {
      case 1:
        return (
          <div>
            <GDPRTypes
              nextStep={this.nextStep}
              handleCheckbox={this.handleCheckbox}
              values={values}
            />
          </div>
        )
      case 2:
        return (
          <CompanyDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 3:
        return (
          <Success />
        )
      default:
    }
  }
}

export default TheForm
