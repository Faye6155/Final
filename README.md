# Final Project -2019 LOL Game Data Analysis

This project will analyze the 2019 League of Legends (LOL) Game date. The main focus would be compare the 4 major leagues's game data by different elements within the game. The rule of game play is following:
https://www.leagueoflegends.com/en-us/how-to-play/

To make it simple to understand, League of Legends is a Multiplayer Online Battleground Arena (MOBA) style game developed by Riot Games. Each game consists of two teams with 5 players each. Each team starts the game at opposite sides of the arena in a base that contains their Nexus. The goal of each game is to overcome obstacles such as minions, structures and enemy players in order to destroy the enemy Nexus. Each team generally consists of 5 standard positions divided across the map: Top, Middle, Jungle, Attack Damage Carry(ADC)/Marksman and Support. Each player in a match controls a unique champion chosen from a pool of more than a hundred with differing characteristics and abilities.

![map](https://user-images.githubusercontent.com/94014863/164923256-59093240-c0b9-4dd5-8ec6-4d2c8d0433c8.PNG)


Four most popular leauges were selected as following:
- League of Legends Champions Korea (LCK)
- League Championship Series (LCS)
- League of Legends European Championship (LEC)
- League IF Legends Pro League (LPL)


Source: 

https://oracleselixir.com/tools/downloads

https://oracleselixir.com/stats/teams/byTournament

Tableau Source:

https://public.tableau.com/shared/CCQ9MS84G?:display_count=n&:origin=viz_share_link


![Side](https://user-images.githubusercontent.com/94014863/164930134-3732fd68-693a-4bfe-b140-5a8be4ada993.PNG)

These 4 leagues chose the BLUE side more than RED. To specified, Blue side has more kills and assists with lower deaths. From the rule of the game, Blue side has the option to make the last pick for the champion, most team chose Blue side to take the benefits of this counter position as major strategies. 

![General](https://user-images.githubusercontent.com/94014863/164929656-cc6f0147-b2b5-4659-b4ec-8e6a7b1b0f17.PNG)
As a game, it needs updates of the elements, champion's specifications data and fix the bugs time by time. Each League commitee is obligated to decide the patches for each game. Changes of Champions data would effect the demage it produce, gold earn time, experience obtain and so on. 
LCK, LCS and LEC set up the game by time, LPL sometimes skip few patches which they might concern about the bugs or fairness for the game.

The average game length for each leauges was showing, LPL and LEC are closely about 23.41 mins per game, which means the whole leagues' play styple is very aggressive. 
LCK and LCS both took more than 1 hour to finsih the game, the team style is predicted to be conservative and more focus on the long-term resources planning.

![Mile](https://user-images.githubusercontent.com/94014863/164930361-85ad0337-e2e1-4dc1-9734-1d1b20b0d49c.PNG)

There are few different elements affect the team performance. 
- First blood is essential for the game at the begining, Jungle takes the most responsibility to make the first blood, some league like LCK and LPL would have Support player to help Jungle player which showing from the higher Assists portion. Top players have the most pressure on the first blook, because all of these four leagues have the most first blood victims on Top Lane.

- Towers and Dragons usually mean gold and experience.The more towers taken means more gold and experience created, the demage to champions is expected to be higher. 
Blue sides grabed more towers and dragons than Red side. The more towers and dragons taken, the less possiblity for the team to wait until Barons. 
- Barons would come to the lastly with higher experiences added, more focus needed for teamwork and more attention to defend the other team. Barons's average less than 1 means most of the game was completed before the Barons get into the map. 

![imgonline-com-ua-twotoone-BZmNxLaPw3wQA7r](https://user-images.githubusercontent.com/94014863/164947050-3795fa03-9a70-4bdb-981d-e2fa99c9d2aa.jpg)

To analyze Champions selected in the game, 
Defend or Attach is about the each champion's demage taken per minute -demage mitigated per minute. The higher amount means this champion is suitable for attach role. The negative amount means this champion is good at defend.

Earned Gold to Demage is about the average demage share vs average gold earned share in the team. Higher amount showing means the champion can efficiently apply the less amount of gold to create most demage. 



Narrow to LPL regions
The second source, 2019 LPL Summer game data would be added for the following analysis.

First, let's analyze the LPL each team general style. KDA is calculated by (kills+assists)/deaths. This is the mostly used flagtag to determine the performance of player and team.

![Team](https://user-images.githubusercontent.com/94014863/164930653-a942c75d-1337-43b7-a12e-38d71d1e987d.PNG)

For the 2019 all year performance, Invictus Gaming reaches the highest Average Kills and Assists, Invictus Gaming has the 2nd highest average amount of Deaths.
We can conclude that Invictus Gaming is faily aggressive on fighting with other team, lots of teamwork performed.
Funplus Phoenix has the 2nd place of Average kills and assists, the highlight point is FunPlus Phoenix has the lowest average deaths. This means this team have sensitivity to secure their position by avoiding death. It also keeps the team more power to fight others.

Becasue 2019 has past, FunPlux Phoenix is the 2019 LOL World Final Champion. I would like to anlayze a bit more on Funplus Pheonix 2019 Summer Season in LPL to let you have more idea about why this team represented the 2019 LPL 1st seed team in the World Championship.


![KDA MID](https://user-images.githubusercontent.com/94014863/164948066-5270d040-b5fe-4d8d-92d9-b868548c8209.PNG)

![KDA JUN](https://user-images.githubusercontent.com/94014863/164948069-7b0f52b2-1de8-4845-8ef3-997f67daa026.PNG)

![KDA SUP](https://user-images.githubusercontent.com/94014863/164948070-5a72b574-17ba-4a6f-a030-86c0f260ab9c.PNG)


After cleaning some useless columns and definded the 'major player' is who played more than 30 ganes in 2019 LPL Summer 
this table is showing the top 5 players in each position in LPL 2019 Summer Season who has the highest KDA. 
Funplus Pheonix players all reached the highest KDA in each position.

![KDA TOP](https://user-images.githubusercontent.com/94014863/164948084-6f18868f-9548-4549-b1bb-e96a695c26e1.PNG)

FunPlus Pheonix also got the LPL 2019 Summer Champion with its 88% winning rate.This rate means the absolute leadership in the leagues for that period.


![FPX](https://user-images.githubusercontent.com/94014863/165407305-6b258f37-cf5d-4fca-80d0-70af42aa0318.PNG)

