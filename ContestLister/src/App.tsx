import { useContext, useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import { sha512 } from 'js-sha512';
import { ContestContext } from './assets/Context';

type UContest = {
    "id": Number,
    "name": String,
    "type": String,
    "phase": String,
    "frozen": Boolean,
    "durationSeconds": Number,
    "startTimeSeconds": Number,
    "relativeTimeSeconds": Number,
    "site":String
}

const res= {
  "status": "OK",
  "result": [
      {
          "id": 1993,
          "name": "Codeforces Round (Div. 2)",
          "type": "CF",
          "phase": "BEFORE",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1722782100,
          "relativeTimeSeconds": -1554348
      },
      {
          "id": 1991,
          "name": "Pinely Round 4 (Div. 1 + Div. 2)",
          "type": "CF",
          "phase": "BEFORE",
          "frozen": false,
          "durationSeconds": 10800,
          "startTimeSeconds": 1722177300,
          "relativeTimeSeconds": -949548
      },
      {
          "id": 1996,
          "name": "Codeforces Round (Div. 3)",
          "type": "ICPC",
          "phase": "BEFORE",
          "frozen": false,
          "durationSeconds": 8100,
          "startTimeSeconds": 1722004500,
          "relativeTimeSeconds": -776748
      },
      {
          "id": 1995,
          "name": "Codeforces Round (Div. 2)",
          "type": "CF",
          "phase": "BEFORE",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1721745300,
          "relativeTimeSeconds": -517548
      },
      {
          "id": 1990,
          "name": "Codeforces Round 960 (Div. 2)",
          "type": "CF",
          "phase": "BEFORE",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1721486100,
          "relativeTimeSeconds": -258348
      },
      {
          "id": 1994,
          "name": "Codeforces Round 959 sponsored by NEAR (Div. 1 + Div. 2)",
          "type": "CF",
          "phase": "BEFORE",
          "frozen": false,
          "durationSeconds": 9000,
          "startTimeSeconds": 1721313300,
          "relativeTimeSeconds": -85548
      },
      {
          "id": 1988,
          "name": "Codeforces Round 958 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1721054100,
          "relativeTimeSeconds": 173652
      },
      {
          "id": 1992,
          "name": "Codeforces Round 957 (Div. 3)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8100,
          "startTimeSeconds": 1720708500,
          "relativeTimeSeconds": 519251
      },
      {
          "id": 1983,
          "name": "Codeforces Round #956 (Div. 2) and ByteRace 2024",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8100,
          "startTimeSeconds": 1720362900,
          "relativeTimeSeconds": 864852
      },
      {
          "id": 1987,
          "name": "EPIC Institute of Technology Round Summer 2024 (Div. 1 + Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 10800,
          "startTimeSeconds": 1719758100,
          "relativeTimeSeconds": 1469652
      },
      {
          "id": 1989,
          "name": "Educational Codeforces Round 167 (Rated for Div. 2)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1719498900,
          "relativeTimeSeconds": 1728852
      },
      {
          "id": 1982,
          "name": "Codeforces Round 955 (Div. 2, with prizes from NEAR!)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1719326100,
          "relativeTimeSeconds": 1901652
      },
      {
          "id": 1986,
          "name": "Codeforces Round 954 (Div. 3)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8100,
          "startTimeSeconds": 1719154200,
          "relativeTimeSeconds": 2073552
      },
      {
          "id": 1978,
          "name": "Codeforces Round 953 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1718528700,
          "relativeTimeSeconds": 2699052
      },
      {
          "id": 1985,
          "name": "Codeforces Round 952 (Div. 4)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 9000,
          "startTimeSeconds": 1718116500,
          "relativeTimeSeconds": 3111252
      },
      {
          "id": 1984,
          "name": "Codeforces Global Round 26",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 10800,
          "startTimeSeconds": 1717943700,
          "relativeTimeSeconds": 3284051
      },
      {
          "id": 1979,
          "name": "Codeforces Round 951 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1717684500,
          "relativeTimeSeconds": 3543252
      },
      {
          "id": 1980,
          "name": "Codeforces Round 950 (Div. 3)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8100,
          "startTimeSeconds": 1717425300,
          "relativeTimeSeconds": 3802451
      },
      {
          "id": 1981,
          "name": "Codeforces Round 949 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1717149900,
          "relativeTimeSeconds": 4077852
      },
      {
          "id": 1976,
          "name": "Educational Codeforces Round 166 (Rated for Div. 2)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1717079700,
          "relativeTimeSeconds": 4148052
      },
      {
          "id": 1977,
          "name": "Codeforces Round 948 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1716734100,
          "relativeTimeSeconds": 4493652
      },
      {
          "id": 1975,
          "name": "Codeforces Round 947 (Div. 1 + Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 10800,
          "startTimeSeconds": 1716647700,
          "relativeTimeSeconds": 4580052
      },
      {
          "id": 1974,
          "name": "Codeforces Round 946 (Div. 3)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8100,
          "startTimeSeconds": 1716215700,
          "relativeTimeSeconds": 5012052
      },
      {
          "id": 1973,
          "name": "Codeforces Round 945 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1715956500,
          "relativeTimeSeconds": 5271252
      },
      {
          "id": 1958,
          "name": "Kotlin Heroes: Episode 10",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 9000,
          "startTimeSeconds": 1715610900,
          "relativeTimeSeconds": 5616852
      },
      {
          "id": 1971,
          "name": "Codeforces Round 944 (Div. 4)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8100,
          "startTimeSeconds": 1715351700,
          "relativeTimeSeconds": 5876052
      },
      {
          "id": 1959,
          "name": "Kotlin Heroes: Practice 10",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 511200,
          "startTimeSeconds": 1715096100,
          "relativeTimeSeconds": 6131652
      },
      {
          "id": 1953,
          "name": "2023 Post World Finals Online ICPC Challenge powered by Huawei",
          "type": "IOI",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 1472400,
          "startTimeSeconds": 1715007600,
          "relativeTimeSeconds": 6220152
      },
      {
          "id": 1970,
          "name": "Helvetic Coding Contest 2024 online mirror (teams allowed, unrated)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 16200,
          "startTimeSeconds": 1714806300,
          "relativeTimeSeconds": 6421452
      },
      {
          "id": 1968,
          "name": "Codeforces Round 943 (Div. 3)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8100,
          "startTimeSeconds": 1714661100,
          "relativeTimeSeconds": 6566652
      },
      {
          "id": 1967,
          "name": "Codeforces Round 942 (Div. 1)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 9000,
          "startTimeSeconds": 1714487700,
          "relativeTimeSeconds": 6740052
      },
      {
          "id": 1972,
          "name": "Codeforces Round 942 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 9000,
          "startTimeSeconds": 1714487700,
          "relativeTimeSeconds": 6740052
      },
      {
          "id": 1969,
          "name": "Educational Codeforces Round 165 (Rated for Div. 2)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1714401300,
          "relativeTimeSeconds": 6826452
      },
      {
          "id": 1965,
          "name": "Codeforces Round 941 (Div. 1)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1714228500,
          "relativeTimeSeconds": 6999252
      },
      {
          "id": 1966,
          "name": "Codeforces Round 941 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1714228500,
          "relativeTimeSeconds": 6999252
      },
      {
          "id": 1957,
          "name": "Codeforces Round 940 (Div. 2) and CodeCraft-23",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8100,
          "startTimeSeconds": 1713710100,
          "relativeTimeSeconds": 7517652
      },
      {
          "id": 1956,
          "name": "Codeforces Round 939 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1713018900,
          "relativeTimeSeconds": 8208852
      },
      {
          "id": 1954,
          "name": "Educational Codeforces Round 164 (Rated for Div. 2)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1712932500,
          "relativeTimeSeconds": 8295252
      },
      {
          "id": 1955,
          "name": "Codeforces Round 938 (Div. 3)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8100,
          "startTimeSeconds": 1712586900,
          "relativeTimeSeconds": 8640852
      },
      {
          "id": 1951,
          "name": "Codeforces Global Round 25",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 10800,
          "startTimeSeconds": 1712414100,
          "relativeTimeSeconds": 8813652
      },
      {
          "id": 1952,
          "name": "April Fools Day Contest 2024",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1711982100,
          "relativeTimeSeconds": 9245652
      },
      {
          "id": 1942,
          "name": "CodeTON Round 8 (Div. 1 + Div. 2, Rated, Prizes!)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 10800,
          "startTimeSeconds": 1711809300,
          "relativeTimeSeconds": 9418452
      },
      {
          "id": 1950,
          "name": "Codeforces Round 937 (Div. 4)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8100,
          "startTimeSeconds": 1711637100,
          "relativeTimeSeconds": 9590652
      },
      {
          "id": 1949,
          "name": "European Championship 2024 - Online Mirror (Unrated, ICPC Rules, Teams Preferred)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 18000,
          "startTimeSeconds": 1711274400,
          "relativeTimeSeconds": 9953352
      },
      {
          "id": 1946,
          "name": "Codeforces Round 936 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1711118100,
          "relativeTimeSeconds": 10109652
      },
      {
          "id": 1945,
          "name": "Codeforces Round 935 (Div. 3)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8100,
          "startTimeSeconds": 1710835500,
          "relativeTimeSeconds": 10392252
      },
      {
          "id": 1943,
          "name": "Codeforces Round 934 (Div. 1)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8700,
          "startTimeSeconds": 1710599700,
          "relativeTimeSeconds": 10628052
      },
      {
          "id": 1944,
          "name": "Codeforces Round 934 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8700,
          "startTimeSeconds": 1710599700,
          "relativeTimeSeconds": 10628052
      },
      {
          "id": 1948,
          "name": "Educational Codeforces Round 163 (Rated for Div. 2)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1710513300,
          "relativeTimeSeconds": 10714452
      },
      {
          "id": 1941,
          "name": "Codeforces Round 933 (Div. 3)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8100,
          "startTimeSeconds": 1710167700,
          "relativeTimeSeconds": 11060052
      },
      {
          "id": 1940,
          "name": "XVIII Open Olympiad in Informatics - Final Stage, Day 2 (Unrated, Online Mirror, IOI rules)",
          "type": "IOI",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 18000,
          "startTimeSeconds": 1709975100,
          "relativeTimeSeconds": 11252652
      },
      {
          "id": 1939,
          "name": "XVIII Open Olympiad in Informatics - Final Stage, Day 1 (Unrated, Online Mirror, IOI rules)",
          "type": "IOI",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 18000,
          "startTimeSeconds": 1709888700,
          "relativeTimeSeconds": 11339052
      },
      {
          "id": 1935,
          "name": "Codeforces Round 932 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1709649300,
          "relativeTimeSeconds": 11578452
      },
      {
          "id": 1938,
          "name": "2024 ICPC Asia Pacific Championship - Online Mirror (Unrated, Online Mirror, ICPC Rules, Teams Preferred)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 18000,
          "startTimeSeconds": 1709346900,
          "relativeTimeSeconds": 11880852
      },
      {
          "id": 1934,
          "name": "Codeforces Round 931 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1709303700,
          "relativeTimeSeconds": 11924052
      },
      {
          "id": 1936,
          "name": "Codeforces Round 930 (Div. 1)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1709217300,
          "relativeTimeSeconds": 12010452
      },
      {
          "id": 1937,
          "name": "Codeforces Round 930 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1709217300,
          "relativeTimeSeconds": 12010452
      },
      {
          "id": 1933,
          "name": "Codeforces Round 929 (Div. 3)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8100,
          "startTimeSeconds": 1709044500,
          "relativeTimeSeconds": 12183252
      },
      {
          "id": 1923,
          "name": "Educational Codeforces Round 162 (Rated for Div. 2)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1708698900,
          "relativeTimeSeconds": 12528852
      },
      {
          "id": 1926,
          "name": "Codeforces Round 928 (Div. 4)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8100,
          "startTimeSeconds": 1708353300,
          "relativeTimeSeconds": 12874452
      },
      {
          "id": 1932,
          "name": "Codeforces Round 927 (Div. 3)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8100,
          "startTimeSeconds": 1708257900,
          "relativeTimeSeconds": 12969852
      },
      {
          "id": 1930,
          "name": "think-cell Round 1",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 10800,
          "startTimeSeconds": 1708180500,
          "relativeTimeSeconds": 13047252
      },
      {
          "id": 1929,
          "name": "Codeforces Round 926 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1708007700,
          "relativeTimeSeconds": 13220052
      },
      {
          "id": 1931,
          "name": "Codeforces Round 925 (Div. 3)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8100,
          "startTimeSeconds": 1707834900,
          "relativeTimeSeconds": 13392852
      },
      {
          "id": 1928,
          "name": "Codeforces Round 924 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1707644100,
          "relativeTimeSeconds": 13583652
      },
      {
          "id": 1927,
          "name": "Codeforces Round 923 (Div. 3)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8100,
          "startTimeSeconds": 1707230700,
          "relativeTimeSeconds": 13997052
      },
      {
          "id": 1918,
          "name": "Codeforces Round 922 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7800,
          "startTimeSeconds": 1706625300,
          "relativeTimeSeconds": 14602452
      },
      {
          "id": 1924,
          "name": "Codeforces Round 921 (Div. 1)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1706366700,
          "relativeTimeSeconds": 14861052
      },
      {
          "id": 1925,
          "name": "Codeforces Round 921 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1706366700,
          "relativeTimeSeconds": 14861052
      },
      {
          "id": 1922,
          "name": "Educational Codeforces Round 161 (Rated for Div. 2)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1705588500,
          "relativeTimeSeconds": 15639252
      },
      {
          "id": 1921,
          "name": "Codeforces Round 920 (Div. 3)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8100,
          "startTimeSeconds": 1705329300,
          "relativeTimeSeconds": 15898452
      },
      {
          "id": 1920,
          "name": "Codeforces Round 919 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1705156500,
          "relativeTimeSeconds": 16071252
      },
      {
          "id": 1919,
          "name": "Hello 2024",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 9000,
          "startTimeSeconds": 1704551700,
          "relativeTimeSeconds": 16676052
      },
      {
          "id": 1916,
          "name": "Good Bye 2023",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1703947800,
          "relativeTimeSeconds": 17279952
      },
      {
          "id": 1915,
          "name": "Codeforces Round 918 (Div. 4)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 9000,
          "startTimeSeconds": 1703774100,
          "relativeTimeSeconds": 17453652
      },
      {
          "id": 1917,
          "name": "Codeforces Round 917 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1703428500,
          "relativeTimeSeconds": 17799252
      },
      {
          "id": 1909,
          "name": "Pinely Round 3 (Div. 1 + Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 10800,
          "startTimeSeconds": 1703342100,
          "relativeTimeSeconds": 17885652
      },
      {
          "id": 1914,
          "name": "Codeforces Round 916 (Div. 3)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 9000,
          "startTimeSeconds": 1702996500,
          "relativeTimeSeconds": 18231252
      },
      {
          "id": 1913,
          "name": "Educational Codeforces Round 160 (Rated for Div. 2)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1702910100,
          "relativeTimeSeconds": 18317652
      },
      {
          "id": 1905,
          "name": "Codeforces Round 915 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1702737300,
          "relativeTimeSeconds": 18490452
      },
      {
          "id": 1912,
          "name": "2023-2024 ICPC, NERC, Northern Eurasia Onsite (Unrated, Online Mirror, ICPC Rules, Teams Preferred)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 18000,
          "startTimeSeconds": 1702452900,
          "relativeTimeSeconds": 18774852
      },
      {
          "id": 1910,
          "name": "Kotlin Heroes: Episode 9 (Unrated, T-Shirts + Prizes!)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 9000,
          "startTimeSeconds": 1702305300,
          "relativeTimeSeconds": 18922452
      },
      {
          "id": 1904,
          "name": "Codeforces Round 914 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1702137900,
          "relativeTimeSeconds": 19089852
      },
      {
          "id": 1907,
          "name": "Codeforces Round 913 (Div. 3)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8100,
          "startTimeSeconds": 1701787500,
          "relativeTimeSeconds": 19440252
      },
      {
          "id": 1902,
          "name": "Educational Codeforces Round 159 (Rated for Div. 2)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1701614100,
          "relativeTimeSeconds": 19613652
      },
      {
          "id": 1906,
          "name": "2023-2024 ICPC, Asia Jakarta Regional Contest (Online Mirror, Unrated, ICPC Rules, Teams Preferred)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 18000,
          "startTimeSeconds": 1701578100,
          "relativeTimeSeconds": 19649652
      },
      {
          "id": 1911,
          "name": "Kotlin Heroes: Practice 9 (release 2)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 864000,
          "startTimeSeconds": 1701440700,
          "relativeTimeSeconds": 19787052
      },
      {
          "id": 1903,
          "name": "Codeforces Round 912 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8100,
          "startTimeSeconds": 1701362100,
          "relativeTimeSeconds": 19865652
      },
      {
          "id": 1900,
          "name": "Codeforces Round 911 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1701009300,
          "relativeTimeSeconds": 20218452
      },
      {
          "id": 1896,
          "name": "CodeTON Round 7 (Div. 1 + Div. 2, Rated, Prizes!)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 9000,
          "startTimeSeconds": 1700923800,
          "relativeTimeSeconds": 20303952
      },
      {
          "id": 1901,
          "name": "Educational Codeforces Round 158 (Rated for Div. 2)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1700836500,
          "relativeTimeSeconds": 20391252
      },
      {
          "id": 1885,
          "name": "ICPC 2023 Online Challenge powered by Huawei",
          "type": "IOI",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 1209600,
          "startTimeSeconds": 1700463600,
          "relativeTimeSeconds": 20764152
      },
      {
          "id": 1898,
          "name": "Codeforces Round 910 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1700404500,
          "relativeTimeSeconds": 20823252
      },
      {
          "id": 1899,
          "name": "Codeforces Round 909 (Div. 3)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8100,
          "startTimeSeconds": 1700231700,
          "relativeTimeSeconds": 20996052
      },
      {
          "id": 1893,
          "name": "Codeforces Round 908 (Div. 1)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1699367700,
          "relativeTimeSeconds": 21860052
      },
      {
          "id": 1894,
          "name": "Codeforces Round 908 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1699367700,
          "relativeTimeSeconds": 21860052
      },
      {
          "id": 1895,
          "name": "Educational Codeforces Round 157 (Rated for Div. 2)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1699022100,
          "relativeTimeSeconds": 22205652
      },
      {
          "id": 1891,
          "name": "Codeforces Round 907 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1698676500,
          "relativeTimeSeconds": 22551252
      },
      {
          "id": 1889,
          "name": "Codeforces Round 906 (Div. 1)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 9000,
          "startTimeSeconds": 1698503700,
          "relativeTimeSeconds": 22724052
      },
      {
          "id": 1890,
          "name": "Codeforces Round 906 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 9000,
          "startTimeSeconds": 1698503700,
          "relativeTimeSeconds": 22724052
      },
      {
          "id": 1887,
          "name": "Codeforces Round 905 (Div. 1)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1697972700,
          "relativeTimeSeconds": 23255052
      },
      {
          "id": 1888,
          "name": "Codeforces Round 905 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1697972700,
          "relativeTimeSeconds": 23255052
      },
      {
          "id": 1883,
          "name": "Codeforces Round 905 (Div. 3)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1697972700,
          "relativeTimeSeconds": 23255052
      },
      {
          "id": 1884,
          "name": "Codeforces Round 904 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1697958300,
          "relativeTimeSeconds": 23269452
      },
      {
          "id": 1881,
          "name": "Codeforces Round 903 (Div. 3)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8100,
          "startTimeSeconds": 1697121300,
          "relativeTimeSeconds": 24106452
      },
      {
          "id": 1886,
          "name": "Educational Codeforces Round 156 (Rated for Div. 2)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1696862100,
          "relativeTimeSeconds": 24365652
      },
      {
          "id": 1876,
          "name": "Codeforces Round 902 (Div. 1, based on COMPFEST 15 - Final Round)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 9000,
          "startTimeSeconds": 1696755900,
          "relativeTimeSeconds": 24471852
      },
      {
          "id": 1877,
          "name": "Codeforces Round 902 (Div. 2, based on COMPFEST 15 - Final Round)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 9000,
          "startTimeSeconds": 1696755900,
          "relativeTimeSeconds": 24471852
      },
      {
          "id": 1874,
          "name": "Codeforces Round 901 (Div. 1)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 10800,
          "startTimeSeconds": 1696084500,
          "relativeTimeSeconds": 25143252
      },
      {
          "id": 1875,
          "name": "Codeforces Round 901 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 10800,
          "startTimeSeconds": 1696084500,
          "relativeTimeSeconds": 25143252
      },
      {
          "id": 1878,
          "name": "Codeforces Round 900 (Div. 3)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8100,
          "startTimeSeconds": 1695738900,
          "relativeTimeSeconds": 25488852
      },
      {
          "id": 1882,
          "name": "Codeforces Round 899 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1695652500,
          "relativeTimeSeconds": 25575252
      },
      {
          "id": 1879,
          "name": "Educational Codeforces Round 155 (Rated for Div. 2)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1695566100,
          "relativeTimeSeconds": 25661652
      },
      {
          "id": 1873,
          "name": "Codeforces Round 898 (Div. 4)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 9000,
          "startTimeSeconds": 1695306900,
          "relativeTimeSeconds": 25920852
      },
      {
          "id": 1870,
          "name": "CodeTON Round 6 (Div. 1 + Div. 2, Rated, Prizes!)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8100,
          "startTimeSeconds": 1695047700,
          "relativeTimeSeconds": 26180052
      },
      {
          "id": 1867,
          "name": "Codeforces Round 897 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1694442900,
          "relativeTimeSeconds": 26784852
      },
      {
          "id": 1868,
          "name": "Codeforces Round 896 (Div. 1)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 9000,
          "startTimeSeconds": 1694354700,
          "relativeTimeSeconds": 26873052
      },
      {
          "id": 1869,
          "name": "Codeforces Round 896 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 9000,
          "startTimeSeconds": 1694354700,
          "relativeTimeSeconds": 26873052
      },
      {
          "id": 1872,
          "name": "Codeforces Round 895 (Div. 3)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8100,
          "startTimeSeconds": 1694097300,
          "relativeTimeSeconds": 27130452
      },
      {
          "id": 1866,
          "name": "COMPFEST 15 - Preliminary Online Mirror (Unrated, ICPC Rules, Teams Preferred)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 18000,
          "startTimeSeconds": 1693742700,
          "relativeTimeSeconds": 27485052
      },
      {
          "id": 1861,
          "name": "Educational Codeforces Round 154 (Rated for Div. 2)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1693492500,
          "relativeTimeSeconds": 27735252
      },
      {
          "id": 1863,
          "name": "Pinely Round 2 (Div. 1 + Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 10800,
          "startTimeSeconds": 1693406100,
          "relativeTimeSeconds": 27821652
      },
      {
          "id": 1864,
          "name": "Harbour.Space Scholarship Contest 2023-2024 (Div. 1 + Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 10800,
          "startTimeSeconds": 1693060500,
          "relativeTimeSeconds": 28167252
      },
      {
          "id": 1862,
          "name": "Codeforces Round 894 (Div. 3)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8100,
          "startTimeSeconds": 1692887700,
          "relativeTimeSeconds": 28340052
      },
      {
          "id": 1860,
          "name": "Educational Codeforces Round 153 (Rated for Div. 2)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1692282900,
          "relativeTimeSeconds": 28944852
      },
      {
          "id": 1858,
          "name": "Codeforces Round 893 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1692110100,
          "relativeTimeSeconds": 29117652
      },
      {
          "id": 1859,
          "name": "Codeforces Round 892 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1691850900,
          "relativeTimeSeconds": 29376852
      },
      {
          "id": 1857,
          "name": "Codeforces Round 891 (Div. 3)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8100,
          "startTimeSeconds": 1691418900,
          "relativeTimeSeconds": 29808852
      },
      {
          "id": 1856,
          "name": "Codeforces Round 890 (Div. 2) supported by Constructor Institute",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1691246100,
          "relativeTimeSeconds": 29981652
      },
      {
          "id": 1854,
          "name": "Codeforces Round 889 (Div. 1)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 9000,
          "startTimeSeconds": 1690641300,
          "relativeTimeSeconds": 30586452
      },
      {
          "id": 1855,
          "name": "Codeforces Round 889 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 9000,
          "startTimeSeconds": 1690641300,
          "relativeTimeSeconds": 30586452
      },
      {
          "id": 1849,
          "name": "Educational Codeforces Round 152 (Rated for Div. 2)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1690468500,
          "relativeTimeSeconds": 30759252
      },
      {
          "id": 1851,
          "name": "Codeforces Round 888 (Div. 3)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8100,
          "startTimeSeconds": 1690295700,
          "relativeTimeSeconds": 30932052
      },
      {
          "id": 1852,
          "name": "Codeforces Round 887 (Div. 1)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 9000,
          "startTimeSeconds": 1690122900,
          "relativeTimeSeconds": 31104852
      },
      {
          "id": 1853,
          "name": "Codeforces Round 887 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 9000,
          "startTimeSeconds": 1690122900,
          "relativeTimeSeconds": 31104852
      },
      {
          "id": 1850,
          "name": "Codeforces Round 886 (Div. 4)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1689950100,
          "relativeTimeSeconds": 31277652
      },
      {
          "id": 1848,
          "name": "Codeforces Round 885 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1689518100,
          "relativeTimeSeconds": 31709652
      },
      {
          "id": 1844,
          "name": "Codeforces Round 884 (Div. 1 + Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 10800,
          "startTimeSeconds": 1689086100,
          "relativeTimeSeconds": 32141652
      },
      {
          "id": 1846,
          "name": "Codeforces Round 883 (Div. 3)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8100,
          "startTimeSeconds": 1688740500,
          "relativeTimeSeconds": 32487252
      },
      {
          "id": 1847,
          "name": "Codeforces Round 882 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8100,
          "startTimeSeconds": 1688654100,
          "relativeTimeSeconds": 32573652
      },
      {
          "id": 1845,
          "name": "Educational Codeforces Round 151 (Rated for Div. 2)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1688049300,
          "relativeTimeSeconds": 33178452
      },
      {
          "id": 1842,
          "name": "CodeTON Round 5 (Div. 1 + Div. 2, Rated, Prizes!)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 10800,
          "startTimeSeconds": 1687615500,
          "relativeTimeSeconds": 33612252
      },
      {
          "id": 1843,
          "name": "Codeforces Round 881 (Div. 3)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8100,
          "startTimeSeconds": 1687271700,
          "relativeTimeSeconds": 33956052
      },
      {
          "id": 1835,
          "name": "Codeforces Round 880 (Div. 1)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1687098900,
          "relativeTimeSeconds": 34128852
      },
      {
          "id": 1836,
          "name": "Codeforces Round 880 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1687098900,
          "relativeTimeSeconds": 34128852
      },
      {
          "id": 1834,
          "name": "Codeforces Round 879 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1687075500,
          "relativeTimeSeconds": 34152252
      },
      {
          "id": 1841,
          "name": "Educational Codeforces Round 150 (Rated for Div. 2)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1686580500,
          "relativeTimeSeconds": 34647252
      },
      {
          "id": 1840,
          "name": "Codeforces Round 878 (Div. 3)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8100,
          "startTimeSeconds": 1686062100,
          "relativeTimeSeconds": 35165652
      },
      {
          "id": 1838,
          "name": "Codeforces Round 877 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1685889900,
          "relativeTimeSeconds": 35337852
      },
      {
          "id": 1839,
          "name": "Codeforces Round 876 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1685802900,
          "relativeTimeSeconds": 35424852
      },
      {
          "id": 1830,
          "name": "Codeforces Round 875 (Div. 1)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 9000,
          "startTimeSeconds": 1685284500,
          "relativeTimeSeconds": 35943252
      },
      {
          "id": 1831,
          "name": "Codeforces Round 875 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 9000,
          "startTimeSeconds": 1685284500,
          "relativeTimeSeconds": 35943252
      },
      {
          "id": 1837,
          "name": "Educational Codeforces Round 149 (Rated for Div. 2)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1685025300,
          "relativeTimeSeconds": 36202452
      },
      {
          "id": 1833,
          "name": "Codeforces Round 874 (Div. 3)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8100,
          "startTimeSeconds": 1684506900,
          "relativeTimeSeconds": 36720852
      },
      {
          "id": 1827,
          "name": "Codeforces Round 873 (Div. 1)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1684074900,
          "relativeTimeSeconds": 37152852
      },
      {
          "id": 1828,
          "name": "Codeforces Round 873 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1684074900,
          "relativeTimeSeconds": 37152852
      },
      {
          "id": 1832,
          "name": "Educational Codeforces Round 148 (Rated for Div. 2)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1683902100,
          "relativeTimeSeconds": 37325652
      },
      {
          "id": 1824,
          "name": "Codeforces Round 872 (Div. 1)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1683547500,
          "relativeTimeSeconds": 37680252
      },
      {
          "id": 1825,
          "name": "Codeforces Round 872 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1683547500,
          "relativeTimeSeconds": 37680252
      },
      {
          "id": 1829,
          "name": "Codeforces Round 871 (Div. 4)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8100,
          "startTimeSeconds": 1683383700,
          "relativeTimeSeconds": 37844052
      },
      {
          "id": 1826,
          "name": "Codeforces Round 870 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1683297300,
          "relativeTimeSeconds": 37930452
      },
      {
          "id": 1817,
          "name": "Codeforces Round 869 (Div. 1)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8100,
          "startTimeSeconds": 1682778900,
          "relativeTimeSeconds": 38448852
      },
      {
          "id": 1818,
          "name": "Codeforces Round 869 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8100,
          "startTimeSeconds": 1682778900,
          "relativeTimeSeconds": 38448852
      },
      {
          "id": 1823,
          "name": "Codeforces Round 868 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1682606100,
          "relativeTimeSeconds": 38621652
      },
      {
          "id": 1822,
          "name": "Codeforces Round 867 (Div. 3)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8100,
          "startTimeSeconds": 1682346900,
          "relativeTimeSeconds": 38880852
      },
      {
          "id": 1821,
          "name": "Educational Codeforces Round 147 (Rated for Div. 2)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1682001300,
          "relativeTimeSeconds": 39226452
      },
      {
          "id": 1819,
          "name": "Codeforces Round 866 (Div. 1)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1681549500,
          "relativeTimeSeconds": 39678252
      },
      {
          "id": 1820,
          "name": "Codeforces Round 866 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1681549500,
          "relativeTimeSeconds": 39678252
      },
      {
          "id": 1813,
          "name": "ICPC 2023 Online Spring Challenge powered by Huawei",
          "type": "IOI",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 1209600,
          "startTimeSeconds": 1681383600,
          "relativeTimeSeconds": 39844152
      },
      {
          "id": 1815,
          "name": "Codeforces Round 865 (Div. 1)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8100,
          "startTimeSeconds": 1681051500,
          "relativeTimeSeconds": 40176252
      },
      {
          "id": 1816,
          "name": "Codeforces Round 865 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8100,
          "startTimeSeconds": 1681051500,
          "relativeTimeSeconds": 40176252
      },
      {
          "id": 1797,
          "name": "Codeforces Round 864 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1680962700,
          "relativeTimeSeconds": 40265052
      },
      {
          "id": 1814,
          "name": "Educational Codeforces Round 146 (Rated for Div. 2)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8100,
          "startTimeSeconds": 1680791700,
          "relativeTimeSeconds": 40436052
      },
      {
          "id": 1811,
          "name": "Codeforces Round 863 (Div. 3)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8100,
          "startTimeSeconds": 1680618900,
          "relativeTimeSeconds": 40608852
      },
      {
          "id": 1805,
          "name": "Codeforces Round 862 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1680446100,
          "relativeTimeSeconds": 40781652
      },
      {
          "id": 1812,
          "name": "April Fools Day Contest 2023",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1680359700,
          "relativeTimeSeconds": 40868052
      },
      {
          "id": 1810,
          "name": "CodeTON Round 4 (Div. 1 + Div. 2, Rated, Prizes!)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1680273300,
          "relativeTimeSeconds": 40954452
      },
      {
          "id": 1808,
          "name": "Codeforces Round 861 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1680080700,
          "relativeTimeSeconds": 41147052
      },
      {
          "id": 1798,
          "name": "Codeforces Round 860 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1679841300,
          "relativeTimeSeconds": 41386452
      },
      {
          "id": 1809,
          "name": "Educational Codeforces Round 145 (Rated for Div. 2)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1679582100,
          "relativeTimeSeconds": 41645652
      },
      {
          "id": 1807,
          "name": "Codeforces Round 859 (Div. 4)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8100,
          "startTimeSeconds": 1679237700,
          "relativeTimeSeconds": 41990052
      },
      {
          "id": 1806,
          "name": "Codeforces Round 858 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8100,
          "startTimeSeconds": 1679141100,
          "relativeTimeSeconds": 42086652
      },
      {
          "id": 1804,
          "name": "Nebius Welcome Round (Div. 1 + Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1678631700,
          "relativeTimeSeconds": 42596052
      },
      {
          "id": 1801,
          "name": "Codeforces Round 857 (Div. 1)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 10800,
          "startTimeSeconds": 1678354500,
          "relativeTimeSeconds": 42873252
      },
      {
          "id": 1802,
          "name": "Codeforces Round 857 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 10800,
          "startTimeSeconds": 1678354500,
          "relativeTimeSeconds": 42873252
      },
      {
          "id": 1794,
          "name": "Codeforces Round 856 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1677951300,
          "relativeTimeSeconds": 43276452
      },
      {
          "id": 1800,
          "name": "Codeforces Round 855 (Div. 3)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8100,
          "startTimeSeconds": 1677767700,
          "relativeTimeSeconds": 43460052
      },
      {
          "id": 1796,
          "name": "Educational Codeforces Round 144 (Rated for Div. 2)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1677594900,
          "relativeTimeSeconds": 43632852
      },
      {
          "id": 1799,
          "name": "Codeforces Round 854 by cybercats (Div. 1 + Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 10800,
          "startTimeSeconds": 1677508500,
          "relativeTimeSeconds": 43719252
      },
      {
          "id": 1789,
          "name": "Codeforces Round 853 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1677334800,
          "relativeTimeSeconds": 43892952
      },
      {
          "id": 1776,
          "name": "SWERC 2022-2023 - Online Mirror (Unrated, ICPC Rules, Teams Preferred)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 18000,
          "startTimeSeconds": 1676804700,
          "relativeTimeSeconds": 44423052
      },
      {
          "id": 1795,
          "name": "Educational Codeforces Round 143 (Rated for Div. 2)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1676558100,
          "relativeTimeSeconds": 44669652
      },
      {
          "id": 1793,
          "name": "Codeforces Round 852 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1676190900,
          "relativeTimeSeconds": 45036852
      },
      {
          "id": 1788,
          "name": "Codeforces Round 851 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1675953300,
          "relativeTimeSeconds": 45274452
      },
      {
          "id": 1784,
          "name": "VK Cup 2022 - Финальный раунд (Engine)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 10800,
          "startTimeSeconds": 1675598700,
          "relativeTimeSeconds": 45629052
      },
      {
          "id": 1785,
          "name": "Codeforces Round 850 (Div. 1, based on VK Cup 2022 - Final Round)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 10800,
          "startTimeSeconds": 1675598700,
          "relativeTimeSeconds": 45629052
      },
      {
          "id": 1786,
          "name": "Codeforces Round 850 (Div. 2, based on VK Cup 2022 - Final Round)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 10800,
          "startTimeSeconds": 1675598700,
          "relativeTimeSeconds": 45629052
      },
      {
          "id": 1791,
          "name": "Codeforces Round 849 (Div. 4)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8700,
          "startTimeSeconds": 1675434900,
          "relativeTimeSeconds": 45792852
      },
      {
          "id": 1778,
          "name": "Codeforces Round 848 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1675262100,
          "relativeTimeSeconds": 45965652
      },
      {
          "id": 1787,
          "name": "TypeDB Forces 2023 (Div. 1 + Div. 2, Rated, Prizes!)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 10800,
          "startTimeSeconds": 1675002900,
          "relativeTimeSeconds": 46224852
      },
      {
          "id": 1790,
          "name": "Codeforces Round 847 (Div. 3)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8100,
          "startTimeSeconds": 1674830100,
          "relativeTimeSeconds": 46397652
      },
      {
          "id": 1780,
          "name": "Codeforces Round 846 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1674657300,
          "relativeTimeSeconds": 46570452
      },
      {
          "id": 1792,
          "name": "Educational Codeforces Round 142 (Rated for Div. 2)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1674570900,
          "relativeTimeSeconds": 46656852
      },
      {
          "id": 1777,
          "name": "Codeforces Round 845 (Div. 2) and ByteRace 2023",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1674311700,
          "relativeTimeSeconds": 46916052
      },
      {
          "id": 1781,
          "name": "VK Cup 2022 - Отборочный раунд (Engine)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 10800,
          "startTimeSeconds": 1673784300,
          "relativeTimeSeconds": 47443452
      },
      {
          "id": 1782,
          "name": "Codeforces Round 844 (Div. 1 + Div. 2, based on VK Cup 2022 - Elimination Round)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 10800,
          "startTimeSeconds": 1673784300,
          "relativeTimeSeconds": 47443452
      },
      {
          "id": 1775,
          "name": "Codeforces Round 843 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 9000,
          "startTimeSeconds": 1673349300,
          "relativeTimeSeconds": 47878452
      },
      {
          "id": 1783,
          "name": "Educational Codeforces Round 141 (Rated for Div. 2)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1673188500,
          "relativeTimeSeconds": 48039252
      },
      {
          "id": 1768,
          "name": "Codeforces Round 842 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1672929300,
          "relativeTimeSeconds": 48298452
      },
      {
          "id": 1779,
          "name": "Hello 2023",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 9000,
          "startTimeSeconds": 1672756500,
          "relativeTimeSeconds": 48471252
      },
      {
          "id": 1770,
          "name": "Good Bye 2022: 2023 is NEAR",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 9000,
          "startTimeSeconds": 1672410900,
          "relativeTimeSeconds": 48816852
      },
      {
          "id": 1731,
          "name": "Codeforces Round 841 (Div. 2) and Divide by Zero 2022",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1672151700,
          "relativeTimeSeconds": 49076052
      },
      {
          "id": 1763,
          "name": "Codeforces Round 840 (Div. 2) and Enigma 2022 - Cybros LNMIIT",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1671460500,
          "relativeTimeSeconds": 49767252
      },
      {
          "id": 1772,
          "name": "Codeforces Round 839 (Div. 3)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8100,
          "startTimeSeconds": 1671374100,
          "relativeTimeSeconds": 49853652
      },
      {
          "id": 1774,
          "name": "Polynomial Round 2022 (Div. 1 + Div. 2, Rated, Prizes!)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 9000,
          "startTimeSeconds": 1671287700,
          "relativeTimeSeconds": 49940052
      },
      {
          "id": 1767,
          "name": "Educational Codeforces Round 140 (Rated for Div. 2)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1671201300,
          "relativeTimeSeconds": 50026452
      },
      {
          "id": 1762,
          "name": "Codeforces Round 838 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 9000,
          "startTimeSeconds": 1671114900,
          "relativeTimeSeconds": 50112852
      },
      {
          "id": 1766,
          "name": "Educational Codeforces Round 139 (Rated for Div. 2)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1670855700,
          "relativeTimeSeconds": 50372052
      },
      {
          "id": 1771,
          "name": "Codeforces Round 837 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1670772900,
          "relativeTimeSeconds": 50454852
      },
      {
          "id": 1773,
          "name": "2022-2023 ICPC, NERC, Northern Eurasia Onsite (Unrated, Online Mirror, ICPC Rules, Teams Preferred)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 18000,
          "startTimeSeconds": 1670400300,
          "relativeTimeSeconds": 50827452
      },
      {
          "id": 1769,
          "name": "VK Cup 2022 - Квалификация (Engine)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 1339200,
          "startTimeSeconds": 1670058000,
          "relativeTimeSeconds": 51169752
      },
      {
          "id": 1765,
          "name": "2022-2023 ICPC, NERC, Southern and Volga Russian Regional Contest (Online Mirror, ICPC Rules, Preferably Teams)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 18000,
          "startTimeSeconds": 1669545300,
          "relativeTimeSeconds": 51682452
      },
      {
          "id": 1764,
          "name": "Codeforces Global Round 24",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 9000,
          "startTimeSeconds": 1669471500,
          "relativeTimeSeconds": 51756252
      },
      {
          "id": 1758,
          "name": "Codeforces Round 836 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1669390500,
          "relativeTimeSeconds": 51837252
      },
      {
          "id": 1760,
          "name": "Codeforces Round 835 (Div. 4)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8700,
          "startTimeSeconds": 1669041300,
          "relativeTimeSeconds": 52186452
      },
      {
          "id": 1761,
          "name": "Pinely Round 1 (Div. 1 + Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 9000,
          "startTimeSeconds": 1668954900,
          "relativeTimeSeconds": 52272852
      },
      {
          "id": 1759,
          "name": "Codeforces Round  834 (Div. 3)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 8100,
          "startTimeSeconds": 1668782100,
          "relativeTimeSeconds": 52445652
      },
      {
          "id": 1752,
          "name": "45th ICPC World Finals Challenge powered by Huawei - Problem 1",
          "type": "IOI",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 1209540,
          "startTimeSeconds": 1668643200,
          "relativeTimeSeconds": 52584552
      },
      {
          "id": 1751,
          "name": "45th ICPC World Finals Challenge powered by Huawei - Problem 2",
          "type": "IOI",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 1209540,
          "startTimeSeconds": 1668643200,
          "relativeTimeSeconds": 52584552
      },
      {
          "id": 1748,
          "name": "Codeforces Round 833 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1668263700,
          "relativeTimeSeconds": 52964052
      },
      {
          "id": 1755,
          "name": "Ecnerwala vs Errichto Kotlin Match",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 2400,
          "startTimeSeconds": 1667794620,
          "relativeTimeSeconds": 53433132
      },
      {
          "id": 1750,
          "name": "CodeTON Round 3 (Div. 1 + Div. 2, Rated, Prizes!)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 9000,
          "startTimeSeconds": 1667745300,
          "relativeTimeSeconds": 53482452
      },
      {
          "id": 1747,
          "name": "Codeforces Round 832 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1667572500,
          "relativeTimeSeconds": 53655252
      },
      {
          "id": 1740,
          "name": "Codeforces Round 831 (Div. 1 + Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 9900,
          "startTimeSeconds": 1667034600,
          "relativeTimeSeconds": 54193152
      },
      {
          "id": 1732,
          "name": "Codeforces Round 830 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1666519500,
          "relativeTimeSeconds": 54708252
      },
      {
          "id": 1753,
          "name": "Codeforces Round 829 (Div. 1)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1666511400,
          "relativeTimeSeconds": 54716352
      },
      {
          "id": 1754,
          "name": "Codeforces Round 829 (Div. 2)",
          "type": "CF",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1666511400,
          "relativeTimeSeconds": 54716352
      },
      {
          "id": 1749,
          "name": "Educational Codeforces Round 138 (Rated for Div. 2)",
          "type": "ICPC",
          "phase": "FINISHED",
          "frozen": false,
          "durationSeconds": 7200,
          "startTimeSeconds": 1666276500,
          "relativeTimeSeconds": 54951252
      },
  ]
}


function App() {
  const key = "e34db31cefecce5ed2ecd0245c9ce6dac7231ba6"
  const secret = "672d093294a69dd5e1b4f2a87d6c7a300bff188f"
  const random = 100000 + Math.floor(Math.random() * 99999);
  const {contests, setContests} = useContext(ContestContext);
//   const [contests, setContests] = useState([]);

  useEffect(()=>{
    const time = Math.floor(Date.now()/1000);
    const string = `${random}/contest.list?apiKey=${key}&time=${time}#${secret}`;
    const hash = sha512(string);
    
    const url = `https://codeforces.com/api/contest.list?apiKey=${key}&time=${time}&apiSig=${random}${hash}`;
    console.log(contests);

    let response = res;
    let data = response['result'];
    data = data.filter((e)=>{
      return e['phase']=='BEFORE'
    })
    data.forEach((e:any)=> {
      e.site = 'codeforces';
    })

    console.log(data);
    setContests([...contests,...data]);
  },[])

  useEffect(()=>{
    console.log(contests);
  },[contests])

  return (
<>
  <Navbar/>
  <Outlet/>
</>
  )
}

export default App
