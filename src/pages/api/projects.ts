/* eslint-disable @typescript-eslint/no-explicit-any */
import { allProjects } from '@/common/constant/projects';
import prisma from '@/common/libs/prisma';
import { ProjectType } from '@/common/types/projects';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  status: boolean;
  data?: any;
  error?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === 'GET') {
    try {
      const response = await prisma.portfolio_projects.findMany();
      return res.status(200).json({ status: true, data: response });
    } catch (error) {
      return res.status(500).json({ status: false, error });
    }
  } else {
    const requiredFields = ['title', 'slug', 'description', 'image', 'stacks'];
    const projects = [];
    const incompleteProjects = [];

    for (const project of allProjects) {
      let projectKeysCount = 0;
      for (const key of Object.keys(project) as (keyof ProjectType)[]) {
        if (requiredFields.includes(key) && !project[key]) {
          incompleteProjects.push(project);
          break;
        }
        if (requiredFields.includes(key)) {
          projectKeysCount++;
        }
        if (projectKeysCount === requiredFields.length) {
          projects.push(project);
          break;
        }
      }
    }
    if (incompleteProjects.length > 0) {
      return res.status(400).json({
        status: false,
        error: 'Some projects are missing required fields',
        data: incompleteProjects,
      });
    }
    if (projects.length === 0) {
      return res
        .status(400)
        .json({ status: false, error: 'No valid projects to create' });
    }

    await prisma.portfolio_projects.deleteMany();

    const createdProjects = await prisma.portfolio_projects.createMany({
      data: projects,
    });

    if (createdProjects.count > 0) {
      return res.status(201).json({ status: true, data: createdProjects });
    } else {
      return res
        .status(400)
        .json({ status: false, error: 'No valid projects to create' });
    }
  }
}
