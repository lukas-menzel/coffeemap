import React, { useState } from 'react';
import { Formiz, useForm, useField, FormizStep } from '@formiz/core';
import { isEmail } from '@formiz/validations';


const MyField = (props) => {
    const {
      errorMessage,
      id,
      isValid,
      isPristine,
      isSubmitted,
      resetKey,
      setValue,
      value,
    } = useField(props)
    const { label, type, required } = props
    const [isFocused, setIsFocused] = React.useState(false);
    const showError = !isValid && !isFocused && (!isPristine || isSubmitted)
  
    return (
      <div className={`demo-form-group ${showError ? 'is-error' : ''}`}>
        <label
          className="demo-label"
          htmlFor={id}
        >
          { label }
          {required && ' *'}
        </label>
        <input
          key={resetKey}
          id={id}
          type={type || 'text'}
          value={value || ''}
          className="demo-input"
          onChange={e => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          aria-invalid={!isValid}
          aria-describedby={!isValid ? `${id}-error` : null}
        />
        {showError && (
          <div id={`${id}-error`} className="demo-form-feedback">
            { errorMessage }
          </div>
        )}
      </div>
    )
  }
  
  
  // 2. Create a form with multi steps & fields
  const MyForm = () => {
    const myForm = useForm()
    const [isLoading, setIsLoading] = React.useState(false)
    const submitForm = (values) => {
      setIsLoading(true)
  
      setTimeout(() => {
        setIsLoading(false)
        console.log(values)
        fetch('/api/auth/user', {
            method: 'post',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values)
          }).then(response => response.json())  
        myForm.invalidateFields({
          email: 'You can display an error after an API call',
        })
        const step = myForm.getFieldStepName('email')
        myForm.goToStep(step)
      }, 1000)
    }
    return (
      <Formiz onValidSubmit={submitForm} connect={myForm}>
        <form
          noValidate
          onSubmit={myForm.submitStep}
          className="demo-form"
          style={{ minHeight: '16rem' }}
        >
          <div className="demo-form__content">
            <FormizStep name="step1">
              
              <MyField
                name="first_name"
                label="First Name"
                required="Name is required"
                
              />
  
              <MyField
                name="last_name"
                label="Last name"
                
              />
  
            </FormizStep>
            <FormizStep name="step2">
              
              <MyField
                name="email"
                label="Email"
                type="email"
                required="Email is required"
                validations={[
                  {
                    rule: isEmail(),
                    message: 'Not a valid email',
                  }
                ]}
                
              />
  
            </FormizStep>
            <FormizStep name="step3">
              
              <MyField
                name="password"
                label="Password"
                type="password"
              />
              <MyField
                name="passwordConfirm"
                label="Confirm password"
                type="password"
                validations={[
                  {
                    rule: (value) => myForm.values.password === value,
                    deps: [myForm.values.password],
                    message: 'Passwords do not match',
                  }
                ]}
              />
  
            </FormizStep>
            <FormizStep name="step4">
              
              <MyField
                name="data_privacy_accepted"
                label="Data privacy"
                type="checkbox"
                value="True"
                keepValue
                defaultValue="True"
              />
              <MyField
                name="email_marketing_accepted"
                label="email marketing"
                type="checkbox"
                value="True"
                keepValue
                defaultValue="True"
              />
              <MyField
                name="roles"
                label="roles"
              />
  
            </FormizStep>
          </div>
  
          <div className="demo-form__footer">
            <div className="mr-auto" style={{ minWidth: '6rem' }}>
              {!myForm.isFirstStep && (
                <button
                  className="demo-button is-full"
                  type="button"
                  onClick={myForm.prevStep}
                >
                  Previous
                </button>
              )}
            </div>
            <div className="text-sm text-gray-500 p-2 text-center w-full xs:w-auto order-first xs:order-none">
              Step
              {' '}
              {myForm.currentStep && myForm.currentStep.index + 1 || 0}
              {' '}
              of
              {' '}
              {myForm.steps.length}
            </div>
            <div
              className="ml-auto"
              style={{ minWidth: '6rem' }}
            >
              {myForm.isLastStep ? (
                <button
                  className="demo-button is-full is-primary"
                  type="submit"
                  disabled={isLoading || (!myForm.isValid && myForm.isStepSubmitted)}
                >
                  {isLoading ? 'Loading...' : 'Submit'}
                </button>
              ) : (
                <button
                  className="demo-button is-full is-primary"
                  type="submit"
                  disabled={!myForm.isStepValid && myForm.isStepSubmitted}
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </form>
      </Formiz>
    )
  }
  export default MyForm;
