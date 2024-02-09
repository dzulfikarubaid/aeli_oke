import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, AnimatePresence, useInView } from 'framer-motion'
const Card = (props: any) => {
  const { judul, deskripsi } = props
  const ref = useRef(null)
  const isVisible = useInView(ref)
  const mainControl = useAnimation()
  useEffect(() => {
    if (isVisible) {
      mainControl.start({
        opacity: 1, y: 0
      })
      console.log('visible')
    }
    else {
      mainControl.start({
        opacity: 0, y: 100
      })
      console.log('not visible')
    }
  }, [isVisible])
  return (
    <>

      <motion.div ref={ref} initial={{ opacity: 0, y:100 }} animate={mainControl} transition={{ duration: 1}} className='flex flex-col bg-gradient-to-br from-purple-950 to-transparent rounded-xl border-2 gap-4 border-white/30 text-teks p-6  '>
        <h1 className='font-semibold text-lg'>{judul}</h1>
        <p className='font-extralight text-sm text-subteks'>{deskripsi}</p>

      </motion.div>

    </>


  )
}

export default Card