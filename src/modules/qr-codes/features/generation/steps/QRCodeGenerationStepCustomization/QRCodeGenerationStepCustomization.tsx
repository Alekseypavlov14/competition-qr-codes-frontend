import { darkColorSelector, designSelector, lightColorSelector, updateDarkColorSelector, updateDesignSelector, updateLightColorSelector, useQRCodeGenerationCustomizationStore } from '../../stores/customization.store'
import { QRCodeDesignPaletteList } from '../../components/QRCodeDesignPaletteList'
import { fieldDirectionVertical } from '../../components/Field/constants'
import { QRCodeDesignPalette } from '../../components/QRCodeDesignPalette'
import { ChangeEvent, useId } from 'react'
import { designsList } from '@oleksii-pavlov/qr-codes'
import { Input } from '@/shared/components/Input'
import { Field } from '../../components/Field'
import { Form } from '../../components/Form'

export function QRCodeGenerationStepCustomization() {
  const darkColorId = useId()
  const lightColorId = useId()

  const darkColor = useQRCodeGenerationCustomizationStore(darkColorSelector)
  const lightColor = useQRCodeGenerationCustomizationStore(lightColorSelector)
  const design = useQRCodeGenerationCustomizationStore(designSelector)

  const updateDarkColor = useQRCodeGenerationCustomizationStore(updateDarkColorSelector)
  const updateLightColor = useQRCodeGenerationCustomizationStore(updateLightColorSelector)
  const updateDesign = useQRCodeGenerationCustomizationStore(updateDesignSelector)

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
        <label htmlFor={lightColorId}>Light color</label>
        
        <Input 
          id={lightColorId}
          value={lightColor}
          onChange={updateLightColorHandler}
          block
        />
      </Field>

      <QRCodeDesignPaletteList>
        {designsList.map(designOption => (
          <QRCodeDesignPalette 
            design={designOption}
            onClick={() => updateDesign(designOption)} 
            isSelected={design === designOption}
            key={designOption}
          />
        ))}
      </QRCodeDesignPaletteList>
    </Form>
  )
}