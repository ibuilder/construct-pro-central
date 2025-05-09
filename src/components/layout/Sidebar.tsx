
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Hammer, 
  PackageOpen, 
  Truck, 
  Calendar, 
  FileText, 
  BarChart3 
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  const navItems = [
    { name: 'Dashboard', icon: <LayoutDashboard className="h-5 w-5" />, path: '/' },
    { name: 'Projects', icon: <Hammer className="h-5 w-5" />, path: '/projects' },
    { name: 'Partners', icon: <Users className="h-5 w-5" />, path: '/partners' },
    { name: 'Items', icon: <PackageOpen className="h-5 w-5" />, path: '/items' },
    { name: 'Deliveries', icon: <Truck className="h-5 w-5" />, path: '/deliveries' },
    { name: 'Schedule', icon: <Calendar className="h-5 w-5" />, path: '/schedule' },
    { name: 'Daily Reports', icon: <FileText className="h-5 w-5" />, path: '/reports' },
    { name: 'Analytics', icon: <BarChart3 className="h-5 w-5" />, path: '/analytics' },
  ];

  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-20 flex h-full w-64 flex-col border-r bg-white transition-transform md:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex h-16 items-center border-b px-6">
        <span className="text-xl font-bold text-construction-blue">gc</span>
        <span className="text-xl font-bold text-construction-yellow">Deliver</span>
      </div>
      
      <nav className="flex-1 overflow-auto p-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) => cn(
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium",
                  isActive
                    ? "bg-construction-blue text-white"
                    : "text-gray-700 hover:bg-gray-100"
                )}
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="border-t p-4">
        <div className="rounded-md bg-gray-100 p-4">
          <p className="mb-1 text-xs font-medium text-gray-500">Logged in as:</p>
          <p className="text-sm font-medium">John Contractor</p>
          <p className="text-xs text-gray-500">Project Manager</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
