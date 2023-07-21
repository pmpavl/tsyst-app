import { Github, Moon, Sun, Eye, EyeOff, LogIn, LucideProps, type LucideIcon } from 'lucide-react';

export type Icon = LucideIcon;

export const Icons = {
  gitHub: Github,
  sun: Sun,
  moon: Moon,
  eye: Eye,
  eyeOff: EyeOff,
  login: LogIn,
  logo: (props: LucideProps) => ( // MSU Logo
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000.000000 1000.000000" fill="currentColor" {...props}>
      <g transform="translate(0.000000,1000.000000) scale(0.100000,-0.100000)">
        <path d="M6759 9877 c51 -49 89 -112 76 -125 -9 -9 -84 14 -228 69 -220 85
-217 85 -529 67 -262 -15 -316 -25 -278 -48 35 -22 349 -122 500 -160 228 -58
237 -71 55 -80 -63 -3 -117 -9 -121 -13 -13 -13 26 -43 131 -103 253 -143 414
-207 863 -346 24 -7 44 -17 43 -23 0 -5 -53 -17 -116 -26 -64 -9 -121 -21
-127 -27 -11 -11 91 -91 177 -138 28 -15 68 -42 90 -60 56 -44 153 -105 345
-214 91 -52 192 -111 225 -132 81 -50 232 -124 334 -163 47 -17 86 -36 88 -42
4 -11 -39 -22 -157 -40 -69 -10 -69 -16 14 -143 108 -165 211 -278 471 -523
185 -173 295 -290 295 -312 0 -11 -13 -15 -49 -15 -35 0 -51 -4 -55 -16 -11
-30 -6 -209 9 -304 34 -207 113 -475 269 -909 46 -126 43 -132 -47 -108 -91
24 -90 29 -84 -233 4 -209 5 -219 41 -353 78 -294 123 -569 102 -622 -6 -17
-8 -17 -26 0 -11 10 -27 37 -36 62 -9 24 -21 42 -27 40 -5 -1 -26 -45 -47 -97
-40 -104 -75 -176 -117 -242 -34 -53 -249 -338 -296 -393 l-35 -40 -7 95 c-4
51 -4 325 0 608 5 371 4 513 -3 508 -12 -7 -17 10 -26 84 -3 25 -13 70 -22
100 -15 50 -17 53 -30 35 -14 -19 -17 -34 -31 -150 -7 -61 -11 -70 -30 -73
-30 -4 -32 12 -36 318 -3 192 -8 266 -19 300 -9 25 -21 84 -27 131 -12 83 -24
119 -36 108 -3 -3 -11 -54 -19 -114 -14 -104 -26 -139 -40 -116 -4 6 -10 80
-13 165 l-6 155 -31 3 -31 3 3 87 3 86 -68 -2 -68 -2 0 -90 0 -89 -37 -3 -38
-3 0 -73 c0 -111 -12 -256 -21 -256 -12 0 -26 65 -34 155 -3 44 -8 82 -11 84
-23 23 -43 -157 -55 -504 -6 -176 -15 -330 -21 -344 -8 -23 -10 -23 -25 -8
-11 11 -20 43 -24 91 -12 125 -32 125 -44 2 -8 -83 -18 -106 -45 -106 -26 0
-38 25 -50 111 -15 102 -19 119 -30 119 -5 0 -12 -23 -16 -50 -4 -28 -10 -53
-15 -56 -11 -6 -16 22 -24 126 -4 59 -10 87 -20 93 -9 4 -15 22 -15 41 0 48
-19 68 -60 64 -33 -3 -35 -5 -40 -48 -3 -25 -13 -56 -23 -70 -12 -17 -17 -45
-18 -95 0 -38 -4 -79 -9 -90 -8 -21 -8 -22 -26 61 -7 38 -21 19 -33 -48 -5
-31 -20 -76 -31 -99 -23 -44 -39 -166 -40 -291 l0 -68 -425 0 -425 0 0 93 c0
113 -12 159 -45 177 -18 10 -25 22 -25 42 0 32 -25 88 -40 88 -12 0 -35 -44
-44 -85 -4 -16 -19 -42 -34 -57 -23 -25 -26 -37 -31 -135 -3 -60 -10 -114 -14
-120 -5 -9 -36 -13 -91 -13 l-83 0 -6 68 c-4 37 -7 283 -6 547 0 430 3 519 25
658 5 29 2 41 -10 50 -11 8 -21 40 -29 97 -7 47 -16 84 -22 83 -5 -1 -15 -41
-22 -88 -11 -83 -26 -121 -44 -109 -5 3 -9 27 -9 55 0 45 -2 49 -24 49 -31 0
-37 9 -58 90 -9 36 -21 83 -27 105 -5 22 -13 66 -16 97 -6 55 -40 124 -60 122
-18 -1 -53 -63 -63 -111 -6 -27 -18 -87 -27 -135 -10 -49 -21 -88 -25 -88 -17
0 -20 62 -21 450 0 223 -4 439 -9 480 -4 41 -13 122 -20 180 -6 58 -13 116
-16 129 -10 47 -25 5 -33 -93 -7 -87 -21 -130 -36 -114 -3 3 -10 31 -15 63 -5
31 -19 74 -32 94 -21 34 -23 49 -28 291 -4 180 -9 262 -18 278 -13 23 -32 22
-32 -2 0 -7 -6 -21 -14 -31 -13 -18 -15 -16 -35 23 -19 37 -20 52 -15 142 l7
100 -43 40 c-38 35 -42 44 -42 83 1 24 6 56 12 71 15 39 12 73 -7 102 -30 46
-63 421 -63 721 l0 121 31 32 c27 27 31 36 26 67 -4 20 -14 44 -23 52 -15 15
-16 14 -10 -11 5 -23 3 -28 -13 -28 -10 0 -22 8 -26 18 -6 15 -8 15 -18 1 -7
-8 -21 -18 -31 -22 -15 -6 -17 -10 -8 -19 7 -7 12 -20 12 -30 0 -14 6 -16 29
-12 34 7 51 -11 20 -21 -33 -11 -74 25 -75 64 -1 17 3 34 8 37 4 3 8 13 8 22
-1 14 -4 13 -20 -7 -29 -35 -26 -77 10 -113 l30 -30 -1 -181 c-1 -333 -29
-628 -64 -667 -18 -20 -18 -24 -2 -106 9 -47 14 -91 11 -99 -4 -8 -24 -33 -46
-55 l-41 -40 7 -73 c10 -104 10 -110 -9 -151 -20 -41 -31 -45 -40 -15 -4 11
-12 18 -18 16 -24 -8 -35 -78 -45 -295 -10 -207 -13 -227 -37 -280 -14 -31
-29 -76 -32 -99 -10 -77 -32 -48 -34 45 -1 64 -12 112 -21 97 -3 -6 -11 -55
-18 -110 -6 -55 -18 -111 -27 -124 -13 -20 -14 -57 -8 -260 8 -262 -2 -731
-16 -731 -5 0 -9 6 -9 13 0 8 -9 22 -19 31 -15 13 -21 38 -26 109 -7 91 -41
187 -65 187 -5 0 -22 -19 -37 -42 -25 -38 -28 -50 -28 -130 0 -83 -2 -89 -27
-113 -19 -18 -30 -42 -39 -86 l-12 -61 -43 6 -44 6 6 -59 c5 -42 3 -60 -6 -66
-21 -13 -37 20 -49 102 -17 114 -27 114 -42 1 -6 -40 -18 -81 -26 -91 -15 -16
-14 -23 3 -80 18 -58 19 -100 19 -635 0 -644 7 -592 -80 -591 -99 2 -99 2
-106 111 -5 88 -8 99 -37 136 -18 22 -32 47 -32 56 0 27 -30 78 -43 73 -7 -2
-20 -27 -29 -56 -9 -28 -26 -60 -38 -69 -16 -14 -22 -36 -31 -121 -5 -58 -12
-108 -15 -113 -3 -4 -196 -8 -428 -8 l-423 0 -7 31 c-3 17 -6 82 -7 143 0 68
-5 125 -14 146 -7 19 -21 61 -31 93 -9 31 -20 57 -24 57 -4 0 -10 -23 -14 -51
-5 -33 -11 -49 -19 -46 -16 5 -21 96 -8 143 13 48 5 64 -31 64 l-31 0 7 61 7
60 -48 -3 -48 -3 0 -55 c0 -47 -3 -56 -22 -65 -21 -9 -23 -16 -23 -95 0 -121
-28 -151 -44 -49 -3 22 -10 39 -14 39 -8 0 -36 -119 -46 -194 -6 -44 -20 -57
-56 -54 -24 3 -25 6 -32 107 -4 56 -10 106 -13 109 -13 13 -22 -23 -28 -105
-3 -59 -10 -90 -21 -101 -8 -9 -19 -12 -23 -8 -5 4 -11 137 -15 294 -4 158
-13 307 -19 332 -6 25 -15 89 -19 144 -4 54 -13 103 -19 109 -22 22 -34 -11
-40 -107 -5 -85 -20 -130 -36 -114 -3 3 -10 72 -16 154 -10 149 -15 164 -52
177 -12 4 -13 47 -3 108 l8 46 -67 7 c-36 4 -70 4 -76 0 -7 -4 -8 -35 -3 -85
7 -78 6 -79 -20 -89 -14 -5 -27 -11 -27 -12 -1 -2 -4 -67 -8 -145 -4 -86 -11
-147 -18 -154 -14 -14 -18 -1 -32 110 -10 77 -28 108 -55 98 -12 -5 -16 -22
-16 -75 0 -38 -4 -91 -9 -118 -5 -27 -13 -187 -17 -356 -4 -168 -11 -312 -15
-320 -7 -10 -12 -10 -25 4 -12 12 -20 48 -28 122 -6 57 -14 107 -18 111 -12
13 -26 -30 -37 -120 -7 -49 -18 -99 -25 -110 -10 -16 -11 -93 -4 -375 10 -388
7 -864 -5 -877 -5 -4 -16 2 -25 14 -202 255 -267 340 -306 398 -54 79 -135
243 -161 325 -10 30 -21 59 -26 64 -5 6 -24 -24 -44 -69 -41 -88 -49 -87 -60
5 -8 73 14 205 71 419 71 263 78 318 79 553 0 135 -4 211 -11 218 -8 8 -26 5
-63 -10 -66 -26 -91 -26 -91 0 0 10 29 97 64 192 176 478 246 765 246 1009 0
96 -3 121 -18 138 -16 21 -19 21 -54 7 -29 -12 -38 -13 -47 -3 -18 22 18 65
190 227 206 193 425 415 494 500 69 85 185 252 185 266 0 12 -16 16 -147 35
-45 6 -90 17 -99 24 -15 11 -8 15 52 35 38 12 128 50 199 84 166 80 328 176
725 429 133 85 330 226 330 236 0 14 -25 20 -143 32 -105 10 -143 21 -132 39
2 4 23 10 45 14 88 14 396 123 566 201 216 98 446 231 442 254 -3 13 -24 17
-123 21 -96 4 -120 8 -120 20 0 10 36 24 125 46 69 18 204 62 300 97 241 89
260 97 260 112 0 19 -80 25 -328 25 -257 0 -323 -10 -476 -71 -54 -21 -103
-39 -110 -39 -6 -1 -29 -9 -51 -20 -53 -26 -65 -25 -65 4 0 17 19 42 67 85 37
33 64 63 61 67 -4 3 -97 -24 -206 -60 -198 -66 -201 -68 -279 -133 -112 -95
-239 -217 -306 -295 -86 -100 -97 -93 -97 58 0 65 -4 94 -12 94 -16 0 -140
-95 -264 -202 -71 -61 -112 -105 -129 -137 -31 -60 -52 -88 -60 -79 -4 4 -7
52 -6 108 1 55 -2 100 -7 100 -25 0 -379 -324 -480 -440 -89 -100 -133 -167
-200 -298 -57 -112 -102 -233 -127 -344 -10 -47 -22 -78 -30 -78 -11 0 -36 49
-93 181 -11 26 -24 49 -30 53 -17 10 -81 -74 -158 -207 -113 -197 -165 -340
-249 -697 -68 -287 -128 -490 -145 -490 -5 0 -27 35 -50 78 -56 105 -64 112
-83 76 -20 -41 -74 -243 -92 -346 -8 -48 -22 -183 -31 -300 -24 -322 -6 -622
51 -841 14 -53 26 -102 27 -109 4 -20 -64 -12 -112 12 -22 11 -46 33 -54 48
-21 40 -52 67 -59 49 -17 -45 30 -629 69 -847 36 -201 111 -433 199 -617 42
-88 65 -123 104 -159 59 -54 67 -80 22 -71 -36 8 -140 56 -200 93 l-44 27 6
-54 c7 -67 123 -426 184 -568 117 -275 207 -417 384 -611 111 -121 168 -192
241 -298 58 -86 71 -122 43 -122 -42 0 -25 -47 77 -209 65 -103 97 -143 259
-326 153 -172 150 -169 330 -294 35 -24 124 -104 197 -177 125 -125 134 -136
141 -182 9 -58 25 -82 88 -134 105 -87 216 -120 413 -122 l125 -1 6 -60 c3
-33 12 -70 20 -83 22 -35 83 -73 129 -79 46 -6 57 -21 40 -52 -14 -26 1 -84
33 -132 63 -94 226 -115 365 -47 24 11 46 17 50 14 3 -4 9 -28 12 -53 4 -34
12 -51 31 -66 26 -19 29 -19 77 -3 27 9 74 32 105 50 31 19 58 31 61 28 3 -3
6 -25 6 -48 0 -63 31 -84 123 -84 69 0 73 -2 151 -53 45 -30 128 -73 186 -97
119 -48 439 -152 520 -169 166 -33 623 -42 808 -16 386 55 614 132 837 285 64
44 78 49 154 58 107 13 131 32 114 92 -13 49 -6 50 56 11 89 -57 185 -64 217
-17 8 14 12 34 9 47 -3 13 -1 31 5 39 8 13 17 12 72 -7 88 -30 126 -35 189
-23 71 14 137 49 172 93 25 30 29 44 30 102 l2 68 43 13 c58 17 109 53 123 87
7 15 14 53 18 85 l6 57 96 2 c172 5 385 76 477 159 44 40 61 82 62 152 0 27 8
38 48 66 85 62 186 206 217 311 13 43 22 55 72 90 68 46 355 306 379 343 10
15 37 50 61 80 45 56 153 268 153 302 0 16 -7 20 -30 20 -26 0 -30 4 -30 28 0
33 18 60 169 261 64 84 127 171 141 191 14 21 38 48 54 61 64 50 223 326 299
519 59 150 202 599 193 607 -6 6 -40 -11 -121 -61 -64 -39 -148 -69 -153 -55
-2 5 17 33 42 63 138 161 281 607 325 1016 17 157 31 393 31 532 l0 130 -77
-79 c-118 -120 -155 -118 -115 6 82 253 80 960 -3 1276 -30 113 -56 193 -70
212 -13 17 -15 17 -35 -3 -11 -11 -32 -47 -45 -80 -30 -75 -57 -84 -82 -27
-14 34 -74 269 -148 582 -40 170 -77 275 -153 434 -63 130 -165 300 -197 327
-18 15 -27 0 -75 -133 -33 -89 -47 -117 -59 -115 -10 2 -19 19 -24 43 -32 165
-59 234 -154 404 -83 147 -185 282 -301 395 -128 125 -333 297 -345 289 -6 -3
-6 -48 -2 -104 4 -66 3 -99 -4 -99 -5 0 -34 30 -64 68 -30 37 -85 96 -123 131
-85 80 -233 191 -255 191 -13 0 -17 -17 -22 -97 -4 -53 -11 -101 -17 -107 -6
-6 -70 52 -187 171 -166 168 -184 183 -263 221 -89 42 -356 132 -393 132 -18
0 -13 -9 32 -53z m-340 -51 c31 -8 82 -20 114 -26 45 -9 57 -15 57 -30 0 -17
-12 -23 -117 -55 -6 -2 -28 9 -50 25 -21 16 -59 37 -85 46 -27 8 -48 22 -48
29 0 27 47 31 129 11z m-2674 -26 c7 -11 -173 -100 -202 -100 -38 0 -123 31
-123 45 0 18 45 32 156 49 109 17 161 19 169 6z m3374 -116 c111 -59 190 -126
258 -217 40 -54 37 -61 -25 -73 -46 -9 -97 1 -133 26 -33 24 -204 245 -219
284 -8 22 -5 36 8 36 3 0 53 -25 111 -56z m-4069 12 c0 -8 -4 -18 -10 -21 -5
-3 -42 -54 -82 -113 -103 -152 -151 -198 -210 -207 -58 -9 -114 1 -122 20 -11
30 157 207 247 260 47 27 154 74 170 75 4 0 7 -6 7 -14z m2016 -71 c-7 -18
-26 -20 -26 -2 0 18 24 41 28 27 2 -6 1 -17 -2 -25z m1784 -68 c57 -28 153
-123 208 -206 44 -66 52 -91 28 -91 -14 0 -320 147 -409 196 -66 37 -124 91
-110 105 34 34 211 31 283 -4z m-3397 -17 c16 -14 -17 -48 -92 -98 -88 -57
-429 -227 -438 -219 -12 13 64 122 141 204 76 81 111 107 166 124 29 9 211 0
223 -11z m4363 -241 c130 -157 166 -211 168 -253 1 -41 -14 -38 -112 22 -99
60 -217 176 -231 229 -15 54 -14 96 6 144 l16 42 21 -25 c12 -14 71 -85 132
-159z m-5431 28 c0 -83 -3 -96 -29 -140 -15 -26 -47 -63 -70 -81 -51 -42 -187
-123 -221 -132 -23 -6 -25 -4 -25 29 0 42 20 71 194 282 95 115 132 153 140
145 6 -6 11 -49 11 -103z m5139 -43 c11 -11 16 -35 16 -79 0 -57 -3 -66 -25
-81 -30 -20 -57 -12 -90 27 -53 64 -18 137 72 148 6 0 19 -6 27 -15z m-4926
-44 c35 -33 27 -136 -12 -162 -43 -29 -116 24 -116 83 0 34 23 85 42 92 29 12
65 6 86 -13z m5650 -62 c26 -34 94 -118 152 -187 233 -279 348 -460 326 -516
-5 -14 -18 -10 -93 31 -128 68 -307 199 -378 276 -50 54 -65 79 -79 128 -36
126 -29 330 10 330 8 0 35 -28 62 -62z m-6387 -45 c7 -22 10 -77 7 -147 -4
-107 -6 -115 -42 -182 -21 -38 -52 -84 -69 -103 -81 -85 -379 -288 -450 -306
-24 -6 -27 -4 -27 18 0 35 58 147 134 257 94 135 407 509 422 503 7 -3 18 -21
25 -40z m5854 -128 c92 -40 171 -130 273 -308 85 -148 82 -153 -46 -78 -46 27
-145 77 -220 111 -192 86 -191 86 -273 147 -84 63 -129 103 -129 114 0 22 212
51 300 42 25 -3 68 -15 95 -28z m-5052 -31 c27 -5 37 -12 37 -25 0 -38 -168
-148 -409 -269 -111 -55 -250 -142 -280 -174 -31 -33 -41 -33 -41 -1 0 32 25
81 104 209 90 145 187 232 294 263 47 13 212 12 295 -3z m5477 -199 c25 -35
80 -108 122 -162 43 -54 78 -104 78 -110 0 -49 -137 42 -195 130 -39 59 -75
155 -75 201 0 37 6 31 70 -59z m-6170 41 c0 -35 -47 -172 -77 -225 -36 -64
-89 -117 -149 -152 -96 -55 -104 -32 -23 66 71 86 199 264 217 303 19 38 32
42 32 8z m6665 -441 c19 -18 25 -35 25 -68 0 -90 -33 -130 -90 -112 -32 10
-60 63 -60 113 0 51 34 92 75 92 14 0 37 -11 50 -25z m429 -2 c3 -16 13 -68
22 -118 19 -107 54 -220 95 -313 139 -308 250 -655 220 -685 -13 -13 -156 124
-245 235 -71 89 -145 231 -176 338 -27 91 -38 296 -21 385 13 70 66 185 86
185 7 0 16 -12 19 -27z m-7591 -79 c40 -40 40 -139 0 -169 -28 -22 -87 -19
-108 5 -28 31 -31 117 -6 158 27 42 76 45 114 6z m-462 -81 c46 -87 54 -161
40 -329 -13 -141 -37 -211 -125 -359 -92 -154 -290 -386 -316 -370 -25 15 -1
150 53 311 14 39 61 156 106 261 116 275 139 342 156 467 9 65 22 99 38 94 6
-3 28 -36 48 -75z m7417 -34 c130 -72 179 -138 260 -355 54 -141 69 -194 54
-194 -5 0 -81 73 -168 163 -155 157 -161 165 -198 252 -42 102 -57 175 -35
175 8 0 47 -19 87 -41z m-6733 -68 c-3 -20 -29 -82 -56 -139 -48 -99 -58 -111
-212 -269 -106 -108 -163 -160 -165 -149 -5 24 64 219 118 332 30 65 62 116
88 140 42 42 210 136 225 127 5 -3 6 -22 2 -42z m7110 -136 c19 -124 57 -224
158 -417 34 -64 58 -120 55 -123 -9 -10 -59 19 -90 52 -41 43 -156 240 -165
281 -10 47 -9 254 1 307 11 56 21 32 41 -100z m-7555 -16 c18 -93 15 -190 -9
-262 -21 -62 -122 -240 -178 -314 -22 -29 -69 -63 -88 -63 -16 0 3 46 74 178
100 188 125 251 151 392 29 154 33 159 50 69z m3868 -130 c-3 -161 -4 -174
-22 -177 -18 -4 -18 4 -14 170 2 95 8 179 12 187 20 32 26 -17 24 -180z m-198
7 c0 -96 -4 -177 -9 -180 -19 -12 -27 149 -14 287 11 123 23 69 23 -107z m96
148 c7 -27 -3 -255 -13 -305 -3 -16 -9 -26 -14 -23 -10 6 -12 259 -3 317 8 43
21 48 30 11z m4291 -799 c49 -35 47 -135 -4 -175 -33 -26 -46 -25 -78 3 -49
41 -44 156 7 177 34 13 51 12 75 -5z m-279 -79 c55 -61 136 -180 158 -233 40
-95 57 -432 34 -675 -18 -189 -34 -197 -94 -48 -40 100 -124 330 -137 374 -29
98 -57 591 -36 624 13 20 23 15 75 -42z m576 -28 c3 -24 8 -114 11 -200 4 -86
10 -194 15 -240 14 -129 34 -699 26 -741 -4 -23 -12 -37 -19 -35 -20 6 -94
165 -118 252 -42 156 -51 249 -46 431 7 216 46 440 95 542 21 44 30 42 36 -9z
m-8841 1 c32 -17 37 -28 37 -91 0 -50 -3 -60 -24 -73 -45 -29 -104 14 -113 83
-5 34 -1 45 20 66 29 29 47 32 80 15z m4407 2 c0 -5 -9 -13 -21 -16 -26 -9
-275 -9 -289 0 -31 19 3 25 150 25 92 0 160 -4 160 -9z m-4119 -58 c15 -38 5
-331 -16 -453 -24 -140 -49 -234 -118 -427 -55 -155 -96 -237 -110 -223 -25
25 -47 519 -29 660 16 125 55 237 112 323 48 72 120 147 140 147 6 0 15 -12
21 -27z m8352 -251 c-4 -182 -2 -319 7 -426 7 -86 9 -160 5 -164 -11 -12 -33
27 -55 97 -34 112 -42 180 -44 361 -1 168 0 178 28 260 29 86 53 140 61 140 3
0 2 -121 -2 -268z m-8958 135 c15 -45 39 -141 56 -213 25 -114 29 -152 29
-281 0 -176 -16 -281 -66 -443 -48 -155 -91 -247 -106 -232 -17 17 -12 304 12
662 11 168 20 361 20 430 0 195 13 212 55 77z m182 -45 c44 -118 52 -157 59
-297 8 -145 -7 -275 -42 -358 -17 -40 -22 -63 -15 -70 10 -10 -9 -60 -29 -72
-6 -4 -8 109 -4 332 5 313 1 429 -22 526 -5 19 -2 27 7 27 8 0 27 -36 46 -88z
m4434 -49 c5 -154 -3 -359 -13 -369 -5 -4 -11 -4 -15 0 -9 8 -7 447 2 475 15
47 23 14 26 -106z m-192 -124 c1 -180 -6 -269 -20 -247 -11 16 -12 472 -1 482
13 14 21 -67 21 -235z m94 109 c9 -150 9 -306 1 -335 -4 -13 -13 -23 -20 -23
-11 0 -14 32 -14 173 0 182 8 307 20 307 4 0 10 -55 13 -122z m190 -127 c2
-210 -3 -253 -23 -221 -11 17 -13 230 -3 373 11 165 24 87 26 -152z m109 -373
c-15 -15 -515 -14 -552 1 -18 7 63 10 269 10 225 1 292 -2 283 -11z m-718
-314 c5 -23 10 -445 10 -1022 1 -963 1 -984 -18 -998 -11 -8 -23 -14 -28 -14
-9 0 -11 2040 -2 2065 10 26 28 12 38 -31z m967 -65 c4 -57 7 -514 8 -1015 1
-776 -1 -913 -13 -930 -12 -16 -17 -17 -28 -6 -11 11 -13 173 -11 875 2 929 8
1190 27 1184 7 -2 13 -44 17 -108z m239 -993 l0 -1104 135 -7 c74 -4 138 -11
141 -16 12 -20 -56 -29 -211 -29 l-163 0 -7 93 c-9 134 -2 2129 9 2150 6 12
20 17 52 17 l44 0 0 -1104z m-1395 -23 c0 -611 -4 -1115 -8 -1120 -14 -14
-371 -17 -397 -3 -45 24 -4 35 146 38 98 3 147 8 149 15 2 7 9 497 14 1089 5
593 12 1082 16 1088 4 6 23 10 43 8 l37 -3 0 -1112z m734 254 c-1 -452 -4
-851 -8 -887 l-6 -65 -8 109 c-9 135 -9 1423 -1 1569 17 266 24 33 23 -726z
m-219 -59 c0 -611 -3 -869 -11 -861 -7 7 -10 273 -10 845 0 743 3 888 17 888
2 0 4 -392 4 -872z m4623 751 c11 -14 17 -38 17 -69 0 -42 -4 -52 -31 -74 -45
-38 -80 -33 -104 15 -26 49 -16 127 19 152 19 13 80 -1 99 -24z m-351 -37
c121 -126 173 -301 148 -497 -12 -99 -80 -321 -109 -356 l-18 -23 -11 21 c-14
26 -49 354 -89 841 -7 91 3 93 79 14z m-7125 -42 c53 -23 83 -70 83 -127 0
-95 -62 -153 -163 -153 -94 0 -144 61 -135 165 4 44 11 62 33 85 49 51 114 61
182 30z m6103 1 c138 -73 87 -281 -70 -281 -60 0 -106 29 -130 83 -25 54 -25
81 1 133 35 74 127 104 199 65z m-7514 -24 c23 -20 28 -34 32 -84 4 -52 1 -64
-17 -82 -27 -27 -82 -28 -105 -2 -20 22 -32 88 -22 126 6 22 57 65 78 65 4 0
19 -11 34 -23z m340 -74 c-4 -49 -15 -158 -26 -243 -10 -85 -26 -249 -35 -365
-9 -115 -18 -218 -21 -227 -21 -72 -93 79 -144 301 -28 121 7 370 65 461 23
36 147 160 161 160 3 0 4 -39 0 -87z m8845 -179 c-19 -176 -61 -463 -81 -549
-36 -155 -139 -423 -183 -480 -29 -36 -45 -2 -64 130 -14 101 -14 140 -5 245
18 206 73 435 132 550 51 100 181 243 202 222 7 -7 6 -46 -1 -118z m-9502 -80
c54 -57 84 -102 121 -178 59 -118 115 -310 131 -446 22 -178 -7 -470 -46 -470
-53 0 -159 272 -214 550 -53 269 -95 620 -73 620 5 0 42 -34 81 -76z m9201 14
c0 -6 -25 -106 -55 -222 -30 -116 -63 -254 -75 -306 -34 -155 -40 -174 -52
-162 -32 32 -9 372 33 492 35 100 149 252 149 198z m-8916 -175 c105 -164 124
-226 132 -454 11 -265 -8 -268 -61 -9 -21 96 -48 205 -62 244 -61 169 -87 286
-63 286 6 0 30 -30 54 -67z m7706 -283 c8 -15 10 -200 8 -618 -3 -537 -5 -600
-20 -628 -42 -77 -45 -69 -51 173 -8 309 3 1065 16 1081 14 18 35 15 47 -8z
m-585 -72 c3 -29 5 -360 3 -735 l-3 -682 -22 -22 -21 -21 -7 88 c-9 97 1 1221
12 1347 7 93 28 106 38 25z m-5354 -9 c12 -43 10 -1417 -2 -1425 -6 -3 -20 3
-32 14 -18 18 -21 36 -24 149 -6 193 11 1266 21 1281 11 19 29 10 37 -19z
m-560 -19 c9 -33 10 -1230 0 -1254 -7 -17 -9 -16 -37 7 -58 49 -71 144 -49
348 10 94 19 301 23 529 4 206 11 381 16 388 12 20 39 10 47 -18z m4469 -159
c11 -22 14 -1186 3 -1440 l-6 -152 -26 3 -26 3 -3 777 c-1 490 1 786 8 802 11
31 35 34 50 7z m-2470 -17 c12 -29 12 -1324 1 -1506 -7 -127 -20 -160 -47
-123 -13 17 -15 126 -12 825 2 443 7 811 11 818 13 20 37 14 47 -14z m3378
-741 l-3 -768 -51 -3 -52 -3 -7 158 c-4 87 -6 428 -3 757 4 569 6 599 23 612
10 8 36 14 57 14 l38 0 -2 -767z m-4227 577 c8 -200 8 -1089 0 -1244 l-6 -120
-33 -8 c-70 -18 -66 -67 -59 764 3 411 9 753 12 758 4 6 23 10 43 8 l37 -3 6
-155z m6089 -65 c0 -137 -29 -209 -131 -325 -31 -36 -73 -91 -92 -124 -34 -56
-36 -57 -47 -35 -9 16 -11 55 -7 132 7 138 28 184 159 350 109 137 118 138
118 2z m355 60 c39 -39 38 -127 -2 -164 -21 -18 -34 -22 -62 -17 -45 7 -61 28
-61 82 0 108 65 159 125 99z m-8330 -86 c9 -17 47 -70 85 -117 116 -149 160
-252 160 -376 0 -51 -2 -57 -26 -66 -14 -6 -27 -10 -29 -10 -2 0 -29 37 -59
83 -31 45 -80 113 -111 151 -61 79 -70 109 -70 246 1 122 18 152 50 89z m-308
-46 c12 -18 18 -46 18 -86 0 -50 -4 -62 -24 -78 -31 -25 -83 -25 -106 1 -13
15 -18 37 -19 86 -1 58 2 68 23 85 35 29 87 25 108 -8z m8579 -185 c4 -7 -19
-35 -58 -72 -104 -97 -163 -185 -225 -335 -47 -115 -55 -122 -82 -78 -11 19
-28 54 -36 77 -14 41 -14 46 6 87 53 110 195 254 303 308 55 27 81 31 92 13z
m-4262 -79 c27 -22 51 -39 55 -39 3 0 37 11 75 24 39 14 74 22 79 19 16 -10
-4 -57 -54 -124 -27 -37 -49 -71 -49 -78 0 -20 51 -24 209 -17 86 4 176 4 199
0 l42 -7 0 -63 c0 -34 -3 -65 -7 -67 -5 -3 -118 -6 -253 -8 l-244 -4 -11 35
c-6 19 -18 49 -28 67 -9 18 -17 38 -17 46 0 7 -6 22 -14 32 -19 27 -42 6 -49
-43 -8 -58 -37 -131 -56 -136 -31 -10 -77 -9 -166 4 -78 11 -102 11 -182 -3
-92 -16 -106 -16 -150 6 -20 9 -23 18 -23 74 l0 63 198 0 c108 0 204 4 211 9
12 8 5 20 -34 60 -56 58 -65 72 -76 118 -10 45 4 50 66 23 48 -20 95 -20 95 0
0 6 7 10 16 10 9 0 30 11 46 25 37 31 54 27 122 -26z m-4247 -72 c35 -17 95
-61 133 -95 78 -71 170 -198 170 -235 0 -13 -10 -49 -22 -78 -36 -92 -57 -100
-78 -31 -37 115 -174 326 -256 390 -96 77 -62 109 53 49z m7870 -72 c78 -116
209 -380 248 -498 63 -195 79 -292 80 -488 l0 -176 -57 -65 c-31 -35 -64 -81
-74 -101 -20 -43 -43 -53 -149 -67 -44 -5 -110 -18 -147 -27 -37 -10 -70 -14
-74 -10 -9 8 -8 27 4 176 17 221 -10 372 -110 600 -32 74 -58 147 -58 163 0
17 16 52 40 87 48 69 94 168 144 306 20 55 44 119 52 143 11 30 21 42 32 40 9
-2 40 -39 69 -83z m943 65 c0 -6 -20 -45 -44 -88 -24 -42 -58 -111 -76 -152
-85 -196 -181 -371 -261 -477 -116 -153 -139 -139 -119 79 17 184 43 301 92
405 37 78 118 142 257 204 84 37 151 50 151 29z m-8161 -170 c46 -132 110
-279 140 -322 14 -20 41 -58 60 -84 19 -26 34 -59 34 -73 0 -14 -21 -69 -45
-121 -45 -95 -72 -169 -105 -290 -14 -53 -17 -100 -16 -260 1 -107 3 -215 5
-240 4 -53 16 -51 -162 -26 -169 24 -180 28 -220 83 -20 27 -58 77 -85 112
l-50 63 1 172 c2 205 18 292 100 535 61 182 103 273 189 406 64 100 93 135
110 135 7 0 27 -41 44 -90z m-954 25 c277 -104 361 -229 387 -576 10 -140 6
-219 -11 -219 -5 0 -27 20 -49 44 -93 101 -165 215 -273 429 -61 122 -127 245
-146 273 -19 29 -32 58 -28 63 10 17 50 13 120 -14z m4340 -214 l70 -6 -115
-8 c-150 -9 -669 -9 -751 1 -62 7 -60 7 56 12 170 8 657 9 740 1z m1159 1 c6
-11 -335 -22 -655 -22 -211 0 -278 7 -237 23 22 9 887 7 892 -1z m-1746 -95
c10 -8 12 -27 8 -72 -4 -33 -8 -151 -9 -262 -3 -213 -8 -240 -45 -217 -14 9
-18 34 -23 150 -6 150 -19 209 -48 217 -10 2 -31 29 -47 58 -16 30 -35 54 -43
54 -26 0 -40 -73 -46 -237 l-6 -163 -29 -26 -29 -27 -7 45 c-8 56 -1 460 9
469 4 4 62 11 129 16 67 4 124 10 126 13 7 7 43 -4 60 -18z m889 -167 c-5
-140 -18 -214 -31 -180 -8 21 -26 212 -26 275 0 37 5 59 17 70 16 16 18 16 31
-1 11 -15 13 -48 9 -164z m288 104 c9 -89 2 -420 -8 -431 -4 -3 -13 -1 -20 6
-9 9 -12 67 -10 224 2 214 7 277 23 277 4 0 11 -34 15 -76z m180 -177 c0 -135
-4 -249 -8 -253 -4 -5 -12 -2 -17 6 -11 17 -14 483 -3 494 24 23 28 -13 28
-247z m323 247 l92 -7 0 -196 c0 -225 -7 -301 -26 -301 -7 0 -17 8 -23 18 -14
26 -41 211 -41 281 0 46 -6 74 -25 111 -28 56 -40 62 -49 25 -3 -13 -17 -41
-31 -61 -14 -20 -25 -43 -25 -50 0 -17 -12 -18 -28 -2 -8 8 -15 8 -26 -2 -24
-19 -36 -77 -36 -176 0 -107 -8 -154 -25 -154 -21 0 -25 51 -25 291 l0 229 88
0 c49 0 130 -3 180 -6z m-1510 -16 c9 -9 12 -84 12 -275 l0 -264 -62 3 -63 3
-7 155 c-4 85 -12 190 -19 232 -11 76 -7 121 13 145 13 17 110 17 126 1z m195
-89 c12 -147 5 -412 -12 -433 -31 -37 -36 -1 -36 252 0 136 4 255 8 265 16 42
32 9 40 -84z m153 55 c4 -26 3 -101 -1 -168 -13 -212 -12 -236 9 -252 32 -23
56 -17 68 16 11 33 42 46 83 36 27 -7 34 -26 10 -26 -20 0 -19 -36 1 -44 9 -3
34 -6 57 -6 48 0 77 -14 62 -29 -6 -5 -79 -11 -162 -13 -120 -2 -154 0 -158
10 -15 40 0 522 16 522 4 0 11 -21 15 -46z m159 24 c9 -36 -11 -318 -23 -330
-24 -24 -34 43 -29 189 3 79 8 147 12 153 11 18 34 11 40 -12z m340 -29 c9
-66 -4 -409 -16 -409 -5 0 -9 103 -9 230 0 221 10 291 25 179z m2956 -189 c10
-6 19 -17 19 -25 0 -7 -42 -55 -93 -107 -52 -51 -119 -129 -150 -173 -74 -106
-164 -205 -188 -205 -24 0 -16 23 42 117 23 37 67 110 98 161 31 51 87 127
124 168 72 77 100 89 148 64z m-6344 -46 c48 -36 84 -95 178 -286 79 -160 99
-218 75 -218 -16 0 -95 107 -163 219 -71 119 -121 179 -183 222 -51 35 -55 57
-16 82 33 20 64 15 109 -19z m6466 -100 c12 -12 -16 -50 -117 -154 -55 -58
-113 -120 -129 -137 -54 -65 -63 -33 -16 60 54 107 137 209 186 229 23 9 68
10 76 2z m-6617 -60 c43 -21 82 -69 139 -175 43 -81 55 -119 36 -119 -5 0 -23
19 -40 43 -18 23 -74 86 -126 139 -65 66 -93 101 -89 112 8 20 37 20 80 0z
m3327 -170 l197 -6 0 -74 c0 -106 11 -115 129 -107 l89 6 89 -55 c48 -31 99
-62 113 -69 20 -11 89 -14 340 -12 173 1 345 4 383 8 60 6 67 4 67 -12 0 -10
-22 -50 -49 -89 -32 -47 -51 -87 -55 -116 -7 -43 -36 -88 -57 -88 -5 0 -24 7
-40 16 -29 14 -34 14 -102 -14 -140 -58 -409 -112 -657 -131 -481 -37 -945
-38 -1190 -2 -245 36 -545 112 -578 145 -9 9 -22 43 -29 77 -8 39 -24 77 -47
110 -40 55 -43 64 -20 73 9 3 159 6 334 6 l319 0 133 68 133 67 252 -3 253 -3
0 29 0 29 -197 7 c-108 3 -199 8 -201 11 -3 2 6 30 18 61 28 67 60 87 130 79
25 -3 134 -8 243 -11z m3370 -44 c50 -39 43 -126 -12 -154 -75 -38 -139 87
-76 149 29 30 54 32 88 5z m-6728 -55 c28 -27 33 -83 12 -125 -18 -36 -84 -48
-111 -21 -26 26 -27 107 -3 145 23 34 69 35 102 1z m5641 -91 c18 -9 50 -34
70 -57 l37 -40 -6 -89 -6 -88 59 0 c56 0 60 -2 75 -30 8 -16 15 -39 15 -51 0
-38 -37 -103 -96 -168 l-57 -62 13 -57 c10 -50 9 -63 -5 -100 -10 -23 -30 -53
-45 -66 -35 -29 -222 -126 -244 -126 -8 0 -32 16 -52 36 -34 35 -38 36 -89 31
-29 -3 -75 -17 -103 -31 -28 -14 -54 -26 -57 -26 -17 0 6 31 98 128 156 168
225 300 234 447 6 99 -2 93 -55 -37 -89 -216 -260 -445 -430 -573 -108 -81
-161 -109 -179 -93 -18 15 -18 16 28 92 47 78 73 146 61 158 -5 5 -48 -44
-100 -114 -149 -203 -176 -229 -270 -262 -45 -15 -86 -25 -93 -21 -20 13 -4
117 29 186 33 69 137 191 181 214 29 14 79 100 101 170 32 102 131 150 228
110 33 -15 38 -14 48 0 7 9 15 44 19 78 14 130 53 235 105 282 19 17 42 17
127 0 30 -7 32 -5 43 34 17 64 54 91 170 122 82 22 104 23 146 3z m-4380 -30
c64 -33 111 -79 125 -121 6 -18 13 -33 16 -33 3 0 18 9 34 21 21 14 41 19 71
17 40 -3 45 -6 70 -53 39 -71 58 -136 69 -244 6 -52 12 -98 15 -103 3 -4 22 3
42 17 67 46 171 27 209 -36 11 -19 30 -63 43 -99 32 -88 46 -107 94 -128 34
-16 51 -35 104 -120 83 -134 104 -182 100 -235 -3 -40 -4 -42 -33 -38 -52 6
-130 40 -171 75 -21 18 -84 97 -139 174 -54 77 -103 138 -107 136 -18 -12 -5
-60 41 -149 29 -55 46 -97 40 -101 -42 -25 -227 103 -356 245 -144 159 -238
320 -279 480 -12 44 -31 51 -40 14 -11 -44 11 -148 49 -228 40 -83 85 -147
177 -250 106 -119 113 -140 38 -112 -97 35 -125 31 -176 -24 l-31 -33 -58 18
c-118 37 -228 107 -258 166 -21 41 -19 87 6 127 l21 34 -56 51 c-66 59 -96
111 -103 182 -7 65 3 74 82 78 53 3 60 5 58 23 -20 159 -14 188 45 229 54 37
80 45 148 45 47 1 72 -5 110 -25z m5254 -9 c104 -54 140 -169 92 -295 -9 -22
-4 -30 39 -71 44 -41 49 -49 49 -90 0 -73 -19 -120 -62 -160 l-40 -37 22 -29
c24 -34 32 -111 13 -135 -19 -22 -104 -66 -144 -73 -31 -6 -36 -4 -47 20 -7
14 -12 38 -12 52 0 58 -120 133 -214 133 -23 0 -48 5 -56 10 -13 8 -12 12 5
34 91 114 120 156 179 263 84 151 85 191 3 80 -131 -177 -334 -374 -359 -349
-14 14 -38 109 -32 126 3 7 23 22 45 32 22 9 44 25 48 33 17 32 22 119 12 226
-11 128 -8 138 62 175 61 32 94 22 123 -39 l21 -44 17 24 c9 13 30 43 47 67
48 69 114 86 189 47z m-6162 -61 c15 -11 36 -39 47 -62 23 -50 38 -53 55 -12
15 37 55 70 85 70 12 0 40 -16 63 -36 48 -41 50 -53 31 -192 -15 -113 3 -175
67 -230 l46 -39 -13 -72 c-7 -39 -17 -71 -21 -71 -33 0 -293 270 -358 374 -35
55 -55 72 -65 56 -11 -18 114 -230 213 -361 23 -31 42 -61 42 -66 0 -13 -24
-23 -56 -23 -58 0 -122 -52 -198 -157 -35 -49 -41 -53 -77 -53 -46 0 -133 41
-149 69 -15 30 -12 68 10 111 26 51 25 57 -8 74 -92 48 -94 214 -3 271 35 23
35 28 0 118 -20 53 -21 62 -9 95 22 62 67 118 112 141 54 28 144 25 186 -5z
m6811 -243 c-40 -73 -271 -331 -295 -331 -7 0 -22 12 -34 28 -66 82 50 303
173 331 23 5 73 9 110 10 l68 1 -22 -39z m-7506 -85 c56 -21 104 -62 137 -119
33 -58 55 -137 46 -170 -8 -33 -55 -79 -71 -70 -14 8 -121 130 -191 217 -56
71 -94 128 -94 143 0 18 123 17 173 -1z m6359 -397 c66 -81 58 -77 125 -66 83
14 144 -4 198 -58 71 -71 78 -161 20 -245 -15 -22 -44 -47 -65 -57 l-37 -18 1
-91 c1 -121 -17 -149 -129 -203 -97 -47 -170 -63 -295 -65 l-95 -1 -11 68 c-6
38 -20 81 -31 95 -32 43 -94 72 -170 79 -37 3 -75 10 -85 14 -9 5 -24 30 -34
56 -9 27 -31 62 -47 80 -34 36 -31 59 10 67 85 17 262 38 448 51 194 14 241
23 221 42 -4 5 -85 8 -179 8 -160 0 -175 2 -207 22 -36 22 -66 60 -56 71 3 3
33 4 67 3 120 -4 169 33 169 129 0 31 2 59 5 61 2 3 37 2 76 -2 67 -6 75 -9
101 -40z m-5148 -34 c-5 -42 -3 -60 10 -79 32 -50 123 -75 189 -52 36 13 37
13 37 -9 0 -32 -44 -81 -84 -95 -18 -6 -84 -10 -147 -8 -128 2 -199 -7 -199
-26 0 -10 44 -15 178 -20 206 -8 363 -22 446 -41 68 -16 74 -20 58 -43 -36
-50 -72 -120 -72 -137 0 -33 -20 -45 -73 -45 -56 0 -133 -17 -164 -37 -24 -16
-63 -91 -64 -125 0 -13 -5 -39 -12 -58 -10 -30 -18 -36 -51 -41 -44 -7 -192
12 -270 36 -73 21 -153 71 -177 108 -18 28 -20 43 -15 117 l5 85 -41 20 c-23
11 -55 38 -72 59 -28 34 -31 45 -31 105 0 96 32 156 105 194 52 27 60 28 137
22 l82 -7 19 39 c30 58 52 72 121 79 34 4 64 11 67 16 14 22 23 -8 18 -57z
m3586 60 c0 -2 -13 -40 -28 -82 -72 -197 -112 -443 -112 -698 0 -215 52 -456
134 -620 65 -128 68 -117 -57 -193 -124 -75 -149 -86 -317 -135 -133 -39 -265
-67 -505 -107 -90 -15 -420 -11 -509 6 -455 87 -642 144 -799 244 -59 37 -60
27 24 226 106 255 129 402 110 714 -11 195 -29 271 -101 439 -55 130 -63 161
-42 161 9 0 46 -18 82 -40 67 -42 232 -100 348 -124 131 -27 290 -39 522 -40
209 0 253 3 400 27 362 59 539 102 715 175 123 51 135 55 135 47z m1063 -216
c43 -12 58 -36 34 -54 -26 -19 -354 -62 -368 -48 -20 20 -1 31 109 67 155 50
165 52 225 35z m-4126 -49 c53 -12 103 -30 115 -42 l23 -19 -160 5 c-157 6
-235 18 -235 36 0 6 10 20 21 31 19 19 29 21 83 16 33 -3 103 -16 153 -27z
m394 -220 c68 -20 90 -37 117 -91 25 -48 39 -47 49 3 8 40 11 43 43 46 59 6
105 -15 152 -67 24 -27 62 -58 84 -69 92 -46 123 -93 106 -157 -13 -47 -45
-57 -140 -43 -213 30 -633 -62 -723 -158 -19 -21 -20 -24 -5 -24 9 0 43 14 76
31 89 46 94 42 98 -69 3 -113 -7 -155 -54 -215 -45 -57 -106 -88 -187 -94
-114 -9 -153 27 -150 136 2 64 2 65 -42 105 -49 47 -65 97 -45 145 14 35 73
78 118 87 l33 7 -7 79 c-6 69 -4 81 12 99 32 36 74 51 161 59 46 4 87 10 90
14 4 3 -3 24 -15 45 -39 69 -22 110 58 145 39 17 72 14 171 -14z m3347 3 c36
-27 42 -52 25 -102 -8 -24 -12 -49 -10 -56 3 -7 42 -17 99 -24 51 -7 103 -19
116 -27 33 -21 45 -61 37 -122 -8 -64 0 -75 67 -98 57 -18 88 -58 88 -112 0
-43 -14 -70 -58 -108 -34 -30 -35 -31 -33 -102 2 -66 0 -73 -28 -104 -29 -32
-32 -33 -108 -33 -68 0 -85 4 -132 30 -103 57 -141 127 -141 260 0 71 12 105
36 105 8 0 44 -13 81 -30 80 -36 105 -39 78 -10 -32 36 -116 69 -270 107 -149
36 -151 37 -375 38 l-225 1 -12 24 c-21 41 -16 79 15 108 72 69 216 189 245
204 18 9 42 17 53 18 29 0 70 -34 78 -65 9 -34 23 -31 40 9 20 48 82 90 161
110 43 11 147 -2 173 -21z m-527 -552 c60 -40 114 -84 127 -104 25 -38 27 -87
4 -95 -15 -5 -262 237 -262 256 0 23 28 11 131 -57z m-2461 39 c-23 -42 -225
-245 -245 -245 -36 0 -30 45 12 95 87 101 270 219 233 150z" />
        <path d="M1950 5690 c-30 -59 -27 -66 40 -83 62 -15 73 -9 21 13 -35 14 -45
38 -36 80 9 41 -1 37 -25 -10z" />
        <path d="M8018 5605 c-14 -36 -24 -65 -23 -65 2 0 16 20 31 45 28 43 31 45 89
51 l60 7 -60 13 c-33 7 -63 13 -66 13 -3 1 -17 -28 -31 -64z" />
        <path d="M4443 2563 c-26 -10 -12 -31 25 -37 84 -14 1033 2 1049 18 4 4 1 11
-7 16 -15 10 -1044 13 -1067 3z" />
        <path d="M4368 2463 c-40 -3 -58 -8 -58 -17 0 -11 52 -15 248 -20 252 -7 1068
7 1079 18 4 3 3 9 -1 14 -8 7 -1161 12 -1268 5z" />
        <path d="M7340 1570 c0 -6 28 -23 63 -39 34 -15 97 -51 141 -80 84 -54 91 -57
102 -40 20 34 -52 88 -183 138 -85 32 -123 39 -123 21z" />
        <path d="M2698 1530 c-67 -25 -189 -88 -210 -107 -20 -18 -24 -53 -6 -53 28 0
278 153 278 170 0 13 -7 12 -62 -10z" />
        <path d="M5705 1403 c-27 -1 -73 -5 -101 -8 l-51 -6 -18 -57 c-10 -31 -24 -84
-31 -117 -13 -58 -12 -61 9 -79 12 -10 44 -29 72 -43 79 -40 113 -70 126 -112
15 -52 -3 -84 -108 -193 -68 -69 -84 -90 -78 -107 8 -27 15 -26 78 5 154 78
235 207 206 326 -17 73 -91 148 -176 178 -66 24 -72 32 -56 89 6 23 8 23 72
16 136 -16 132 -17 152 44 21 61 18 72 -19 69 -15 -1 -49 -3 -77 -5z" />
        <path d="M4676 1391 c-48 -6 -49 -7 -62 -51 -8 -25 -14 -56 -14 -70 l0 -25
109 0 c60 0 112 -3 115 -6 4 -3 -5 -26 -19 -51 -48 -86 -136 -383 -151 -509
-6 -52 -5 -55 19 -66 14 -7 34 -9 46 -6 18 5 21 13 21 60 0 73 33 232 70 336
23 65 99 252 157 385 4 9 -23 12 -118 10 -68 0 -146 -4 -173 -7z" />
        <path d="M5142 1393 c-24 -3 -39 -13 -53 -36 -29 -47 -61 -160 -57 -203 3 -35
8 -41 73 -80 133 -81 155 -140 91 -237 -19 -29 -55 -72 -80 -97 -25 -24 -46
-52 -46 -62 0 -54 88 -18 184 76 76 75 106 133 106 207 0 100 -62 168 -191
213 -60 21 -64 24 -62 51 4 47 22 57 127 64 53 4 99 11 103 14 3 4 9 27 13 52
l7 45 -91 -2 c-50 0 -106 -3 -124 -5z" />
        <path d="M4325 1369 c-85 -29 -95 -41 -55 -69 l32 -23 -4 -246 c-3 -207 -6
-252 -21 -285 -14 -31 -15 -41 -5 -48 13 -8 208 -12 208 -4 0 21 -23 56 -36
56 -16 0 -17 16 -11 191 8 257 -9 451 -41 448 -4 0 -34 -9 -67 -20z" />
        <path d="M7884 9585 c-30 -46 3 -125 51 -125 32 0 48 25 48 75 0 24 -5 51 -13
59 -20 25 -67 20 -86 -9z" />
        <path d="M2070 9527 c-42 -14 -49 -39 -25 -84 24 -45 42 -48 76 -14 44 44 38
114 -9 110 -4 0 -23 -5 -42 -12z" />
        <path d="M6865 9165 c-48 -47 -22 -129 38 -123 26 2 33 9 40 35 11 37 4 75
-19 97 -21 22 -31 20 -59 -9z" />
        <path d="M3096 9134 c-20 -20 -21 -83 0 -112 35 -51 94 -12 94 63 0 23 -5 46
-12 53 -17 17 -64 15 -82 -4z" />
        <path d="M8849 8718 c-36 -59 -4 -138 56 -138 32 0 57 33 62 83 5 39 2 46 -22
65 -40 32 -71 28 -96 -10z" />
        <path d="M1092 8640 c-18 -11 -39 -35 -48 -53 -15 -32 -15 -37 1 -71 23 -48
62 -50 99 -5 33 39 34 88 4 124 l-23 25 -33 -20z" />
        <path d="M7906 8378 c-24 -34 -20 -85 9 -114 19 -19 29 -23 43 -15 29 15 42
36 49 74 4 27 1 39 -16 56 -27 27 -66 27 -85 -1z" />
        <path d="M2038 8323 c-26 -30 -30 -60 -13 -97 43 -90 140 -16 101 77 -12 31
-20 37 -44 37 -16 0 -36 -8 -44 -17z" />
        <path d="M9527 7532 c-18 -19 -37 -66 -37 -89 0 -17 62 -83 78 -83 6 0 24 12
41 26 26 21 31 33 31 69 0 77 -69 125 -113 77z" />
        <path d="M383 7424 c-22 -22 -25 -32 -21 -75 6 -55 30 -89 63 -89 24 0 59 34
70 68 10 35 -13 90 -45 107 -37 19 -36 19 -67 -11z" />
        <path d="M8679 7421 c-32 -33 -37 -67 -14 -110 17 -35 37 -43 69 -31 49 18 62
97 25 144 -26 33 -44 33 -80 -3z" />
        <path d="M1240 7338 c-26 -28 -26 -78 1 -112 54 -69 137 20 95 103 -20 38 -64
43 -96 9z" />
        <path d="M8877 6202 c-17 -19 -23 -85 -11 -128 14 -51 95 -50 114 1 15 39 12
98 -6 123 -19 28 -74 30 -97 4z" />
        <path d="M9894 6125 c-12 -8 -27 -28 -34 -45 -25 -60 24 -148 77 -138 22 4 63
82 63 119 0 18 -10 36 -31 53 -35 30 -47 32 -75 11z" />
        <path d="M1046 6101 c-44 -48 -40 -146 7 -169 64 -31 125 52 91 124 -17 35
-49 64 -70 64 -6 0 -19 -8 -28 -19z" />
        <path d="M29 5974 c-19 -20 -24 -36 -24 -76 0 -43 4 -53 32 -79 19 -16 39 -26
48 -23 39 15 68 109 49 159 -6 15 -53 45 -72 45 -5 0 -19 -12 -33 -26z" />
        <path d="M8931 5091 c-52 -52 -29 -181 31 -181 37 0 58 36 58 100 0 47 -4 64
-20 80 -25 25 -45 25 -69 1z" />
        <path d="M1010 4960 c-39 -42 -41 -95 -5 -134 49 -52 110 -20 110 59 0 44 -19
76 -58 97 -14 7 -24 3 -47 -22z" />
        <path d="M9816 4497 c-18 -23 -26 -47 -26 -72 0 -41 40 -105 64 -105 8 0 28
16 45 35 50 57 41 129 -19 160 -38 20 -35 20 -64 -18z" />
        <path d="M112 4373 c-38 -15 -55 -120 -26 -161 39 -56 91 -48 118 18 22 56 8
113 -34 135 -30 16 -37 17 -58 8z" />
        <path d="M9080 2748 c-43 -71 -7 -153 63 -146 34 3 51 27 63 87 5 25 1 36 -24
61 -41 41 -76 40 -102 -2z" />
        <path d="M849 2651 c-50 -50 -33 -131 32 -146 42 -10 71 21 77 85 4 47 2 55
-19 71 -34 26 -56 23 -90 -10z" />
      </g>
    </svg>
  ),
};