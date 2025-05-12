export interface NavItem {
  label: string;
  href: string;
}

export interface AlertItem {
  id: string;
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high';
  timestamp: string;
}

export interface SystemStatus {
  tankLevel: number;
  signalStrength: number;
  lastChecked: string;
  batteryLevel: number;
  maintenanceDue: boolean;
}

export interface StatItem {
  icon: string;
  title: string;
  value: string | number;
  change?: number;
  unit?: string;
}