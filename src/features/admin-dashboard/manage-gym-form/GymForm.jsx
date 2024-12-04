import React from 'react'
import Heading from '@/common/ui/Heading'
import BasicGymDetails from '../manage-gym-form/BasicGymDetails'

function GymForm() {
  return (
    <div>
        <div className="row mb-4">
        <div className="col-md-3">
          <Heading title="Add New Gym" />
        </div>
        
      </div>
      <BasicGymDetails />
    </div>
  )
}

export default GymForm