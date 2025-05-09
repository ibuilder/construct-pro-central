
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  Filter,
  Plus,
  Search,
  AlignJustify,
  Grid2X2
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Project {
  id: string;
  name: string;
  location: string;
  client: string;
  startDate: string;
  endDate: string;
  status: 'active' | 'completed' | 'delayed' | 'upcoming';
  progress: number;
  budget: string;
}

const mockProjects: Project[] = [
  {
    id: '1',
    name: 'Downtown Office Tower',
    location: 'New York, NY',
    client: 'Metropolitan Developments',
    startDate: 'Jan 15, 2024',
    endDate: 'Aug 15, 2025',
    status: 'active',
    progress: 68,
    budget: '$24.5M',
  },
  {
    id: '2',
    name: 'Riverside Residential Complex',
    location: 'Chicago, IL',
    client: 'Urban Living LLC',
    startDate: 'Mar 5, 2024',
    endDate: 'Oct 30, 2025',
    status: 'delayed',
    progress: 42,
    budget: '$18.3M',
  },
  {
    id: '3',
    name: 'Hospital Expansion Wing',
    location: 'Boston, MA',
    client: 'Regional Healthcare',
    startDate: 'Oct 10, 2023',
    endDate: 'Mar 20, 2025',
    status: 'active',
    progress: 89,
    budget: '$33.7M',
  },
  {
    id: '4',
    name: 'Suburban Shopping Mall',
    location: 'Denver, CO',
    client: 'RetailSpace Ventures',
    startDate: 'Jun 25, 2024',
    endDate: 'Dec 10, 2025',
    status: 'upcoming',
    progress: 0,
    budget: '$41.2M',
  },
  {
    id: '5',
    name: 'City Public Library',
    location: 'Seattle, WA',
    client: 'Municipal Government',
    startDate: 'Sep 3, 2023',
    endDate: 'Apr 18, 2025',
    status: 'active',
    progress: 72,
    budget: '$12.8M',
  },
  {
    id: '6',
    name: 'Industrial Warehouse Complex',
    location: 'Dallas, TX',
    client: 'LogiTech Solutions',
    startDate: 'Feb 15, 2023',
    endDate: 'Jan 5, 2025',
    status: 'completed',
    progress: 100,
    budget: '$9.6M',
  },
];

const statusColors = {
  active: 'bg-green-100 text-green-800',
  completed: 'bg-blue-100 text-blue-800',
  delayed: 'bg-red-100 text-red-800',
  upcoming: 'bg-yellow-100 text-yellow-800',
};

const Projects = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
          <p className="mt-2 text-gray-500">Manage your construction projects</p>
        </div>
        <Button className="bg-construction-blue hover:bg-blue-800">
          <Plus className="mr-2 h-4 w-4" /> Add Project
        </Button>
      </div>
      
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search projects..."
            className="pl-8"
          />
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" /> Filter
          </Button>
          
          <div className="border rounded-md">
            <div className="inline-flex">
              <Button variant="ghost" size="sm" className="rounded-none rounded-l-md">
                <Grid2X2 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="rounded-none rounded-r-md">
                <AlignJustify className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Tabs defaultValue="all" className="w-full">
        <div className="border-b">
          <TabsList className="w-full justify-start h-auto p-0">
            <TabsTrigger value="all" className="rounded-none border-b-2 border-transparent data-[state=active]:border-construction-blue px-4 py-2">
              All Projects
            </TabsTrigger>
            <TabsTrigger value="active" className="rounded-none border-b-2 border-transparent data-[state=active]:border-construction-blue px-4 py-2">
              Active
            </TabsTrigger>
            <TabsTrigger value="upcoming" className="rounded-none border-b-2 border-transparent data-[state=active]:border-construction-blue px-4 py-2">
              Upcoming
            </TabsTrigger>
            <TabsTrigger value="completed" className="rounded-none border-b-2 border-transparent data-[state=active]:border-construction-blue px-4 py-2">
              Completed
            </TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="all" className="pt-4">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Project Name</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Timeline</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead>Budget</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockProjects.map((project) => (
                  <TableRow key={project.id}>
                    <TableCell className="font-medium">{project.name}</TableCell>
                    <TableCell>{project.location}</TableCell>
                    <TableCell>{project.client}</TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div>{project.startDate}</div>
                        <div className="text-gray-500">to {project.endDate}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className={`rounded-full px-2 py-1 text-xs font-medium ${statusColors[project.status]}`}>
                        {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="w-full max-w-24">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-medium">{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} />
                      </div>
                    </TableCell>
                    <TableCell>{project.budget}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="active" className="pt-4">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Project Name</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Timeline</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead>Budget</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockProjects
                  .filter(project => project.status === 'active')
                  .map((project) => (
                    <TableRow key={project.id}>
                      <TableCell className="font-medium">{project.name}</TableCell>
                      <TableCell>{project.location}</TableCell>
                      <TableCell>{project.client}</TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <div>{project.startDate}</div>
                          <div className="text-gray-500">to {project.endDate}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className={`rounded-full px-2 py-1 text-xs font-medium ${statusColors[project.status]}`}>
                          {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="w-full max-w-24">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-medium">{project.progress}%</span>
                          </div>
                          <Progress value={project.progress} />
                        </div>
                      </TableCell>
                      <TableCell>{project.budget}</TableCell>
                    </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="upcoming" className="pt-4">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Project Name</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Timeline</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead>Budget</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockProjects
                  .filter(project => project.status === 'upcoming')
                  .map((project) => (
                    <TableRow key={project.id}>
                      <TableCell className="font-medium">{project.name}</TableCell>
                      <TableCell>{project.location}</TableCell>
                      <TableCell>{project.client}</TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <div>{project.startDate}</div>
                          <div className="text-gray-500">to {project.endDate}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className={`rounded-full px-2 py-1 text-xs font-medium ${statusColors[project.status]}`}>
                          {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="w-full max-w-24">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-medium">{project.progress}%</span>
                          </div>
                          <Progress value={project.progress} />
                        </div>
                      </TableCell>
                      <TableCell>{project.budget}</TableCell>
                    </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="completed" className="pt-4">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Project Name</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Timeline</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead>Budget</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockProjects
                  .filter(project => project.status === 'completed')
                  .map((project) => (
                    <TableRow key={project.id}>
                      <TableCell className="font-medium">{project.name}</TableCell>
                      <TableCell>{project.location}</TableCell>
                      <TableCell>{project.client}</TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <div>{project.startDate}</div>
                          <div className="text-gray-500">to {project.endDate}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className={`rounded-full px-2 py-1 text-xs font-medium ${statusColors[project.status]}`}>
                          {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="w-full max-w-24">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-medium">{project.progress}%</span>
                          </div>
                          <Progress value={project.progress} />
                        </div>
                      </TableCell>
                      <TableCell>{project.budget}</TableCell>
                    </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Projects;
