import { FunctionComponent } from 'react';
import styles from './user-page.module.css';
import { auth, currentUser, useUser } from '@clerk/nextjs';
import UserPageBets from './UserPageBets';
import { prisma } from '../../../db/db';
import { userFromClerkId } from '@/components/Utilities/userIdFromClerkId';
import { AROBets, SingleBets, User } from '@prisma/client';

async function ToTypeBets(
  userId: string
): Promise<[POST_AKOChosenBets[], POST_SingleChosenBets[]]> {
  const data2 = await prisma.user.findUniqueOrThrow({
    where: { userId: userId },
    select: {
      ARObets: { include: { opponents: true } },
      Singlebets: true,
    },
  });
  const AKOBets: POST_AKOChosenBets[] = data2.ARObets.map((AKO) => {
    const betData: {
      matchId: string;
      opponents:
        | [
            { chosen: true; opponentName: string; opponentOdds: string },
            { chosen: false; opponentName: string; opponentOdds: string }
          ]
        | [
            { chosen: false; opponentName: string; opponentOdds: string },
            { chosen: true; opponentName: string; opponentOdds: string }
          ];
    }[] = AKO.opponents.map((e) => {
      return {
        matchId: e.matchId,
        opponents: [
          {
            chosen: e.chosen === false ? true : false,
            opponentName: e.opponentOneName,
            opponentOdds: e.opponentOneOdds,
          },
          {
            chosen: e.chosen === true ? true : false,
            opponentName: e.opponentTwoName,
            opponentOdds: e.opponentTwoOdds,
          },
        ],
      };
    });
    return {
      type: 'AKO',
      payload: {
        betId: AKO.betId,
        winAmount: AKO.winAmount.toString(),
        paidAmount: AKO.paidAmount.toString(),
        betData: betData,
      },
    };
  });
  const SingleBets: POST_SingleChosenBets[] = data2.Singlebets.map((Single) => {
    return {
      type: 'SINGLE',
      payload: {
        betId: Single.betId,
        matchId: Single.matchId,
        opponents: [
          {
            chosen: Single.chosen === false ? true : false,
            opponentName: Single.opponentOneName,
            opponentOdds: Single.opponentOneOdds,
          },
          {
            chosen: Single.chosen === true ? true : false,
            opponentName: Single.opponentTwoName,
            opponentOdds: Single.opponentTwoOdds,
          },
        ],
        paidAmount: Single.paidAmount.toString(),
        winAmount: Single.winAmount.toString(),
      },
    };
  });
  return [AKOBets, SingleBets];
}

const UserSite: FunctionComponent = async () => {
  const user = await currentUser();
  const { userId } = await userFromClerkId({});
  const data2 = await ToTypeBets(userId);
  const [AKOBets, SingleBets] = await ToTypeBets(userId);
  // const AKOBets:POST_AKOChosenBets ={type:'AKO',payload:{betId:}};
  return (
    <div className={styles.dashboard}>
      <h1>Dashboard. {user?.firstName ?? 'none user'}</h1>
      <div className={styles.bets}>
        <h2>Your Bets</h2>
        <UserPageBets
          userId={userId}
          AKOBets={AKOBets}
          SingleBets={SingleBets}
        />
      </div>
    </div>
  );
};

export default UserSite;
