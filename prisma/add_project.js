import { PrismaClient } from '@prisma/client';

const addProject = async () => {
  try {
    const prisma = new PrismaClient();
    const project = {
      title: 'The AFRAN Group Foundation',
      slug: 'theafrangroupfoundation',
      description:
        'The AFRAN Group Foundation is a registered non-profit based in Nairobi, Kenya, dedicated to protecting and empowering children who face violence, abuse, neglect, and exploitation.',
      image:
        'https://res.cloudinary.com/dr0qq0taf/image/upload/v1761295867/Screenshot_2025-10-24_115024_bua9as.png',
      link_demo: 'https://www.theafrangroupfoundation.org',
      link_github: 'https://github.com/Mike-205/afran-group-foundation',
      stacks:
        '["Next.js", "TypeScript", "TailwindCSS", "Prisma", "PostgreSQL"]',
      is_show: true,
      content:
        'The AFRAN Group Foundation is a registered non-profit based in Nairobi, Kenya, dedicated to protecting and empowering children who face violence, abuse, neglect, and exploitation.',
      is_featured: true,
    };
    const result = await prisma.portfolio_projects.create({
      data: project,
    });
    console.log('Project added:', result);
    await prisma.$disconnect();
  } catch (error) {
    console.error('Error adding project:', error);
  }
};

addProject();
