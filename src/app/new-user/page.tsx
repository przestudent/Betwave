import { FC } from 'react';
import { prisma } from '../../../db/db';
import { auth, currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

const createNewUser = async () => {
  const user = await currentUser();
  const match = await prisma.user.findUnique({
    where: { clerkId: user?.id as string },
  });
  if (!match) {
    await prisma.user.create({
      data: {
        clerkId: user?.id as string,
        email: user?.emailAddresses[0].emailAddress as string,
      },
    });
  }

  redirect('/user');
};

const NewUserPage: FC = async () => {
  await createNewUser();
  return <div>Loading...</div>;
};

export default NewUserPage;
