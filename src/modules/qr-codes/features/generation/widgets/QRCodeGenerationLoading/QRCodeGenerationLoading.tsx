import { Center } from '@/shared/components/Center'
import { Loader } from '@/shared/components/Loader'
import styles from './QRCodeGenerationLoading.module.css'

export function QRCodeGenerationLoading() {
  return (
    <Center>
      <h6 className={styles.Title}>Working on generation...</h6>
      
      <Loader />
    </Center>
  )
}