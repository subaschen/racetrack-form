import Form from '@rjsf/core'
import { useState } from 'react'
import validator from '@rjsf/validator-ajv8'
import { schema } from './schema'
import { uiSchema } from './uiSchema'

export const ConfigurationForm = () => {
    const [formData, setFormData] = useState(null)

    const handleSubmit = (formData) => {
      console.log(formData)
      alert("Form submitted")
    };
  
    const handleChange = (formData) => {
      console.log("Form data changed: ", formData)
    };
  
  return (
    <div>
      <Form
        schema={schema}
        uiSchema={uiSchema}
        validator={validator}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
    </div>
  )
}

