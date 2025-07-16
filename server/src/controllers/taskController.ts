import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTasks = async (req: Request, res: Response): Promise<void> => {
  const { projectId } = req.query;
  try {
    const tasks = await prisma.task.findMany({
      where: {
        projectId: Number(projectId),
      },
      include: {
        author: true,
        assignee: true,
        comments: true,
        attachments: true,
      },
    });
    res.json(tasks);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Failed to fetch tasks: ${error.message}` });
  }
};


 


export const createTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  const {
    title,
    description,
    status,
    priority,
    tags,
    startDate,
    dueDate,
    points,
    projectId,
    authorUserId,
    assignedUserId,
  } = req.body;
  try {
    const newTask = await prisma.task.create({
      data: {
        title,
        description,
        status,
        priority,
        tags,
        startDate,
        dueDate,
        points,
        projectId,
        authorUserId,

        assignedUserId,
      },
    });
    res.status(201).json(newTask);
  } catch (error: any) {
    res.status(500).json({ message: `error in crateTask: ${error.message}` });
  }
};

export const updateTasksStatus = async (req: Request, res: Response): Promise<void> => {
  const { taskId } = req.params;
  const {status} = req.body;
  try {
    const updatedTask = await prisma.task.update({
      where: {
        id: Number(taskId),
      },
     data:{
        status:status,

     }
    });
    res.json(updatedTask);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Failed to update tasks: ${error.message}` });
  }
};