import { darkColorSelector, lightColorSelector, updateDarkColorSelector, updateLightColorSelector, useQRCodeGenerationCustomizationStore } from '../../stores/customization.store'
import { fieldDirectionVertical } from '../../components/Field/constants'
import { ChangeEvent, useId } from 'react'
import { Field } from '../../components/Field'
import { Form } from '../../components/Form'
import { Input } from '@/shared/components/Input'

export function QRCodeGenerationStepCustomization() {
  const darkColorId = useId()
  const lightColorId = useId()

  const darkColor = useQRCodeGenerationCustomizationStore(darkColorSelector)
  const lightColor = useQRCodeGenerationCustomizationStore(lightColorSelector)

  const updateDarkColor = useQRCodeGenerationCustomizationStore(updateDarkColorSelector)
  const updateLightColor = useQRCodeGenerationCustomizationStore(updateLightColorSelector)
  
  function updateDarkColorHandler(e: ChangeEvent<HTMLInputElement>) {
    updateDarkColor(e.target.value.trim())
  }
  function updateLightColorHandler(e: ChangeEvent<HTMLInputElement>) {
    updateLightColor(e.target.value.trim())
  }

  return (
    <Form>
      <h3>Customize!</h3>

      <Field direction={fieldDirectionVertical}>
        <label htmlFor={darkColorId}>Dark color</label>

        <Input 
          id={darkColorId}
          value={darkColor}
          onChange={updateDarkColorHandler}
          block
        />
      </Field>

      <Field direction={fieldDirectionVertical}>
        <label htmlFor={lightColorId}>Dark color</label>
        
        <Input 
          id={lightColorId}
          value={lightColor}
          onChange={updateLightColorHandler}
          block
        />
      </Field>      
    </Form>
  )
}