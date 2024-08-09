import React from 'react'
import { Outlet } from 'react-router-dom'
import NavComp from '../layout/NavComp';
import FooterComp from '../layout/FooterComp';

const MainDashboardComp = () => {
    return (
        <div>
            {/* <h2>This is Main MainDashboardComp</h2> */}

            <div className='container'>
                 <div className='card border-primary mt-3'>
                    <div className='card-header border-primary'>
                        <NavComp />
                    </div>
                    <div className='card-body border-primary'>
                        <Outlet/>
                    </div>
                    <div className='card-footer border-primary'>
                        <FooterComp/>
                    </div>
                 </div>
            </div>
        </div>
    )
}

export default MainDashboardComp
