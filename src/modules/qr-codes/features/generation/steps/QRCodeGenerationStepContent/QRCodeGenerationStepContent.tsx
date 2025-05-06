import { analyticsEnabledSelector, contentSelector, errorCorrectionSelector, updateAnalyticsEnabledSelector, updateContentSelector, updateErrorCorrectionSelector, useQRCodeGenerationContentStore } from '../../stores/content.store'
import { fieldDirectionHorizontal } from '../../components/Field/constants'
import { ChangeEvent, useId } from 'react'
import { Switch } from '@/shared/components/Switch'
import { Input } from '@/shared/components/Input'
import { Field } from '../../components/Field'
import { Form } from '../../components/Form'

export function QRCodeGenerationStepContent() {
  const switchEnableAnalyticsId = useId()

  // state
  const content = useQRCodeGenerationContentStore(contentSelector)
  const errorCorrection = useQRCodeGenerationContentStore(errorCorrectionSelector)
  const analyticsEnabled = useQRCodeGenerationContentStore(analyticsEnabledSelector)
  
  // actions
  const updateContent = useQRCodeGenerationContentStore(updateContentSelector)
  const updateErrorCorrection = useQRCodeGenerationContentStore(updateErrorCorrectionSelector)
  const updateAnalyticsEnabled = useQRCodeGenerationContentStore(updateAnalyticsEnabledSelector)

  function updateContentHandler(e: ChangeEvent<HTMLInputElement>) {
    updateContent(e.target.value.trim())
  }
   
  return (
    <Form>
      <h3>Create QR Code</h3>

      <Input  
        onChange={updateContentHandler}
        value={content}
      />

      <Field direction={fieldDirectionHorizontal}>
        <Switch 
          id={switchEnableAnalyticsId} 
          onSwitch={updateAnalyticsEnabled}
          checked={analyticsEnabled}
        />

        <label htmlFor={switchEnableAnalyticsId}>
          Enable Analytics
        </label>
      </Field>
    </Form>
  )
}