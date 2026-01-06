// Facebook Reviews from: https://www.facebook.com/100082665914539/reviews/
// Add your reviews here - copy the name, review text, and rating from Facebook
// You can also add profile images if available

export interface FacebookReview {
  name: string;
  content: string;
  rating: number;
  date?: string; // Optional: review date
  image?: string; // Optional: profile image URL (from Facebook profile picture)
  role?: string; // Optional: additional info
}

export const facebookReviews: FacebookReview[] = [
  {
    name: "Alondra Dorado",
    content:
      "No words are enough to express how thankful I am to have come across 222 Fit. I first came across 222 through Facebook. Coach Bri immediately caught my attention. Towards the end of last year (2023) I found myself in a place where I wanted more for myself. I remember wishing I had someone who could guide me and inspire me for more. At that time, it was only a thought and a wish. However, in mid 2024 as I was in a journey to get out of my comfort zone, I came across a 222 Fit event. I decided to attend and little did I know Bri and 222 Fit would be what my life needed. Bri has not only helped me with my fitness journey, but she has also been an inspiration to me. Every workout she reminds of us of the power, the strength, the love, resilience, determination that each and every one of us carry with in ourselves. 222 fit is a place that reminds us of and challenges us to discover what each of our hearts & minds carry, put it into action, so that it may be shown on the outside.",
    rating: 5,
    image:
      "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-1/603025430_25094629846906080_6335379001130027366_n.jpg?stp=cp6_dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_ohc=4dk2F3Y7_XEQ7kNvwEVwzzP&_nc_oc=AdnZO4XbRslgFbDnLlB8KdVAEPHUFpKO-povgGOMLXJZndner1KYnOjPwqqG7tQ_19-nAv4alV2yWsxooOFB6B3e&_nc_zt=24&_nc_ht=scontent-ord5-2.xx&_nc_gid=eYkiq8Nvtln4E1XID37-nw&oh=00_Afn2jtzZe1w_KpCQJNYzVrwvJQZ9SoO5CPZzu-_oOAMNXA&oe=694E01B8",
  },
  {
    name: "Lissette Pineda",
    content:
      "I started my fitness journey 6 months ago with Bri in december 2023 aiming to overall feel better/healthier. She exceeded my expectations and I feel the most confident and healthy I have ever been! I highly recommend coach bri, I am so blessed to have had her as a trainer she is truly amazing ❤",
    rating: 5,
    image:
      "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-1/369901649_230645406635104_5971622724213189203_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=e99d92&_nc_ohc=cEB16MKvL8AQ7kNvwE9Y157&_nc_oc=AdnP-pq4y7Mby1qeI3wzHJl18xj1TS-Mo9VdVI9sdJ8XLXuWXjWjCksunIxAWjDbdGcQUM-pgQ4BJcOnMAWfJ8pH&_nc_zt=24&_nc_ht=scontent-ord5-2.xx&_nc_gid=aaDmYXlvATty8EHPB6WCuw&oh=00_AflvXva2eyuzAYUI_nL8syvscMwpZNaKsFP95PYn4Xhn9w&oe=694DF086",
  },
  {
    name: "Julia D'Etienne",
    role: "Legacy Properties Sarah Leonard Team",
    content:
      "Bri is the best at what she does! She listens and make sure your goals are heard. She makes working out fun and challenges you to be the best you can be! 10/10 trainer right here 🙂",
    rating: 5,
    image:
      "https://scontent-ord5-3.xx.fbcdn.net/v/t39.30808-1/387076325_723288716508973_5910936599232364368_n.jpg?stp=c115.447.1071.1071a_dst-jpg_s200x200_tt6&_nc_cat=106&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=pTjCJkvH5jQQ7kNvwH4ffg9&_nc_oc=AdnZ_IMYu6DLA0G5aHbuhK29GVpIN94IKEQ7ZePaOaiOHQYOfBdFoqqT--4CtiG7PL3k7n2_uh69UQ_ynySOiIy9&_nc_zt=24&_nc_ht=scontent-ord5-3.xx&_nc_gid=7B0JTasRp4umzKrEuuUgXQ&oh=00_AfnGIluokggFN6ZarW0mEp0WvA4Y0Pr6Dw5vVhVZoREkaQ&oe=694E066D",
  },
  {
    name: "Emily Joseph",
    content:
      "Bri is an AMAZING trainer! It's such an empowering feeling to have someone meet you where you are, without judgement, and be your advocate in making successful changes. Her commitment is evident with her diverse client base and the results they see!",
    rating: 5,
    image:
      "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-1/524287525_10237514541993684_4732780042048597491_n.jpg?stp=cp6_dst-jpg_s200x200_tt6&_nc_cat=103&ccb=1-7&_nc_sid=e99d92&_nc_ohc=-IMMMXBK5lEQ7kNvwEKpZqh&_nc_oc=AdmdWfxxQWNkqqNPJ_YemoWupi1n34bmlG4YyJVxtRhV11kurERGSBIE550DDd-lZOJwTCh9eJ5LV7IIhHs4qj3B&_nc_zt=24&_nc_ht=scontent-ord5-2.xx&_nc_gid=yVTbUHL30c9PEAgwjEZ4mw&oh=00_Afm-b_LKRRdl9ksXLVximnzhSpj7JmK-aFONXg5gk3LtUA&oe=694DF51E",
  },
  {
    name: "Nicole Mae",
    content:
      "I have been working with Bri since December of 2022. I hurt my back awhile ago lifting weights so getting back in the gym has always been difficult for me and I have got really out of shape. Bri has helped me get better with proper lifting form and ways to strengthen my back. She is compassionate and always brings a good energy to every work out. I was never big into working out but she pushes me to become better to a point to where I enjoy it all. I have noticed not only a difference in my physical strength but also mentally how much confidence Bri has given me in the gym and in life. She is also helping me with my nutrition and how to make a proper meal. I have a very hectic schedule, Bri goes above and beyond to work around it wether it is doing virtual workout or weekends. Bri has been such a blessing to my life I would recommend her and 222 Fit to anyone looking for guidance.",
    rating: 5,
    image:
      "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-1/480481035_10236377316355820_7018537921131743417_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=1d2534&_nc_ohc=tkYKAcfiDNYQ7kNvwEvxRrw&_nc_oc=AdlJFo6SNJjl2_XQgE7fdbCLtEUOLI2kdg6YNy_xs6XNtLocpS5yUXx8FXvJjChXMgHxnYoL261ZkwTkslHXI6l3&_nc_zt=24&_nc_ht=scontent-ord5-2.xx&_nc_gid=AgO2FKjpjYpg5dUc-2otmA&oh=00_Afn8uAg-6bMptf3Q1IlV3Mr6q7R75BiSFoHDTNJJI5jUIQ&oe=694E0FD9",
  },
  {
    name: "Beanie-Baby Bambino",
    content:
      "I made it a goal not to wait until the new year for my resolutions. Going into my second week with Briana Kaileen Orozco at her personal training studio. Blessed that our paths got to cross again ♥️ If you are looking for a personal trainer I highly recommend Briana. She's kind, always has the best attitude, and patience and is just and overall genuine soul and your life will become exponentially better just having her in it. I'm looking forward to all our sessions together!!! Help support your local businesses that are women led and owned, you can find her at 222 FIT LLC.",
    rating: 5,
    image:
      "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-1/559481560_10229993219310805_4318074996926942301_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_ohc=8P0m8CoKXvIQ7kNvwGJpoH2&_nc_oc=AdmzidllWqhDx6ATqMtlq297e0u0OOZBu5G9LhRuIuBkXcFRkg-zobdAlqN4jcSdv37DWZAZ1pbsPS4fLkSaTdre&_nc_zt=24&_nc_ht=scontent-ord5-2.xx&_nc_gid=ZwBN4TaA8AtShvDvOP9seg&oh=00_AflvZbbBxVC16cZB1jTvw5RfQIkwr0rQVXlx2U8qlD5QGA&oe=694DF544",
  },
  {
    name: "Javon Bravo Frieson",
    content:
      "Briana is the best personal trainer I could have asked for, the facility is super clean and provides an environment for entry level people to grow 🙌🏽",
    rating: 5,
    image:
      "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-1/540791226_24496716029958518_3985768948828471300_n.jpg?stp=c0.0.720.720a_dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=e99d92&_nc_ohc=F_fbb7JwJuAQ7kNvwGUNIZI&_nc_oc=AdnFxtMW8Z3tnoYIzDpFOpp9k501ip9k5XGJde1sZLkYaQpk3Fv3xnvLkUW-rkfgJxH1g1UjIo58kWX6RUt5RMlI&_nc_zt=24&_nc_ht=scontent-ord5-1.xx&_nc_gid=kikq2veJhsD20lHJtidwEw&oh=00_AfmY-LCndKSH910f590MyDN8CP8R2vVIMTkG3SSXJ-Wqpg&oe=694DE80A",
  },
  {
    name: "Anna Mancewicz",
    content:
      "Omg Brianna is the best. She started working with my daughter in the fall and they get along so well. She is not just a trainer she is a therapist for her. We love her very much she put so much effort in to every workout 🏋️‍♀️ it makes my daughter very happy and wanting to work harder. I recommend her to everyone Who wants to get in shape and take care of his well being. 🏋️‍♀️",
    rating: 5,
    image:
      "https://scontent-ord5-3.xx.fbcdn.net/v/t39.30808-1/453717626_10229365701078642_1969856109052520513_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_ohc=Ey39VkfpClMQ7kNvwH2PmiP&_nc_oc=Adl-EUbsC_YpkVdl-YQHxv398yJ2a5wV8I4p-Zgoy5Xz2jAYbo3zvtA2JAQ-Bmi5KEy7Oi75KFCc3N2VquF1sJC0&_nc_zt=24&_nc_ht=scontent-ord5-3.xx&_nc_gid=i4eZv64YX5TVK1vw8pG2hg&oh=00_AfkK6Pht-BrDLS1H3FQKDA9PmRa5d0NiYr5yFkNlKdGP2w&oe=694DF8CD",
  },
  {
    name: "Anvi Khanna",
    content:
      "hi im anvi and i've been one of bri's client for for more then a year now and i initially wanted a personal trainer to get stronger, but having bri has given me a lot more then just strength. she's my sister, trainer, mentor in so much more then just the gym, and someone who i can talk to. she helped me make the gym a lifestyle and she still is guiding me today and i am beyond grateful for her. she is super flexible, incredibly understanding, and she will never judge. she has tought me everything i know about the gym, that now i'm able to teach others. thank you for making me strong not just physically, but mentally as well. love you bri ❤️",
    rating: 5,
    image:
      "https://scontent-ord5-3.xx.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s200x200&_nc_cat=110&ccb=1-7&_nc_sid=136b72&_nc_ohc=lMblRk8EW5oQ7kNvwHIaPQf&_nc_oc=AdnXpATVn5JYiTPcilAz5lz3jWEpEe0Td7bpAkMMycfU-PiJM57AlhpzpBJ3HuekjkxdrB9Q9DBZETUpXtYgJFU1&_nc_zt=24&_nc_ht=scontent-ord5-3.xx&oh=00_Afmi59sxj7l7-gqzfhYTnYXD9zzSUVHuS_V6HCLwBvqRnQ&oe=696FB33A",
  },
  {
    name: "Nerylin Rivera",
    content:
      "I have been training with Bri for almost 3 years now, she is an amazing coach, always kind, pushes you to be better, she is knowledgeable and trains with purpose and with attention to what the client needs at the moment. Since we have been working together I have improved my mobility, core strength, overall strength, my form has been constantly getting better and I see all these changes in every session. The work is not meant to be easy but it is going to give you results if you are consistent and willing to step out of your comfort zone. I really love meeting with her and this is definitely one of the best decisions I have made for my health and fitness journey. Give yourself a chance to make things happen and Bri can help you get there.",
    rating: 5,
    image:
      "https://scontent-ord5-3.xx.fbcdn.net/v/t39.30808-1/281250899_10165931686705467_7936297896267453363_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=FlvRL7Uy698Q7kNvwH_MmH2&_nc_oc=Adl1XL-MFSuZpp8EHxTaQaxiS-tL9_FTxP5oQn2zqSqrp7u6N42H6ARimsvHOL3JkNld_nWOy661FrJM6asj0bj4&_nc_zt=24&_nc_ht=scontent-ord5-3.xx&_nc_gid=PNPk9xikYRdb2s3m2_LKvw&oh=00_AfmdaR56sByd4BDdGTdwMuxyADqAgxSYrSGltGzpEpD2Rg&oe=694E0B55",
  },
];

