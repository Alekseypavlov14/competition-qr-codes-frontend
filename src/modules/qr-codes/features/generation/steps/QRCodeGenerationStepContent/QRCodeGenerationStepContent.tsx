import { contentSelector, errorCorrectionSelector, updateContentSelector, updateErrorCorrectionSelector, useQRCodeGenerationContentStore } from '../../stores/content.store'
import { ERROR_CORRECTION_ASCENDING_LIST } from '@oleksii-pavlov/qr-codes'
import { errorCorrectionPercentageMap } from '../../constants'
import { ErrorCorrectionPalette } from '../../components/ErrorCorrectionPalette'
import { fieldDirectionVertical } from '../../components/Field/constants'
import { ErrorCorrectionList } from '../../components/ErrorCorrectionList'
import { ChangeEvent } from 'react'
import { Input } from '@/shared/components/Input'
import { Field } from '../../components/Field'
import { Form } from '../../components/Form'

export function QRCodeGenerationStepContent() {
  // state
  const content = useQRCodeGenerationContentStore(contentSelector)
  const errorCorrection = useQRCodeGenerationContentStore(errorCorrectionSelector)
  
  // actions
  const updateContent = useQRCodeGenerationContentStore(updateContentSelector)
  const updateErrorCorrection = useQRCodeGenerationContentStore(updateErrorCorrectionSelector)

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
    </Form>
  )
}