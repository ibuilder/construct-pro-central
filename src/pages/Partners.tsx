
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Card,
  CardContent,
} from '@/components/ui/card';
import { 
  Filter,
  Plus,
  Search,
  Phone,
  Mail,
  MapPin,
  Building2,
  Tag,
  MoreHorizontal
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface Partner {
  id: string;
  name: string;
  type: 'supplier' | 'subcontractor' | 'consultant';
  contactName: string;
  email: string;
  phone: string;
  location: string;
  specialty: string[];
  activeProjects: number;
}

const mockPartners: Partner[] = [
  {
    id: '1',
    name: 'MetroSteel Inc.',
    type: 'supplier',
    contactName: 'Robert Johnson',
    email: 'rjohnson@metrosteel.com',
    phone: '(555) 123-4567',
    location: 'Chicago, IL',
    specialty: ['Structural Steel', 'Metal Fabrication'],
    activeProjects: 3,
  },
  {
    id: '2',
    name: 'Elite Electrical Contractors',
    type: 'subcontractor',
    contactName: 'Jennifer Williams',
    email: 'jwilliams@eliteelec.com',
    phone: '(555) 234-5678',
    location: 'Boston, MA',
    specialty: ['Electrical', 'Low Voltage', 'Lighting'],
    activeProjects: 2,
  },
  {
    id: '3',
    name: 'BuildWell Supplies',
    type: 'supplier',
    contactName: 'Michael Davis',
    email: 'mdavis@buildwell.com',
    phone: '(555) 345-6789',
    location: 'Denver, CO',
    specialty: ['Concrete', 'Building Materials'],
    activeProjects: 5,
  },
  {
    id: '4',
    name: 'Smith & Associates Architecture',
    type: 'consultant',
    contactName: 'Sarah Smith',
    email: 'ssmith@smithassoc.com',
    phone: '(555) 456-7890',
    location: 'Seattle, WA',
    specialty: ['Architecture', 'Design', 'Planning'],
    activeProjects: 2,
  },
  {
    id: '5',
    name: 'Premier Plumbing Solutions',
    type: 'subcontractor',
    contactName: 'David Wilson',
    email: 'dwilson@premierplumbing.com',
    phone: '(555) 567-8901',
    location: 'Dallas, TX',
    specialty: ['Plumbing', 'Gas Fitting', 'Water Systems'],
    activeProjects: 4,
  },
  {
    id: '6',
    name: 'GlassMasters Co.',
    type: 'supplier',
    contactName: 'Emily Chen',
    email: 'echen@glassmasters.com',
    phone: '(555) 678-9012',
    location: 'Los Angeles, CA',
    specialty: ['Windows', 'Glass', 'Curtain Walls'],
    activeProjects: 1,
  },
];

const typeColors = {
  supplier: 'bg-blue-100 text-blue-800',
  subcontractor: 'bg-green-100 text-green-800',
  consultant: 'bg-purple-100 text-purple-800',
};

const Partners = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Partners</h1>
          <p className="mt-2 text-gray-500">Manage subcontractors, suppliers, and consultants</p>
        </div>
        <Button className="bg-construction-blue hover:bg-blue-800">
          <Plus className="mr-2 h-4 w-4" /> Add Partner
        </Button>
      </div>
      
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search partners..."
            className="pl-8"
          />
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" /> Filter
          </Button>
          <Button variant="outline" size="sm">
            Partner Type
          </Button>
          <Button variant="outline" size="sm">
            Specialty
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockPartners.map((partner) => (
          <Card key={partner.id} className="overflow-hidden">
            <div className="h-2 bg-construction-blue"></div>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg">{partner.name}</h3>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>View details</DropdownMenuItem>
                    <DropdownMenuItem>Edit partner</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600">Remove</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="mt-2">
                <span className={`inline-block rounded-full px-2 py-1 text-xs font-medium ${typeColors[partner.type]}`}>
                  {partner.type.charAt(0).toUpperCase() + partner.type.slice(1)}
                </span>
                <span className="ml-2 text-sm text-gray-500">{partner.activeProjects} active projects</span>
              </div>
              
              <div className="mt-4 space-y-3">
                <div className="flex items-center text-sm">
                  <Building2 className="mr-2 h-4 w-4 text-gray-500" />
                  <span>{partner.contactName}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Mail className="mr-2 h-4 w-4 text-gray-500" />
                  <span className="text-blue-600">{partner.email}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Phone className="mr-2 h-4 w-4 text-gray-500" />
                  <span>{partner.phone}</span>
                </div>
                <div className="flex items-center text-sm">
                  <MapPin className="mr-2 h-4 w-4 text-gray-500" />
                  <span>{partner.location}</span>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="flex items-center text-sm mb-2">
                  <Tag className="mr-2 h-4 w-4 text-gray-500" />
                  <span className="font-medium">Specialty:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {partner.specialty.map((item) => (
                    <span key={item} className="inline-block rounded-full bg-gray-100 px-2 py-1 text-xs">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Partners;
