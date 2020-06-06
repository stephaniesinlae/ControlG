import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import TasksCard from '../../components/TaskCard/TaskCard';

const MainContainer = () => {
    return (
        <div>
            <Navbar />
            <TasksCard />
            <Footer />
        </div>
    )
}

export default MainContainer