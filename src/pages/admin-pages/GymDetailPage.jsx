import React from 'react'
import SidebarWrapper from '../../layout/dashboard-layout/SidebarWrapper'
import GymDetail from '../../features/admin-dashboard/gym-detail/GymDetail'

function GymDetailPage() {
  return (
    <div>
        <SidebarWrapper>
            <GymDetail />
        </SidebarWrapper>
    </div>
  )
}

export default GymDetailPage