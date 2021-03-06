/*
    _id: 1,
    name: "Rocky Xu",
    avatar: "https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-1/p160x160/19146169_1082042818563010_4855825947142202271_n.jpg?oh=5f5f42d7d02bc166d43e6350e8743172&oe=5AFC017B",
    email: "rocky.mandalai@gmail.com",
    phone: "601-927-0416",

    new Date(2013, 2, 1, 1, 10) which both create a date for 2013-03-01T01:10:00.
 */


let Users = [

    {
        _id: 1,
        name: "Rocky Xu",
        avatar: "https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-1/p160x160/19146169_1082042818563010_4855825947142202271_n.jpg?oh=5f5f42d7d02bc166d43e6350e8743172&oe=5AFC017B",
        email: "rocky.mandalai@gmail.com",
        phone: "(601) 927-0416",
        friends: [ 2,4,6,8,9,10],
        setting: {
            sourceMedium: [
                {source:"gmail", connected: true},
                {source:"imessage", connected: false},
                {source: "google-calendar", connected: true}
            ],

            reminderMethod: [
                {source:"email", connected: true },
                {source:"text", connected: true}
            ],

            remindingTime: [
                {type: "First Reminder", reminderTime: "1 hour before"},
                {type: "Second Reminder", reminderTime: "Click to set"}
            ],

            meetingTime: [
                {
                    meetingType: "coffee", availability:
                        [
                            {dateOfTheWeek: 0, begTimeOfDay: 1, endTimeOfDay: 2},
                            {dateOfTheWeek: 2, begTimeOfDay: 4, endTimeOfDay: 6},
                            {dateOfTheWeek: 5, begTimeOfDay: 4, endTimeOfDay: 6}
                        ]
                },
                {
                    meetingType: "drink", availability:
                        [
                            {dateOfTheWeek: 0, begTimeOfDay: 1, endTimeOfDay: 2},
                            {dateOfTheWeek: 2, begTimeOfDay: 4, endTimeOfDay: 6},
                            {dateOfTheWeek: 5, begTimeOfDay: 4, endTimeOfDay: 6}
                        ]
                },
                {
                    meetingType: "dinner", availability:
                        [
                            {dateOfTheWeek: 0, begTimeOfDay: 1, endTimeOfDay: 2},
                            {dateOfTheWeek: 2, begTimeOfDay: 4, endTimeOfDay: 6},
                            {dateOfTheWeek: 5, begTimeOfDay: 4, endTimeOfDay: 6}
                        ]
                },

            ]

        },
        messages: [12],
        aiSwitch: true,
        occupation: "Founder, Mandal.ai"
    },

    {_id: 2,
        name: "Veer Singh",
        avatar: "https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-1/p160x160/25507853_10156990106263642_250896389840279276_n.jpg?oh=40261e71fbb510187510da2d6bb0de9d&oe=5AF4BF2B",
        email: "veer.mandalai@gmail.com",
        phone: "(601) 951-9985",
        friends: [1,3,5,7,8,10],
        setting: {
            sourceMedium: [
                {source:"gmail", connected: true},
                {source:"imessage", connected: false},
                {source: "google-calendar", connected: true}
            ],

            reminderMethod: [
                {source:"email", connected: true },
                {source:"text", connected: true}
            ],

            remindingTime: [
                {type: "First Reminder", reminderTime: "2 hours before"},
                {type: "Second Reminder", reminderTime: "1 hour before"}
            ],

            meetingTime: [
                {
                    meetingType: "coffee", availability:
                        [
                            {dateOfTheWeek: 0, begTimeOfDay: 1, endTimeOfDay: 2},
                            {dateOfTheWeek: 2, begTimeOfDay: 4, endTimeOfDay: 6},
                            {dateOfTheWeek: 5, begTimeOfDay: 4, endTimeOfDay: 6}
                        ]
                },
                {
                    meetingType: "drink", availability:
                        [
                            {dateOfTheWeek: 0, begTimeOfDay: 1, endTimeOfDay: 2},
                            {dateOfTheWeek: 2, begTimeOfDay: 4, endTimeOfDay: 6},
                            {dateOfTheWeek: 5, begTimeOfDay: 4, endTimeOfDay: 6}
                        ]
                },
                {
                    meetingType: "dinner", availability:
                        [
                            {dateOfTheWeek: 0, begTimeOfDay: 1, endTimeOfDay: 2},
                            {dateOfTheWeek: 2, begTimeOfDay: 4, endTimeOfDay: 6},
                            {dateOfTheWeek: 5, begTimeOfDay: 4, endTimeOfDay: 6}
                        ]
                },

            ]

        },
        messages: [1, 9, 13, 19],
        aiSwitch: true,
        occupation: "Founder, Mandal.ai"
    },

    {_id: 3,
        name: "Christopher Lomax",
        avatar: "https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-1/c15.0.160.160/p160x160/61551_10151544829482074_1038096416_n.jpg?oh=e6db2c27de7f165832e86d1e29593a06&oe=5AEB976C",
        email: "christopher@pearlbend.com",
        phone: "(601) 942-1500",
        friends: [2,4,5,6,7,8,9],
        setting: {
            sourceMedium: [
                {source:"gmail", connected: true},
                {source:"imessage", connected: true},
                {source: "google-calendar", connected: true}
            ],

            reminderMethod: [
                {source:"email", connected: true },
                {source:"text", connected: true}
            ],

            remindingTime: [
                {type: "First Reminder", reminderTime: "1 hour before"},
                {type: "Second Reminder", reminderTime: "Click to set"}
            ],

            meetingTime: [
                {
                    meetingType: "coffee", availability:
                        [
                            {dateOfTheWeek: 0, begTimeOfDay: 1, endTimeOfDay: 2},
                            {dateOfTheWeek: 2, begTimeOfDay: 4, endTimeOfDay: 6},
                            {dateOfTheWeek: 5, begTimeOfDay: 4, endTimeOfDay: 6}
                        ]
                },
                {
                    meetingType: "drink", availability:
                        [
                            {dateOfTheWeek: 0, begTimeOfDay: 1, endTimeOfDay: 2},
                            {dateOfTheWeek: 2, begTimeOfDay: 4, endTimeOfDay: 6},
                            {dateOfTheWeek: 5, begTimeOfDay: 4, endTimeOfDay: 6}
                        ]
                },
                {
                    meetingType: "dinner", availability:
                        [
                            {dateOfTheWeek: 0, begTimeOfDay: 1, endTimeOfDay: 2},
                            {dateOfTheWeek: 2, begTimeOfDay: 4, endTimeOfDay: 6},
                            {dateOfTheWeek: 5, begTimeOfDay: 4, endTimeOfDay: 6}
                        ]
                },

            ]

        },
        messages: [5, 18],
        aiSwitch: true,
        occupation: "Founder, Mantle"
    },

    {_id: 4,
        name: "Elon Musk",
        avatar: "https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-1/p200x200/18739692_292680974525518_2821840478517507651_n.jpg?oh=4f32fcfa24d2d53cedc50b080d7b04be&oe=5AFF2D0B",
        email: "elon@tesla.com",
        phone: "(662) 485-5555",
        friends: [1,3,5,6,7,8,10],
        setting: {
            sourceMedium: [
                {source:"gmail", connected: true},
                {source:"imessage", connected: false},
                {source: "google-calendar", connected: true}
            ],

            reminderMethod: [
                {source:"email", connected: true },
                {source:"text", connected: true}
            ],

            remindingTime: [
                {type: "First Reminder", reminderTime: "1 hour before"},
                {type: "Second Reminder", reminderTime: "30 mins before"}
            ],

            meetingTime: [
                {
                    meetingType: "coffee", availability:
                        [
                            {dateOfTheWeek: 0, begTimeOfDay: 1, endTimeOfDay: 2},
                            {dateOfTheWeek: 2, begTimeOfDay: 4, endTimeOfDay: 6},
                            {dateOfTheWeek: 5, begTimeOfDay: 4, endTimeOfDay: 6}
                        ]
                },
                {
                    meetingType: "drink", availability:
                        [
                            {dateOfTheWeek: 0, begTimeOfDay: 1, endTimeOfDay: 2},
                            {dateOfTheWeek: 2, begTimeOfDay: 4, endTimeOfDay: 6},
                            {dateOfTheWeek: 5, begTimeOfDay: 4, endTimeOfDay: 6}
                        ]
                },
                {
                    meetingType: "dinner", availability:
                        [
                            {dateOfTheWeek: 0, begTimeOfDay: 1, endTimeOfDay: 2},
                            {dateOfTheWeek: 2, begTimeOfDay: 4, endTimeOfDay: 6},
                            {dateOfTheWeek: 5, begTimeOfDay: 4, endTimeOfDay: 6}
                        ]
                },

            ]

        },
        messages: [4,11,14],
        aiSwitch: false,
        occupation: "Founder, Tesla/SpaceX"
    },

    {_id: 5,
        name: "Mark Zuckerberg",
        avatar: "https://scontent-dft4-2.cdninstagram.com/t51.2885-19/s150x150/13739633_1648409658810275_999417478_a.jpg",
        email: "mark@facebook.com",
        phone: "(624) 154-7888",
        friends: [4,3,2,6,7,9],
        setting: {
            sourceMedium: [
                {source:"gmail", connected: true},
                {source:"imessage", connected: false},
                {source: "google-calendar", connected: true}
            ],

            reminderMethod: [
                {source:"email", connected: true },
                {source:"text", connected: true}
            ],

            remindingTime: [
                {type: "First Reminder", reminderTime: "1 hour before"},
                {type: "Second Reminder", reminderTime: "30 mins before"}
            ],

            meetingTime: [
                {
                    meetingType: "coffee", availability:
                        [
                            {dateOfTheWeek: 0, begTimeOfDay: 1, endTimeOfDay: 2},
                            {dateOfTheWeek: 2, begTimeOfDay: 4, endTimeOfDay: 6},
                            {dateOfTheWeek: 5, begTimeOfDay: 4, endTimeOfDay: 6}
                        ]
                },
                {
                    meetingType: "drink", availability:
                        [
                            {dateOfTheWeek: 0, begTimeOfDay: 1, endTimeOfDay: 2},
                            {dateOfTheWeek: 2, begTimeOfDay: 4, endTimeOfDay: 6},
                            {dateOfTheWeek: 5, begTimeOfDay: 4, endTimeOfDay: 6}
                        ]
                },
                {
                    meetingType: "dinner", availability:
                        [
                            {dateOfTheWeek: 0, begTimeOfDay: 1, endTimeOfDay: 2},
                            {dateOfTheWeek: 2, begTimeOfDay: 4, endTimeOfDay: 6},
                            {dateOfTheWeek: 5, begTimeOfDay: 4, endTimeOfDay: 6}
                        ]
                },

            ]

        },
        messages: [3, 6, 17],
        aiSwitch: false,
        occupation: "Founder, Facebook"
    },

    {_id: 6,
        name: "Daisy Ridley",
        avatar: "https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-1/p200x200/25594177_2043909262512056_835003401622136997_n.jpg?oh=9efd33b2aa289c8d6ed5bb1d8311a796&oe=5AECB8FB",
        email: "daisy@starwars.com",
        phone: "(601) 456-7894",
        friends: [5,4,3,1,8,9,10],
        setting: {
            sourceMedium: [
                {source:"gmail", connected: true},
                {source:"imessage", connected: false},
                {source: "google-calendar", connected: true}
            ],

            reminderMethod: [
                {source:"email", connected: true },
                {source:"text", connected: true}
            ],

            remindingTime: [
                {type: "First Reminder", reminderTime: "1 hour before"},
                {type: "Second Reminder", reminderTime: "Click to set"}
            ],

            meetingTime: [
                {
                    meetingType: "coffee", availability:
                        [
                            {dateOfTheWeek: 0, begTimeOfDay: 1, endTimeOfDay: 2},
                            {dateOfTheWeek: 2, begTimeOfDay: 4, endTimeOfDay: 6},
                            {dateOfTheWeek: 5, begTimeOfDay: 4, endTimeOfDay: 6}
                        ]
                },
                {
                    meetingType: "drink", availability:
                        [
                            {dateOfTheWeek: 0, begTimeOfDay: 1, endTimeOfDay: 2},
                            {dateOfTheWeek: 2, begTimeOfDay: 4, endTimeOfDay: 6},
                            {dateOfTheWeek: 5, begTimeOfDay: 4, endTimeOfDay: 6}
                        ]
                },
                {
                    meetingType: "dinner", availability:
                        [
                            {dateOfTheWeek: 0, begTimeOfDay: 1, endTimeOfDay: 2},
                            {dateOfTheWeek: 2, begTimeOfDay: 4, endTimeOfDay: 6},
                            {dateOfTheWeek: 5, begTimeOfDay: 4, endTimeOfDay: 6}
                        ]
                },

            ]

        },
        messages: [10],
        aiSwitch: true,
        occupation: "Actress/Jedi"
    },

    {_id: 7,
        name: "Ray Dalio",
        avatar: "https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-1/p200x200/17951745_304991173255898_4084426348208095847_n.jpg?oh=2354064176fca219cbe6401f9783ea3b&oe=5AB612B1",
        email: "ray@principles.com",
        phone: "(662) 457-8864",
        friends: [5,4,3,2,9,10],
        setting: {
            sourceMedium: [
                {source:"gmail", connected: true},
                {source:"imessage", connected: false},
                {source: "google-calendar", connected: true}
            ],

            reminderMethod: [
                {source:"email", connected: true },
                {source:"text", connected: true}
            ],

            remindingTime: [
                {type: "First Reminder", reminderTime: "1 hour before"},
                {type: "Second Reminder", reminderTime: "Click to set"}
            ],

            meetingTime: [
                {
                    meetingType: "coffee", availability:
                        [
                            {dateOfTheWeek: 0, begTimeOfDay: 1, endTimeOfDay: 2},
                            {dateOfTheWeek: 2, begTimeOfDay: 4, endTimeOfDay: 6},
                            {dateOfTheWeek: 5, begTimeOfDay: 4, endTimeOfDay: 6}
                        ]
                },
                {
                    meetingType: "drink", availability:
                        [
                            {dateOfTheWeek: 0, begTimeOfDay: 1, endTimeOfDay: 2},
                            {dateOfTheWeek: 2, begTimeOfDay: 4, endTimeOfDay: 6},
                            {dateOfTheWeek: 5, begTimeOfDay: 4, endTimeOfDay: 6}
                        ]
                },
                {
                    meetingType: "dinner", availability:
                        [
                            {dateOfTheWeek: 0, begTimeOfDay: 1, endTimeOfDay: 2},
                            {dateOfTheWeek: 2, begTimeOfDay: 4, endTimeOfDay: 6},
                            {dateOfTheWeek: 5, begTimeOfDay: 4, endTimeOfDay: 6}
                        ]
                },

            ]
        },
        messages: [8, 20],
        aiSwitch: false,
        occupation: "Founder, Bridgewater Associates"
    },

    {_id: 8,
        name: "Jeff Bezos",
        avatar: "https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-1/p160x160/22228426_113568522731347_6093788391154668924_n.jpg?oh=18d3ee09b9f41679cf5816188abb161d&oe=5AB0D624",
        email: "jeff@amazon.com",
        phone: "(545) 624-1875",
        friends: [1,2,3,4,6,10],
        setting: {
            sourceMedium: [
                {source:"gmail", connected: true},
                {source:"imessage", connected: false},
                {source: "google-calendar", connected: true}
            ],

            reminderMethod: [
                {source:"email", connected: true },
                {source:"text", connected: true}
            ],

            remindingTime: [
                {type: "First Reminder", reminderTime: "1 hour before"},
                {type: "Second Reminder", reminderTime: "Click to set"}
            ],

            meetingTime: [
                {
                    meetingType: "coffee", availability:
                        [
                            {dateOfTheWeek: 0, begTimeOfDay: 1, endTimeOfDay: 2},
                            {dateOfTheWeek: 2, begTimeOfDay: 4, endTimeOfDay: 6},
                            {dateOfTheWeek: 5, begTimeOfDay: 4, endTimeOfDay: 6}
                        ]
                },
                {
                    meetingType: "drink", availability:
                        [
                            {dateOfTheWeek: 0, begTimeOfDay: 1, endTimeOfDay: 2},
                            {dateOfTheWeek: 2, begTimeOfDay: 4, endTimeOfDay: 6},
                            {dateOfTheWeek: 5, begTimeOfDay: 4, endTimeOfDay: 6}
                        ]
                },
                {
                    meetingType: "dinner", availability:
                        [
                            {dateOfTheWeek: 0, begTimeOfDay: 1, endTimeOfDay: 2},
                            {dateOfTheWeek: 2, begTimeOfDay: 4, endTimeOfDay: 6},
                            {dateOfTheWeek: 5, begTimeOfDay: 4, endTimeOfDay: 6}
                        ]
                },

            ]
        },
        messages: [2, 16],
        aiSwitch: true,
        occupation: "Founder, Amazon.com"
    },

    {_id: 9,
        name: "Larry Page",
        avatar: "https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-1/p160x160/15267524_1009172859227961_7158778595366514356_n.jpg?oh=c7022021e6bc8c278815f4fdf8642e51&oe=5AF280B0",
        email: "larry@gmail.com",
        phone: "(512) 645-7854",
        friends: [7,6,5,3,1],
        setting: {
            sourceMedium: [
                {source:"gmail", connected: true},
                {source:"imessage", connected: false},
                {source: "google-calendar", connected: true}
            ],

            reminderMethod: [
                {source:"email", connected: true },
                {source:"text", connected: true}
            ],

            remindingTime: [
                {type: "First Reminder", reminderTime: "1 hour before"},
                {type: "Second Reminder", reminderTime: "Click to set"}
            ],

            meetingTime: [
                {
                    meetingType: "coffee", availability:
                        [
                            {dateOfTheWeek: 0, begTimeOfDay: 1, endTimeOfDay: 2},
                            {dateOfTheWeek: 2, begTimeOfDay: 4, endTimeOfDay: 6},
                            {dateOfTheWeek: 5, begTimeOfDay: 4, endTimeOfDay: 6}
                        ]
                },
                {
                    meetingType: "drink", availability:
                        [
                            {dateOfTheWeek: 0, begTimeOfDay: 1, endTimeOfDay: 2},
                            {dateOfTheWeek: 2, begTimeOfDay: 4, endTimeOfDay: 6},
                            {dateOfTheWeek: 5, begTimeOfDay: 4, endTimeOfDay: 6}
                        ]
                },
                {
                    meetingType: "dinner", availability:
                        [
                            {dateOfTheWeek: 0, begTimeOfDay: 1, endTimeOfDay: 2},
                            {dateOfTheWeek: 2, begTimeOfDay: 4, endTimeOfDay: 6},
                            {dateOfTheWeek: 5, begTimeOfDay: 4, endTimeOfDay: 6}
                        ]
                },

            ]
        },
        messages: [7, 15],
        aiSwitch: true,
        occupation: "Founder, Google/Alphabet"
    },

    {_id: 10,
        name: "Bill Gates",
        avatar: "https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-1/p200x200/23473074_10155031875776961_8482140412038626648_n.jpg?oh=1197cfa7a2cb318e5410ffd4859ef1b8&oe=5AEE8AF7",
        email: "bill@microsoft.com",
        phone: "(401) 678-9875",
        friends: [1,2,4,6,7,8],
        setting: {
            sourceMedium: [
                {source:"gmail", connected: true},
                {source:"imessage", connected: false},
                {source: "google-calendar", connected: true}
            ],

            reminderMethod: [
                {source:"email", connected: true },
                {source:"text", connected: true}
            ],

            remindingTime: [
                {type: "First Reminder", reminderTime: "1 hour before"},
                {type: "Second Reminder", reminderTime: "Click to set"}
            ],

            meetingTime: [
                {
                    meetingType: "coffee", availability:
                        [
                            {dateOfTheWeek: 0, begTimeOfDay: 1, endTimeOfDay: 2},
                            {dateOfTheWeek: 2, begTimeOfDay: 4, endTimeOfDay: 6},
                            {dateOfTheWeek: 5, begTimeOfDay: 4, endTimeOfDay: 6}
                        ]
                },
                {
                    meetingType: "drink", availability:
                        [
                            {dateOfTheWeek: 0, begTimeOfDay: 1, endTimeOfDay: 2},
                            {dateOfTheWeek: 2, begTimeOfDay: 4, endTimeOfDay: 6},
                            {dateOfTheWeek: 5, begTimeOfDay: 4, endTimeOfDay: 6}
                        ]
                },
                {
                    meetingType: "dinner", availability:
                        [
                            {dateOfTheWeek: 0, begTimeOfDay: 1, endTimeOfDay: 2},
                            {dateOfTheWeek: 2, begTimeOfDay: 4, endTimeOfDay: 6},
                            {dateOfTheWeek: 5, begTimeOfDay: 4, endTimeOfDay: 6}
                        ]
                },

            ]
        },
        messages: [],
        aiSwitch: true,
        occupation: "Founder, Microsoft"
    },

];


module.exports = Users;
