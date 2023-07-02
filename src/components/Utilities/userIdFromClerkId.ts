import { auth } from '@clerk/nextjs';
import { prisma } from '../../../db/db';
import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime';

export const userFromClerkId = async ({
  includes,
  select,
}: {
  includes?: Prisma.UserInclude<DefaultArgs>;
  select?: Prisma.UserSelect<DefaultArgs>;
}) => {
  const { userId } = await auth();
  const user = await prisma.user.findUniqueOrThrow({
    where: { clerkId: userId },
    include: includes,
    select: select,
  });

  return user;
};
