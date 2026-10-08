import "dotenv/config";
import { PrismaClient, UserRole, WorkStatus, AttendanceStatus, TaskPriority, TaskStatus, LeaveStatus, LeaveType } from "@prisma/client";

const prisma = new PrismaClient();

export const EMPLOYEES_DATA = [
  {
    id: "SB-1001",
    firstName: "Sarah",
    lastName: "Jenkins",
    username: "sarah.jenkins",
    email: "sarah.jenkins@seabutter.internal",
    password: "$2a$12$e8YwVjB4eU.82bQJpPwq8.g5a6Xp1kY1D3ZlK8L0zF3vA7qP1t4nO", // Default: Password123!
    contactNumber: "+63 918 555 0101",
    department: "Operations",
    position: "Operations Director",
    role: UserRole.manager,
    workStatus: WorkStatus.at_work,
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150",
    dateOfBirth: "1988-04-12",
    gender: "Female",
    bloodType: "A+",
    nextOfKin: "David Jenkins (Spouse) - +63 918 555 0102",
    hireDate: "2021-03-15",
    isActivated: true,
  },
  {
    id: "SB-8821",
    firstName: "Gabriel",
    lastName: "Enrile",
    username: "gabriel.enrile",
    email: "gabriel.enrile@seabutter.internal",
    password: "$2a$12$e8YwVjB4eU.82bQJpPwq8.g5a6Xp1kY1D3ZlK8L0zF3vA7qP1t4nO", // Default: Password123!
    contactNumber: "+63 917 882 1042",
    department: "Engineering",
    position: "Lead Systems Engineer",
    role: UserRole.employee,
    workStatus: WorkStatus.at_work,
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    dateOfBirth: "1997-09-27",
    gender: "Male",
    bloodType: "O+",
    nextOfKin: "Maria Enrile (Mother) - +63 917 882 1099",
    hireDate: "2023-01-10",
    isActivated: true,
  },
  {
    id: "24-2545-483",
    firstName: "Marie",
    lastName: "Curie",
    username: "marie.curie",
    email: "iwonanobelprize@gmail.com",
    password: "$2a$12$e8YwVjB4eU.82bQJpPwq8.g5a6Xp1kY1D3ZlK8L0zF3vA7qP1t4nO", // Default: Password123!
    contactNumber: "+63 969 420 6767",
    department: "Operations",
    position: "Senior Research & Operations Specialist",
    role: UserRole.employee,
    workStatus: WorkStatus.at_home,
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
    dateOfBirth: "1995-11-07",
    gender: "Female",
    bloodType: "AB+",
    nextOfKin: "Pierre Curie (Spouse) - +63 969 420 6768",
    hireDate: "2024-02-01",
    isActivated: true,
  },
  {
    id: "SB-4412",
    firstName: "Marcus",
    lastName: "Vance",
    username: "marcus.vance",
    email: "marcus.vance@seabutter.internal",
    password: "$2a$12$e8YwVjB4eU.82bQJpPwq8.g5a6Xp1kY1D3ZlK8L0zF3vA7qP1t4nO", // Default: Password123!
    contactNumber: "+63 920 334 1192",
    department: "Design",
    position: "Principal Product Designer",
    role: UserRole.employee,
    workStatus: WorkStatus.at_work,
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    dateOfBirth: "1994-08-22",
    gender: "Male",
    bloodType: "B+",
    nextOfKin: "Elena Vance (Sister) - +63 920 334 1190",
    hireDate: "2022-06-15",
    isActivated: true,
  },
  {
    id: "SB-6309",
    firstName: "Chloe",
    lastName: "Ramirez",
    username: "chloe.ramirez",
    email: "chloe.ramirez@seabutter.internal",
    password: "$2a$12$e8YwVjB4eU.82bQJpPwq8.g5a6Xp1kY1D3ZlK8L0zF3vA7qP1t4nO", // Default: Password123!
    contactNumber: "+63 927 411 9083",
    department: "Marketing",
    position: "Brand Strategy Specialist",
    role: UserRole.employee,
    workStatus: WorkStatus.on_leave,
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    dateOfBirth: "1999-02-18",
    gender: "Female",
    bloodType: "O-",
    nextOfKin: "Roberto Ramirez (Father) - +63 927 411 9080",
    hireDate: "2023-09-01",
    isActivated: true,
  },
  {
    id: "SB-5520",
    firstName: "Liam",
    lastName: "Patterson",
    username: "liam.patterson",
    email: "liam.patterson@seabutter.internal",
    password: "$2a$12$e8YwVjB4eU.82bQJpPwq8.g5a6Xp1kY1D3ZlK8L0zF3vA7qP1t4nO", // Default: Password123!
    contactNumber: "+63 915 220 8941",
    department: "Engineering",
    position: "Full Stack Developer",
    role: UserRole.employee,
    workStatus: WorkStatus.at_work,
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    dateOfBirth: "1996-12-05",
    gender: "Male",
    bloodType: "A-",
    nextOfKin: "Hannah Patterson (Sister) - +63 915 220 8940",
    hireDate: "2023-11-20",
    isActivated: true,
  },
];

async function main() {
  const dbUrl = process.env.DATABASE_URL || "";
  if (!dbUrl || dbUrl.includes("[YOUR-PASSWORD]") || dbUrl.includes("YOUR_PASSWORD")) {
    console.error(
      "\n❌ [Configuration Required]: Please replace '[YOUR-PASSWORD]' in your .env file with your actual Supabase database password before seeding.\n"
    );
    process.exit(1);
  }

  console.log("Seeding Seabutter EMS employees and initial data...");

  // Upsert Employees
  for (const emp of EMPLOYEES_DATA) {
    await prisma.employee.upsert({
      where: { id: emp.id },
      update: emp,
      create: emp,
    });
    console.log(`Created/Updated employee: ${emp.firstName} ${emp.lastName} (${emp.id})`);
  }

  // Seed Sample Attendance
  const attendanceData = [
    {
      employeeId: "SB-8821",
      date: "2026-10-05",
      day: "Monday",
      clockIn: "08:50 AM",
      clockOut: "05:32 PM",
      durationHours: 8.7,
      status: AttendanceStatus.present,
    },
    {
      employeeId: "SB-8821",
      date: "2026-10-06",
      day: "Tuesday",
      clockIn: "09:12 AM",
      clockOut: "05:45 PM",
      durationHours: 8.55,
      status: AttendanceStatus.late,
    },
    {
      employeeId: "SB-8821",
      date: "2026-10-07",
      day: "Wednesday",
      clockIn: "08:45 AM",
      clockOut: "05:30 PM",
      durationHours: 8.75,
      status: AttendanceStatus.present,
    },
    {
      employeeId: "SB-8821",
      date: "2026-10-08",
      day: "Thursday",
      clockIn: "08:55 AM",
      clockOut: null,
      durationHours: 4.2,
      status: AttendanceStatus.present,
    },
    {
      employeeId: "24-2545-483",
      date: "2026-10-08",
      day: "Thursday",
      clockIn: "08:30 AM",
      clockOut: null,
      durationHours: 4.5,
      status: AttendanceStatus.present,
    },
    {
      employeeId: "SB-4412",
      date: "2026-10-08",
      day: "Thursday",
      clockIn: "09:00 AM",
      clockOut: null,
      durationHours: 4.0,
      status: AttendanceStatus.present,
    },
  ];

  for (const att of attendanceData) {
    await prisma.attendanceRecord.create({
      data: att,
    });
  }
  console.log(`Seeded ${attendanceData.length} attendance records.`);

  // Seed Sample Tasks
  const taskData = [
    {
      title: "Refactor Authentication Session Guard",
      description: "Ensure session tokens are securely handled and cooldown limits function properly across all views.",
      department: "Engineering",
      assignedToId: "SB-8821",
      assignedToName: "Gabriel Enrile",
      dueDate: "2026-10-12",
      priority: TaskPriority.urgent,
      status: TaskStatus.in_progress,
    },
    {
      title: "Update Design Tokens for Maritime Dark Theme",
      description: "Audit high-contrast colors and implement subtle nautical slate borders across all cards.",
      department: "Design",
      assignedToId: "SB-4412",
      assignedToName: "Marcus Vance",
      dueDate: "2026-10-14",
      priority: TaskPriority.moderate,
      status: TaskStatus.pending,
    },
    {
      title: "Quarterly Operations Audit & Shift Rotations",
      description: "Consolidate Q3 team attendance metrics and submit summary to executive leadership.",
      department: "Operations",
      assignedToId: "24-2545-483",
      assignedToName: "Marie Curie",
      dueDate: "2026-10-10",
      priority: TaskPriority.moderate,
      status: TaskStatus.in_progress,
    },
    {
      title: "Brand Strategy Deck for Coastal Campaign",
      description: "Draft presentation materials and messaging points for regional marketing leads.",
      department: "Marketing",
      assignedToId: "SB-6309",
      assignedToName: "Chloe Ramirez",
      dueDate: "2026-10-18",
      priority: TaskPriority.low,
      status: TaskStatus.pending,
    },
  ];

  for (const task of taskData) {
    await prisma.taskItem.create({
      data: task,
    });
  }
  console.log(`Seeded ${taskData.length} task records.`);

  // Seed Sample Leave Requests
  const leaveData = [
    {
      employeeId: "SB-6309",
      employeeName: "Chloe Ramirez",
      department: "Marketing",
      leaveType: LeaveType.vacation,
      description: "Annual family retreat",
      startDate: "2026-10-07",
      endDate: "2026-10-11",
      daysCount: 5,
      proofFileName: "flight_itinerary.pdf",
      reason: "Pre-approved personal vacation time.",
      status: LeaveStatus.approved,
      submittedAt: "2026-10-01",
      reviewedBy: "Sarah Jenkins",
    },
    {
      employeeId: "SB-8821",
      employeeName: "Gabriel Enrile",
      department: "Engineering",
      leaveType: LeaveType.sick,
      description: "Medical consultation & dental checkup",
      startDate: "2026-10-15",
      endDate: "2026-10-15",
      daysCount: 1,
      proofFileName: "medical_cert.pdf",
      reason: "Scheduled specialist appointment.",
      status: LeaveStatus.pending,
      submittedAt: "2026-10-07",
    },
  ];

  for (const leave of leaveData) {
    await prisma.leaveRequest.create({
      data: leave,
    });
  }
  console.log(`Seeded ${leaveData.length} leave requests.`);

  // Seed Sample Announcements
  const announcementData = [
    {
      title: "Scheduled Maintenance for Internal Servers",
      message: "Infrastructure updates will be performed on Sunday between 02:00 AM and 05:00 AM UTC. Expect brief intermittent connectivity.",
      date: "2026-10-08",
      priority: TaskPriority.urgent,
      targetDepartment: "All",
      postedById: "SB-1001",
      postedByName: "Sarah Jenkins",
    },
    {
      title: "New Flexible Work Policy Updates",
      message: "Please review the updated remote-work policy guidelines now published on the internal company documentation portal.",
      date: "2026-10-06",
      priority: TaskPriority.moderate,
      targetDepartment: "Operations",
      postedById: "SB-1001",
      postedByName: "Sarah Jenkins",
    },
  ];

  for (const ann of announcementData) {
    await prisma.announcementItem.create({
      data: ann,
    });
  }
  console.log(`Seeded ${announcementData.length} announcements.`);

  console.log("Seeding completed successfully! All documentation plan employee accounts stored.");
}

main()
  .catch((e) => {
    console.error("Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
