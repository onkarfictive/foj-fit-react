import React from 'react'
import SidebarWrapper from '../../layout/dashboard-layout/SidebarWrapper'
import GymManagement from '../../features/admin-dashboard/gym-management/GymManagement'

function GymManagementPage() {
  return (
    <div>
        <SidebarWrapper>
            <GymManagement />
        </SidebarWrapper>
    </div>
  )
}

export default GymManagementPage