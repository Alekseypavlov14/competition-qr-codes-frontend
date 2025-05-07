import { analyticsEnabledSelector, contentSelector, errorCorrectionSelector, updateAnalyticsEnabledSelector, updateContentSelector, updateErrorCorrectionSelector, useQRCodeGenerationContentStore } from '../../stores/content.store'
import { fieldDirectionHorizontal, fieldDirectionVertical } from '../../components/Field/constants'
import { ERROR_CORRECTION_ASCENDING_LIST } from '@oleksii-pavlov/qr-codes'
import { errorCorrectionPercentageMap } from '../../constants'
import { ErrorCorrectionPalette } from '../../components/ErrorCorrectionPalette'
import { ErrorCorrectionList } from '../../components/ErrorCorrectionList'
import { ChangeEvent, useId } from 'react'
import { Switch } from '@/shared/components/Switch'
import { Input } from '@/shared/components/Input'
import { Field } from '../../components/Field'
import { Form } from '../../components/Form'
import { Hint } from '../../components/Hint'

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
        placeholder='https://'
        value={content}
        block
      />

      <Field direction={fieldDirectionVertical}>
        <label className='text'>Error Correction Level</label>
        
        <ErrorCorrectionList>
          {ERROR_CORRECTION_ASCENDING_LIST.map(errorCorrectionLevel => (
            <ErrorCorrectionPalette 
              onClick={() => updateErrorCorrection(errorCorrectionLevel)}
              isSelected={errorCorrectionLevel === errorCorrection}
              key={errorCorrectionLevel}
            >
              {errorCorrectionPercentageMap[errorCorrectionLevel]}%
            </ErrorCorrectionPalette>
          ))}
        </ErrorCorrectionList>
      </Field>

      <Field direction={fieldDirectionHorizontal}>
        <Switch 
          id={switchEnableAnalyticsId} 
          onSwitch={updateAnalyticsEnabled}
          checked={analyticsEnabled}
        />

        <label 
          htmlFor={switchEnableAnalyticsId}
          className='text'
        >
          Enable Analytics
        </label>
      </Field>

      <Hint> 
        QR Codes without analytics are not saved.<br />
        Use it only for QR Code image generation
      </Hint>
    </Form>
  )
}