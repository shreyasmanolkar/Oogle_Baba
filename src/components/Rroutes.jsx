import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import { Results } from "./Results";

export const Rroutes = () => {
    return(
        <div className="p-4">
            <Routes>
                <Route exact path="/" element={<Navigate to='/search' replace/>} />
                <Route element={ <Results/> }>
                    <Route path='/search' />
                    <Route path='/image' />
                    <Route path='/news' />
                    <Route path='/videos' />
                </Route>

            </Routes>
        </div>
    )
};