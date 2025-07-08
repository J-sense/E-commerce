import {
  Apple,
  Laptop,
  Smartphone,
  Camera,
  Star,
  CheckCircle2,
  Clock,
  CalendarClock,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function Sidebar() {
  return (
    <Card className="w-64 h-full p-4 rounded-none border-r-0">
      {/* Categories Section */}
      <div className="space-y-3">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Categories
        </h3>
        <div className="flex items-center gap-2 p-2 text-sm">
          <Apple className="h-4 w-4 text-muted-foreground" />
          <span>Apple (SB)</span>
        </div>
        <div className="flex items-center gap-2 p-2 text-sm">
          <Laptop className="h-4 w-4 text-muted-foreground" />
          <span>Del (64)</span>
        </div>
        <div className="flex items-center gap-2 p-2 text-sm">
          <Smartphone className="h-4 w-4 text-muted-foreground" />
          <span>Aaa (II)</span>
        </div>
        <div className="flex items-center gap-2 p-2 text-sm">
          <Camera className="h-4 w-4 text-muted-foreground" />
          <span>Camera</span>
        </div>
      </div>

      <Separator className="my-4" />

      {/* Rating Section */}
      <div className="space-y-3">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Rating
        </h3>
        <div className="flex items-center justify-between p-2 text-sm">
          <div className="flex items-center gap-2">
            <span>3.00</span>
            <div className="flex">
              <Star className="h-3 w-3 fill-primary" />
              <Star className="h-3 w-3 fill-primary" />
              <Star className="h-3 w-3 fill-primary" />
              <Star className="h-3 w-3 fill-muted" />
              <Star className="h-3 w-3 fill-muted" />
            </div>
          </div>
          <span className="text-xs text-muted-foreground">(3)</span>
        </div>
        <div className="flex items-center justify-between p-2 text-sm">
          <div className="flex items-center gap-2">
            <span>4.00</span>
            <div className="flex">
              <Star className="h-3 w-3 fill-primary" />
              <Star className="h-3 w-3 fill-primary" />
              <Star className="h-3 w-3 fill-primary" />
              <Star className="h-3 w-3 fill-primary" />
              <Star className="h-3 w-3 fill-muted" />
            </div>
          </div>
          <span className="text-xs text-muted-foreground">(4)</span>
        </div>
        <div className="flex items-center justify-between p-2 text-sm">
          <div className="flex items-center gap-2">
            <span>3.00</span>
            <div className="flex">
              <Star className="h-3 w-3 fill-primary" />
              <Star className="h-3 w-3 fill-primary" />
              <Star className="h-3 w-3 fill-primary" />
              <Star className="h-3 w-3 fill-muted" />
              <Star className="h-3 w-3 fill-muted" />
            </div>
          </div>
          <span className="text-xs text-muted-foreground">(3)</span>
        </div>
        <div className="flex items-center justify-between p-2 text-sm">
          <div className="flex items-center gap-2">
            <span>2.00</span>
            <div className="flex">
              <Star className="h-3 w-3 fill-primary" />
              <Star className="h-3 w-3 fill-primary" />
              <Star className="h-3 w-3 fill-muted" />
              <Star className="h-3 w-3 fill-muted" />
              <Star className="h-3 w-3 fill-muted" />
            </div>
          </div>
          <span className="text-xs text-muted-foreground">(2)</span>
        </div>
        <div className="flex items-center justify-between p-2 text-sm">
          <div className="flex items-center gap-2">
            <span>1.00</span>
            <div className="flex">
              <Star className="h-3 w-3 fill-primary" />
              <Star className="h-3 w-3 fill-muted" />
              <Star className="h-3 w-3 fill-muted" />
              <Star className="h-3 w-3 fill-muted" />
              <Star className="h-3 w-3 fill-muted" />
            </div>
          </div>
          <span className="text-xs text-muted-foreground">(1)</span>
        </div>
      </div>

      <Separator className="my-4" />

      {/* Availability Section */}
      <div className="space-y-3">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Availability
        </h3>
        <div className="flex items-center gap-2 p-2 text-sm">
          <CheckCircle2 className="h-3 w-3 text-muted-foreground" />
          <span>In Stock</span>
        </div>
        <div className="flex items-center gap-2 p-2 text-sm">
          <Clock className="h-3 w-3 text-muted-foreground" />
          <span>Pre Order</span>
        </div>
        <div className="flex items-center gap-2 p-2 text-sm">
          <CalendarClock className="h-3 w-3 text-muted-foreground" />
          <span>Upcoming</span>
        </div>
      </div>
    </Card>
  );
}
