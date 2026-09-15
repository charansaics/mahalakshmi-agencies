export type VehicleModel = {
  id: string;
  name: string;
  image: string;
  summary: string;
  description: string;
  specs: Array<{ label: string; value: string }>;
};

export const salesModels: VehicleModel[] = [
  {
    id: "s7-staff-bus",
    name: "S7 Staff Bus",
    image: "/vehicles/s7-staff-bus.jpg",
    summary: "BS-VI staff transport with seating for 36D / 47D / 59D and power steering.",
    description:
      "Built for reliable staff and employee transport, the S7 Staff Bus offers dependable daily mobility with robust BS-VI performance, comfortable seating, and operator-friendly power steering.",
    specs: [
      { label: "Wheelbase (mm)", value: "3335 / 4240 / 5100" },
      { label: "Displacement (cc)", value: "3455" },
      { label: "Engine Description", value: "BS-VI SLT-6" },
      { label: "Engine Type", value: "4 - Cylinder In - line Common Rail Direct Injection Diesel Turbo-charger with Inter-cooler" },
      { label: "No Of Tyres", value: "6 + 1" },
      { label: "Gear Box", value: "Synchromesh Manual (5 - Forward & 1 - Reverse)" },
      { label: "Clutch", value: "Single Plate Dry Diaphragm Type" },
      { label: "Torque", value: "BS-VI: 310 kW @ 1400-1600 rpm" },
      { label: "Engine Power", value: "BS-VI: 75 kW @ 2600 rpm" },
      { label: "Type of Seats", value: "Standard School Seats" },
      { label: "Brakes", value: "Hydraulic & Air Brakes" },
      { label: "Tyres Size", value: "8.25' x 16' - 16 PR" },
      { label: "Steering Type", value: "Power Steering" },
      { label: "No Of Seats", value: "36+D/47+D/59+D" },
    ],
  },
  {
    id: "executive-lx-school-bus",
    name: "Executive LX School Bus",
    image: "/vehicles/executive-lx-school-bus.jpg",
    summary: "School bus variant designed for dependable daily student commutes and comfort.",
    description:
      "The Executive LX School Bus combines practical school transport design with durable engineering and a comfortable cabin, making it ideal for daily student mobility.",
    specs: [
      { label: "Wheelbase (mm)", value: "3335 / 4240 / 5100" },
      { label: "Engine Description", value: "BS-VI" },
      { label: "No Of Seats", value: "Standard school seating" },
      { label: "Brakes", value: "Hydraulic & Air Brakes" },
      { label: "Steering Type", value: "Power Steering" },
    ],
  },
  {
    id: "bh-series-school-bus",
    name: "BH Series School Bus (BSVI)",
    image: "/vehicles/bh-series-school-bus.jpg",
    summary: "Premium BS-VI school bus built for reliable student transport operations.",
    description:
      "The BH Series School Bus is designed for efficient and comfortable school commuting with a strong BS-VI platform and dependable long-term performance.",
    specs: [
      { label: "Wheelbase (mm)", value: "3335 / 4240 / 5100" },
      { label: "Engine Description", value: "BS-VI" },
      { label: "No Of Seats", value: "School seating layout" },
      { label: "Brakes", value: "Hydraulic & Air Brakes" },
      { label: "Steering Type", value: "Power Steering" },
    ],
  },
  {
    id: "executive-lx-staff-bus",
    name: "Executive LX Staff Bus (BSVI)",
    image: "/vehicles/execuiyve-lx-staff.jpg",
    summary: "Staff mobility solution tuned for comfort, efficiency, and fleet durability.",
    description:
      "This premium staff bus is developed for organizational transport requirements with a focus on efficiency, long-distance ride comfort, and dependable fleet operation.",
    specs: [
      { label: "Wheelbase (mm)", value: "3335 / 4240 / 5100" },
      { label: "Engine Description", value: "BS-VI" },
      { label: "No Of Seats", value: "Staff seating layout" },
      { label: "Brakes", value: "Hydraulic & Air Brakes" },
      { label: "Steering Type", value: "Power Steering" },
    ],
  },
  {
    id: "s7-school-bus",
    name: "S7 School Bus",
    image: "/vehicles/s7-school-bus.jpg",
    summary: "Versatile bus platform with school seating and dependable BS-VI performance.",
    description:
      "The S7 School Bus is built for dependable school transport with smooth handling, comfortable seating, and proven commercial bus performance.",
    specs: [
      { label: "Wheelbase (mm)", value: "3335 / 4240 / 5100" },
      { label: "Engine Description", value: "BS-VI SLT-6" },
      { label: "No Of Seats", value: "School seating range" },
      { label: "Brakes", value: "Hydraulic & Air Brakes" },
      { label: "Steering Type", value: "Power Steering" },
    ],
  },
  {
    id: "prestige-school-bus",
    name: "Prestige School Bus (BSVI)",
    image: "/vehicles/prestige-school-bus.jpg",
    summary: "Comfort-driven school transport option with robust handling and safety focus.",
    description:
      "Prestige School Bus offers a premium feel for school routes with safety-focused design and efficient performance suited to modern school transport needs.",
    specs: [
      { label: "Wheelbase (mm)", value: "3335 / 4240 / 5100" },
      { label: "Engine Description", value: "BS-VI" },
      { label: "No Of Seats", value: "Premium school seating" },
      { label: "Brakes", value: "Hydraulic & Air Brakes" },
      { label: "Steering Type", value: "Power Steering" },
    ],
  },
  {
    id: "hiroi-school-bus",
    name: "Hiroi School Bus",
    image: "/vehicles/hiroi-school-bus.jpg",
    summary: "A trusted school mobility model aligned with the SML Mahindra transport range.",
    description:
      "The Hiroi School Bus delivers a reliable school transportation experience with durable construction and practical comfort for daily route operations.",
    specs: [
      { label: "Wheelbase (mm)", value: "3335 / 4240 / 5100" },
      { label: "Engine Description", value: "BS-VI" },
      { label: "No Of Seats", value: "School transport layout" },
      { label: "Brakes", value: "Hydraulic & Air Brakes" },
      { label: "Steering Type", value: "Power Steering" },
    ],
  },
];
