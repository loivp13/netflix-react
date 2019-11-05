import { Types } from "../actions/Types";
import _ from 'lodash'
let data = {
    "kind": "youtube#searchListResponse",
    "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/eKHqPatc_JhOpweWXygyiSZhNzc\"",
    "nextPageToken": "CGQQAA",
    "prevPageToken": "CDIQAQ",
    "regionCode": "US",
    "pageInfo": {
        "totalResults": 351599,
        "resultsPerPage": 50
    },
    "items": [
        {
            "kind": "youtube#searchResult",
            "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/ywrsjM-V-TnIIzkxCgcTBUuS6Xk\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "kz32KVRZtvQ"
            },
            "snippet": {
                "publishedAt": "2019-10-10T14:30:01.000Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "Prank Encounters | Official Trailer | Netflix",
                "description": "This October, don't go outside, don't open the door, and don't trust anyone... especially Gaten Matarazzo! Prank Encounters is the most elaborate hidden camera ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/kz32KVRZtvQ/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/kz32KVRZtvQ/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/kz32KVRZtvQ/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Netflix",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/r4hwUd4ILVSlqp8AZdOuwmxJ7Pw\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "gzlZJQ4yY9Y"
            },
            "snippet": {
                "publishedAt": "2019-10-11T14:30:02.000Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "A 3 Minute Hug | Trailer | Netflix",
                "description": "Some haven't seen each other in years. Some may never see each other again. The clock is ticking on the reunion of a lifetime.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/gzlZJQ4yY9Y/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/gzlZJQ4yY9Y/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/gzlZJQ4yY9Y/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Netflix",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/AH4ydjAF7LPcst3KW4iL5a2P3Zc\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "iX8GxLP1FHo"
            },
            "snippet": {
                "publishedAt": "2019-07-11T13:00:05.000Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "The Great Hack | Official Trailer | Netflix",
                "description": "They took your data. Then they took control. The Great Hack uncovers the dark world of data exploitation through the compelling personal journeys of players on ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/iX8GxLP1FHo/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/iX8GxLP1FHo/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/iX8GxLP1FHo/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Netflix",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/I2kj6v7xaCP1zZuplbLZJspFmBs\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "P9vXNloQfTM"
            },
            "snippet": {
                "publishedAt": "2019-08-13T22:00:13.000Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "Falling Inn Love Starring Christina Milian | Official Trailer | Netflix",
                "description": "After losing her job and her boyfriend, city girl Gabriela (Christina Milian) spontaneously enters a contest and wins a rustic New Zealand inn. Thousands of ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/P9vXNloQfTM/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/P9vXNloQfTM/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/P9vXNloQfTM/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Netflix",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/9GiFlENPYKr9DXkB_l6jO78VQCA\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "VZ2-PpXOsvw"
            },
            "snippet": {
                "publishedAt": "2019-08-27T13:59:08.000Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "TOP BOY - From Executive Producer Drake | Official Trailer | Netflix",
                "description": "What's it worth to get to the top? From Executive Producer Drake, TOP BOY arrives September 13, only on Netflix. Starring Ashley Walters, Kane Robinson, ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/VZ2-PpXOsvw/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/VZ2-PpXOsvw/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/VZ2-PpXOsvw/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Netflix",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/mXdvCqGFMM_zBHgc0uL2Un20RBo\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "Ws1YIKsuTjQ"
            },
            "snippet": {
                "publishedAt": "2019-08-12T16:04:00.000Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "Dolemite Is My Name | Official Trailer | Netflix",
                "description": "Academy Award nominee Eddie Murphy portrays real-life legend Rudy Ray Moore, a comedy and rap pioneer who proved naysayers wrong when his hilarious, ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/Ws1YIKsuTjQ/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/Ws1YIKsuTjQ/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/Ws1YIKsuTjQ/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Netflix",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/vMad8jFJyp4SHHwQXpM5ly11u6Y\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "Hld-7oBn3Rk"
            },
            "snippet": {
                "publishedAt": "2019-03-26T17:00:43.000Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "The Perfect Date | Official Trailer [HD] | Netflix",
                "description": "To save up for college, Brooks Rattigan (Noah Centineo) creates an app where anyone can pay him to play the perfect stand-in boyfriend for any occasion.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/Hld-7oBn3Rk/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/Hld-7oBn3Rk/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/Hld-7oBn3Rk/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Netflix",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/8bMq_fkFNJpGB8JUI7CsSGP-3RA\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "z-81WVD8xTs"
            },
            "snippet": {
                "publishedAt": "2018-07-19T15:01:13.000Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "Insatiable | Official Trailer | Netflix",
                "description": "A coming of rage story. Insatiable, starring Debby Ryan, arrives August 10 on Netflix. Watch Insatiable on Netflix: https://www.netflix.com/in/title/80179905 ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/z-81WVD8xTs/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/z-81WVD8xTs/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/z-81WVD8xTs/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Netflix",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/P_OnaNLoS4i7id71I9yxn3f_hkY\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "z9j6WcdU-ts"
            },
            "snippet": {
                "publishedAt": "2017-02-22T15:30:15.000Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "The Discovery | Official Trailer [HD] | Netflix",
                "description": "One year after the existence of the afterlife is scientifically verified, millions around the world have ended their own lives in order to “get there”. A man and ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/z9j6WcdU-ts/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/z9j6WcdU-ts/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/z9j6WcdU-ts/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Netflix",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/wYdGxaqUQFPBbsJ8bI4iw3mDBMw\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "OjljgkCQv5c"
            },
            "snippet": {
                "publishedAt": "2019-09-03T15:00:00.000Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "Between Two Ferns: The Movie | Official Trailer | Netflix",
                "description": "Zach Galifianakis and his oddball crew take a road trip to complete a series of high-profile celebrity interviews and restore his reputation. Celebrity cameos ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/OjljgkCQv5c/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/OjljgkCQv5c/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/OjljgkCQv5c/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Netflix",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/_nLUimGLlwfm8ys5HBDeipL8zRA\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "70CN9XeDnf0"
            },
            "snippet": {
                "publishedAt": "2019-09-17T13:00:00.000Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "Big Mouth: Season 3 | Official Trailer | Netflix",
                "description": "It's time to get your PhD in Puberty. Big Mouth Season 3 is coming, October 4 on Netflix. Watch Big Mouth, Only on Netflix: https://www.netflix.com/title/80117038 ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/70CN9XeDnf0/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/70CN9XeDnf0/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/70CN9XeDnf0/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Netflix",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/NgH6_VvF-8GR7C7-SmPd0r64gjs\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "sf8h-L7ohWM"
            },
            "snippet": {
                "publishedAt": "2019-05-14T16:15:09.000Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "Beats - A Netflix Film | Official Trailer",
                "description": "Rise above the noise. Watch the new trailer for BEATS starring Anthony Anderson, Uzo Aduba, Emayatzy Corinealdi and directed by Chris Robinson. On Netflix ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/sf8h-L7ohWM/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/sf8h-L7ohWM/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/sf8h-L7ohWM/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Netflix",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/fgKQVTN5B9DoynqYI5A7YAkqCXw\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "8MVRWQ1PnMo"
            },
            "snippet": {
                "publishedAt": "2019-04-22T14:00:20.000Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "See You Yesterday | Official Trailer [HD] | Netflix",
                "description": "High school best friends and science prodigies C.J. and Sebastian spend every spare minute working on their latest homemade invention: backpacks that ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/8MVRWQ1PnMo/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/8MVRWQ1PnMo/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/8MVRWQ1PnMo/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Netflix",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/YZo2joDTQ9dR--BH62hHHMS1V2c\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "vhcXyK8s-io"
            },
            "snippet": {
                "publishedAt": "2019-10-08T14:30:00.000Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "Atlantics | Official Trailer | Netflix | US",
                "description": "After a group of unpaid construction workers disappears at sea one night in search of a better life abroad, the women they have left behind in Dakar are ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/vhcXyK8s-io/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/vhcXyK8s-io/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/vhcXyK8s-io/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Netflix",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/YS89ry-BwZKGi_aTNf_THTPh6TY\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "Y-ufZuqTd5c"
            },
            "snippet": {
                "publishedAt": "2019-03-29T15:00:04.000Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "The Silence | Official Trailer [HD] | Netflix",
                "description": "When the world is under attack from terrifying creatures who hunt their human prey by sound, 16-year old Ally Andrews (Kiernan Shipka), who lost her hearing at ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/Y-ufZuqTd5c/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/Y-ufZuqTd5c/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/Y-ufZuqTd5c/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Netflix",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/W4W9lFmiUqQRzlxLtNt4-r6gdEQ\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "2Lcy3XUDd_A"
            },
            "snippet": {
                "publishedAt": "2018-11-23T00:00:00.000Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "Memories of the Alhambra | Official Trailer [HD] | Netflix",
                "description": "While looking for the cryptic creator of an innovative augmented-reality game, an investment firm executive meets a woman who runs a hostel in Spain.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/2Lcy3XUDd_A/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/2Lcy3XUDd_A/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/2Lcy3XUDd_A/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Netflix",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/lVewzTb2qF2d5lblcvTIHm8U1X8\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "tBnarCTOiCY"
            },
            "snippet": {
                "publishedAt": "2019-03-14T08:00:04.000Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "The Disappearance of Madeleine McCann | Official Trailer [HD] | Netflix",
                "description": "A detailed look at the disappearance of 3-year-old Madeleine McCann, who vanished while on holiday with her family. The Disappearance of Madeleine ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/tBnarCTOiCY/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/tBnarCTOiCY/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/tBnarCTOiCY/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Netflix",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/gMsia0aBkm05qMpYdUNqsEbllcU\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "1Expe7hf6MU"
            },
            "snippet": {
                "publishedAt": "2019-07-31T12:00:00.000Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "The Irishman | Official Teaser",
                "description": "Robert De Niro, Al Pacino and Joe Pesci star in Martin Scorsese's THE IRISHMAN, an epic saga of organized crime in post-war America told through the eyes of ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/1Expe7hf6MU/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/1Expe7hf6MU/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/1Expe7hf6MU/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Netflix",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/aKD_gMh_DgicCzwg53GraQw4QAw\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "XdAR-lK43YU"
            },
            "snippet": {
                "publishedAt": "2019-01-10T15:00:31.000Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "Velvet Buzzsaw | Official Trailer [HD] | Netflix",
                "description": "All art is dangerous. Watch VelvetBuzzsaw on Netflix February 1, 2019. Velvet Buzzsaw is a thriller set in the contemporary art world scene of Los Angeles ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/XdAR-lK43YU/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/XdAR-lK43YU/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/XdAR-lK43YU/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Netflix",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/CFz-z4s20QLLPTkiAdjYRl4ESaE\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "a3_owZfYVR8"
            },
            "snippet": {
                "publishedAt": "2019-08-13T15:00:00.000Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "The Dark Crystal: Age of Resistance | Trailer | Netflix",
                "description": "Light the fires of resistance! Join Deet, Rian and Brea on an epic quest to find hope in darkness, save Thra, and reveal their destiny. Nothing will ever be the ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/a3_owZfYVR8/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/a3_owZfYVR8/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/a3_owZfYVR8/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Netflix",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/eMnL6Ws5pdzLCN6sGekdw97arl4\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "Qpdb9zo_1t8"
            },
            "snippet": {
                "publishedAt": "2018-04-30T13:28:46.000Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "Evil Genius | Official Trailer [HD] | Netflix",
                "description": "2:28 PM. August 28, 2003. A man walks into a bank with a bomb locked around his neck. This is a true story. Watch Evil Genius, streaming on Netflix May 11th ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/Qpdb9zo_1t8/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/Qpdb9zo_1t8/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/Qpdb9zo_1t8/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Netflix",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/7OJ6brpwP7rEC6w4g4VqlG5Z-uw\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "5Igmqs_tE30"
            },
            "snippet": {
                "publishedAt": "2018-09-15T14:00:02.000Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "Super Monsters: Season 2 | Official Trailer [HD] | Netflix",
                "description": "The Super Monsters are back for more adventures, learning, and fun. Sun down...monsters up! Watch Super Monsters on Netflix: ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/5Igmqs_tE30/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/5Igmqs_tE30/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/5Igmqs_tE30/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Netflix",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/ngDpKENYRAFu1DSj67zZ8suJUX8\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "XXuBwwZvruI"
            },
            "snippet": {
                "publishedAt": "2019-04-22T19:00:02.000Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "BONDiNG | Official Trailer | Netflix",
                "description": "Sometimes your best friend dominates your life. BONDiNG premieres April 24, only on Netflix. SUBSCRIBE: http://bit.ly/29qBUt7 About Netflix: Netflix is the ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/XXuBwwZvruI/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/XXuBwwZvruI/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/XXuBwwZvruI/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Netflix",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/myqVyNwy8ykwQT7gsqi8Qxnkzhg\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "ozYbqDiXT3I"
            },
            "snippet": {
                "publishedAt": "2019-09-10T13:00:00.000Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "&quot;ENCHANTED&quot; By Chloe X Halle | El Camino: A Breaking Bad Movie | Netflix",
                "description": "\"Living is a dream...\" Catch up on Jesse's journey. Stream all Episodes of Breaking Bad Watch El Camino: A Breaking Bad Movie | 10.11 | Only On Netflix ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/ozYbqDiXT3I/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/ozYbqDiXT3I/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/ozYbqDiXT3I/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Netflix",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/p9rbdTZilD6DXDVDud0oYmesvO8\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "Q00bB9o7Eok"
            },
            "snippet": {
                "publishedAt": "2019-09-05T14:00:03.000Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "Disenchantment | Official Part 2 Trailer | Netflix",
                "description": "We'll see you in Hell. Disenchantment returns September 20. Watch Disenchantment, Only On Netflix: https://www.netflix.com/title/80095697 SUBSCRIBE: ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/Q00bB9o7Eok/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/Q00bB9o7Eok/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/Q00bB9o7Eok/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Netflix",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/XN81t0vxUX0mnno1XHo7EAuBook\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "uEE7HqPvqOg"
            },
            "snippet": {
                "publishedAt": "2019-08-22T10:00:16.000Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "Bard of Blood | Official Trailer | Netflix",
                "description": "An excommunicated RAW agent, Kabir Anand, a courageous analyst, Isha Khanna, and a sleeper agent, Veer Singh, take on a covert mission in Balochistan ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/uEE7HqPvqOg/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/uEE7HqPvqOg/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/uEE7HqPvqOg/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Netflix",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/pvqAyzJAmdw-4g5IV2pVoyILOqk\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "7bfS6seiLhk"
            },
            "snippet": {
                "publishedAt": "2018-05-01T15:00:01.000Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "The Kissing Booth | Official Trailer | Netflix",
                "description": "A pretty, teenage girl, who has never been kissed, finds her life turned totally upside down when she decides to run a kissing booth and unexpectedly ends up ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/7bfS6seiLhk/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/7bfS6seiLhk/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/7bfS6seiLhk/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Netflix",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/PGtVSy_kkan4HgApH9XqrYjUYvs\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "5UijUOy0MmE"
            },
            "snippet": {
                "publishedAt": "2019-08-28T13:29:20.000Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "The Spy – starring Sacha Baron Cohen | Official Trailer | Netflix",
                "description": "THE SPY, starring Sacha Baron Cohen, is inspired by the real-life story of former notorious Mossad agent, Eli Cohen, who successfully goes undercover in Syria ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/5UijUOy0MmE/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/5UijUOy0MmE/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/5UijUOy0MmE/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Netflix",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/tP4k7rMZdoZtSXFi412SJzN0CvQ\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "8T9E2DBzAaI"
            },
            "snippet": {
                "publishedAt": "2017-11-02T14:01:14.000Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "Saving Capitalism | Official Trailer [HD] | Netflix",
                "description": "Robert Reich, the Former Secretary of Labor of the United States, examines America's fragile democracy and its fight for survival; as income and wealth go to the ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/8T9E2DBzAaI/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/8T9E2DBzAaI/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/8T9E2DBzAaI/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Netflix",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/Ena3Are9neeFqfMMqWOXHtwBOis\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "tLfLU6-9lxY"
            },
            "snippet": {
                "publishedAt": "2018-10-15T16:00:08.000Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "Bodyguard | Official Trailer [HD] | Netflix",
                "description": "Bodyguard is a 2019 Emmy® Awards Nominee. Set in and around the corridors of power, Bodyguard tells the story of David Budd (Richard Madden), a heroic, ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/tLfLU6-9lxY/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/tLfLU6-9lxY/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/tLfLU6-9lxY/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Netflix",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/J1sM9bCbgeGM3u8lOq4UfXrN16I\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "eYFezrCkbAQ"
            },
            "snippet": {
                "publishedAt": "2018-06-29T14:00:08.000Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "Father of the Year | Official Trailer [HD] | Netflix",
                "description": "When a drunken debate between two recent college graduates about whose father would win in a fight is taken seriously by their idiot dads, jobs are lost, ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/eYFezrCkbAQ/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/eYFezrCkbAQ/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/eYFezrCkbAQ/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Netflix",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/tOHa42RPyPtsuEVL0c0rvObm1C0\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "3tXQMq967PY"
            },
            "snippet": {
                "publishedAt": "2019-07-23T16:00:37.000Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "Wu Assassins | Official Trailer | Netflix",
                "description": "He's on a mission to save Chinatown, even if it means killing his own father. Kung Fu meets sci-fi meets Asian street food in Wu Assassins — only on Netflix ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/3tXQMq967PY/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/3tXQMq967PY/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/3tXQMq967PY/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Netflix",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/Zp7Wy7JqHJDgKg5pQ8cA_ZDdr8k\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "e5bE-8n0_5Q"
            },
            "snippet": {
                "publishedAt": "2019-08-28T08:29:16.000Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "Skylines | Official Trailer | Netflix",
                "description": "It's about loyalty… music-producer Jinn believes he made when he signs with HipHop label Skyline Records. But it does not take long before things get heated.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/e5bE-8n0_5Q/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/e5bE-8n0_5Q/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/e5bE-8n0_5Q/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Netflix",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/-vLeHOf179dKWdKxituRPXm1tSg\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "xz1IkeXs6yI"
            },
            "snippet": {
                "publishedAt": "2019-05-30T13:30:04.000Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "Trinkets | Official Trailer | Netflix",
                "description": "Friendship is priceless. Everything else you can steal. Trinkets arrives June 14 only on Netflix. Watch Trinkets, Only on Netflix: ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/xz1IkeXs6yI/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/xz1IkeXs6yI/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/xz1IkeXs6yI/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Netflix",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/blrI7tuCTRLMTSEFA0jrkBxDkd0\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "CpR3rI_rjtg"
            },
            "snippet": {
                "publishedAt": "2019-08-23T19:00:00.000Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "Travis Scott - Look Mom I Can Fly | Extended Trailer | Netflix",
                "description": "Travis Scott: Look Mom I Can Fly straps viewers into a front row seat of Scott's life leading up to the release of his Grammy-nominated album Astroworld and its ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/CpR3rI_rjtg/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/CpR3rI_rjtg/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/CpR3rI_rjtg/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Netflix",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/3FnaGdfEV3fErPEre6esxoyTOK4\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "AkUgf2jIPyI"
            },
            "snippet": {
                "publishedAt": "2018-05-04T05:30:00.000Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "Sacred Games | Teaser [HD] | Netflix",
                "description": "Even if you're a god, betrayal is the only truth. Presenting Nawazuddin Siddiqui, Saif Ali Khan and Radhika Apte in the Netflix original series, Sacred Games.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/AkUgf2jIPyI/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/AkUgf2jIPyI/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/AkUgf2jIPyI/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Netflix",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/Ueqq-SSeJf9l1d3n8KrbM_SUWIk\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "tc9YvtGE16s"
            },
            "snippet": {
                "publishedAt": "2019-04-09T00:00:07.000Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "My First First Love | Official Trailer [HD] | Netflix",
                "description": "A group of friends under various odd circumstances end up living together under the same roof. Through one another, they discover love, friendship, and ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/tc9YvtGE16s/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/tc9YvtGE16s/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/tc9YvtGE16s/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Netflix",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/ohUamICxbjSQ_ddjMnK2YfD6uLE\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "OVBjPpUlQrE"
            },
            "snippet": {
                "publishedAt": "2018-11-08T06:00:49.000Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "Mowgli: Legend of the Jungle | Official Trailer [HD] | Netflix",
                "description": "Acclaimed actor and director Andy Serkis reinvents Rudyard Kipling's beloved masterpiece, in which a boy torn between two worlds accepts his destiny and ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/OVBjPpUlQrE/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/OVBjPpUlQrE/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/OVBjPpUlQrE/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Netflix",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/Qm3R3BWPK-vMx5toxogUBL63v5Y\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "5YEVQDr2f3Q"
            },
            "snippet": {
                "publishedAt": "2019-04-26T17:06:25.000Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "Murder Mystery | Trailer | Netflix",
                "description": "When an NYC cop (Adam Sandler) finally takes his wife (Jennifer Aniston) on a long promised European trip, a chance meeting on the flight gets them invited to ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/5YEVQDr2f3Q/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/5YEVQDr2f3Q/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/5YEVQDr2f3Q/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Netflix",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/WxvPRu2jJZPWxATRibSykCI48og\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "555oiY9RWM4"
            },
            "snippet": {
                "publishedAt": "2018-07-26T14:00:01.000Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "To All The Boys I&#39;ve Loved Before | Official Trailer | Netflix",
                "description": "What if all the crushes you ever had found out how you felt about them…all at once? Lara Jean Song Covey's love life goes from imaginary to out of control when ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/555oiY9RWM4/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/555oiY9RWM4/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/555oiY9RWM4/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Netflix",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/fmx9D8ouHLDfIHo75tDR2LGNFxM\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "q2b8MKsUloc"
            },
            "snippet": {
                "publishedAt": "2019-07-10T16:00:04.000Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "Otherhood | Official Trailer | Netflix",
                "description": "Feeling marginalized and forgotten, long time friends Carol (Angela Bassett), Gillian (Patricia Arquette) and Helen (Felicity Huffman) decide to drive to New York ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/q2b8MKsUloc/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/q2b8MKsUloc/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/q2b8MKsUloc/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Netflix",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/Up8BsTlXJTUbxNRAb0c7PD-8nug\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "qAtBbgtMnZ8"
            },
            "snippet": {
                "publishedAt": "2019-07-11T16:00:33.000Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "Another Life - Katee Sackhoff | Official Trailer | Netflix",
                "description": "Choose Humanity. Another Life premieres July 25. Only on Netflix. When a mysterious alien Artifact lands on Earth, Commander Niko Breckinridge (Katee ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/qAtBbgtMnZ8/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/qAtBbgtMnZ8/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/qAtBbgtMnZ8/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Netflix",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/S74uPhuXJ09SXg_VX3-W4w-8APs\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "jNuKwlKJx2E"
            },
            "snippet": {
                "publishedAt": "2019-03-11T05:30:00.000Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "Delhi Crime | Official Trailer [HD] | Netflix",
                "description": "In 2012, a heinous crime enraged a whole country. Based on the case files of the Delhi Police, the story follows the unfailing determination of Varthika ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/jNuKwlKJx2E/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/jNuKwlKJx2E/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/jNuKwlKJx2E/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Netflix",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/5EZAGLL1-t5cnem9owMQX-_YMs0\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "uqK_1bZh83A"
            },
            "snippet": {
                "publishedAt": "2019-10-09T13:30:00.000Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "Breaking Bad Cast Reacts to El Camino Trailer Comments | Netflix",
                "description": "Aaron Paul and the cast of Breaking Bad and Better Call Saul react to trailer comments from El Camino: A Breaking Bad Movie. Watch El Camino: A Breaking ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/uqK_1bZh83A/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/uqK_1bZh83A/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/uqK_1bZh83A/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Netflix",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/ztlcXRpZ_hBnJdNLWXii_SONXMA\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "Pws-LN_-riM"
            },
            "snippet": {
                "publishedAt": "2019-08-01T14:00:04.000Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "13 Reasons Why: Season 3 | Official Trailer | Netflix",
                "description": "A new harrowing crime unfolds in Season 3 of 13 Reasons Why, returning August 23rd on Netflix. Watch 13 Reasons Why, Only on Netflix: ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/Pws-LN_-riM/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/Pws-LN_-riM/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/Pws-LN_-riM/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Netflix",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/THIS4GuaE-86gqHrs7_aGjtlI6s\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "-qIlCo9yqpY"
            },
            "snippet": {
                "publishedAt": "2019-05-21T14:40:04.000Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "Black Mirror: Rachel, Jack and Ashley Too | Official Trailer | Netflix",
                "description": "\"Ashley, are you ok?\" Watch Black Mirror, only on Netflix: https://www.netflix.com/blackmirror SUBSCRIBE: http://bit.ly/29qBUt7 About Netflix: Netflix is the world's ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/-qIlCo9yqpY/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/-qIlCo9yqpY/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/-qIlCo9yqpY/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Netflix",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/gF8YX1jceN_x-xFlt6V9DfjG_N8\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "N5BKctcZxrM"
            },
            "snippet": {
                "publishedAt": "2019-05-09T16:30:00.000Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "I AM MOTHER | Official Trailer | Netflix",
                "description": "She'll keep you safe. Watch I AM MOTHER on Netflix June 7, 2019. A sci-fi thriller about a teenage girl (Clara Rugaard), who is the first of a new generation of ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/N5BKctcZxrM/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/N5BKctcZxrM/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/N5BKctcZxrM/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Netflix",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/PnZ04q5rIvj0bV0Fwvtp2j1YIi0\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "Qe9B8kzlFjM"
            },
            "snippet": {
                "publishedAt": "2019-04-09T21:00:31.000Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "The Last Summer | Official Trailer [HD] | Netflix",
                "description": "Standing on the precipice of adulthood, a group of friends navigate new relationships, while reexamining others, during their final summer before college.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/Qe9B8kzlFjM/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/Qe9B8kzlFjM/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/Qe9B8kzlFjM/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Netflix",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/jukpYiRx5aJ5V3534eNxw2cdKEM\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "dyFrBC1rAcg"
            },
            "snippet": {
                "publishedAt": "2013-05-28T16:43:32.000Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "The Fall | Trailer [HD] | | Netflix",
                "description": "Gillian Anderson returns to TV as Stella Gibson in \"The Fall,\" now streaming for Netflix US members. http://nflx.it/11vdVB5 How do you catch a killer hidden in ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/dyFrBC1rAcg/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/dyFrBC1rAcg/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/dyFrBC1rAcg/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Netflix",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/Liy3vhJ-R647xPNqM8Wog_KaVNw\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "AiB1iv8DQcg"
            },
            "snippet": {
                "publishedAt": "2019-06-26T15:00:00.000Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "Orange Is the New Black | Official Season 7 Trailer | Netflix",
                "description": "Orange is the New Black is a 2019 Emmy® Awards Nominee. The epic conclusion of the series that changed everything. Orange is the New Black's final season ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/AiB1iv8DQcg/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/AiB1iv8DQcg/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/AiB1iv8DQcg/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Netflix",
                "liveBroadcastContent": "none"
            }
        }
    ]
}
let defaultData = _.chunk(data.items.slice(0,45), 15)

export default (state = { videos: defaultData }, action) => {
  switch (action.type) {
    case Types.YTResults:
      return { ...state, videos: action.payload };
    default:
      return state;
  }
};
