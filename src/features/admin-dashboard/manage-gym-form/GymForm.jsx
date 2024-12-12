import React from 'react'
import Heading from '@/common/ui/Heading'



import UploadImages from './components/UploadGallery'
import BasicGymDetails from './components/BasicGymDetails'
import OwnerDetails from './components/OwnerDetails'
import GymAmenities from './components/GymAmenities'
import UploadGallery from './components/UploadGallery'
import DaysAvailability from './components/DaysAvailability'


function GymForm() {
  return (
    <div className='add-new-gym'>
        <div className="row mb-4">
        <div className="col-md-3">
          <Heading title="Add New Gym" />
        </div>
        
      </div>
      <BasicGymDetails />
      <OwnerDetails />
      <DaysAvailability/>

      <GymAmenities/>
      <UploadGallery />
    </div>
  )
}

export default GymForm