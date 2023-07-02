import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../db/db';
import { currentUser } from '@clerk/nextjs';
import { userFromClerkId } from '@/components/Utilities/userIdFromClerkId';
import { Prisma } from '@prisma/client';

export async function POST(request: NextRequest) {
  console.log('post');
  const User = await currentUser();
  if (!User) return;
  const { userId } = await userFromClerkId({});
  const data: POST_AKOChosenBets[] | POST_SingleChosenBets[] =
    await request.json();
  if (data[0].type === 'AKO') {
    console.log('im on aro');
    console.log('BET_DATA', data[0].payload.betData[0].opponents);
    await prisma.aROBets.create({
      data: {
        betId: data[0].payload.betId,
        paidAmount: Number(data[0].payload.paidAmount),
        winAmount: Number(data[0].payload.winAmount),
        userId: userId,
      },
    });
    console.log(
      'BET_DATA---------------2',
      data[0].payload.betData[0].opponents[1]
    );
    const opponentsData: Prisma.Enumerable<Prisma.opponentsCreateManyInput> =
      data[0].payload.betData.map((e) => {
        return {
          aROBetsBetId: data[0].payload.betId,
          chosen: e.opponents[0].chosen ? false : true,
          matchId: e.matchId,
          opponentOneName: e.opponents[0].opponentName,
          opponentOneOdds: Number(e.opponents[0].opponentOdds),
          opponentTwoName: e.opponents[1].opponentName,
          opponentTwoOdds: Number(e.opponents[1].opponentOdds),
        };
      });
    await prisma.opponents.createMany({
      data: opponentsData,
      skipDuplicates: true,
    });
  } else {
    const dataSingle = (data as POST_SingleChosenBets[]).map((dataEl) => {
      return {
        chosen: dataEl.payload.opponents[0].chosen ? false : true,
        matchId: dataEl.payload.matchId,
        opponentOneName: dataEl.payload.opponents[0].opponentName,
        opponentOneOdds: parseFloat(dataEl.payload.opponents[0].opponentOdds),
        opponentTwoName: dataEl.payload.opponents[1].opponentName,
        opponentTwoOdds: parseFloat(dataEl.payload.opponents[1].opponentOdds),
        paidAmount: parseFloat(dataEl.payload.paidAmount),
        winAmount: parseFloat(dataEl.payload.winAmount),
        userId: userId,
      };
    });
    await prisma.singleBets.createMany({
      data: dataSingle,
    });
  }
  console.log('IT SHOULD HAVE BEEN CREATED');
  return NextResponse.json({
    message: 'I have gone through the API',
    success: 'true',
  });
}
