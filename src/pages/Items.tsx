
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
  ArrowUpDown,
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

interface Item {
  id: string;
  name: string;
  category: string;
  supplier: string;
  status: 'ordered' | 'pending' | 'received' | 'installed';
  quantity: number;
  unit: string;
  leadTime: string;
  lastUpdated: string;
}

const mockItems: Item[] = [
  {
    id: '1',
    name: 'Steel Beams',
    category: 'Structural',
    supplier: 'MetroSteel Inc.',
    status: 'ordered',
    quantity: 250,
    unit: 'pieces',
    leadTime: '4-6 weeks',
    lastUpdated: '2 days ago',
  },
  {
    id: '2',
    name: 'Concrete Mix',
    category: 'Materials',
    supplier: 'BuildWell Supplies',
    status: 'received',
    quantity: 500,
    unit: 'bags',
    leadTime: '1-2 weeks',
    lastUpdated: '5 days ago',
  },
  {
    id: '3',
    name: 'Electrical Conduit',
    category: 'Electrical',
    supplier: 'PowerTech Systems',
    status: 'pending',
    quantity: 1000,
    unit: 'feet',
    leadTime: '2-3 weeks',
    lastUpdated: '1 day ago',
  },
  {
    id: '4',
    name: 'Double-Pane Windows',
    category: 'Fenestration',
    supplier: 'GlassMasters Co.',
    status: 'ordered',
    quantity: 120,
    unit: 'units',
    leadTime: '8-10 weeks',
    lastUpdated: '3 days ago',
  },
  {
    id: '5',
    name: 'HVAC Units',
    category: 'Mechanical',
    supplier: 'ClimateControl Inc.',
    status: 'pending',
    quantity: 25,
    unit: 'sets',
    leadTime: '12-14 weeks',
    lastUpdated: '1 week ago',
  },
  {
    id: '6',
    name: 'Ceramic Tiles',
    category: 'Finishing',
    supplier: 'Interior Finishes Ltd.',
    status: 'received',
    quantity: 3000,
    unit: 'sq. ft.',
    leadTime: '3-4 weeks',
    lastUpdated: '4 days ago',
  },
  {
    id: '7',
    name: 'Copper Piping',
    category: 'Plumbing',
    supplier: 'FluidSystems Co.',
    status: 'installed',
    quantity: 500,
    unit: 'feet',
    leadTime: '2-3 weeks',
    lastUpdated: '2 weeks ago',
  },
  {
    id: '8',
    name: 'LED Light Fixtures',
    category: 'Electrical',
    supplier: 'BrightLight Electric',
    status: 'ordered',
    quantity: 200,
    unit: 'fixtures',
    leadTime: '4-5 weeks',
    lastUpdated: '6 days ago',
  },
];

const statusColors = {
  ordered: 'bg-blue-100 text-blue-800',
  pending: 'bg-yellow-100 text-yellow-800',
  received: 'bg-green-100 text-green-800',
  installed: 'bg-gray-100 text-gray-800',
};

const Items = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Items</h1>
          <p className="mt-2 text-gray-500">Manage your construction item catalog</p>
        </div>
        <Button className="bg-construction-blue hover:bg-blue-800">
          <Plus className="mr-2 h-4 w-4" /> Add Item
        </Button>
      </div>
      
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search items..."
            className="pl-8"
          />
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" /> Filter
          </Button>
          <Button variant="outline" size="sm">
            Category
          </Button>
          <Button variant="outline" size="sm">
            Status
          </Button>
        </div>
      </div>
      
      <div className="rounded-md border shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <div className="flex items-center">
                  Item Name
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Supplier</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Lead Time</TableHead>
              <TableHead>Last Updated</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.supplier}</TableCell>
                <TableCell>
                  <span className={`rounded-full px-2 py-1 text-xs font-medium ${statusColors[item.status]}`}>
                    {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                  </span>
                </TableCell>
                <TableCell>{item.quantity} {item.unit}</TableCell>
                <TableCell>{item.leadTime}</TableCell>
                <TableCell>{item.lastUpdated}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>View details</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Update status</DropdownMenuItem>
                      <DropdownMenuItem>Schedule delivery</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          Showing <strong>8</strong> of <strong>24</strong> items
        </p>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Items;
