import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const employees = await prisma.employee.findMany({
      include: {
        attendance: {
          take: 5,
          orderBy: { date: "desc" },
        },
        assignedTasks: {
          take: 5,
          orderBy: { dueDate: "asc" },
        },
        leaveRequests: {
          take: 5,
          orderBy: { createdAt: "desc" },
        },
      },
      orderBy: { id: "asc" },
    });

    return NextResponse.json({
      success: true,
      count: employees.length,
      employees,
    });
  } catch (error: any) {
    console.error("Failed to fetch employees:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to fetch employees" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      id,
      firstName,
      lastName,
      username,
      email,
      password,
      contactNumber,
      department,
      position,
      role = "employee",
      workStatus = "at_work",
      avatarUrl,
      dateOfBirth,
      gender,
      bloodType = "O+",
      nextOfKin = "N/A",
      hireDate = new Date().toISOString().split("T")[0],
    } = body;

    if (!id || !firstName || !lastName || !email || !department) {
      return NextResponse.json(
        { success: false, error: "Missing required employee fields" },
        { status: 400 }
      );
    }

    const employee = await prisma.employee.create({
      data: {
        id,
        firstName,
        lastName,
        username: username || `${firstName.toLowerCase()}.${lastName.toLowerCase()}`,
        email,
        password: password || "$2a$12$e8YwVjB4eU.82bQJpPwq8.g5a6Xp1kY1D3ZlK8L0zF3vA7qP1t4nO",
        contactNumber: contactNumber || "",
        department,
        position: position || "Staff",
        role: role === "manager" ? "manager" : "employee",
        workStatus: workStatus === "on_leave" ? "on_leave" : workStatus === "at_home" ? "at_home" : "at_work",
        avatarUrl,
        dateOfBirth: dateOfBirth || "1998-01-01",
        gender: gender || "Not Specified",
        bloodType,
        nextOfKin,
        hireDate,
        isActivated: true,
      },
    });

    return NextResponse.json({
      success: true,
      employee,
    }, { status: 201 });
  } catch (error: any) {
    console.error("Failed to create employee:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to create employee" },
      { status: 500 }
    );
  }
}
