export const serviceOptions: Record<string, string[]> = {
  home: [
    "oil-change",
    "engine-tuning",
    "electrician",
    "car-repair-mechanic-service",
    "car-wash",
  ],
  mobile: ["car-repair-mechanic-service", "electrician"],
};

export const serviceLabels: Record<string, string> = {
  home: "Home Service",
  mobile: "Mobile Service",
};

export const serviceSubcategoryLabels: Record<string, string> = {
  "oil-change": "Oil Change",
  "engine-tuning": "Engine Tuning",
  electrician: "Electrician",
  "car-repair-mechanic-service": "Car Repair / Mechanic Service",
  "car-wash": "Car Wash",
};

export const orderStatusLabels: Record<string, string> = {
  pending: "Pending",
  "in-progress": "In Progress",
  completed: "Completed",
};

export const teamRoleLabels: Record<string, string> = {
  mechanic: "Mechanic",
  electrician: "Electrician",
  "car-wash": "Car Wash",
};

export const inventoryCategoryLabels: Record<string, string> = {
  oil: "Oil",
  "air-filter": "Air Filter",
  "oil-filter": "Oil Filter",
};
