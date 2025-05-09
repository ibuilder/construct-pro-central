
import React from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Truck } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Delivery {
  id: string;
  date: Date;
  itemName: string;
  supplier: string;
  status: 'projected' | 'confirmed' | 'today' | 'completed';
}

interface DeliveryScheduleProps {
  deliveries: Delivery[];
}

const DeliverySchedule = ({ deliveries }: DeliveryScheduleProps) => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  
  // Filter deliveries for the selected date
  const filteredDeliveries = deliveries.filter(
    delivery => date && 
    delivery.date.getDate() === date.getDate() &&
    delivery.date.getMonth() === date.getMonth() &&
    delivery.date.getFullYear() === date.getFullYear()
  );
  
  // Generate dates that have deliveries for the calendar
  const deliveryDates = deliveries.map(delivery => 
    new Date(delivery.date.getFullYear(), delivery.date.getMonth(), delivery.date.getDate())
  );

  return (
    <div className="construction-card">
      <div className="construction-card-header">
        <h3 className="construction-card-title">Delivery Schedule</h3>
        <p className="construction-card-description">Upcoming deliveries for your projects</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
        <div>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
            modifiers={{
              delivery: (date) => 
                deliveryDates.some(
                  deliveryDate => 
                    deliveryDate.getDate() === date.getDate() &&
                    deliveryDate.getMonth() === date.getMonth() &&
                    deliveryDate.getFullYear() === date.getFullYear()
                )
            }}
            modifiersClassNames={{
              delivery: "bg-construction-yellow/30"
            }}
          />
        </div>
        <div>
          <h4 className="text-base font-medium mb-4">
            {date ? date.toLocaleDateString('en-US', { 
              weekday: 'long', 
              month: 'long', 
              day: 'numeric' 
            }) : 'Select a date'}
          </h4>
          
          {filteredDeliveries.length > 0 ? (
            <div className="space-y-3">
              {filteredDeliveries.map((delivery) => (
                <div 
                  key={delivery.id} 
                  className="flex items-center rounded-md border p-3"
                >
                  <div className={cn(
                    "rounded-full p-2 mr-3",
                    delivery.status === 'confirmed' && "bg-green-100",
                    delivery.status === 'projected' && "bg-blue-100",
                    delivery.status === 'today' && "bg-yellow-100",
                    delivery.status === 'completed' && "bg-gray-100"
                  )}>
                    <Truck className={cn(
                      "h-4 w-4",
                      delivery.status === 'confirmed' && "text-green-700",
                      delivery.status === 'projected' && "text-blue-700",
                      delivery.status === 'today' && "text-yellow-700",
                      delivery.status === 'completed' && "text-gray-700"
                    )} />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{delivery.itemName}</p>
                    <p className="text-xs text-muted-foreground">
                      {delivery.supplier} • {delivery.date.toLocaleTimeString('en-US', { 
                        hour: 'numeric', 
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                  <span className={cn(
                    "ml-auto rounded-full px-2 py-1 text-xs font-medium",
                    delivery.status === 'confirmed' && "bg-green-100 text-green-800",
                    delivery.status === 'projected' && "bg-blue-100 text-blue-800",
                    delivery.status === 'today' && "bg-yellow-100 text-yellow-800",
                    delivery.status === 'completed' && "bg-gray-100 text-gray-800"
                  )}>
                    {delivery.status.charAt(0).toUpperCase() + delivery.status.slice(1)}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-40 text-center">
              <Truck className="h-12 w-12 text-gray-300 mb-2" />
              <p className="text-gray-500">No deliveries scheduled for this date.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeliverySchedule;
