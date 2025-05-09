
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import Dashboard from './Dashboard';
import Projects from './Projects';
import Partners from './Partners';
import Items from './Items';
import NotFound from './NotFound';

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="projects" element={<Projects />} />
        <Route path="partners" element={<Partners />} />
        <Route path="items" element={<Items />} />
        <Route path="deliveries" element={<Dashboard />} />
        <Route path="schedule" element={<Dashboard />} />
        <Route path="reports" element={<Dashboard />} />
        <Route path="analytics" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Index;
