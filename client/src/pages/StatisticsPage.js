import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import DashboardNavbar from '../components/DashboardNavbar';

function StatisticsPage() {
    return(
        <main className="statistics_page">
            <DashboardNavbar />
            <h1>Statistics</h1>
        </main>
    );
}

export default StatisticsPage;
