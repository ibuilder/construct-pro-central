import React from 'react';
import { Activity, Package, Truck, Users, Hammer, Calendar, FileText, Tag } from 'lucide-react';
import StatCard from '@/components/dashboard/StatCard';
import ProjectSummary from '@/components/dashboard/ProjectSummary';
import DeliverySchedule from '@/components/dashboard/DeliverySchedule';

// Define the data without 'as const' to keep it mutable
const mockProjects = [
  {
    id: '1',
    name: 'Downtown Office Tower',
    progress: 68,
    status: 'active',
    dueDate: 'Aug 15, 2025',
    budget: '$24.5M',
  },
  {
    id: '2',
    name: 'Riverside Residential Complex',
    progress: 42,
    status: 'delayed',
    dueDate: 'Oct 30, 2025',
    budget: '$18.3M',
  },
  {
    id: '3',
    name: 'Hospital Expansion Wing',
    progress: 89,
    status: 'active',
    dueDate: 'Mar 20, 2025',
    budget: '$33.7M',
  },
];

const mockDeliveries = [
  {
    id: '1',
    date: new Date('2025-05-09T09:30:00'),
    itemName: 'Steel Beams (20 units)',
    supplier: 'Metro Steel Inc.',
    status: 'today',
  },
  {
    id: '2',
    date: new Date('2025-05-09T13:15:00'),
    itemName: 'Concrete Mix (100 bags)',
    supplier: 'BuildWell Supplies',
    status: 'today',
  },
  {
    id: '3',
    date: new Date('2025-05-10T10:00:00'),
    itemName: 'Electrical Conduit (500ft)',
    supplier: 'PowerTech Systems',
    status: 'confirmed',
  },
  {
    id: '4',
    date: new Date('2025-05-11T08:45:00'),
    itemName: 'Windows (Floor 3-5)',
    supplier: 'GlassMasters Co.',
    status: 'projected',
  },
  {
    id: '5',
    date: new Date('2025-05-08T11:30:00'),
    itemName: 'HVAC Equipment',
    supplier: 'ClimateControl Inc.',
    status: 'completed',
  },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-gray-500">Welcome back! Here's an overview of your construction projects</p>
      </div>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          title="Active Projects"
          value="7"
          icon={Hammer}
          trend={{ value: 12, positive: true }}
        />
        
        <StatCard 
          title="Partners"
          value="23"
          icon={Users}
          trend={{ value: 5, positive: true }}
        />
        
        <StatCard 
          title="Items"
          value="248"
          description="72 pending delivery"
          icon={Package}
          trend={{ value: 8, positive: false }}
        />
        
        <StatCard 
          title="Scheduled Deliveries"
          value="14"
          description="3 for today"
          icon={Truck}
        />
      </div>
      
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <ProjectSummary projects={mockProjects} />
        <DeliverySchedule deliveries={mockDeliveries} />
      </div>
      
      <div className="construction-card">
        <div className="construction-card-header">
          <h3 className="construction-card-title">Quick Actions</h3>
          <p className="construction-card-description">Common tasks and activities</p>
        </div>
        <div className="construction-card-content">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <button className="flex flex-col items-center justify-center rounded-md border p-4 hover:bg-gray-50">
              <Hammer className="mb-2 h-6 w-6 text-construction-blue" />
              <span className="text-sm">New Project</span>
            </button>
            
            <button className="flex flex-col items-center justify-center rounded-md border p-4 hover:bg-gray-50">
              <Truck className="mb-2 h-6 w-6 text-construction-blue" />
              <span className="text-sm">Schedule Delivery</span>
            </button>
            
            <button className="flex flex-col items-center justify-center rounded-md border p-4 hover:bg-gray-50">
              <FileText className="mb-2 h-6 w-6 text-construction-blue" />
              <span className="text-sm">Daily Report</span>
            </button>
            
            <button className="flex flex-col items-center justify-center rounded-md border p-4 hover:bg-gray-50">
              <Activity className="mb-2 h-6 w-6 text-construction-blue" />
              <span className="text-sm">View Analytics</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
