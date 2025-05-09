
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Calendar, Clock, DollarSign } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  progress: number;
  status: 'active' | 'completed' | 'delayed' | 'upcoming';
  dueDate: string;
  budget: string;
}

interface ProjectSummaryProps {
  projects: Project[];
}

const statusColors = {
  active: 'bg-green-100 text-green-800',
  completed: 'bg-blue-100 text-blue-800',
  delayed: 'bg-red-100 text-red-800',
  upcoming: 'bg-yellow-100 text-yellow-800',
};

const ProjectSummary = ({ projects }: ProjectSummaryProps) => {
  return (
    <div className="construction-card">
      <div className="construction-card-header">
        <h3 className="construction-card-title">Active Projects</h3>
        <p className="construction-card-description">Overview of your current construction projects</p>
      </div>
      <div className="construction-card-content">
        <div className="space-y-4">
          {projects.map((project) => (
            <div key={project.id} className="rounded-md border p-4">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-medium">{project.name}</h4>
                <span className={`rounded-full px-2 py-1 text-xs font-medium ${statusColors[project.status]}`}>
                  {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                </span>
              </div>
              
              <div className="mt-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Progress</span>
                  <span className="font-medium">{project.progress}%</span>
                </div>
                <Progress className="mt-1" value={project.progress} />
              </div>
              
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="flex items-center text-sm">
                  <Calendar className="mr-1 h-4 w-4 text-gray-500" />
                  <span className="text-gray-500">Due: {project.dueDate}</span>
                </div>
                <div className="flex items-center text-sm">
                  <DollarSign className="mr-1 h-4 w-4 text-gray-500" />
                  <span className="text-gray-500">Budget: {project.budget}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSummary;
