import React, { createContext, useContext, useState } from 'react'

export const ContextData=createContext()



const Context = (props) => {


  const [hotelData, setHotelData] = useState([
  {
    id: 1,
    name: "Hotel Maurya",
    address: "Patna, Bihar",
    expandedAddress: "Fraser Road, near Hartali More, Patna, Bihar",
    availableFrom: "2026-09-01",
    availableTo: "2026-09-15",
    price: 1800,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "AC",
      "TV",
      "Breakfast"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-tv",
      "fa-solid fa-mug-saucer"
    ],
    rating: 4.4,
    reviews: 172,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Rohan Sharma",
        rating: 4.4,
        comment: "Great stay, staff was very courteous and the room was spotless."
      },
      {
        id: 2,
        name: "Sneha Reddy",
        rating: 4.1,
        comment: "Excellent value for money, the breakfast was a nice touch."
      },
      {
        id: 3,
        name: "Manish Yadav",
        rating: 4.6,
        comment: "Smooth booking experience and the hotel exceeded expectations."
      },
      {
        id: 4,
        name: "Anjali Saxena",
        rating: 4.3,
        comment: "Spacious rooms and good WiFi speed throughout our stay."
      }
    ]
  },
  {
    id: 2,
    name: "The Grand Patna",
    address: "Patna, Bihar",
    expandedAddress: "Boring Road, near A N College, Patna, Bihar",
    availableFrom: "2026-09-03",
    availableTo: "2026-09-20",
    price: 2400,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "AC",
      "Parking",
      "Room Service"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-square-parking",
      "fa-solid fa-bell-concierge"
    ],
    rating: 3.8,
    reviews: 309,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Vikram Rao",
        rating: 3.8,
        comment: "Good location but service was a little slow during checkout."
      },
      {
        id: 2,
        name: "Divya Menon",
        rating: 3.5,
        comment: "Nice hotel for the price, just wish the WiFi was faster."
      },
      {
        id: 3,
        name: "Aditya Bhatt",
        rating: 4,
        comment: "Good location but service was a little slow during checkout."
      },
      {
        id: 4,
        name: "Isha Chopra",
        rating: 3.7,
        comment: "Decent stay overall, though the room could have been a bit cleaner."
      }
    ]
  },
  {
    id: 3,
    name: "Hotel Ganga View",
    address: "Patna, Bihar",
    expandedAddress: "Ashok Rajpath, near Gandhi Ghat, Patna, Bihar",
    availableFrom: "2026-09-02",
    availableTo: "2026-09-18",
    price: 2100,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Pool",
      "WiFi",
      "AC",
      "Restaurant"
    ],
    amenitiesIcon: [
      "fa-solid fa-person-swimming",
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-utensils"
    ],
    rating: 4.5,
    reviews: 446,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Arjun Nair",
        rating: 4.5,
        comment: "Comfortable beds and quick check-in, would definitely come back."
      },
      {
        id: 2,
        name: "Ritu Chawla",
        rating: 4.2,
        comment: "The view from the room was stunning, highly recommend this place."
      },
      {
        id: 3,
        name: "Deepak Kumar",
        rating: 4.7,
        comment: "Staff went out of their way to help us, truly appreciated."
      },
      {
        id: 4,
        name: "Lakshmi Menon",
        rating: 4.4,
        comment: "Loved the location and the amenities were exactly as described."
      }
    ]
  },
  {
    id: 4,
    name: "Patliputra Residency",
    address: "Patna, Bihar",
    expandedAddress: "Bailey Road, near Rajabazar, Patna, Bihar",
    availableFrom: "2026-09-05",
    availableTo: "2026-09-25",
    price: 2600,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "Gym",
      "AC",
      "Breakfast"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-dumbbell",
      "fa-solid fa-snowflake",
      "fa-solid fa-mug-saucer"
    ],
    rating: 3.9,
    reviews: 583,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Sanjay Mehta",
        rating: 3.9,
        comment: "Room was fine but the AC was noisy at night."
      },
      {
        id: 2,
        name: "Nisha Agarwal",
        rating: 3.6,
        comment: "Decent stay overall, though the room could have been a bit cleaner."
      },
      {
        id: 3,
        name: "Nikhil Bansal",
        rating: 4.1,
        comment: "Room was fine but the AC was noisy at night."
      },
      {
        id: 4,
        name: "Neha Gupta",
        rating: 3.8,
        comment: "Average experience, food options were limited near the property."
      }
    ]
  },
  {
    id: 5,
    name: "Hotel Chanakya",
    address: "Patna, Bihar",
    expandedAddress: "Exhibition Road, near Gandhi Maidan, Patna, Bihar",
    availableFrom: "2026-09-01",
    availableTo: "2026-09-30",
    price: 2900,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1578683010236-d716f3983a37?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f3983a37?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f3983a37?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Parking",
      "WiFi",
      "TV",
      "Room Service"
    ],
    amenitiesIcon: [
      "fa-solid fa-square-parking",
      "fa-solid fa-wifi",
      "fa-solid fa-tv",
      "fa-solid fa-bell-concierge"
    ],
    rating: 4.6,
    reviews: 720,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Suresh Pillai",
        rating: 4.6,
        comment: "Clean rooms and friendly staff made our trip memorable."
      },
      {
        id: 2,
        name: "Shreya Bose",
        rating: 4.3,
        comment: "Perfect for a short trip, everything was well maintained."
      },
      {
        id: 3,
        name: "Rohan Sharma",
        rating: 4.8,
        comment: "Great stay, staff was very courteous and the room was spotless."
      },
      {
        id: 4,
        name: "Sneha Reddy",
        rating: 4.5,
        comment: "Excellent value for money, the breakfast was a nice touch."
      }
    ]
  },
  {
    id: 6,
    name: "City View Inn",
    address: "Patna, Bihar",
    expandedAddress: "Kankarbagh Main Road, near Auto Stand, Patna, Bihar",
    availableFrom: "2026-09-07",
    availableTo: "2026-09-22",
    price: 1500,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "AC",
      "WiFi",
      "Restaurant",
      "24/7 Front Desk"
    ],
    amenitiesIcon: [
      "fa-solid fa-snowflake",
      "fa-solid fa-wifi",
      "fa-solid fa-utensils",
      "fa-solid fa-clock"
    ],
    rating: 4,
    reviews: 857,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Vivek Choudhary",
        rating: 4,
        comment: "Comfortable enough for a short stay, nothing extraordinary though."
      },
      {
        id: 2,
        name: "Tanvi Shah",
        rating: 3.7,
        comment: "Average experience, food options were limited near the property."
      },
      {
        id: 3,
        name: "Vikram Rao",
        rating: 4.2,
        comment: "Good location but service was a little slow during checkout."
      },
      {
        id: 4,
        name: "Divya Menon",
        rating: 3.9,
        comment: "Nice hotel for the price, just wish the WiFi was faster."
      }
    ]
  },
  {
    id: 7,
    name: "Royal Heritage",
    address: "Patna, Bihar",
    expandedAddress: "Dak Bunglow Road, beside Central Mall, Patna, Bihar",
    availableFrom: "2026-09-04",
    availableTo: "2026-09-28",
    price: 3200,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "AC",
      "TV",
      "Breakfast"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-tv",
      "fa-solid fa-mug-saucer"
    ],
    rating: 4.7,
    reviews: 994,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Rajesh Tiwari",
        rating: 4.7,
        comment: "Smooth booking experience and the hotel exceeded expectations."
      },
      {
        id: 2,
        name: "Priya Verma",
        rating: 4.4,
        comment: "Spacious rooms and good WiFi speed throughout our stay."
      },
      {
        id: 3,
        name: "Arjun Nair",
        rating: 4.9,
        comment: "Comfortable beds and quick check-in, would definitely come back."
      },
      {
        id: 4,
        name: "Ritu Chawla",
        rating: 4.6,
        comment: "The view from the room was stunning, highly recommend this place."
      }
    ]
  },
  {
    id: 8,
    name: "Hotel Sunshine",
    address: "Patna, Bihar",
    expandedAddress: "Patliputra Colony, near Community Hall, Patna, Bihar",
    availableFrom: "2026-09-01",
    availableTo: "2026-09-12",
    price: 1700,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "AC",
      "Parking",
      "Room Service"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-square-parking",
      "fa-solid fa-bell-concierge"
    ],
    rating: 4.1,
    reviews: 1131,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Harish Pandey",
        rating: 4.1,
        comment: "Good location but service was a little slow during checkout."
      },
      {
        id: 2,
        name: "Ananya Iyer",
        rating: 3.8,
        comment: "Decent stay overall, though the room could have been a bit cleaner."
      },
      {
        id: 3,
        name: "Sanjay Mehta",
        rating: 4.3,
        comment: "Room was fine but the AC was noisy at night."
      },
      {
        id: 4,
        name: "Nisha Agarwal",
        rating: 4,
        comment: "Decent stay overall, though the room could have been a bit cleaner."
      }
    ]
  },
  {
    id: 9,
    name: "The Comfort Stay",
    address: "Patna, Bihar",
    expandedAddress: "Rajendra Nagar, near Main Market, Patna, Bihar",
    availableFrom: "2026-09-08",
    availableTo: "2026-09-30",
    price: 1900,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Pool",
      "WiFi",
      "AC",
      "Restaurant"
    ],
    amenitiesIcon: [
      "fa-solid fa-person-swimming",
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-utensils"
    ],
    rating: 4.8,
    reviews: 1268,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Amit Singh",
        rating: 4.8,
        comment: "Staff went out of their way to help us, truly appreciated."
      },
      {
        id: 2,
        name: "Pooja Joshi",
        rating: 4.5,
        comment: "Loved the location and the amenities were exactly as described."
      },
      {
        id: 3,
        name: "Suresh Pillai",
        rating: 5,
        comment: "Clean rooms and friendly staff made our trip memorable."
      },
      {
        id: 4,
        name: "Shreya Bose",
        rating: 4.7,
        comment: "Perfect for a short trip, everything was well maintained."
      }
    ]
  },
  {
    id: 10,
    name: "Hotel Bodhi",
    address: "Patna, Bihar",
    expandedAddress: "S K Puri, near Children's Park, Patna, Bihar",
    availableFrom: "2026-09-02",
    availableTo: "2026-09-24",
    price: 2300,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "Gym",
      "AC",
      "Breakfast"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-dumbbell",
      "fa-solid fa-snowflake",
      "fa-solid fa-mug-saucer"
    ],
    rating: 4.2,
    reviews: 1405,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Karan Malhotra",
        rating: 4.2,
        comment: "Spacious rooms and good WiFi speed throughout our stay."
      },
      {
        id: 2,
        name: "Kavita Desai",
        rating: 3.9,
        comment: "Comfortable beds and quick check-in, would definitely come back."
      },
      {
        id: 3,
        name: "Vivek Choudhary",
        rating: 4.4,
        comment: "The view from the room was stunning, highly recommend this place."
      },
      {
        id: 4,
        name: "Tanvi Shah",
        rating: 4.1,
        comment: "Staff went out of their way to help us, truly appreciated."
      }
    ]
  },
  {
    id: 11,
    name: "Golden Temple Residency",
    address: "Amritsar, Punjab",
    expandedAddress: "Heritage Street, near Golden Temple, Amritsar, Punjab",
    availableFrom: "2026-09-01",
    availableTo: "2026-09-20",
    price: 2200,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Parking",
      "WiFi",
      "TV",
      "Room Service"
    ],
    amenitiesIcon: [
      "fa-solid fa-square-parking",
      "fa-solid fa-wifi",
      "fa-solid fa-tv",
      "fa-solid fa-bell-concierge"
    ],
    rating: 4.9,
    reviews: 92,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Rahul Kapoor",
        rating: 4.9,
        comment: "Great stay, staff was very courteous and the room was spotless."
      },
      {
        id: 2,
        name: "Meera Krishnan",
        rating: 4.6,
        comment: "Excellent value for money, the breakfast was a nice touch."
      },
      {
        id: 3,
        name: "Rajesh Tiwari",
        rating: 5,
        comment: "Smooth booking experience and the hotel exceeded expectations."
      },
      {
        id: 4,
        name: "Priya Verma",
        rating: 4.8,
        comment: "Spacious rooms and good WiFi speed throughout our stay."
      }
    ]
  },
  {
    id: 12,
    name: "Hotel Harman",
    address: "Amritsar, Punjab",
    expandedAddress: "Hall Bazaar, near Railway Station, Amritsar, Punjab",
    availableFrom: "2026-09-04",
    availableTo: "2026-09-26",
    price: 1800,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "AC",
      "WiFi",
      "Restaurant",
      "24/7 Front Desk"
    ],
    amenitiesIcon: [
      "fa-solid fa-snowflake",
      "fa-solid fa-wifi",
      "fa-solid fa-utensils",
      "fa-solid fa-clock"
    ],
    rating: 4.3,
    reviews: 229,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Manish Yadav",
        rating: 4.3,
        comment: "Loved the location and the amenities were exactly as described."
      },
      {
        id: 2,
        name: "Anjali Saxena",
        rating: 4,
        comment: "Clean rooms and friendly staff made our trip memorable."
      },
      {
        id: 3,
        name: "Harish Pandey",
        rating: 4.5,
        comment: "Perfect for a short trip, everything was well maintained."
      },
      {
        id: 4,
        name: "Ananya Iyer",
        rating: 4.2,
        comment: "Great stay, staff was very courteous and the room was spotless."
      }
    ]
  },
  {
    id: 13,
    name: "Punjab Palace",
    address: "Amritsar, Punjab",
    expandedAddress: "Mall Road, near Company Bagh, Amritsar, Punjab",
    availableFrom: "2026-09-02",
    availableTo: "2026-09-15",
    price: 2700,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "AC",
      "TV",
      "Breakfast"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-tv",
      "fa-solid fa-mug-saucer"
    ],
    rating: 3.7,
    reviews: 366,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Aditya Bhatt",
        rating: 3.7,
        comment: "Average experience, food options were limited near the property."
      },
      {
        id: 2,
        name: "Isha Chopra",
        rating: 3.4,
        comment: "Comfortable enough for a short stay, nothing extraordinary though."
      },
      {
        id: 3,
        name: "Amit Singh",
        rating: 3.9,
        comment: "Average experience, food options were limited near the property."
      },
      {
        id: 4,
        name: "Pooja Joshi",
        rating: 3.6,
        comment: "Good location but service was a little slow during checkout."
      }
    ]
  },
  {
    id: 14,
    name: "The Amritsar Grand",
    address: "Amritsar, Punjab",
    expandedAddress: "Ranjit Avenue, near B Block Market, Amritsar, Punjab",
    availableFrom: "2026-09-06",
    availableTo: "2026-09-30",
    price: 3500,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "AC",
      "Parking",
      "Room Service"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-square-parking",
      "fa-solid fa-bell-concierge"
    ],
    rating: 4.4,
    reviews: 503,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Deepak Kumar",
        rating: 4.4,
        comment: "Excellent value for money, the breakfast was a nice touch."
      },
      {
        id: 2,
        name: "Lakshmi Menon",
        rating: 4.1,
        comment: "Smooth booking experience and the hotel exceeded expectations."
      },
      {
        id: 3,
        name: "Karan Malhotra",
        rating: 4.6,
        comment: "Spacious rooms and good WiFi speed throughout our stay."
      },
      {
        id: 4,
        name: "Kavita Desai",
        rating: 4.3,
        comment: "Comfortable beds and quick check-in, would definitely come back."
      }
    ]
  },
  {
    id: 15,
    name: "Hotel Golden View",
    address: "Amritsar, Punjab",
    expandedAddress: "Queen's Road, near Crystal Chowk, Amritsar, Punjab",
    availableFrom: "2026-09-01",
    availableTo: "2026-09-18",
    price: 2400,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1578683010236-d716f3983a37?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f3983a37?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f3983a37?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Pool",
      "WiFi",
      "AC",
      "Restaurant"
    ],
    amenitiesIcon: [
      "fa-solid fa-person-swimming",
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-utensils"
    ],
    rating: 3.8,
    reviews: 640,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Nikhil Bansal",
        rating: 3.8,
        comment: "Nice hotel for the price, just wish the WiFi was faster."
      },
      {
        id: 2,
        name: "Neha Gupta",
        rating: 3.5,
        comment: "Good location but service was a little slow during checkout."
      },
      {
        id: 3,
        name: "Rahul Kapoor",
        rating: 4,
        comment: "Decent stay overall, though the room could have been a bit cleaner."
      },
      {
        id: 4,
        name: "Meera Krishnan",
        rating: 3.7,
        comment: "Room was fine but the AC was noisy at night."
      }
    ]
  },
  {
    id: 16,
    name: "Heritage Inn",
    address: "Amritsar, Punjab",
    expandedAddress: "Ram Bagh Road, near Ram Bagh Garden, Amritsar, Punjab",
    availableFrom: "2026-09-08",
    availableTo: "2026-09-29",
    price: 2100,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "Gym",
      "AC",
      "Breakfast"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-dumbbell",
      "fa-solid fa-snowflake",
      "fa-solid fa-mug-saucer"
    ],
    rating: 4.5,
    reviews: 777,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Rohan Sharma",
        rating: 4.5,
        comment: "The view from the room was stunning, highly recommend this place."
      },
      {
        id: 2,
        name: "Sneha Reddy",
        rating: 4.2,
        comment: "Staff went out of their way to help us, truly appreciated."
      },
      {
        id: 3,
        name: "Manish Yadav",
        rating: 4.7,
        comment: "Loved the location and the amenities were exactly as described."
      },
      {
        id: 4,
        name: "Anjali Saxena",
        rating: 4.4,
        comment: "Clean rooms and friendly staff made our trip memorable."
      }
    ]
  },
  {
    id: 17,
    name: "Royal Punjab Hotel",
    address: "Amritsar, Punjab",
    expandedAddress: "Majitha Road, near Celebration Mall, Amritsar, Punjab",
    availableFrom: "2026-09-03",
    availableTo: "2026-09-23",
    price: 3100,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Parking",
      "WiFi",
      "TV",
      "Room Service"
    ],
    amenitiesIcon: [
      "fa-solid fa-square-parking",
      "fa-solid fa-wifi",
      "fa-solid fa-tv",
      "fa-solid fa-bell-concierge"
    ],
    rating: 3.9,
    reviews: 914,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Vikram Rao",
        rating: 3.9,
        comment: "Decent stay overall, though the room could have been a bit cleaner."
      },
      {
        id: 2,
        name: "Divya Menon",
        rating: 3.6,
        comment: "Room was fine but the AC was noisy at night."
      },
      {
        id: 3,
        name: "Aditya Bhatt",
        rating: 4.1,
        comment: "Average experience, food options were limited near the property."
      },
      {
        id: 4,
        name: "Isha Chopra",
        rating: 3.8,
        comment: "Comfortable enough for a short stay, nothing extraordinary though."
      }
    ]
  },
  {
    id: 18,
    name: "City Palace Amritsar",
    address: "Amritsar, Punjab",
    expandedAddress: "GT Road, near Bus Stand, Amritsar, Punjab",
    availableFrom: "2026-09-01",
    availableTo: "2026-09-14",
    price: 1600,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "AC",
      "WiFi",
      "Restaurant",
      "24/7 Front Desk"
    ],
    amenitiesIcon: [
      "fa-solid fa-snowflake",
      "fa-solid fa-wifi",
      "fa-solid fa-utensils",
      "fa-solid fa-clock"
    ],
    rating: 4.6,
    reviews: 1051,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Arjun Nair",
        rating: 4.6,
        comment: "Perfect for a short trip, everything was well maintained."
      },
      {
        id: 2,
        name: "Ritu Chawla",
        rating: 4.3,
        comment: "Great stay, staff was very courteous and the room was spotless."
      },
      {
        id: 3,
        name: "Deepak Kumar",
        rating: 4.8,
        comment: "Excellent value for money, the breakfast was a nice touch."
      },
      {
        id: 4,
        name: "Lakshmi Menon",
        rating: 4.5,
        comment: "Smooth booking experience and the hotel exceeded expectations."
      }
    ]
  },
  {
    id: 19,
    name: "Silver Leaf Hotel",
    address: "Amritsar, Punjab",
    expandedAddress: "Lawrence Road, opposite Rose Garden, Amritsar, Punjab",
    availableFrom: "2026-09-05",
    availableTo: "2026-09-27",
    price: 2000,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "AC",
      "TV",
      "Breakfast"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-tv",
      "fa-solid fa-mug-saucer"
    ],
    rating: 4,
    reviews: 1188,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Sanjay Mehta",
        rating: 4,
        comment: "Average experience, food options were limited near the property."
      },
      {
        id: 2,
        name: "Nisha Agarwal",
        rating: 3.7,
        comment: "Good location but service was a little slow during checkout."
      },
      {
        id: 3,
        name: "Nikhil Bansal",
        rating: 4.2,
        comment: "Nice hotel for the price, just wish the WiFi was faster."
      },
      {
        id: 4,
        name: "Neha Gupta",
        rating: 3.9,
        comment: "Good location but service was a little slow during checkout."
      }
    ]
  },
  {
    id: 20,
    name: "Hotel Golden Crown",
    address: "Amritsar, Punjab",
    expandedAddress: "Adarsh Nagar, near Railway Colony, Amritsar, Punjab",
    availableFrom: "2026-09-02",
    availableTo: "2026-09-30",
    price: 2800,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "AC",
      "Parking",
      "Room Service"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-square-parking",
      "fa-solid fa-bell-concierge"
    ],
    rating: 4.7,
    reviews: 1325,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Suresh Pillai",
        rating: 4.7,
        comment: "Spacious rooms and good WiFi speed throughout our stay."
      },
      {
        id: 2,
        name: "Shreya Bose",
        rating: 4.4,
        comment: "Comfortable beds and quick check-in, would definitely come back."
      },
      {
        id: 3,
        name: "Rohan Sharma",
        rating: 4.9,
        comment: "The view from the room was stunning, highly recommend this place."
      },
      {
        id: 4,
        name: "Sneha Reddy",
        rating: 4.6,
        comment: "Staff went out of their way to help us, truly appreciated."
      }
    ]
  },
  {
    id: 21,
    name: "The Pink City Hotel",
    address: "Jaipur, Rajasthan",
    expandedAddress: "MI Road, near Panch Batti, Jaipur, Rajasthan",
    availableFrom: "2026-09-01",
    availableTo: "2026-09-19",
    price: 2300,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Pool",
      "WiFi",
      "AC",
      "Restaurant"
    ],
    amenitiesIcon: [
      "fa-solid fa-person-swimming",
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-utensils"
    ],
    rating: 4.1,
    reviews: 1462,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Vivek Choudhary",
        rating: 4.1,
        comment: "Decent stay overall, though the room could have been a bit cleaner."
      },
      {
        id: 2,
        name: "Tanvi Shah",
        rating: 3.8,
        comment: "Room was fine but the AC was noisy at night."
      },
      {
        id: 3,
        name: "Vikram Rao",
        rating: 4.3,
        comment: "Decent stay overall, though the room could have been a bit cleaner."
      },
      {
        id: 4,
        name: "Divya Menon",
        rating: 4,
        comment: "Room was fine but the AC was noisy at night."
      }
    ]
  },
  {
    id: 22,
    name: "Rajputana Residency",
    address: "Jaipur, Rajasthan",
    expandedAddress: "C Scheme, near Statue Circle, Jaipur, Rajasthan",
    availableFrom: "2026-09-04",
    availableTo: "2026-09-28",
    price: 2900,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "Gym",
      "AC",
      "Breakfast"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-dumbbell",
      "fa-solid fa-snowflake",
      "fa-solid fa-mug-saucer"
    ],
    rating: 4.8,
    reviews: 149,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Rajesh Tiwari",
        rating: 4.8,
        comment: "Loved the location and the amenities were exactly as described."
      },
      {
        id: 2,
        name: "Priya Verma",
        rating: 4.5,
        comment: "Clean rooms and friendly staff made our trip memorable."
      },
      {
        id: 3,
        name: "Arjun Nair",
        rating: 5,
        comment: "Perfect for a short trip, everything was well maintained."
      },
      {
        id: 4,
        name: "Ritu Chawla",
        rating: 4.7,
        comment: "Great stay, staff was very courteous and the room was spotless."
      }
    ]
  },
  {
    id: 23,
    name: "Amber Palace Inn",
    address: "Jaipur, Rajasthan",
    expandedAddress: "Amer Road, near Jal Mahal, Jaipur, Rajasthan",
    availableFrom: "2026-09-03",
    availableTo: "2026-09-16",
    price: 2100,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Parking",
      "WiFi",
      "TV",
      "Room Service"
    ],
    amenitiesIcon: [
      "fa-solid fa-square-parking",
      "fa-solid fa-wifi",
      "fa-solid fa-tv",
      "fa-solid fa-bell-concierge"
    ],
    rating: 4.2,
    reviews: 286,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Harish Pandey",
        rating: 4.2,
        comment: "Comfortable beds and quick check-in, would definitely come back."
      },
      {
        id: 2,
        name: "Ananya Iyer",
        rating: 3.9,
        comment: "The view from the room was stunning, highly recommend this place."
      },
      {
        id: 3,
        name: "Sanjay Mehta",
        rating: 4.4,
        comment: "Staff went out of their way to help us, truly appreciated."
      },
      {
        id: 4,
        name: "Nisha Agarwal",
        rating: 4.1,
        comment: "Loved the location and the amenities were exactly as described."
      }
    ]
  },
  {
    id: 24,
    name: "Pink Heritage",
    address: "Jaipur, Rajasthan",
    expandedAddress: "Bapu Bazaar, near Hawa Mahal, Jaipur, Rajasthan",
    availableFrom: "2026-09-02",
    availableTo: "2026-09-30",
    price: 2600,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "AC",
      "WiFi",
      "Restaurant",
      "24/7 Front Desk"
    ],
    amenitiesIcon: [
      "fa-solid fa-snowflake",
      "fa-solid fa-wifi",
      "fa-solid fa-utensils",
      "fa-solid fa-clock"
    ],
    rating: 4.9,
    reviews: 423,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Amit Singh",
        rating: 4.9,
        comment: "Excellent value for money, the breakfast was a nice touch."
      },
      {
        id: 2,
        name: "Pooja Joshi",
        rating: 4.6,
        comment: "Smooth booking experience and the hotel exceeded expectations."
      },
      {
        id: 3,
        name: "Suresh Pillai",
        rating: 5,
        comment: "Spacious rooms and good WiFi speed throughout our stay."
      },
      {
        id: 4,
        name: "Shreya Bose",
        rating: 4.8,
        comment: "Comfortable beds and quick check-in, would definitely come back."
      }
    ]
  },
  {
    id: 25,
    name: "Royal Rajput Hotel",
    address: "Jaipur, Rajasthan",
    expandedAddress: "Tonk Road, near Durgapura Circle, Jaipur, Rajasthan",
    availableFrom: "2026-09-07",
    availableTo: "2026-09-25",
    price: 3200,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1578683010236-d716f3983a37?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f3983a37?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f3983a37?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "AC",
      "TV",
      "Breakfast"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-tv",
      "fa-solid fa-mug-saucer"
    ],
    rating: 4.3,
    reviews: 560,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Karan Malhotra",
        rating: 4.3,
        comment: "Clean rooms and friendly staff made our trip memorable."
      },
      {
        id: 2,
        name: "Kavita Desai",
        rating: 4,
        comment: "Perfect for a short trip, everything was well maintained."
      },
      {
        id: 3,
        name: "Vivek Choudhary",
        rating: 4.5,
        comment: "Great stay, staff was very courteous and the room was spotless."
      },
      {
        id: 4,
        name: "Tanvi Shah",
        rating: 4.2,
        comment: "Excellent value for money, the breakfast was a nice touch."
      }
    ]
  },
  {
    id: 26,
    name: "Hotel Maharaja",
    address: "Jaipur, Rajasthan",
    expandedAddress: "Vaishali Nagar, near Amrapali Circle, Jaipur, Rajasthan",
    availableFrom: "2026-09-01",
    availableTo: "2026-09-12",
    price: 1900,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "AC",
      "Parking",
      "Room Service"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-square-parking",
      "fa-solid fa-bell-concierge"
    ],
    rating: 3.7,
    reviews: 697,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Rahul Kapoor",
        rating: 3.7,
        comment: "Comfortable enough for a short stay, nothing extraordinary though."
      },
      {
        id: 2,
        name: "Meera Krishnan",
        rating: 3.4,
        comment: "Average experience, food options were limited near the property."
      },
      {
        id: 3,
        name: "Rajesh Tiwari",
        rating: 3.9,
        comment: "Good location but service was a little slow during checkout."
      },
      {
        id: 4,
        name: "Priya Verma",
        rating: 3.6,
        comment: "Nice hotel for the price, just wish the WiFi was faster."
      }
    ]
  },
  {
    id: 27,
    name: "Desert Rose Hotel",
    address: "Jaipur, Rajasthan",
    expandedAddress: "Malviya Nagar, near Gaurav Tower, Jaipur, Rajasthan",
    availableFrom: "2026-09-06",
    availableTo: "2026-09-23",
    price: 2500,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Pool",
      "WiFi",
      "AC",
      "Restaurant"
    ],
    amenitiesIcon: [
      "fa-solid fa-person-swimming",
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-utensils"
    ],
    rating: 4.4,
    reviews: 834,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Manish Yadav",
        rating: 4.4,
        comment: "Smooth booking experience and the hotel exceeded expectations."
      },
      {
        id: 2,
        name: "Anjali Saxena",
        rating: 4.1,
        comment: "Spacious rooms and good WiFi speed throughout our stay."
      },
      {
        id: 3,
        name: "Harish Pandey",
        rating: 4.6,
        comment: "Comfortable beds and quick check-in, would definitely come back."
      },
      {
        id: 4,
        name: "Ananya Iyer",
        rating: 4.3,
        comment: "The view from the room was stunning, highly recommend this place."
      }
    ]
  },
  {
    id: 28,
    name: "Raj Palace Stay",
    address: "Jaipur, Rajasthan",
    expandedAddress: "Jhotwara Road, near Kanta Chauraha, Jaipur, Rajasthan",
    availableFrom: "2026-09-02",
    availableTo: "2026-09-21",
    price: 1800,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "Gym",
      "AC",
      "Breakfast"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-dumbbell",
      "fa-solid fa-snowflake",
      "fa-solid fa-mug-saucer"
    ],
    rating: 3.8,
    reviews: 971,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Aditya Bhatt",
        rating: 3.8,
        comment: "Good location but service was a little slow during checkout."
      },
      {
        id: 2,
        name: "Isha Chopra",
        rating: 3.5,
        comment: "Decent stay overall, though the room could have been a bit cleaner."
      },
      {
        id: 3,
        name: "Amit Singh",
        rating: 4,
        comment: "Room was fine but the AC was noisy at night."
      },
      {
        id: 4,
        name: "Pooja Joshi",
        rating: 3.7,
        comment: "Decent stay overall, though the room could have been a bit cleaner."
      }
    ]
  },
  {
    id: 29,
    name: "The Jaipur Grand",
    address: "Jaipur, Rajasthan",
    expandedAddress: "Sawai Ram Singh Road, near SMS Hospital, Jaipur, Rajasthan",
    availableFrom: "2026-09-08",
    availableTo: "2026-09-30",
    price: 3400,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Parking",
      "WiFi",
      "TV",
      "Room Service"
    ],
    amenitiesIcon: [
      "fa-solid fa-square-parking",
      "fa-solid fa-wifi",
      "fa-solid fa-tv",
      "fa-solid fa-bell-concierge"
    ],
    rating: 4.5,
    reviews: 1108,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Deepak Kumar",
        rating: 4.5,
        comment: "Staff went out of their way to help us, truly appreciated."
      },
      {
        id: 2,
        name: "Lakshmi Menon",
        rating: 4.2,
        comment: "Loved the location and the amenities were exactly as described."
      },
      {
        id: 3,
        name: "Karan Malhotra",
        rating: 4.7,
        comment: "Clean rooms and friendly staff made our trip memorable."
      },
      {
        id: 4,
        name: "Kavita Desai",
        rating: 4.4,
        comment: "Perfect for a short trip, everything was well maintained."
      }
    ]
  },
  {
    id: 30,
    name: "Heritage Haveli Hotel",
    address: "Jaipur, Rajasthan",
    expandedAddress: "Shastri Nagar, near Science Park, Jaipur, Rajasthan",
    availableFrom: "2026-09-05",
    availableTo: "2026-09-17",
    price: 2200,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "AC",
      "WiFi",
      "Restaurant",
      "24/7 Front Desk"
    ],
    amenitiesIcon: [
      "fa-solid fa-snowflake",
      "fa-solid fa-wifi",
      "fa-solid fa-utensils",
      "fa-solid fa-clock"
    ],
    rating: 3.9,
    reviews: 1245,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Nikhil Bansal",
        rating: 3.9,
        comment: "Room was fine but the AC was noisy at night."
      },
      {
        id: 2,
        name: "Neha Gupta",
        rating: 3.6,
        comment: "Average experience, food options were limited near the property."
      },
      {
        id: 3,
        name: "Rahul Kapoor",
        rating: 4.1,
        comment: "Comfortable enough for a short stay, nothing extraordinary though."
      },
      {
        id: 4,
        name: "Meera Krishnan",
        rating: 3.8,
        comment: "Average experience, food options were limited near the property."
      }
    ]
  },
  {
    id: 31,
    name: "City Lights Hotel",
    address: "Delhi, India",
    expandedAddress: "Connaught Place, near Central Park, New Delhi, India",
    availableFrom: "2026-09-01",
    availableTo: "2026-09-18",
    price: 3800,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "AC",
      "TV",
      "Breakfast"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-tv",
      "fa-solid fa-mug-saucer"
    ],
    rating: 4.6,
    reviews: 1382,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Rohan Sharma",
        rating: 4.6,
        comment: "Great stay, staff was very courteous and the room was spotless."
      },
      {
        id: 2,
        name: "Sneha Reddy",
        rating: 4.3,
        comment: "Excellent value for money, the breakfast was a nice touch."
      },
      {
        id: 3,
        name: "Manish Yadav",
        rating: 4.8,
        comment: "Smooth booking experience and the hotel exceeded expectations."
      },
      {
        id: 4,
        name: "Anjali Saxena",
        rating: 4.5,
        comment: "Spacious rooms and good WiFi speed throughout our stay."
      }
    ]
  },
  {
    id: 32,
    name: "Capital Residency",
    address: "Delhi, India",
    expandedAddress: "Karol Bagh, near Ajmal Khan Road, New Delhi, India",
    availableFrom: "2026-09-04",
    availableTo: "2026-09-27",
    price: 2600,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "AC",
      "Parking",
      "Room Service"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-square-parking",
      "fa-solid fa-bell-concierge"
    ],
    rating: 4,
    reviews: 69,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Vikram Rao",
        rating: 4,
        comment: "Good location but service was a little slow during checkout."
      },
      {
        id: 2,
        name: "Divya Menon",
        rating: 3.7,
        comment: "Nice hotel for the price, just wish the WiFi was faster."
      },
      {
        id: 3,
        name: "Aditya Bhatt",
        rating: 4.2,
        comment: "Good location but service was a little slow during checkout."
      },
      {
        id: 4,
        name: "Isha Chopra",
        rating: 3.9,
        comment: "Decent stay overall, though the room could have been a bit cleaner."
      }
    ]
  },
  {
    id: 33,
    name: "Imperial Stay",
    address: "Delhi, India",
    expandedAddress: "Saket, near Select Citywalk Mall, New Delhi, India",
    availableFrom: "2026-09-02",
    availableTo: "2026-09-20",
    price: 4200,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Pool",
      "WiFi",
      "AC",
      "Restaurant"
    ],
    amenitiesIcon: [
      "fa-solid fa-person-swimming",
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-utensils"
    ],
    rating: 4.7,
    reviews: 206,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Arjun Nair",
        rating: 4.7,
        comment: "Comfortable beds and quick check-in, would definitely come back."
      },
      {
        id: 2,
        name: "Ritu Chawla",
        rating: 4.4,
        comment: "The view from the room was stunning, highly recommend this place."
      },
      {
        id: 3,
        name: "Deepak Kumar",
        rating: 4.9,
        comment: "Staff went out of their way to help us, truly appreciated."
      },
      {
        id: 4,
        name: "Lakshmi Menon",
        rating: 4.6,
        comment: "Loved the location and the amenities were exactly as described."
      }
    ]
  },
  {
    id: 34,
    name: "Hotel Ashoka",
    address: "Delhi, India",
    expandedAddress: "Paharganj, near New Delhi Railway Station, New Delhi, India",
    availableFrom: "2026-09-05",
    availableTo: "2026-09-15",
    price: 1900,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "Gym",
      "AC",
      "Breakfast"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-dumbbell",
      "fa-solid fa-snowflake",
      "fa-solid fa-mug-saucer"
    ],
    rating: 4.1,
    reviews: 343,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Sanjay Mehta",
        rating: 4.1,
        comment: "Room was fine but the AC was noisy at night."
      },
      {
        id: 2,
        name: "Nisha Agarwal",
        rating: 3.8,
        comment: "Decent stay overall, though the room could have been a bit cleaner."
      },
      {
        id: 3,
        name: "Nikhil Bansal",
        rating: 4.3,
        comment: "Room was fine but the AC was noisy at night."
      },
      {
        id: 4,
        name: "Neha Gupta",
        rating: 4,
        comment: "Average experience, food options were limited near the property."
      }
    ]
  },
  {
    id: 35,
    name: "Metro View Hotel",
    address: "Delhi, India",
    expandedAddress: "Lajpat Nagar, near Central Market, New Delhi, India",
    availableFrom: "2026-09-06",
    availableTo: "2026-09-30",
    price: 2800,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1578683010236-d716f3983a37?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f3983a37?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f3983a37?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Parking",
      "WiFi",
      "TV",
      "Room Service"
    ],
    amenitiesIcon: [
      "fa-solid fa-square-parking",
      "fa-solid fa-wifi",
      "fa-solid fa-tv",
      "fa-solid fa-bell-concierge"
    ],
    rating: 4.8,
    reviews: 480,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Suresh Pillai",
        rating: 4.8,
        comment: "Clean rooms and friendly staff made our trip memorable."
      },
      {
        id: 2,
        name: "Shreya Bose",
        rating: 4.5,
        comment: "Perfect for a short trip, everything was well maintained."
      },
      {
        id: 3,
        name: "Rohan Sharma",
        rating: 5,
        comment: "Great stay, staff was very courteous and the room was spotless."
      },
      {
        id: 4,
        name: "Sneha Reddy",
        rating: 4.7,
        comment: "Excellent value for money, the breakfast was a nice touch."
      }
    ]
  },
  {
    id: 36,
    name: "The Royal Capital",
    address: "Delhi, India",
    expandedAddress: "Vasant Kunj, near DLF Promenade, New Delhi, India",
    availableFrom: "2026-09-01",
    availableTo: "2026-09-25",
    price: 4500,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "AC",
      "WiFi",
      "Restaurant",
      "24/7 Front Desk"
    ],
    amenitiesIcon: [
      "fa-solid fa-snowflake",
      "fa-solid fa-wifi",
      "fa-solid fa-utensils",
      "fa-solid fa-clock"
    ],
    rating: 4.2,
    reviews: 617,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Vivek Choudhary",
        rating: 4.2,
        comment: "The view from the room was stunning, highly recommend this place."
      },
      {
        id: 2,
        name: "Tanvi Shah",
        rating: 3.9,
        comment: "Staff went out of their way to help us, truly appreciated."
      },
      {
        id: 3,
        name: "Vikram Rao",
        rating: 4.4,
        comment: "Loved the location and the amenities were exactly as described."
      },
      {
        id: 4,
        name: "Divya Menon",
        rating: 4.1,
        comment: "Clean rooms and friendly staff made our trip memorable."
      }
    ]
  },
  {
    id: 37,
    name: "Green Park Inn",
    address: "Delhi, India",
    expandedAddress: "Green Park, near Yusuf Sarai Market, New Delhi, India",
    availableFrom: "2026-09-08",
    availableTo: "2026-09-22",
    price: 3100,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "AC",
      "TV",
      "Breakfast"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-tv",
      "fa-solid fa-mug-saucer"
    ],
    rating: 4.9,
    reviews: 754,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Rajesh Tiwari",
        rating: 4.9,
        comment: "Smooth booking experience and the hotel exceeded expectations."
      },
      {
        id: 2,
        name: "Priya Verma",
        rating: 4.6,
        comment: "Spacious rooms and good WiFi speed throughout our stay."
      },
      {
        id: 3,
        name: "Arjun Nair",
        rating: 5,
        comment: "Comfortable beds and quick check-in, would definitely come back."
      },
      {
        id: 4,
        name: "Ritu Chawla",
        rating: 4.8,
        comment: "The view from the room was stunning, highly recommend this place."
      }
    ]
  },
  {
    id: 38,
    name: "Old Delhi Heritage",
    address: "Delhi, India",
    expandedAddress: "Chandni Chowk, near Red Fort Road, New Delhi, India",
    availableFrom: "2026-09-03",
    availableTo: "2026-09-19",
    price: 2400,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "AC",
      "Parking",
      "Room Service"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-square-parking",
      "fa-solid fa-bell-concierge"
    ],
    rating: 4.3,
    reviews: 891,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Harish Pandey",
        rating: 4.3,
        comment: "Perfect for a short trip, everything was well maintained."
      },
      {
        id: 2,
        name: "Ananya Iyer",
        rating: 4,
        comment: "Great stay, staff was very courteous and the room was spotless."
      },
      {
        id: 3,
        name: "Sanjay Mehta",
        rating: 4.5,
        comment: "Excellent value for money, the breakfast was a nice touch."
      },
      {
        id: 4,
        name: "Nisha Agarwal",
        rating: 4.2,
        comment: "Smooth booking experience and the hotel exceeded expectations."
      }
    ]
  },
  {
    id: 39,
    name: "Hotel Central Park",
    address: "Delhi, India",
    expandedAddress: "Rajendra Place, near Patel Nagar Metro, New Delhi, India",
    availableFrom: "2026-09-02",
    availableTo: "2026-09-30",
    price: 2900,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Pool",
      "WiFi",
      "AC",
      "Restaurant"
    ],
    amenitiesIcon: [
      "fa-solid fa-person-swimming",
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-utensils"
    ],
    rating: 3.7,
    reviews: 1028,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Amit Singh",
        rating: 3.7,
        comment: "Average experience, food options were limited near the property."
      },
      {
        id: 2,
        name: "Pooja Joshi",
        rating: 3.4,
        comment: "Good location but service was a little slow during checkout."
      },
      {
        id: 3,
        name: "Suresh Pillai",
        rating: 3.9,
        comment: "Nice hotel for the price, just wish the WiFi was faster."
      },
      {
        id: 4,
        name: "Shreya Bose",
        rating: 3.6,
        comment: "Good location but service was a little slow during checkout."
      }
    ]
  },
  {
    id: 40,
    name: "Skyline Delhi",
    address: "Delhi, India",
    expandedAddress: "Dwarka Sector 10, near City Mall, New Delhi, India",
    availableFrom: "2026-09-07",
    availableTo: "2026-09-24",
    price: 2700,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "Gym",
      "AC",
      "Breakfast"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-dumbbell",
      "fa-solid fa-snowflake",
      "fa-solid fa-mug-saucer"
    ],
    rating: 4.4,
    reviews: 1165,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Karan Malhotra",
        rating: 4.4,
        comment: "Spacious rooms and good WiFi speed throughout our stay."
      },
      {
        id: 2,
        name: "Kavita Desai",
        rating: 4.1,
        comment: "Comfortable beds and quick check-in, would definitely come back."
      },
      {
        id: 3,
        name: "Vivek Choudhary",
        rating: 4.6,
        comment: "The view from the room was stunning, highly recommend this place."
      },
      {
        id: 4,
        name: "Tanvi Shah",
        rating: 4.3,
        comment: "Staff went out of their way to help us, truly appreciated."
      }
    ]
  },
  {
    id: 41,
    name: "Marine View Hotel",
    address: "Mumbai, Maharashtra",
    expandedAddress: "Marine Drive, near Girgaon Chowpatty, Mumbai, Maharashtra",
    availableFrom: "2026-09-01",
    availableTo: "2026-09-17",
    price: 5200,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Parking",
      "WiFi",
      "TV",
      "Room Service"
    ],
    amenitiesIcon: [
      "fa-solid fa-square-parking",
      "fa-solid fa-wifi",
      "fa-solid fa-tv",
      "fa-solid fa-bell-concierge"
    ],
    rating: 3.8,
    reviews: 1302,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Rahul Kapoor",
        rating: 3.8,
        comment: "Decent stay overall, though the room could have been a bit cleaner."
      },
      {
        id: 2,
        name: "Meera Krishnan",
        rating: 3.5,
        comment: "Room was fine but the AC was noisy at night."
      },
      {
        id: 3,
        name: "Rajesh Tiwari",
        rating: 4,
        comment: "Decent stay overall, though the room could have been a bit cleaner."
      },
      {
        id: 4,
        name: "Priya Verma",
        rating: 3.7,
        comment: "Room was fine but the AC was noisy at night."
      }
    ]
  },
  {
    id: 42,
    name: "Gateway Residency",
    address: "Mumbai, Maharashtra",
    expandedAddress: "Colaba, near Gateway of India, Mumbai, Maharashtra",
    availableFrom: "2026-09-03",
    availableTo: "2026-09-26",
    price: 4800,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "AC",
      "WiFi",
      "Restaurant",
      "24/7 Front Desk"
    ],
    amenitiesIcon: [
      "fa-solid fa-snowflake",
      "fa-solid fa-wifi",
      "fa-solid fa-utensils",
      "fa-solid fa-clock"
    ],
    rating: 4.5,
    reviews: 1439,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Manish Yadav",
        rating: 4.5,
        comment: "Loved the location and the amenities were exactly as described."
      },
      {
        id: 2,
        name: "Anjali Saxena",
        rating: 4.2,
        comment: "Clean rooms and friendly staff made our trip memorable."
      },
      {
        id: 3,
        name: "Harish Pandey",
        rating: 4.7,
        comment: "Perfect for a short trip, everything was well maintained."
      },
      {
        id: 4,
        name: "Ananya Iyer",
        rating: 4.4,
        comment: "Great stay, staff was very courteous and the room was spotless."
      }
    ]
  },
  {
    id: 43,
    name: "Mumbai Central Hotel",
    address: "Mumbai, Maharashtra",
    expandedAddress: "Mumbai Central, opposite Railway Station, Mumbai, Maharashtra",
    availableFrom: "2026-09-02",
    availableTo: "2026-09-15",
    price: 3600,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "AC",
      "TV",
      "Breakfast"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-tv",
      "fa-solid fa-mug-saucer"
    ],
    rating: 3.9,
    reviews: 126,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Aditya Bhatt",
        rating: 3.9,
        comment: "Average experience, food options were limited near the property."
      },
      {
        id: 2,
        name: "Isha Chopra",
        rating: 3.6,
        comment: "Comfortable enough for a short stay, nothing extraordinary though."
      },
      {
        id: 3,
        name: "Amit Singh",
        rating: 4.1,
        comment: "Average experience, food options were limited near the property."
      },
      {
        id: 4,
        name: "Pooja Joshi",
        rating: 3.8,
        comment: "Good location but service was a little slow during checkout."
      }
    ]
  },
  {
    id: 44,
    name: "Palm Grove Inn",
    address: "Mumbai, Maharashtra",
    expandedAddress: "Andheri West, near Lokhandwala Market, Mumbai, Maharashtra",
    availableFrom: "2026-09-05",
    availableTo: "2026-09-29",
    price: 3900,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "AC",
      "Parking",
      "Room Service"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-square-parking",
      "fa-solid fa-bell-concierge"
    ],
    rating: 4.6,
    reviews: 263,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Deepak Kumar",
        rating: 4.6,
        comment: "Excellent value for money, the breakfast was a nice touch."
      },
      {
        id: 2,
        name: "Lakshmi Menon",
        rating: 4.3,
        comment: "Smooth booking experience and the hotel exceeded expectations."
      },
      {
        id: 3,
        name: "Karan Malhotra",
        rating: 4.8,
        comment: "Spacious rooms and good WiFi speed throughout our stay."
      },
      {
        id: 4,
        name: "Kavita Desai",
        rating: 4.5,
        comment: "Comfortable beds and quick check-in, would definitely come back."
      }
    ]
  },
  {
    id: 45,
    name: "Royal Marine Hotel",
    address: "Mumbai, Maharashtra",
    expandedAddress: "Bandra West, near Bandstand, Mumbai, Maharashtra",
    availableFrom: "2026-09-06",
    availableTo: "2026-09-20",
    price: 6200,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1578683010236-d716f3983a37?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f3983a37?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f3983a37?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Pool",
      "WiFi",
      "AC",
      "Restaurant"
    ],
    amenitiesIcon: [
      "fa-solid fa-person-swimming",
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-utensils"
    ],
    rating: 4,
    reviews: 400,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Nikhil Bansal",
        rating: 4,
        comment: "Nice hotel for the price, just wish the WiFi was faster."
      },
      {
        id: 2,
        name: "Neha Gupta",
        rating: 3.7,
        comment: "Good location but service was a little slow during checkout."
      },
      {
        id: 3,
        name: "Rahul Kapoor",
        rating: 4.2,
        comment: "Decent stay overall, though the room could have been a bit cleaner."
      },
      {
        id: 4,
        name: "Meera Krishnan",
        rating: 3.9,
        comment: "Room was fine but the AC was noisy at night."
      }
    ]
  },
  {
    id: 46,
    name: "Harbour View Stay",
    address: "Mumbai, Maharashtra",
    expandedAddress: "Fort, near Horniman Circle, Mumbai, Maharashtra",
    availableFrom: "2026-09-01",
    availableTo: "2026-09-12",
    price: 4300,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "Gym",
      "AC",
      "Breakfast"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-dumbbell",
      "fa-solid fa-snowflake",
      "fa-solid fa-mug-saucer"
    ],
    rating: 4.7,
    reviews: 537,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Rohan Sharma",
        rating: 4.7,
        comment: "The view from the room was stunning, highly recommend this place."
      },
      {
        id: 2,
        name: "Sneha Reddy",
        rating: 4.4,
        comment: "Staff went out of their way to help us, truly appreciated."
      },
      {
        id: 3,
        name: "Manish Yadav",
        rating: 4.9,
        comment: "Loved the location and the amenities were exactly as described."
      },
      {
        id: 4,
        name: "Anjali Saxena",
        rating: 4.6,
        comment: "Clean rooms and friendly staff made our trip memorable."
      }
    ]
  },
  {
    id: 47,
    name: "Metro Mumbai Hotel",
    address: "Mumbai, Maharashtra",
    expandedAddress: "Powai, near Hiranandani Gardens, Mumbai, Maharashtra",
    availableFrom: "2026-09-04",
    availableTo: "2026-09-23",
    price: 4100,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Parking",
      "WiFi",
      "TV",
      "Room Service"
    ],
    amenitiesIcon: [
      "fa-solid fa-square-parking",
      "fa-solid fa-wifi",
      "fa-solid fa-tv",
      "fa-solid fa-bell-concierge"
    ],
    rating: 4.1,
    reviews: 674,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Vikram Rao",
        rating: 4.1,
        comment: "Decent stay overall, though the room could have been a bit cleaner."
      },
      {
        id: 2,
        name: "Divya Menon",
        rating: 3.8,
        comment: "Room was fine but the AC was noisy at night."
      },
      {
        id: 3,
        name: "Aditya Bhatt",
        rating: 4.3,
        comment: "Average experience, food options were limited near the property."
      },
      {
        id: 4,
        name: "Isha Chopra",
        rating: 4,
        comment: "Comfortable enough for a short stay, nothing extraordinary though."
      }
    ]
  },
  {
    id: 48,
    name: "The Coastal Palace",
    address: "Mumbai, Maharashtra",
    expandedAddress: "Juhu, near Juhu Beach, Mumbai, Maharashtra",
    availableFrom: "2026-09-08",
    availableTo: "2026-09-30",
    price: 5500,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "AC",
      "WiFi",
      "Restaurant",
      "24/7 Front Desk"
    ],
    amenitiesIcon: [
      "fa-solid fa-snowflake",
      "fa-solid fa-wifi",
      "fa-solid fa-utensils",
      "fa-solid fa-clock"
    ],
    rating: 4.8,
    reviews: 811,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Arjun Nair",
        rating: 4.8,
        comment: "Perfect for a short trip, everything was well maintained."
      },
      {
        id: 2,
        name: "Ritu Chawla",
        rating: 4.5,
        comment: "Great stay, staff was very courteous and the room was spotless."
      },
      {
        id: 3,
        name: "Deepak Kumar",
        rating: 5,
        comment: "Excellent value for money, the breakfast was a nice touch."
      },
      {
        id: 4,
        name: "Lakshmi Menon",
        rating: 4.7,
        comment: "Smooth booking experience and the hotel exceeded expectations."
      }
    ]
  },
  {
    id: 49,
    name: "Urban Pearl Hotel",
    address: "Mumbai, Maharashtra",
    expandedAddress: "Lower Parel, near Phoenix Palladium, Mumbai, Maharashtra",
    availableFrom: "2026-09-02",
    availableTo: "2026-09-21",
    price: 4700,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "AC",
      "TV",
      "Breakfast"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-tv",
      "fa-solid fa-mug-saucer"
    ],
    rating: 4.2,
    reviews: 948,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Sanjay Mehta",
        rating: 4.2,
        comment: "Staff went out of their way to help us, truly appreciated."
      },
      {
        id: 2,
        name: "Nisha Agarwal",
        rating: 3.9,
        comment: "Loved the location and the amenities were exactly as described."
      },
      {
        id: 3,
        name: "Nikhil Bansal",
        rating: 4.4,
        comment: "Clean rooms and friendly staff made our trip memorable."
      },
      {
        id: 4,
        name: "Neha Gupta",
        rating: 4.1,
        comment: "Perfect for a short trip, everything was well maintained."
      }
    ]
  },
  {
    id: 50,
    name: "Western Heights",
    address: "Mumbai, Maharashtra",
    expandedAddress: "Goregaon West, near Link Road, Mumbai, Maharashtra",
    availableFrom: "2026-09-07",
    availableTo: "2026-09-25",
    price: 3200,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "AC",
      "Parking",
      "Room Service"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-square-parking",
      "fa-solid fa-bell-concierge"
    ],
    rating: 4.9,
    reviews: 1085,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Suresh Pillai",
        rating: 4.9,
        comment: "Spacious rooms and good WiFi speed throughout our stay."
      },
      {
        id: 2,
        name: "Shreya Bose",
        rating: 4.6,
        comment: "Comfortable beds and quick check-in, would definitely come back."
      },
      {
        id: 3,
        name: "Rohan Sharma",
        rating: 5,
        comment: "The view from the room was stunning, highly recommend this place."
      },
      {
        id: 4,
        name: "Sneha Reddy",
        rating: 4.8,
        comment: "Staff went out of their way to help us, truly appreciated."
      }
    ]
  },
  {
    id: 51,
    name: "Bengaluru Central Hotel",
    address: "Bengaluru, Karnataka",
    expandedAddress: "MG Road, near Trinity Metro Station, Bengaluru, Karnataka",
    availableFrom: "2026-09-01",
    availableTo: "2026-09-19",
    price: 3300,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Pool",
      "WiFi",
      "AC",
      "Restaurant"
    ],
    amenitiesIcon: [
      "fa-solid fa-person-swimming",
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-utensils"
    ],
    rating: 4.3,
    reviews: 1222,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Vivek Choudhary",
        rating: 4.3,
        comment: "Great stay, staff was very courteous and the room was spotless."
      },
      {
        id: 2,
        name: "Tanvi Shah",
        rating: 4,
        comment: "Excellent value for money, the breakfast was a nice touch."
      },
      {
        id: 3,
        name: "Vikram Rao",
        rating: 4.5,
        comment: "Smooth booking experience and the hotel exceeded expectations."
      },
      {
        id: 4,
        name: "Divya Menon",
        rating: 4.2,
        comment: "Spacious rooms and good WiFi speed throughout our stay."
      }
    ]
  },
  {
    id: 52,
    name: "Garden City Inn",
    address: "Bengaluru, Karnataka",
    expandedAddress: "Indiranagar, near 100 Feet Road, Bengaluru, Karnataka",
    availableFrom: "2026-09-03",
    availableTo: "2026-09-30",
    price: 3900,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "Gym",
      "AC",
      "Breakfast"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-dumbbell",
      "fa-solid fa-snowflake",
      "fa-solid fa-mug-saucer"
    ],
    rating: 3.7,
    reviews: 1359,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Rajesh Tiwari",
        rating: 3.7,
        comment: "Good location but service was a little slow during checkout."
      },
      {
        id: 2,
        name: "Priya Verma",
        rating: 3.4,
        comment: "Nice hotel for the price, just wish the WiFi was faster."
      },
      {
        id: 3,
        name: "Arjun Nair",
        rating: 3.9,
        comment: "Good location but service was a little slow during checkout."
      },
      {
        id: 4,
        name: "Ritu Chawla",
        rating: 3.6,
        comment: "Decent stay overall, though the room could have been a bit cleaner."
      }
    ]
  },
  {
    id: 53,
    name: "Silicon Valley Stay",
    address: "Bengaluru, Karnataka",
    expandedAddress: "Whitefield, near ITPL Main Road, Bengaluru, Karnataka",
    availableFrom: "2026-09-05",
    availableTo: "2026-09-22",
    price: 3600,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Parking",
      "WiFi",
      "TV",
      "Room Service"
    ],
    amenitiesIcon: [
      "fa-solid fa-square-parking",
      "fa-solid fa-wifi",
      "fa-solid fa-tv",
      "fa-solid fa-bell-concierge"
    ],
    rating: 4.4,
    reviews: 46,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Harish Pandey",
        rating: 4.4,
        comment: "Comfortable beds and quick check-in, would definitely come back."
      },
      {
        id: 2,
        name: "Ananya Iyer",
        rating: 4.1,
        comment: "The view from the room was stunning, highly recommend this place."
      },
      {
        id: 3,
        name: "Sanjay Mehta",
        rating: 4.6,
        comment: "Staff went out of their way to help us, truly appreciated."
      },
      {
        id: 4,
        name: "Nisha Agarwal",
        rating: 4.3,
        comment: "Loved the location and the amenities were exactly as described."
      }
    ]
  },
  {
    id: 54,
    name: "Royal Garden Hotel",
    address: "Bengaluru, Karnataka",
    expandedAddress: "Jayanagar, near 4th Block Market, Bengaluru, Karnataka",
    availableFrom: "2026-09-02",
    availableTo: "2026-09-16",
    price: 2700,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "AC",
      "WiFi",
      "Restaurant",
      "24/7 Front Desk"
    ],
    amenitiesIcon: [
      "fa-solid fa-snowflake",
      "fa-solid fa-wifi",
      "fa-solid fa-utensils",
      "fa-solid fa-clock"
    ],
    rating: 3.8,
    reviews: 183,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Amit Singh",
        rating: 3.8,
        comment: "Room was fine but the AC was noisy at night."
      },
      {
        id: 2,
        name: "Pooja Joshi",
        rating: 3.5,
        comment: "Decent stay overall, though the room could have been a bit cleaner."
      },
      {
        id: 3,
        name: "Suresh Pillai",
        rating: 4,
        comment: "Room was fine but the AC was noisy at night."
      },
      {
        id: 4,
        name: "Shreya Bose",
        rating: 3.7,
        comment: "Average experience, food options were limited near the property."
      }
    ]
  },
  {
    id: 55,
    name: "The Bangalore Grand",
    address: "Bengaluru, Karnataka",
    expandedAddress: "Koramangala, near Forum Mall, Bengaluru, Karnataka",
    availableFrom: "2026-09-06",
    availableTo: "2026-09-28",
    price: 4400,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1578683010236-d716f3983a37?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f3983a37?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f3983a37?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "AC",
      "TV",
      "Breakfast"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-tv",
      "fa-solid fa-mug-saucer"
    ],
    rating: 4.5,
    reviews: 320,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Karan Malhotra",
        rating: 4.5,
        comment: "Clean rooms and friendly staff made our trip memorable."
      },
      {
        id: 2,
        name: "Kavita Desai",
        rating: 4.2,
        comment: "Perfect for a short trip, everything was well maintained."
      },
      {
        id: 3,
        name: "Vivek Choudhary",
        rating: 4.7,
        comment: "Great stay, staff was very courteous and the room was spotless."
      },
      {
        id: 4,
        name: "Tanvi Shah",
        rating: 4.4,
        comment: "Excellent value for money, the breakfast was a nice touch."
      }
    ]
  },
  {
    id: 56,
    name: "Tech Park Residency",
    address: "Bengaluru, Karnataka",
    expandedAddress: "Electronic City, near Phase 1 Main Road, Bengaluru, Karnataka",
    availableFrom: "2026-09-01",
    availableTo: "2026-09-14",
    price: 2300,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "AC",
      "Parking",
      "Room Service"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-square-parking",
      "fa-solid fa-bell-concierge"
    ],
    rating: 3.9,
    reviews: 457,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Rahul Kapoor",
        rating: 3.9,
        comment: "Comfortable enough for a short stay, nothing extraordinary though."
      },
      {
        id: 2,
        name: "Meera Krishnan",
        rating: 3.6,
        comment: "Average experience, food options were limited near the property."
      },
      {
        id: 3,
        name: "Rajesh Tiwari",
        rating: 4.1,
        comment: "Good location but service was a little slow during checkout."
      },
      {
        id: 4,
        name: "Priya Verma",
        rating: 3.8,
        comment: "Nice hotel for the price, just wish the WiFi was faster."
      }
    ]
  },
  {
    id: 57,
    name: "Lake View Bengaluru",
    address: "Bengaluru, Karnataka",
    expandedAddress: "Ulsoor, near Ulsoor Lake, Bengaluru, Karnataka",
    availableFrom: "2026-09-04",
    availableTo: "2026-09-24",
    price: 3000,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Pool",
      "WiFi",
      "AC",
      "Restaurant"
    ],
    amenitiesIcon: [
      "fa-solid fa-person-swimming",
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-utensils"
    ],
    rating: 4.6,
    reviews: 594,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Manish Yadav",
        rating: 4.6,
        comment: "Smooth booking experience and the hotel exceeded expectations."
      },
      {
        id: 2,
        name: "Anjali Saxena",
        rating: 4.3,
        comment: "Spacious rooms and good WiFi speed throughout our stay."
      },
      {
        id: 3,
        name: "Harish Pandey",
        rating: 4.8,
        comment: "Comfortable beds and quick check-in, would definitely come back."
      },
      {
        id: 4,
        name: "Ananya Iyer",
        rating: 4.5,
        comment: "The view from the room was stunning, highly recommend this place."
      }
    ]
  },
  {
    id: 58,
    name: "Urban Nest Hotel",
    address: "Bengaluru, Karnataka",
    expandedAddress: "HSR Layout, near Agara Lake, Bengaluru, Karnataka",
    availableFrom: "2026-09-07",
    availableTo: "2026-09-30",
    price: 2800,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "Gym",
      "AC",
      "Breakfast"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-dumbbell",
      "fa-solid fa-snowflake",
      "fa-solid fa-mug-saucer"
    ],
    rating: 4,
    reviews: 731,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Aditya Bhatt",
        rating: 4,
        comment: "Good location but service was a little slow during checkout."
      },
      {
        id: 2,
        name: "Isha Chopra",
        rating: 3.7,
        comment: "Decent stay overall, though the room could have been a bit cleaner."
      },
      {
        id: 3,
        name: "Amit Singh",
        rating: 4.2,
        comment: "Room was fine but the AC was noisy at night."
      },
      {
        id: 4,
        name: "Pooja Joshi",
        rating: 3.9,
        comment: "Decent stay overall, though the room could have been a bit cleaner."
      }
    ]
  },
  {
    id: 59,
    name: "Cedar Park Inn",
    address: "Bengaluru, Karnataka",
    expandedAddress: "Malleshwaram, near 8th Cross Road, Bengaluru, Karnataka",
    availableFrom: "2026-09-02",
    availableTo: "2026-09-18",
    price: 2500,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Parking",
      "WiFi",
      "TV",
      "Room Service"
    ],
    amenitiesIcon: [
      "fa-solid fa-square-parking",
      "fa-solid fa-wifi",
      "fa-solid fa-tv",
      "fa-solid fa-bell-concierge"
    ],
    rating: 4.7,
    reviews: 868,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Deepak Kumar",
        rating: 4.7,
        comment: "Staff went out of their way to help us, truly appreciated."
      },
      {
        id: 2,
        name: "Lakshmi Menon",
        rating: 4.4,
        comment: "Loved the location and the amenities were exactly as described."
      },
      {
        id: 3,
        name: "Karan Malhotra",
        rating: 4.9,
        comment: "Clean rooms and friendly staff made our trip memorable."
      },
      {
        id: 4,
        name: "Kavita Desai",
        rating: 4.6,
        comment: "Perfect for a short trip, everything was well maintained."
      }
    ]
  },
  {
    id: 60,
    name: "Skyline Bengaluru",
    address: "Bengaluru, Karnataka",
    expandedAddress: "Hebbal, near Outer Ring Road, Bengaluru, Karnataka",
    availableFrom: "2026-09-08",
    availableTo: "2026-09-27",
    price: 3500,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "AC",
      "WiFi",
      "Restaurant",
      "24/7 Front Desk"
    ],
    amenitiesIcon: [
      "fa-solid fa-snowflake",
      "fa-solid fa-wifi",
      "fa-solid fa-utensils",
      "fa-solid fa-clock"
    ],
    rating: 4.1,
    reviews: 1005,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Nikhil Bansal",
        rating: 4.1,
        comment: "Room was fine but the AC was noisy at night."
      },
      {
        id: 2,
        name: "Neha Gupta",
        rating: 3.8,
        comment: "Average experience, food options were limited near the property."
      },
      {
        id: 3,
        name: "Rahul Kapoor",
        rating: 4.3,
        comment: "Comfortable enough for a short stay, nothing extraordinary though."
      },
      {
        id: 4,
        name: "Meera Krishnan",
        rating: 4,
        comment: "Average experience, food options were limited near the property."
      }
    ]
  },
  {
    id: 61,
    name: "Park Street Residency",
    address: "Kolkata, West Bengal",
    expandedAddress: "Park Street, near Park Street Metro, Kolkata, West Bengal",
    availableFrom: "2026-09-01",
    availableTo: "2026-09-20",
    price: 2800,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "AC",
      "TV",
      "Breakfast"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-tv",
      "fa-solid fa-mug-saucer"
    ],
    rating: 4.8,
    reviews: 1142,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Rohan Sharma",
        rating: 4.8,
        comment: "Great stay, staff was very courteous and the room was spotless."
      },
      {
        id: 2,
        name: "Sneha Reddy",
        rating: 4.5,
        comment: "Excellent value for money, the breakfast was a nice touch."
      },
      {
        id: 3,
        name: "Manish Yadav",
        rating: 5,
        comment: "Smooth booking experience and the hotel exceeded expectations."
      },
      {
        id: 4,
        name: "Anjali Saxena",
        rating: 4.7,
        comment: "Spacious rooms and good WiFi speed throughout our stay."
      }
    ]
  },
  {
    id: 62,
    name: "Victoria Grand Hotel",
    address: "Kolkata, West Bengal",
    expandedAddress: "Maidan, near Victoria Memorial, Kolkata, West Bengal",
    availableFrom: "2026-09-03",
    availableTo: "2026-09-27",
    price: 3500,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "AC",
      "Parking",
      "Room Service"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-square-parking",
      "fa-solid fa-bell-concierge"
    ],
    rating: 4.2,
    reviews: 1279,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Vikram Rao",
        rating: 4.2,
        comment: "Loved the location and the amenities were exactly as described."
      },
      {
        id: 2,
        name: "Divya Menon",
        rating: 3.9,
        comment: "Clean rooms and friendly staff made our trip memorable."
      },
      {
        id: 3,
        name: "Aditya Bhatt",
        rating: 4.4,
        comment: "Perfect for a short trip, everything was well maintained."
      },
      {
        id: 4,
        name: "Isha Chopra",
        rating: 4.1,
        comment: "Great stay, staff was very courteous and the room was spotless."
      }
    ]
  },
  {
    id: 63,
    name: "Hooghly View Inn",
    address: "Kolkata, West Bengal",
    expandedAddress: "Babu Ghat, near Prinsep Ghat, Kolkata, West Bengal",
    availableFrom: "2026-09-05",
    availableTo: "2026-09-18",
    price: 2400,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Pool",
      "WiFi",
      "AC",
      "Restaurant"
    ],
    amenitiesIcon: [
      "fa-solid fa-person-swimming",
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-utensils"
    ],
    rating: 4.9,
    reviews: 1416,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Arjun Nair",
        rating: 4.9,
        comment: "Comfortable beds and quick check-in, would definitely come back."
      },
      {
        id: 2,
        name: "Ritu Chawla",
        rating: 4.6,
        comment: "The view from the room was stunning, highly recommend this place."
      },
      {
        id: 3,
        name: "Deepak Kumar",
        rating: 5,
        comment: "Staff went out of their way to help us, truly appreciated."
      },
      {
        id: 4,
        name: "Lakshmi Menon",
        rating: 4.8,
        comment: "Loved the location and the amenities were exactly as described."
      }
    ]
  },
  {
    id: 64,
    name: "City of Joy Hotel",
    address: "Kolkata, West Bengal",
    expandedAddress: "Salt Lake, near Sector V, Kolkata, West Bengal",
    availableFrom: "2026-09-02",
    availableTo: "2026-09-30",
    price: 3100,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "Gym",
      "AC",
      "Breakfast"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-dumbbell",
      "fa-solid fa-snowflake",
      "fa-solid fa-mug-saucer"
    ],
    rating: 4.3,
    reviews: 103,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Sanjay Mehta",
        rating: 4.3,
        comment: "Excellent value for money, the breakfast was a nice touch."
      },
      {
        id: 2,
        name: "Nisha Agarwal",
        rating: 4,
        comment: "Smooth booking experience and the hotel exceeded expectations."
      },
      {
        id: 3,
        name: "Nikhil Bansal",
        rating: 4.5,
        comment: "Spacious rooms and good WiFi speed throughout our stay."
      },
      {
        id: 4,
        name: "Neha Gupta",
        rating: 4.2,
        comment: "Comfortable beds and quick check-in, would definitely come back."
      }
    ]
  },
  {
    id: 65,
    name: "Howrah Palace",
    address: "Kolkata, West Bengal",
    expandedAddress: "Howrah, near Howrah Bridge, West Bengal",
    availableFrom: "2026-09-06",
    availableTo: "2026-09-22",
    price: 1900,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1578683010236-d716f3983a37?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f3983a37?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f3983a37?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Parking",
      "WiFi",
      "TV",
      "Room Service"
    ],
    amenitiesIcon: [
      "fa-solid fa-square-parking",
      "fa-solid fa-wifi",
      "fa-solid fa-tv",
      "fa-solid fa-bell-concierge"
    ],
    rating: 3.7,
    reviews: 240,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Suresh Pillai",
        rating: 3.7,
        comment: "Nice hotel for the price, just wish the WiFi was faster."
      },
      {
        id: 2,
        name: "Shreya Bose",
        rating: 3.4,
        comment: "Good location but service was a little slow during checkout."
      },
      {
        id: 3,
        name: "Rohan Sharma",
        rating: 3.9,
        comment: "Decent stay overall, though the room could have been a bit cleaner."
      },
      {
        id: 4,
        name: "Sneha Reddy",
        rating: 3.6,
        comment: "Room was fine but the AC was noisy at night."
      }
    ]
  },
  {
    id: 66,
    name: "Royal Bengal Stay",
    address: "Kolkata, West Bengal",
    expandedAddress: "New Town, near Eco Park, Kolkata, West Bengal",
    availableFrom: "2026-09-01",
    availableTo: "2026-09-15",
    price: 2600,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "AC",
      "WiFi",
      "Restaurant",
      "24/7 Front Desk"
    ],
    amenitiesIcon: [
      "fa-solid fa-snowflake",
      "fa-solid fa-wifi",
      "fa-solid fa-utensils",
      "fa-solid fa-clock"
    ],
    rating: 4.4,
    reviews: 377,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Vivek Choudhary",
        rating: 4.4,
        comment: "The view from the room was stunning, highly recommend this place."
      },
      {
        id: 2,
        name: "Tanvi Shah",
        rating: 4.1,
        comment: "Staff went out of their way to help us, truly appreciated."
      },
      {
        id: 3,
        name: "Vikram Rao",
        rating: 4.6,
        comment: "Loved the location and the amenities were exactly as described."
      },
      {
        id: 4,
        name: "Divya Menon",
        rating: 4.3,
        comment: "Clean rooms and friendly staff made our trip memorable."
      }
    ]
  },
  {
    id: 67,
    name: "Lake Town Hotel",
    address: "Kolkata, West Bengal",
    expandedAddress: "Lake Town, near VIP Road, Kolkata, West Bengal",
    availableFrom: "2026-09-04",
    availableTo: "2026-09-25",
    price: 2200,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "AC",
      "TV",
      "Breakfast"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-tv",
      "fa-solid fa-mug-saucer"
    ],
    rating: 3.8,
    reviews: 514,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Rajesh Tiwari",
        rating: 3.8,
        comment: "Decent stay overall, though the room could have been a bit cleaner."
      },
      {
        id: 2,
        name: "Priya Verma",
        rating: 3.5,
        comment: "Room was fine but the AC was noisy at night."
      },
      {
        id: 3,
        name: "Arjun Nair",
        rating: 4,
        comment: "Average experience, food options were limited near the property."
      },
      {
        id: 4,
        name: "Ritu Chawla",
        rating: 3.7,
        comment: "Comfortable enough for a short stay, nothing extraordinary though."
      }
    ]
  },
  {
    id: 68,
    name: "Heritage Kolkata",
    address: "Kolkata, West Bengal",
    expandedAddress: "Esplanade, near New Market, Kolkata, West Bengal",
    availableFrom: "2026-09-07",
    availableTo: "2026-09-29",
    price: 2900,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "AC",
      "Parking",
      "Room Service"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-square-parking",
      "fa-solid fa-bell-concierge"
    ],
    rating: 4.5,
    reviews: 651,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Harish Pandey",
        rating: 4.5,
        comment: "Perfect for a short trip, everything was well maintained."
      },
      {
        id: 2,
        name: "Ananya Iyer",
        rating: 4.2,
        comment: "Great stay, staff was very courteous and the room was spotless."
      },
      {
        id: 3,
        name: "Sanjay Mehta",
        rating: 4.7,
        comment: "Excellent value for money, the breakfast was a nice touch."
      },
      {
        id: 4,
        name: "Nisha Agarwal",
        rating: 4.4,
        comment: "Smooth booking experience and the hotel exceeded expectations."
      }
    ]
  },
  {
    id: 69,
    name: "Bengal Palace",
    address: "Kolkata, West Bengal",
    expandedAddress: "Ballygunge, near Gariahat Market, Kolkata, West Bengal",
    availableFrom: "2026-09-02",
    availableTo: "2026-09-21",
    price: 3200,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Pool",
      "WiFi",
      "AC",
      "Restaurant"
    ],
    amenitiesIcon: [
      "fa-solid fa-person-swimming",
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-utensils"
    ],
    rating: 3.9,
    reviews: 788,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Amit Singh",
        rating: 3.9,
        comment: "Average experience, food options were limited near the property."
      },
      {
        id: 2,
        name: "Pooja Joshi",
        rating: 3.6,
        comment: "Good location but service was a little slow during checkout."
      },
      {
        id: 3,
        name: "Suresh Pillai",
        rating: 4.1,
        comment: "Nice hotel for the price, just wish the WiFi was faster."
      },
      {
        id: 4,
        name: "Shreya Bose",
        rating: 3.8,
        comment: "Good location but service was a little slow during checkout."
      }
    ]
  },
  {
    id: 70,
    name: "Eastern Crown Hotel",
    address: "Kolkata, West Bengal",
    expandedAddress: "Alipore, near Alipore Zoo, Kolkata, West Bengal",
    availableFrom: "2026-09-08",
    availableTo: "2026-09-30",
    price: 3700,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "Gym",
      "AC",
      "Breakfast"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-dumbbell",
      "fa-solid fa-snowflake",
      "fa-solid fa-mug-saucer"
    ],
    rating: 4.6,
    reviews: 925,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Karan Malhotra",
        rating: 4.6,
        comment: "Spacious rooms and good WiFi speed throughout our stay."
      },
      {
        id: 2,
        name: "Kavita Desai",
        rating: 4.3,
        comment: "Comfortable beds and quick check-in, would definitely come back."
      },
      {
        id: 3,
        name: "Vivek Choudhary",
        rating: 4.8,
        comment: "The view from the room was stunning, highly recommend this place."
      },
      {
        id: 4,
        name: "Tanvi Shah",
        rating: 4.5,
        comment: "Staff went out of their way to help us, truly appreciated."
      }
    ]
  },
  {
    id: 71,
    name: "Hyderabad Palace",
    address: "Hyderabad, Telangana",
    expandedAddress: "Banjara Hills, near Road No. 12, Hyderabad, Telangana",
    availableFrom: "2026-09-01",
    availableTo: "2026-09-18",
    price: 3200,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Parking",
      "WiFi",
      "TV",
      "Room Service"
    ],
    amenitiesIcon: [
      "fa-solid fa-square-parking",
      "fa-solid fa-wifi",
      "fa-solid fa-tv",
      "fa-solid fa-bell-concierge"
    ],
    rating: 4,
    reviews: 1062,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Rahul Kapoor",
        rating: 4,
        comment: "Decent stay overall, though the room could have been a bit cleaner."
      },
      {
        id: 2,
        name: "Meera Krishnan",
        rating: 3.7,
        comment: "Room was fine but the AC was noisy at night."
      },
      {
        id: 3,
        name: "Rajesh Tiwari",
        rating: 4.2,
        comment: "Decent stay overall, though the room could have been a bit cleaner."
      },
      {
        id: 4,
        name: "Priya Verma",
        rating: 3.9,
        comment: "Room was fine but the AC was noisy at night."
      }
    ]
  },
  {
    id: 72,
    name: "Charminar View Hotel",
    address: "Hyderabad, Telangana",
    expandedAddress: "Old City, near Charminar, Hyderabad, Telangana",
    availableFrom: "2026-09-03",
    availableTo: "2026-09-25",
    price: 2100,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "AC",
      "WiFi",
      "Restaurant",
      "24/7 Front Desk"
    ],
    amenitiesIcon: [
      "fa-solid fa-snowflake",
      "fa-solid fa-wifi",
      "fa-solid fa-utensils",
      "fa-solid fa-clock"
    ],
    rating: 4.7,
    reviews: 1199,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Manish Yadav",
        rating: 4.7,
        comment: "Loved the location and the amenities were exactly as described."
      },
      {
        id: 2,
        name: "Anjali Saxena",
        rating: 4.4,
        comment: "Clean rooms and friendly staff made our trip memorable."
      },
      {
        id: 3,
        name: "Harish Pandey",
        rating: 4.9,
        comment: "Perfect for a short trip, everything was well maintained."
      },
      {
        id: 4,
        name: "Ananya Iyer",
        rating: 4.6,
        comment: "Great stay, staff was very courteous and the room was spotless."
      }
    ]
  },
  {
    id: 73,
    name: "Hitech Grand",
    address: "Hyderabad, Telangana",
    expandedAddress: "Hitech City, near Cyber Towers, Hyderabad, Telangana",
    availableFrom: "2026-09-02",
    availableTo: "2026-09-30",
    price: 3900,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "AC",
      "TV",
      "Breakfast"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-tv",
      "fa-solid fa-mug-saucer"
    ],
    rating: 4.1,
    reviews: 1336,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Aditya Bhatt",
        rating: 4.1,
        comment: "Average experience, food options were limited near the property."
      },
      {
        id: 2,
        name: "Isha Chopra",
        rating: 3.8,
        comment: "Comfortable enough for a short stay, nothing extraordinary though."
      },
      {
        id: 3,
        name: "Amit Singh",
        rating: 4.3,
        comment: "Average experience, food options were limited near the property."
      },
      {
        id: 4,
        name: "Pooja Joshi",
        rating: 4,
        comment: "Good location but service was a little slow during checkout."
      }
    ]
  },
  {
    id: 74,
    name: "Lake View Hyderabad",
    address: "Hyderabad, Telangana",
    expandedAddress: "Tank Bund, near Hussain Sagar Lake, Hyderabad, Telangana",
    availableFrom: "2026-09-05",
    availableTo: "2026-09-21",
    price: 2800,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "AC",
      "Parking",
      "Room Service"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-square-parking",
      "fa-solid fa-bell-concierge"
    ],
    rating: 4.8,
    reviews: 1473,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Deepak Kumar",
        rating: 4.8,
        comment: "Excellent value for money, the breakfast was a nice touch."
      },
      {
        id: 2,
        name: "Lakshmi Menon",
        rating: 4.5,
        comment: "Smooth booking experience and the hotel exceeded expectations."
      },
      {
        id: 3,
        name: "Karan Malhotra",
        rating: 5,
        comment: "Spacious rooms and good WiFi speed throughout our stay."
      },
      {
        id: 4,
        name: "Kavita Desai",
        rating: 4.7,
        comment: "Comfortable beds and quick check-in, would definitely come back."
      }
    ]
  },
  {
    id: 75,
    name: "The Deccan Palace",
    address: "Hyderabad, Telangana",
    expandedAddress: "Begumpet, near Hyderabad Central, Hyderabad, Telangana",
    availableFrom: "2026-09-06",
    availableTo: "2026-09-19",
    price: 3400,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1578683010236-d716f3983a37?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f3983a37?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f3983a37?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Pool",
      "WiFi",
      "AC",
      "Restaurant"
    ],
    amenitiesIcon: [
      "fa-solid fa-person-swimming",
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-utensils"
    ],
    rating: 4.2,
    reviews: 160,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Nikhil Bansal",
        rating: 4.2,
        comment: "Clean rooms and friendly staff made our trip memorable."
      },
      {
        id: 2,
        name: "Neha Gupta",
        rating: 3.9,
        comment: "Perfect for a short trip, everything was well maintained."
      },
      {
        id: 3,
        name: "Rahul Kapoor",
        rating: 4.4,
        comment: "Great stay, staff was very courteous and the room was spotless."
      },
      {
        id: 4,
        name: "Meera Krishnan",
        rating: 4.1,
        comment: "Excellent value for money, the breakfast was a nice touch."
      }
    ]
  },
  {
    id: 76,
    name: "Royal Nizam Hotel",
    address: "Hyderabad, Telangana",
    expandedAddress: "Abids, near GPO Hyderabad, Hyderabad, Telangana",
    availableFrom: "2026-09-01",
    availableTo: "2026-09-14",
    price: 2500,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "Gym",
      "AC",
      "Breakfast"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-dumbbell",
      "fa-solid fa-snowflake",
      "fa-solid fa-mug-saucer"
    ],
    rating: 4.9,
    reviews: 297,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Rohan Sharma",
        rating: 4.9,
        comment: "The view from the room was stunning, highly recommend this place."
      },
      {
        id: 2,
        name: "Sneha Reddy",
        rating: 4.6,
        comment: "Staff went out of their way to help us, truly appreciated."
      },
      {
        id: 3,
        name: "Manish Yadav",
        rating: 5,
        comment: "Loved the location and the amenities were exactly as described."
      },
      {
        id: 4,
        name: "Anjali Saxena",
        rating: 4.8,
        comment: "Clean rooms and friendly staff made our trip memorable."
      }
    ]
  },
  {
    id: 77,
    name: "Tech City Inn",
    address: "Hyderabad, Telangana",
    expandedAddress: "Madhapur, near Inorbit Mall, Hyderabad, Telangana",
    availableFrom: "2026-09-04",
    availableTo: "2026-09-28",
    price: 3700,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Parking",
      "WiFi",
      "TV",
      "Room Service"
    ],
    amenitiesIcon: [
      "fa-solid fa-square-parking",
      "fa-solid fa-wifi",
      "fa-solid fa-tv",
      "fa-solid fa-bell-concierge"
    ],
    rating: 4.3,
    reviews: 434,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Vikram Rao",
        rating: 4.3,
        comment: "Smooth booking experience and the hotel exceeded expectations."
      },
      {
        id: 2,
        name: "Divya Menon",
        rating: 4,
        comment: "Spacious rooms and good WiFi speed throughout our stay."
      },
      {
        id: 3,
        name: "Aditya Bhatt",
        rating: 4.5,
        comment: "Comfortable beds and quick check-in, would definitely come back."
      },
      {
        id: 4,
        name: "Isha Chopra",
        rating: 4.2,
        comment: "The view from the room was stunning, highly recommend this place."
      }
    ]
  },
  {
    id: 78,
    name: "Pearl City Hotel",
    address: "Hyderabad, Telangana",
    expandedAddress: "Kukatpally, near JNTU Metro, Hyderabad, Telangana",
    availableFrom: "2026-09-07",
    availableTo: "2026-09-30",
    price: 2200,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "AC",
      "WiFi",
      "Restaurant",
      "24/7 Front Desk"
    ],
    amenitiesIcon: [
      "fa-solid fa-snowflake",
      "fa-solid fa-wifi",
      "fa-solid fa-utensils",
      "fa-solid fa-clock"
    ],
    rating: 3.7,
    reviews: 571,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Arjun Nair",
        rating: 3.7,
        comment: "Good location but service was a little slow during checkout."
      },
      {
        id: 2,
        name: "Ritu Chawla",
        rating: 3.4,
        comment: "Decent stay overall, though the room could have been a bit cleaner."
      },
      {
        id: 3,
        name: "Deepak Kumar",
        rating: 3.9,
        comment: "Room was fine but the AC was noisy at night."
      },
      {
        id: 4,
        name: "Lakshmi Menon",
        rating: 3.6,
        comment: "Decent stay overall, though the room could have been a bit cleaner."
      }
    ]
  },
  {
    id: 79,
    name: "Golconda Residency",
    address: "Hyderabad, Telangana",
    expandedAddress: "Mehdipatnam, near Rethibowli Junction, Hyderabad, Telangana",
    availableFrom: "2026-09-02",
    availableTo: "2026-09-17",
    price: 2300,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "AC",
      "TV",
      "Breakfast"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-tv",
      "fa-solid fa-mug-saucer"
    ],
    rating: 4.4,
    reviews: 708,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Sanjay Mehta",
        rating: 4.4,
        comment: "Staff went out of their way to help us, truly appreciated."
      },
      {
        id: 2,
        name: "Nisha Agarwal",
        rating: 4.1,
        comment: "Loved the location and the amenities were exactly as described."
      },
      {
        id: 3,
        name: "Nikhil Bansal",
        rating: 4.6,
        comment: "Clean rooms and friendly staff made our trip memorable."
      },
      {
        id: 4,
        name: "Neha Gupta",
        rating: 4.3,
        comment: "Perfect for a short trip, everything was well maintained."
      }
    ]
  },
  {
    id: 80,
    name: "Deccan Heights",
    address: "Hyderabad, Telangana",
    expandedAddress: "Kondapur, near Botanical Garden, Hyderabad, Telangana",
    availableFrom: "2026-09-08",
    availableTo: "2026-09-24",
    price: 3000,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "AC",
      "Parking",
      "Room Service"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-square-parking",
      "fa-solid fa-bell-concierge"
    ],
    rating: 3.8,
    reviews: 845,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Suresh Pillai",
        rating: 3.8,
        comment: "Room was fine but the AC was noisy at night."
      },
      {
        id: 2,
        name: "Shreya Bose",
        rating: 3.5,
        comment: "Average experience, food options were limited near the property."
      },
      {
        id: 3,
        name: "Rohan Sharma",
        rating: 4,
        comment: "Comfortable enough for a short stay, nothing extraordinary though."
      },
      {
        id: 4,
        name: "Sneha Reddy",
        rating: 3.7,
        comment: "Average experience, food options were limited near the property."
      }
    ]
  },
  {
    id: 81,
    name: "Chennai Marina Hotel",
    address: "Chennai, Tamil Nadu",
    expandedAddress: "Marina Beach Road, near Marina Beach, Chennai, Tamil Nadu",
    availableFrom: "2026-09-01",
    availableTo: "2026-09-20",
    price: 2900,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Pool",
      "WiFi",
      "AC",
      "Restaurant"
    ],
    amenitiesIcon: [
      "fa-solid fa-person-swimming",
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-utensils"
    ],
    rating: 4.5,
    reviews: 982,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Vivek Choudhary",
        rating: 4.5,
        comment: "Great stay, staff was very courteous and the room was spotless."
      },
      {
        id: 2,
        name: "Tanvi Shah",
        rating: 4.2,
        comment: "Excellent value for money, the breakfast was a nice touch."
      },
      {
        id: 3,
        name: "Vikram Rao",
        rating: 4.7,
        comment: "Smooth booking experience and the hotel exceeded expectations."
      },
      {
        id: 4,
        name: "Divya Menon",
        rating: 4.4,
        comment: "Spacious rooms and good WiFi speed throughout our stay."
      }
    ]
  },
  {
    id: 82,
    name: "South Coast Residency",
    address: "Chennai, Tamil Nadu",
    expandedAddress: "T Nagar, near Pondy Bazaar, Chennai, Tamil Nadu",
    availableFrom: "2026-09-03",
    availableTo: "2026-09-27",
    price: 2500,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "Gym",
      "AC",
      "Breakfast"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-dumbbell",
      "fa-solid fa-snowflake",
      "fa-solid fa-mug-saucer"
    ],
    rating: 3.9,
    reviews: 1119,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Rajesh Tiwari",
        rating: 3.9,
        comment: "Good location but service was a little slow during checkout."
      },
      {
        id: 2,
        name: "Priya Verma",
        rating: 3.6,
        comment: "Nice hotel for the price, just wish the WiFi was faster."
      },
      {
        id: 3,
        name: "Arjun Nair",
        rating: 4.1,
        comment: "Good location but service was a little slow during checkout."
      },
      {
        id: 4,
        name: "Ritu Chawla",
        rating: 3.8,
        comment: "Decent stay overall, though the room could have been a bit cleaner."
      }
    ]
  },
  {
    id: 83,
    name: "Madras Grand Hotel",
    address: "Chennai, Tamil Nadu",
    expandedAddress: "Anna Salai, near Thousand Lights, Chennai, Tamil Nadu",
    availableFrom: "2026-09-02",
    availableTo: "2026-09-30",
    price: 3300,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Parking",
      "WiFi",
      "TV",
      "Room Service"
    ],
    amenitiesIcon: [
      "fa-solid fa-square-parking",
      "fa-solid fa-wifi",
      "fa-solid fa-tv",
      "fa-solid fa-bell-concierge"
    ],
    rating: 4.6,
    reviews: 1256,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Harish Pandey",
        rating: 4.6,
        comment: "Comfortable beds and quick check-in, would definitely come back."
      },
      {
        id: 2,
        name: "Ananya Iyer",
        rating: 4.3,
        comment: "The view from the room was stunning, highly recommend this place."
      },
      {
        id: 3,
        name: "Sanjay Mehta",
        rating: 4.8,
        comment: "Staff went out of their way to help us, truly appreciated."
      },
      {
        id: 4,
        name: "Nisha Agarwal",
        rating: 4.5,
        comment: "Loved the location and the amenities were exactly as described."
      }
    ]
  },
  {
    id: 84,
    name: "Bay View Chennai",
    address: "Chennai, Tamil Nadu",
    expandedAddress: "Besant Nagar, near Elliot's Beach, Chennai, Tamil Nadu",
    availableFrom: "2026-09-05",
    availableTo: "2026-09-19",
    price: 3800,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "AC",
      "WiFi",
      "Restaurant",
      "24/7 Front Desk"
    ],
    amenitiesIcon: [
      "fa-solid fa-snowflake",
      "fa-solid fa-wifi",
      "fa-solid fa-utensils",
      "fa-solid fa-clock"
    ],
    rating: 4,
    reviews: 1393,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Amit Singh",
        rating: 4,
        comment: "Room was fine but the AC was noisy at night."
      },
      {
        id: 2,
        name: "Pooja Joshi",
        rating: 3.7,
        comment: "Decent stay overall, though the room could have been a bit cleaner."
      },
      {
        id: 3,
        name: "Suresh Pillai",
        rating: 4.2,
        comment: "Room was fine but the AC was noisy at night."
      },
      {
        id: 4,
        name: "Shreya Bose",
        rating: 3.9,
        comment: "Average experience, food options were limited near the property."
      }
    ]
  },
  {
    id: 85,
    name: "Temple View Inn",
    address: "Chennai, Tamil Nadu",
    expandedAddress: "Mylapore, near Kapaleeshwarar Temple, Chennai, Tamil Nadu",
    availableFrom: "2026-09-06",
    availableTo: "2026-09-22",
    price: 2400,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1578683010236-d716f3983a37?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f3983a37?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f3983a37?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "AC",
      "TV",
      "Breakfast"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-tv",
      "fa-solid fa-mug-saucer"
    ],
    rating: 4.7,
    reviews: 80,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Karan Malhotra",
        rating: 4.7,
        comment: "Clean rooms and friendly staff made our trip memorable."
      },
      {
        id: 2,
        name: "Kavita Desai",
        rating: 4.4,
        comment: "Perfect for a short trip, everything was well maintained."
      },
      {
        id: 3,
        name: "Vivek Choudhary",
        rating: 4.9,
        comment: "Great stay, staff was very courteous and the room was spotless."
      },
      {
        id: 4,
        name: "Tanvi Shah",
        rating: 4.6,
        comment: "Excellent value for money, the breakfast was a nice touch."
      }
    ]
  },
  {
    id: 86,
    name: "Airport Grand",
    address: "Chennai, Tamil Nadu",
    expandedAddress: "Guindy, near Chennai Airport Road, Chennai, Tamil Nadu",
    availableFrom: "2026-09-01",
    availableTo: "2026-09-15",
    price: 2700,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "AC",
      "Parking",
      "Room Service"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-square-parking",
      "fa-solid fa-bell-concierge"
    ],
    rating: 4.1,
    reviews: 217,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Rahul Kapoor",
        rating: 4.1,
        comment: "Comfortable enough for a short stay, nothing extraordinary though."
      },
      {
        id: 2,
        name: "Meera Krishnan",
        rating: 3.8,
        comment: "Average experience, food options were limited near the property."
      },
      {
        id: 3,
        name: "Rajesh Tiwari",
        rating: 4.3,
        comment: "Good location but service was a little slow during checkout."
      },
      {
        id: 4,
        name: "Priya Verma",
        rating: 4,
        comment: "Nice hotel for the price, just wish the WiFi was faster."
      }
    ]
  },
  {
    id: 87,
    name: "Adyar Residency",
    address: "Chennai, Tamil Nadu",
    expandedAddress: "Adyar, near Adyar River Bridge, Chennai, Tamil Nadu",
    availableFrom: "2026-09-04",
    availableTo: "2026-09-29",
    price: 2600,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Pool",
      "WiFi",
      "AC",
      "Restaurant"
    ],
    amenitiesIcon: [
      "fa-solid fa-person-swimming",
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-utensils"
    ],
    rating: 4.8,
    reviews: 354,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Manish Yadav",
        rating: 4.8,
        comment: "Smooth booking experience and the hotel exceeded expectations."
      },
      {
        id: 2,
        name: "Anjali Saxena",
        rating: 4.5,
        comment: "Spacious rooms and good WiFi speed throughout our stay."
      },
      {
        id: 3,
        name: "Harish Pandey",
        rating: 5,
        comment: "Comfortable beds and quick check-in, would definitely come back."
      },
      {
        id: 4,
        name: "Ananya Iyer",
        rating: 4.7,
        comment: "The view from the room was stunning, highly recommend this place."
      }
    ]
  },
  {
    id: 88,
    name: "Royal Tamil Stay",
    address: "Chennai, Tamil Nadu",
    expandedAddress: "Velachery, near Phoenix Marketcity, Chennai, Tamil Nadu",
    availableFrom: "2026-09-07",
    availableTo: "2026-09-24",
    price: 3100,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "Gym",
      "AC",
      "Breakfast"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-dumbbell",
      "fa-solid fa-snowflake",
      "fa-solid fa-mug-saucer"
    ],
    rating: 4.2,
    reviews: 491,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Aditya Bhatt",
        rating: 4.2,
        comment: "Perfect for a short trip, everything was well maintained."
      },
      {
        id: 2,
        name: "Isha Chopra",
        rating: 3.9,
        comment: "Great stay, staff was very courteous and the room was spotless."
      },
      {
        id: 3,
        name: "Amit Singh",
        rating: 4.4,
        comment: "Excellent value for money, the breakfast was a nice touch."
      },
      {
        id: 4,
        name: "Pooja Joshi",
        rating: 4.1,
        comment: "Smooth booking experience and the hotel exceeded expectations."
      }
    ]
  },
  {
    id: 89,
    name: "Coastal Pearl Hotel",
    address: "Chennai, Tamil Nadu",
    expandedAddress: "OMR, near Sholinganallur Junction, Chennai, Tamil Nadu",
    availableFrom: "2026-09-02",
    availableTo: "2026-09-18",
    price: 2300,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Parking",
      "WiFi",
      "TV",
      "Room Service"
    ],
    amenitiesIcon: [
      "fa-solid fa-square-parking",
      "fa-solid fa-wifi",
      "fa-solid fa-tv",
      "fa-solid fa-bell-concierge"
    ],
    rating: 4.9,
    reviews: 628,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Deepak Kumar",
        rating: 4.9,
        comment: "Staff went out of their way to help us, truly appreciated."
      },
      {
        id: 2,
        name: "Lakshmi Menon",
        rating: 4.6,
        comment: "Loved the location and the amenities were exactly as described."
      },
      {
        id: 3,
        name: "Karan Malhotra",
        rating: 5,
        comment: "Clean rooms and friendly staff made our trip memorable."
      },
      {
        id: 4,
        name: "Kavita Desai",
        rating: 4.8,
        comment: "Perfect for a short trip, everything was well maintained."
      }
    ]
  },
  {
    id: 90,
    name: "Green Park Chennai",
    address: "Chennai, Tamil Nadu",
    expandedAddress: "Nungambakkam, near Valluvar Kottam, Chennai, Tamil Nadu",
    availableFrom: "2026-09-08",
    availableTo: "2026-09-30",
    price: 3500,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "AC",
      "WiFi",
      "Restaurant",
      "24/7 Front Desk"
    ],
    amenitiesIcon: [
      "fa-solid fa-snowflake",
      "fa-solid fa-wifi",
      "fa-solid fa-utensils",
      "fa-solid fa-clock"
    ],
    rating: 4.3,
    reviews: 765,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Nikhil Bansal",
        rating: 4.3,
        comment: "Spacious rooms and good WiFi speed throughout our stay."
      },
      {
        id: 2,
        name: "Neha Gupta",
        rating: 4,
        comment: "Comfortable beds and quick check-in, would definitely come back."
      },
      {
        id: 3,
        name: "Rahul Kapoor",
        rating: 4.5,
        comment: "The view from the room was stunning, highly recommend this place."
      },
      {
        id: 4,
        name: "Meera Krishnan",
        rating: 4.2,
        comment: "Staff went out of their way to help us, truly appreciated."
      }
    ]
  },
  {
    id: 91,
    name: "Pune Central Hotel",
    address: "Pune, Maharashtra",
    expandedAddress: "Shivajinagar, near Pune Railway Station Road, Pune, Maharashtra",
    availableFrom: "2026-09-01",
    availableTo: "2026-09-19",
    price: 2700,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "AC",
      "TV",
      "Breakfast"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-tv",
      "fa-solid fa-mug-saucer"
    ],
    rating: 3.7,
    reviews: 902,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Rohan Sharma",
        rating: 3.7,
        comment: "Decent stay overall, though the room could have been a bit cleaner."
      },
      {
        id: 2,
        name: "Sneha Reddy",
        rating: 3.4,
        comment: "Room was fine but the AC was noisy at night."
      },
      {
        id: 3,
        name: "Manish Yadav",
        rating: 3.9,
        comment: "Decent stay overall, though the room could have been a bit cleaner."
      },
      {
        id: 4,
        name: "Anjali Saxena",
        rating: 3.6,
        comment: "Room was fine but the AC was noisy at night."
      }
    ]
  },
  {
    id: 92,
    name: "Koregaon Park Inn",
    address: "Pune, Maharashtra",
    expandedAddress: "Koregaon Park, near Lane 5, Pune, Maharashtra",
    availableFrom: "2026-09-03",
    availableTo: "2026-09-25",
    price: 3600,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "AC",
      "Parking",
      "Room Service"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-square-parking",
      "fa-solid fa-bell-concierge"
    ],
    rating: 4.4,
    reviews: 1039,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Vikram Rao",
        rating: 4.4,
        comment: "Loved the location and the amenities were exactly as described."
      },
      {
        id: 2,
        name: "Divya Menon",
        rating: 4.1,
        comment: "Clean rooms and friendly staff made our trip memorable."
      },
      {
        id: 3,
        name: "Aditya Bhatt",
        rating: 4.6,
        comment: "Perfect for a short trip, everything was well maintained."
      },
      {
        id: 4,
        name: "Isha Chopra",
        rating: 4.3,
        comment: "Great stay, staff was very courteous and the room was spotless."
      }
    ]
  },
  {
    id: 93,
    name: "Deccan Palace",
    address: "Pune, Maharashtra",
    expandedAddress: "Deccan Gymkhana, near Fergusson College, Pune, Maharashtra",
    availableFrom: "2026-09-02",
    availableTo: "2026-09-30",
    price: 3100,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Pool",
      "WiFi",
      "AC",
      "Restaurant"
    ],
    amenitiesIcon: [
      "fa-solid fa-person-swimming",
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-utensils"
    ],
    rating: 3.8,
    reviews: 1176,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Arjun Nair",
        rating: 3.8,
        comment: "Average experience, food options were limited near the property."
      },
      {
        id: 2,
        name: "Ritu Chawla",
        rating: 3.5,
        comment: "Comfortable enough for a short stay, nothing extraordinary though."
      },
      {
        id: 3,
        name: "Deepak Kumar",
        rating: 4,
        comment: "Average experience, food options were limited near the property."
      },
      {
        id: 4,
        name: "Lakshmi Menon",
        rating: 3.7,
        comment: "Good location but service was a little slow during checkout."
      }
    ]
  },
  {
    id: 94,
    name: "Pune Heritage Hotel",
    address: "Pune, Maharashtra",
    expandedAddress: "Camp Area, near MG Road, Pune, Maharashtra",
    availableFrom: "2026-09-05",
    availableTo: "2026-09-17",
    price: 2900,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "Gym",
      "AC",
      "Breakfast"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-dumbbell",
      "fa-solid fa-snowflake",
      "fa-solid fa-mug-saucer"
    ],
    rating: 4.5,
    reviews: 1313,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Sanjay Mehta",
        rating: 4.5,
        comment: "Excellent value for money, the breakfast was a nice touch."
      },
      {
        id: 2,
        name: "Nisha Agarwal",
        rating: 4.2,
        comment: "Smooth booking experience and the hotel exceeded expectations."
      },
      {
        id: 3,
        name: "Nikhil Bansal",
        rating: 4.7,
        comment: "Spacious rooms and good WiFi speed throughout our stay."
      },
      {
        id: 4,
        name: "Neha Gupta",
        rating: 4.4,
        comment: "Comfortable beds and quick check-in, would definitely come back."
      }
    ]
  },
  {
    id: 95,
    name: "Tech Park Residency",
    address: "Pune, Maharashtra",
    expandedAddress: "Hinjawadi, near Rajiv Gandhi Infotech Park, Pune, Maharashtra",
    availableFrom: "2026-09-06",
    availableTo: "2026-09-28",
    price: 2500,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1578683010236-d716f3983a37?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f3983a37?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f3983a37?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Parking",
      "WiFi",
      "TV",
      "Room Service"
    ],
    amenitiesIcon: [
      "fa-solid fa-square-parking",
      "fa-solid fa-wifi",
      "fa-solid fa-tv",
      "fa-solid fa-bell-concierge"
    ],
    rating: 3.9,
    reviews: 1450,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Suresh Pillai",
        rating: 3.9,
        comment: "Nice hotel for the price, just wish the WiFi was faster."
      },
      {
        id: 2,
        name: "Shreya Bose",
        rating: 3.6,
        comment: "Good location but service was a little slow during checkout."
      },
      {
        id: 3,
        name: "Rohan Sharma",
        rating: 4.1,
        comment: "Decent stay overall, though the room could have been a bit cleaner."
      },
      {
        id: 4,
        name: "Sneha Reddy",
        rating: 3.8,
        comment: "Room was fine but the AC was noisy at night."
      }
    ]
  },
  {
    id: 96,
    name: "Blue Ridge Hotel",
    address: "Pune, Maharashtra",
    expandedAddress: "Baner, near Balewadi High Street, Pune, Maharashtra",
    availableFrom: "2026-09-01",
    availableTo: "2026-09-14",
    price: 2800,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "AC",
      "WiFi",
      "Restaurant",
      "24/7 Front Desk"
    ],
    amenitiesIcon: [
      "fa-solid fa-snowflake",
      "fa-solid fa-wifi",
      "fa-solid fa-utensils",
      "fa-solid fa-clock"
    ],
    rating: 4.6,
    reviews: 137,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Vivek Choudhary",
        rating: 4.6,
        comment: "The view from the room was stunning, highly recommend this place."
      },
      {
        id: 2,
        name: "Tanvi Shah",
        rating: 4.3,
        comment: "Staff went out of their way to help us, truly appreciated."
      },
      {
        id: 3,
        name: "Vikram Rao",
        rating: 4.8,
        comment: "Loved the location and the amenities were exactly as described."
      },
      {
        id: 4,
        name: "Divya Menon",
        rating: 4.5,
        comment: "Clean rooms and friendly staff made our trip memorable."
      }
    ]
  },
  {
    id: 97,
    name: "Lakeside Pune",
    address: "Pune, Maharashtra",
    expandedAddress: "Kalyani Nagar, near Joggers Park, Pune, Maharashtra",
    availableFrom: "2026-09-04",
    availableTo: "2026-09-23",
    price: 3400,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "AC",
      "TV",
      "Breakfast"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-tv",
      "fa-solid fa-mug-saucer"
    ],
    rating: 4,
    reviews: 274,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Rajesh Tiwari",
        rating: 4,
        comment: "Decent stay overall, though the room could have been a bit cleaner."
      },
      {
        id: 2,
        name: "Priya Verma",
        rating: 3.7,
        comment: "Room was fine but the AC was noisy at night."
      },
      {
        id: 3,
        name: "Arjun Nair",
        rating: 4.2,
        comment: "Average experience, food options were limited near the property."
      },
      {
        id: 4,
        name: "Ritu Chawla",
        rating: 3.9,
        comment: "Comfortable enough for a short stay, nothing extraordinary though."
      }
    ]
  },
  {
    id: 98,
    name: "Royal Deccan Stay",
    address: "Pune, Maharashtra",
    expandedAddress: "Kothrud, near Karve Road, Pune, Maharashtra",
    availableFrom: "2026-09-07",
    availableTo: "2026-09-30",
    price: 2200,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "AC",
      "Parking",
      "Room Service"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-square-parking",
      "fa-solid fa-bell-concierge"
    ],
    rating: 4.7,
    reviews: 411,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Harish Pandey",
        rating: 4.7,
        comment: "Perfect for a short trip, everything was well maintained."
      },
      {
        id: 2,
        name: "Ananya Iyer",
        rating: 4.4,
        comment: "Great stay, staff was very courteous and the room was spotless."
      },
      {
        id: 3,
        name: "Sanjay Mehta",
        rating: 4.9,
        comment: "Excellent value for money, the breakfast was a nice touch."
      },
      {
        id: 4,
        name: "Nisha Agarwal",
        rating: 4.6,
        comment: "Smooth booking experience and the hotel exceeded expectations."
      }
    ]
  },
  {
    id: 99,
    name: "Pune Grand Inn",
    address: "Pune, Maharashtra",
    expandedAddress: "Viman Nagar, near Phoenix Marketcity, Pune, Maharashtra",
    availableFrom: "2026-09-02",
    availableTo: "2026-09-21",
    price: 3700,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Pool",
      "WiFi",
      "AC",
      "Restaurant"
    ],
    amenitiesIcon: [
      "fa-solid fa-person-swimming",
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-utensils"
    ],
    rating: 4.1,
    reviews: 548,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Amit Singh",
        rating: 4.1,
        comment: "Average experience, food options were limited near the property."
      },
      {
        id: 2,
        name: "Pooja Joshi",
        rating: 3.8,
        comment: "Good location but service was a little slow during checkout."
      },
      {
        id: 3,
        name: "Suresh Pillai",
        rating: 4.3,
        comment: "Nice hotel for the price, just wish the WiFi was faster."
      },
      {
        id: 4,
        name: "Shreya Bose",
        rating: 4,
        comment: "Good location but service was a little slow during checkout."
      }
    ]
  },
  {
    id: 100,
    name: "The Maratha Hotel",
    address: "Pune, Maharashtra",
    expandedAddress: "Swargate, near Pune Central Bus Stand, Pune, Maharashtra",
    availableFrom: "2026-09-08",
    availableTo: "2026-09-26",
    price: 2100,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "Gym",
      "AC",
      "Breakfast"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-dumbbell",
      "fa-solid fa-snowflake",
      "fa-solid fa-mug-saucer"
    ],
    rating: 4.8,
    reviews: 685,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Karan Malhotra",
        rating: 4.8,
        comment: "Spacious rooms and good WiFi speed throughout our stay."
      },
      {
        id: 2,
        name: "Kavita Desai",
        rating: 4.5,
        comment: "Comfortable beds and quick check-in, would definitely come back."
      },
      {
        id: 3,
        name: "Vivek Choudhary",
        rating: 5,
        comment: "The view from the room was stunning, highly recommend this place."
      },
      {
        id: 4,
        name: "Tanvi Shah",
        rating: 4.7,
        comment: "Staff went out of their way to help us, truly appreciated."
      }
    ]
  },
  {
    id: 101,
    name: "Goa Beach Resort",
    address: "Goa, India",
    expandedAddress: "Calangute, near Calangute Beach, Goa, India",
    availableFrom: "2026-09-01",
    availableTo: "2026-09-20",
    price: 4200,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Parking",
      "WiFi",
      "TV",
      "Room Service"
    ],
    amenitiesIcon: [
      "fa-solid fa-square-parking",
      "fa-solid fa-wifi",
      "fa-solid fa-tv",
      "fa-solid fa-bell-concierge"
    ],
    rating: 4.2,
    reviews: 822,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Rahul Kapoor",
        rating: 4.2,
        comment: "Great stay, staff was very courteous and the room was spotless."
      },
      {
        id: 2,
        name: "Meera Krishnan",
        rating: 3.9,
        comment: "Excellent value for money, the breakfast was a nice touch."
      },
      {
        id: 3,
        name: "Rajesh Tiwari",
        rating: 4.4,
        comment: "Smooth booking experience and the hotel exceeded expectations."
      },
      {
        id: 4,
        name: "Priya Verma",
        rating: 4.1,
        comment: "Spacious rooms and good WiFi speed throughout our stay."
      }
    ]
  },
  {
    id: 102,
    name: "Palm Paradise Goa",
    address: "Goa, India",
    expandedAddress: "Baga, near Baga Beach Road, Goa, India",
    availableFrom: "2026-09-03",
    availableTo: "2026-09-29",
    price: 3900,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "AC",
      "WiFi",
      "Restaurant",
      "24/7 Front Desk"
    ],
    amenitiesIcon: [
      "fa-solid fa-snowflake",
      "fa-solid fa-wifi",
      "fa-solid fa-utensils",
      "fa-solid fa-clock"
    ],
    rating: 4.9,
    reviews: 959,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Manish Yadav",
        rating: 4.9,
        comment: "Loved the location and the amenities were exactly as described."
      },
      {
        id: 2,
        name: "Anjali Saxena",
        rating: 4.6,
        comment: "Clean rooms and friendly staff made our trip memorable."
      },
      {
        id: 3,
        name: "Harish Pandey",
        rating: 5,
        comment: "Perfect for a short trip, everything was well maintained."
      },
      {
        id: 4,
        name: "Ananya Iyer",
        rating: 4.8,
        comment: "Great stay, staff was very courteous and the room was spotless."
      }
    ]
  },
  {
    id: 103,
    name: "Mandovi View Hotel",
    address: "Goa, India",
    expandedAddress: "Panaji, near Mandovi Riverfront, Goa, India",
    availableFrom: "2026-09-02",
    availableTo: "2026-09-18",
    price: 3100,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "AC",
      "TV",
      "Breakfast"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-tv",
      "fa-solid fa-mug-saucer"
    ],
    rating: 4.3,
    reviews: 1096,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Aditya Bhatt",
        rating: 4.3,
        comment: "Comfortable beds and quick check-in, would definitely come back."
      },
      {
        id: 2,
        name: "Isha Chopra",
        rating: 4,
        comment: "The view from the room was stunning, highly recommend this place."
      },
      {
        id: 3,
        name: "Amit Singh",
        rating: 4.5,
        comment: "Staff went out of their way to help us, truly appreciated."
      },
      {
        id: 4,
        name: "Pooja Joshi",
        rating: 4.2,
        comment: "Loved the location and the amenities were exactly as described."
      }
    ]
  },
  {
    id: 104,
    name: "Sunset Coast Resort",
    address: "Goa, India",
    expandedAddress: "Candolim, near Candolim Beach, Goa, India",
    availableFrom: "2026-09-05",
    availableTo: "2026-09-30",
    price: 4800,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "AC",
      "Parking",
      "Room Service"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-square-parking",
      "fa-solid fa-bell-concierge"
    ],
    rating: 3.7,
    reviews: 1233,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Deepak Kumar",
        rating: 3.7,
        comment: "Room was fine but the AC was noisy at night."
      },
      {
        id: 2,
        name: "Lakshmi Menon",
        rating: 3.4,
        comment: "Decent stay overall, though the room could have been a bit cleaner."
      },
      {
        id: 3,
        name: "Karan Malhotra",
        rating: 3.9,
        comment: "Room was fine but the AC was noisy at night."
      },
      {
        id: 4,
        name: "Kavita Desai",
        rating: 3.6,
        comment: "Average experience, food options were limited near the property."
      }
    ]
  },
  {
    id: 105,
    name: "Royal Goa Stay",
    address: "Goa, India",
    expandedAddress: "Anjuna, near Anjuna Flea Market, Goa, India",
    availableFrom: "2026-09-06",
    availableTo: "2026-09-23",
    price: 3500,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1578683010236-d716f3983a37?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f3983a37?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f3983a37?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Pool",
      "WiFi",
      "AC",
      "Restaurant"
    ],
    amenitiesIcon: [
      "fa-solid fa-person-swimming",
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-utensils"
    ],
    rating: 4.4,
    reviews: 1370,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Nikhil Bansal",
        rating: 4.4,
        comment: "Clean rooms and friendly staff made our trip memorable."
      },
      {
        id: 2,
        name: "Neha Gupta",
        rating: 4.1,
        comment: "Perfect for a short trip, everything was well maintained."
      },
      {
        id: 3,
        name: "Rahul Kapoor",
        rating: 4.6,
        comment: "Great stay, staff was very courteous and the room was spotless."
      },
      {
        id: 4,
        name: "Meera Krishnan",
        rating: 4.3,
        comment: "Excellent value for money, the breakfast was a nice touch."
      }
    ]
  },
  {
    id: 106,
    name: "Coconut Grove Inn",
    address: "Goa, India",
    expandedAddress: "Palolem, near Palolem Beach, Goa, India",
    availableFrom: "2026-09-01",
    availableTo: "2026-09-15",
    price: 3200,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "Gym",
      "AC",
      "Breakfast"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-dumbbell",
      "fa-solid fa-snowflake",
      "fa-solid fa-mug-saucer"
    ],
    rating: 3.8,
    reviews: 57,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Rohan Sharma",
        rating: 3.8,
        comment: "Comfortable enough for a short stay, nothing extraordinary though."
      },
      {
        id: 2,
        name: "Sneha Reddy",
        rating: 3.5,
        comment: "Average experience, food options were limited near the property."
      },
      {
        id: 3,
        name: "Manish Yadav",
        rating: 4,
        comment: "Good location but service was a little slow during checkout."
      },
      {
        id: 4,
        name: "Anjali Saxena",
        rating: 3.7,
        comment: "Nice hotel for the price, just wish the WiFi was faster."
      }
    ]
  },
  {
    id: 107,
    name: "Ocean Pearl Goa",
    address: "Goa, India",
    expandedAddress: "Vagator, near Vagator Beach Road, Goa, India",
    availableFrom: "2026-09-04",
    availableTo: "2026-09-26",
    price: 4400,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Parking",
      "WiFi",
      "TV",
      "Room Service"
    ],
    amenitiesIcon: [
      "fa-solid fa-square-parking",
      "fa-solid fa-wifi",
      "fa-solid fa-tv",
      "fa-solid fa-bell-concierge"
    ],
    rating: 4.5,
    reviews: 194,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Vikram Rao",
        rating: 4.5,
        comment: "Smooth booking experience and the hotel exceeded expectations."
      },
      {
        id: 2,
        name: "Divya Menon",
        rating: 4.2,
        comment: "Spacious rooms and good WiFi speed throughout our stay."
      },
      {
        id: 3,
        name: "Aditya Bhatt",
        rating: 4.7,
        comment: "Comfortable beds and quick check-in, would definitely come back."
      },
      {
        id: 4,
        name: "Isha Chopra",
        rating: 4.4,
        comment: "The view from the room was stunning, highly recommend this place."
      }
    ]
  },
  {
    id: 108,
    name: "Blue Lagoon Resort",
    address: "Goa, India",
    expandedAddress: "Morjim, near Morjim Beach, Goa, India",
    availableFrom: "2026-09-07",
    availableTo: "2026-09-30",
    price: 3700,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "AC",
      "WiFi",
      "Restaurant",
      "24/7 Front Desk"
    ],
    amenitiesIcon: [
      "fa-solid fa-snowflake",
      "fa-solid fa-wifi",
      "fa-solid fa-utensils",
      "fa-solid fa-clock"
    ],
    rating: 3.9,
    reviews: 331,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Arjun Nair",
        rating: 3.9,
        comment: "Good location but service was a little slow during checkout."
      },
      {
        id: 2,
        name: "Ritu Chawla",
        rating: 3.6,
        comment: "Decent stay overall, though the room could have been a bit cleaner."
      },
      {
        id: 3,
        name: "Deepak Kumar",
        rating: 4.1,
        comment: "Room was fine but the AC was noisy at night."
      },
      {
        id: 4,
        name: "Lakshmi Menon",
        rating: 3.8,
        comment: "Decent stay overall, though the room could have been a bit cleaner."
      }
    ]
  },
  {
    id: 109,
    name: "Seaside Crown Hotel",
    address: "Goa, India",
    expandedAddress: "Colva, near Colva Beach, Goa, India",
    availableFrom: "2026-09-02",
    availableTo: "2026-09-22",
    price: 2900,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "AC",
      "TV",
      "Breakfast"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-tv",
      "fa-solid fa-mug-saucer"
    ],
    rating: 4.6,
    reviews: 468,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Sanjay Mehta",
        rating: 4.6,
        comment: "Staff went out of their way to help us, truly appreciated."
      },
      {
        id: 2,
        name: "Nisha Agarwal",
        rating: 4.3,
        comment: "Loved the location and the amenities were exactly as described."
      },
      {
        id: 3,
        name: "Nikhil Bansal",
        rating: 4.8,
        comment: "Clean rooms and friendly staff made our trip memorable."
      },
      {
        id: 4,
        name: "Neha Gupta",
        rating: 4.5,
        comment: "Perfect for a short trip, everything was well maintained."
      }
    ]
  },
  {
    id: 110,
    name: "Tropical Haven",
    address: "Goa, India",
    expandedAddress: "Dona Paula, near Dona Paula Viewpoint, Goa, India",
    availableFrom: "2026-09-08",
    availableTo: "2026-09-28",
    price: 4600,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "AC",
      "Parking",
      "Room Service"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-square-parking",
      "fa-solid fa-bell-concierge"
    ],
    rating: 4,
    reviews: 605,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Suresh Pillai",
        rating: 4,
        comment: "Room was fine but the AC was noisy at night."
      },
      {
        id: 2,
        name: "Shreya Bose",
        rating: 3.7,
        comment: "Average experience, food options were limited near the property."
      },
      {
        id: 3,
        name: "Rohan Sharma",
        rating: 4.2,
        comment: "Comfortable enough for a short stay, nothing extraordinary though."
      },
      {
        id: 4,
        name: "Sneha Reddy",
        rating: 3.9,
        comment: "Average experience, food options were limited near the property."
      }
    ]
  },
  {
    id: 111,
    name: "Lucknow Residency",
    address: "Lucknow, Uttar Pradesh",
    expandedAddress: "Hazratganj, near GPO Lucknow, Lucknow, Uttar Pradesh",
    availableFrom: "2026-09-01",
    availableTo: "2026-09-20",
    price: 2400,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Pool",
      "WiFi",
      "AC",
      "Restaurant"
    ],
    amenitiesIcon: [
      "fa-solid fa-person-swimming",
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-utensils"
    ],
    rating: 4.7,
    reviews: 742,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Vivek Choudhary",
        rating: 4.7,
        comment: "Great stay, staff was very courteous and the room was spotless."
      },
      {
        id: 2,
        name: "Tanvi Shah",
        rating: 4.4,
        comment: "Excellent value for money, the breakfast was a nice touch."
      },
      {
        id: 3,
        name: "Vikram Rao",
        rating: 4.9,
        comment: "Smooth booking experience and the hotel exceeded expectations."
      },
      {
        id: 4,
        name: "Divya Menon",
        rating: 4.6,
        comment: "Spacious rooms and good WiFi speed throughout our stay."
      }
    ]
  },
  {
    id: 112,
    name: "Nawabi Palace Hotel",
    address: "Lucknow, Uttar Pradesh",
    expandedAddress: "Gomti Nagar, near City Mall, Lucknow, Uttar Pradesh",
    availableFrom: "2026-09-03",
    availableTo: "2026-09-30",
    price: 3200,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "Gym",
      "AC",
      "Breakfast"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-dumbbell",
      "fa-solid fa-snowflake",
      "fa-solid fa-mug-saucer"
    ],
    rating: 4.1,
    reviews: 879,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Rajesh Tiwari",
        rating: 4.1,
        comment: "Good location but service was a little slow during checkout."
      },
      {
        id: 2,
        name: "Priya Verma",
        rating: 3.8,
        comment: "Nice hotel for the price, just wish the WiFi was faster."
      },
      {
        id: 3,
        name: "Arjun Nair",
        rating: 4.3,
        comment: "Good location but service was a little slow during checkout."
      },
      {
        id: 4,
        name: "Ritu Chawla",
        rating: 4,
        comment: "Decent stay overall, though the room could have been a bit cleaner."
      }
    ]
  },
  {
    id: 113,
    name: "Gomti View Inn",
    address: "Lucknow, Uttar Pradesh",
    expandedAddress: "Riverfront Road, near Gomti Riverfront, Lucknow, Uttar Pradesh",
    availableFrom: "2026-09-02",
    availableTo: "2026-09-17",
    price: 2700,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Parking",
      "WiFi",
      "TV",
      "Room Service"
    ],
    amenitiesIcon: [
      "fa-solid fa-square-parking",
      "fa-solid fa-wifi",
      "fa-solid fa-tv",
      "fa-solid fa-bell-concierge"
    ],
    rating: 4.8,
    reviews: 1016,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Harish Pandey",
        rating: 4.8,
        comment: "Comfortable beds and quick check-in, would definitely come back."
      },
      {
        id: 2,
        name: "Ananya Iyer",
        rating: 4.5,
        comment: "The view from the room was stunning, highly recommend this place."
      },
      {
        id: 3,
        name: "Sanjay Mehta",
        rating: 5,
        comment: "Staff went out of their way to help us, truly appreciated."
      },
      {
        id: 4,
        name: "Nisha Agarwal",
        rating: 4.7,
        comment: "Loved the location and the amenities were exactly as described."
      }
    ]
  },
  {
    id: 114,
    name: "Awadh Grand Hotel",
    address: "Lucknow, Uttar Pradesh",
    expandedAddress: "Aliganj, near Kapoorthala Market, Lucknow, Uttar Pradesh",
    availableFrom: "2026-09-05",
    availableTo: "2026-09-26",
    price: 2900,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "AC",
      "WiFi",
      "Restaurant",
      "24/7 Front Desk"
    ],
    amenitiesIcon: [
      "fa-solid fa-snowflake",
      "fa-solid fa-wifi",
      "fa-solid fa-utensils",
      "fa-solid fa-clock"
    ],
    rating: 4.2,
    reviews: 1153,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Amit Singh",
        rating: 4.2,
        comment: "Excellent value for money, the breakfast was a nice touch."
      },
      {
        id: 2,
        name: "Pooja Joshi",
        rating: 3.9,
        comment: "Smooth booking experience and the hotel exceeded expectations."
      },
      {
        id: 3,
        name: "Suresh Pillai",
        rating: 4.4,
        comment: "Spacious rooms and good WiFi speed throughout our stay."
      },
      {
        id: 4,
        name: "Shreya Bose",
        rating: 4.1,
        comment: "Comfortable beds and quick check-in, would definitely come back."
      }
    ]
  },
  {
    id: 115,
    name: "Royal Lucknow Stay",
    address: "Lucknow, Uttar Pradesh",
    expandedAddress: "Charbagh, near Lucknow Railway Station, Lucknow, Uttar Pradesh",
    availableFrom: "2026-09-06",
    availableTo: "2026-09-19",
    price: 1800,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1578683010236-d716f3983a37?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f3983a37?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f3983a37?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "AC",
      "TV",
      "Breakfast"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-tv",
      "fa-solid fa-mug-saucer"
    ],
    rating: 4.9,
    reviews: 1290,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Karan Malhotra",
        rating: 4.9,
        comment: "Clean rooms and friendly staff made our trip memorable."
      },
      {
        id: 2,
        name: "Kavita Desai",
        rating: 4.6,
        comment: "Perfect for a short trip, everything was well maintained."
      },
      {
        id: 3,
        name: "Vivek Choudhary",
        rating: 5,
        comment: "Great stay, staff was very courteous and the room was spotless."
      },
      {
        id: 4,
        name: "Tanvi Shah",
        rating: 4.8,
        comment: "Excellent value for money, the breakfast was a nice touch."
      }
    ]
  },
  {
    id: 116,
    name: "Heritage Awadh Inn",
    address: "Lucknow, Uttar Pradesh",
    expandedAddress: "Chowk, near Rumi Darwaza, Lucknow, Uttar Pradesh",
    availableFrom: "2026-09-01",
    availableTo: "2026-09-14",
    price: 2100,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "AC",
      "Parking",
      "Room Service"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-square-parking",
      "fa-solid fa-bell-concierge"
    ],
    rating: 4.3,
    reviews: 1427,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Rahul Kapoor",
        rating: 4.3,
        comment: "The view from the room was stunning, highly recommend this place."
      },
      {
        id: 2,
        name: "Meera Krishnan",
        rating: 4,
        comment: "Staff went out of their way to help us, truly appreciated."
      },
      {
        id: 3,
        name: "Rajesh Tiwari",
        rating: 4.5,
        comment: "Loved the location and the amenities were exactly as described."
      },
      {
        id: 4,
        name: "Priya Verma",
        rating: 4.2,
        comment: "Clean rooms and friendly staff made our trip memorable."
      }
    ]
  },
  {
    id: 117,
    name: "City Crown Lucknow",
    address: "Lucknow, Uttar Pradesh",
    expandedAddress: "Indira Nagar, near Munshi Pulia, Lucknow, Uttar Pradesh",
    availableFrom: "2026-09-04",
    availableTo: "2026-09-24",
    price: 2300,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Pool",
      "WiFi",
      "AC",
      "Restaurant"
    ],
    amenitiesIcon: [
      "fa-solid fa-person-swimming",
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-utensils"
    ],
    rating: 3.7,
    reviews: 114,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Manish Yadav",
        rating: 3.7,
        comment: "Decent stay overall, though the room could have been a bit cleaner."
      },
      {
        id: 2,
        name: "Anjali Saxena",
        rating: 3.4,
        comment: "Room was fine but the AC was noisy at night."
      },
      {
        id: 3,
        name: "Harish Pandey",
        rating: 3.9,
        comment: "Average experience, food options were limited near the property."
      },
      {
        id: 4,
        name: "Ananya Iyer",
        rating: 3.6,
        comment: "Comfortable enough for a short stay, nothing extraordinary though."
      }
    ]
  },
  {
    id: 118,
    name: "Green Avenue Hotel",
    address: "Lucknow, Uttar Pradesh",
    expandedAddress: "Mahanagar, near Kapoorthala Crossing, Lucknow, Uttar Pradesh",
    availableFrom: "2026-09-07",
    availableTo: "2026-09-30",
    price: 2500,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "Gym",
      "AC",
      "Breakfast"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-dumbbell",
      "fa-solid fa-snowflake",
      "fa-solid fa-mug-saucer"
    ],
    rating: 4.4,
    reviews: 251,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Aditya Bhatt",
        rating: 4.4,
        comment: "Perfect for a short trip, everything was well maintained."
      },
      {
        id: 2,
        name: "Isha Chopra",
        rating: 4.1,
        comment: "Great stay, staff was very courteous and the room was spotless."
      },
      {
        id: 3,
        name: "Amit Singh",
        rating: 4.6,
        comment: "Excellent value for money, the breakfast was a nice touch."
      },
      {
        id: 4,
        name: "Pooja Joshi",
        rating: 4.3,
        comment: "Smooth booking experience and the hotel exceeded expectations."
      }
    ]
  },
  {
    id: 119,
    name: "The Lucknow Grand",
    address: "Lucknow, Uttar Pradesh",
    expandedAddress: "Vibhuti Khand, near Riverside Mall, Lucknow, Uttar Pradesh",
    availableFrom: "2026-09-02",
    availableTo: "2026-09-21",
    price: 3500,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Parking",
      "WiFi",
      "TV",
      "Room Service"
    ],
    amenitiesIcon: [
      "fa-solid fa-square-parking",
      "fa-solid fa-wifi",
      "fa-solid fa-tv",
      "fa-solid fa-bell-concierge"
    ],
    rating: 3.8,
    reviews: 388,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Deepak Kumar",
        rating: 3.8,
        comment: "Average experience, food options were limited near the property."
      },
      {
        id: 2,
        name: "Lakshmi Menon",
        rating: 3.5,
        comment: "Good location but service was a little slow during checkout."
      },
      {
        id: 3,
        name: "Karan Malhotra",
        rating: 4,
        comment: "Nice hotel for the price, just wish the WiFi was faster."
      },
      {
        id: 4,
        name: "Kavita Desai",
        rating: 3.7,
        comment: "Good location but service was a little slow during checkout."
      }
    ]
  },
  {
    id: 120,
    name: "Awadh Comfort Hotel",
    address: "Lucknow, Uttar Pradesh",
    expandedAddress: "Krishna Nagar, near Metro Station, Lucknow, Uttar Pradesh",
    availableFrom: "2026-09-08",
    availableTo: "2026-09-27",
    price: 2200,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "AC",
      "WiFi",
      "Restaurant",
      "24/7 Front Desk"
    ],
    amenitiesIcon: [
      "fa-solid fa-snowflake",
      "fa-solid fa-wifi",
      "fa-solid fa-utensils",
      "fa-solid fa-clock"
    ],
    rating: 4.5,
    reviews: 525,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Nikhil Bansal",
        rating: 4.5,
        comment: "Spacious rooms and good WiFi speed throughout our stay."
      },
      {
        id: 2,
        name: "Neha Gupta",
        rating: 4.2,
        comment: "Comfortable beds and quick check-in, would definitely come back."
      },
      {
        id: 3,
        name: "Rahul Kapoor",
        rating: 4.7,
        comment: "The view from the room was stunning, highly recommend this place."
      },
      {
        id: 4,
        name: "Meera Krishnan",
        rating: 4.4,
        comment: "Staff went out of their way to help us, truly appreciated."
      }
    ]
  },
  {
    id: 121,
    name: "Varanasi Heritage",
    address: "Varanasi, Uttar Pradesh",
    expandedAddress: "Dashashwamedh Road, near Dashashwamedh Ghat, Varanasi, Uttar Pradesh",
    availableFrom: "2026-09-01",
    availableTo: "2026-09-19",
    price: 2500,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "AC",
      "TV",
      "Breakfast"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-tv",
      "fa-solid fa-mug-saucer"
    ],
    rating: 3.9,
    reviews: 662,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Rohan Sharma",
        rating: 3.9,
        comment: "Decent stay overall, though the room could have been a bit cleaner."
      },
      {
        id: 2,
        name: "Sneha Reddy",
        rating: 3.6,
        comment: "Room was fine but the AC was noisy at night."
      },
      {
        id: 3,
        name: "Manish Yadav",
        rating: 4.1,
        comment: "Decent stay overall, though the room could have been a bit cleaner."
      },
      {
        id: 4,
        name: "Anjali Saxena",
        rating: 3.8,
        comment: "Room was fine but the AC was noisy at night."
      }
    ]
  },
  {
    id: 122,
    name: "Ganga View Palace",
    address: "Varanasi, Uttar Pradesh",
    expandedAddress: "Assi Ghat Road, near Assi Ghat, Varanasi, Uttar Pradesh",
    availableFrom: "2026-09-03",
    availableTo: "2026-09-27",
    price: 2900,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "AC",
      "Parking",
      "Room Service"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-square-parking",
      "fa-solid fa-bell-concierge"
    ],
    rating: 4.6,
    reviews: 799,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Vikram Rao",
        rating: 4.6,
        comment: "Loved the location and the amenities were exactly as described."
      },
      {
        id: 2,
        name: "Divya Menon",
        rating: 4.3,
        comment: "Clean rooms and friendly staff made our trip memorable."
      },
      {
        id: 3,
        name: "Aditya Bhatt",
        rating: 4.8,
        comment: "Perfect for a short trip, everything was well maintained."
      },
      {
        id: 4,
        name: "Isha Chopra",
        rating: 4.5,
        comment: "Great stay, staff was very courteous and the room was spotless."
      }
    ]
  },
  {
    id: 123,
    name: "Kashi Grand Hotel",
    address: "Varanasi, Uttar Pradesh",
    expandedAddress: "Sigra, near Mahmoorganj Road, Varanasi, Uttar Pradesh",
    availableFrom: "2026-09-02",
    availableTo: "2026-09-30",
    price: 2700,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Pool",
      "WiFi",
      "AC",
      "Restaurant"
    ],
    amenitiesIcon: [
      "fa-solid fa-person-swimming",
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-utensils"
    ],
    rating: 4,
    reviews: 936,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Arjun Nair",
        rating: 4,
        comment: "Average experience, food options were limited near the property."
      },
      {
        id: 2,
        name: "Ritu Chawla",
        rating: 3.7,
        comment: "Comfortable enough for a short stay, nothing extraordinary though."
      },
      {
        id: 3,
        name: "Deepak Kumar",
        rating: 4.2,
        comment: "Average experience, food options were limited near the property."
      },
      {
        id: 4,
        name: "Lakshmi Menon",
        rating: 3.9,
        comment: "Good location but service was a little slow during checkout."
      }
    ]
  },
  {
    id: 124,
    name: "Temple View Residency",
    address: "Varanasi, Uttar Pradesh",
    expandedAddress: "Godowlia, near Kashi Vishwanath Temple Road, Varanasi, Uttar Pradesh",
    availableFrom: "2026-09-05",
    availableTo: "2026-09-18",
    price: 2300,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "Gym",
      "AC",
      "Breakfast"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-dumbbell",
      "fa-solid fa-snowflake",
      "fa-solid fa-mug-saucer"
    ],
    rating: 4.7,
    reviews: 1073,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Sanjay Mehta",
        rating: 4.7,
        comment: "Excellent value for money, the breakfast was a nice touch."
      },
      {
        id: 2,
        name: "Nisha Agarwal",
        rating: 4.4,
        comment: "Smooth booking experience and the hotel exceeded expectations."
      },
      {
        id: 3,
        name: "Nikhil Bansal",
        rating: 4.9,
        comment: "Spacious rooms and good WiFi speed throughout our stay."
      },
      {
        id: 4,
        name: "Neha Gupta",
        rating: 4.6,
        comment: "Comfortable beds and quick check-in, would definitely come back."
      }
    ]
  },
  {
    id: 125,
    name: "Banaras Palace",
    address: "Varanasi, Uttar Pradesh",
    expandedAddress: "Ramnagar, near Ramnagar Fort, Varanasi, Uttar Pradesh",
    availableFrom: "2026-09-06",
    availableTo: "2026-09-24",
    price: 2100,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1578683010236-d716f3983a37?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f3983a37?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f3983a37?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Parking",
      "WiFi",
      "TV",
      "Room Service"
    ],
    amenitiesIcon: [
      "fa-solid fa-square-parking",
      "fa-solid fa-wifi",
      "fa-solid fa-tv",
      "fa-solid fa-bell-concierge"
    ],
    rating: 4.1,
    reviews: 1210,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Suresh Pillai",
        rating: 4.1,
        comment: "Nice hotel for the price, just wish the WiFi was faster."
      },
      {
        id: 2,
        name: "Shreya Bose",
        rating: 3.8,
        comment: "Good location but service was a little slow during checkout."
      },
      {
        id: 3,
        name: "Rohan Sharma",
        rating: 4.3,
        comment: "Decent stay overall, though the room could have been a bit cleaner."
      },
      {
        id: 4,
        name: "Sneha Reddy",
        rating: 4,
        comment: "Room was fine but the AC was noisy at night."
      }
    ]
  },
  {
    id: 126,
    name: "Kashi River Inn",
    address: "Varanasi, Uttar Pradesh",
    expandedAddress: "Rajghat, near Malviya Bridge, Varanasi, Uttar Pradesh",
    availableFrom: "2026-09-01",
    availableTo: "2026-09-15",
    price: 1900,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "AC",
      "WiFi",
      "Restaurant",
      "24/7 Front Desk"
    ],
    amenitiesIcon: [
      "fa-solid fa-snowflake",
      "fa-solid fa-wifi",
      "fa-solid fa-utensils",
      "fa-solid fa-clock"
    ],
    rating: 4.8,
    reviews: 1347,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Vivek Choudhary",
        rating: 4.8,
        comment: "The view from the room was stunning, highly recommend this place."
      },
      {
        id: 2,
        name: "Tanvi Shah",
        rating: 4.5,
        comment: "Staff went out of their way to help us, truly appreciated."
      },
      {
        id: 3,
        name: "Vikram Rao",
        rating: 5,
        comment: "Loved the location and the amenities were exactly as described."
      },
      {
        id: 4,
        name: "Divya Menon",
        rating: 4.7,
        comment: "Clean rooms and friendly staff made our trip memorable."
      }
    ]
  },
  {
    id: 127,
    name: "Ghat View Hotel",
    address: "Varanasi, Uttar Pradesh",
    expandedAddress: "Manikarnika Ghat Road, near Manikarnika Ghat, Varanasi, Uttar Pradesh",
    availableFrom: "2026-09-04",
    availableTo: "2026-09-22",
    price: 2800,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "AC",
      "TV",
      "Breakfast"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-tv",
      "fa-solid fa-mug-saucer"
    ],
    rating: 4.2,
    reviews: 1484,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Rajesh Tiwari",
        rating: 4.2,
        comment: "Smooth booking experience and the hotel exceeded expectations."
      },
      {
        id: 2,
        name: "Priya Verma",
        rating: 3.9,
        comment: "Spacious rooms and good WiFi speed throughout our stay."
      },
      {
        id: 3,
        name: "Arjun Nair",
        rating: 4.4,
        comment: "Comfortable beds and quick check-in, would definitely come back."
      },
      {
        id: 4,
        name: "Ritu Chawla",
        rating: 4.1,
        comment: "The view from the room was stunning, highly recommend this place."
      }
    ]
  },
  {
    id: 128,
    name: "Sarnath Residency",
    address: "Varanasi, Uttar Pradesh",
    expandedAddress: "Sarnath Road, near Sarnath Archaeological Park, Varanasi, Uttar Pradesh",
    availableFrom: "2026-09-07",
    availableTo: "2026-09-30",
    price: 1800,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "AC",
      "Parking",
      "Room Service"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-square-parking",
      "fa-solid fa-bell-concierge"
    ],
    rating: 4.9,
    reviews: 171,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Harish Pandey",
        rating: 4.9,
        comment: "Perfect for a short trip, everything was well maintained."
      },
      {
        id: 2,
        name: "Ananya Iyer",
        rating: 4.6,
        comment: "Great stay, staff was very courteous and the room was spotless."
      },
      {
        id: 3,
        name: "Sanjay Mehta",
        rating: 5,
        comment: "Excellent value for money, the breakfast was a nice touch."
      },
      {
        id: 4,
        name: "Nisha Agarwal",
        rating: 4.8,
        comment: "Smooth booking experience and the hotel exceeded expectations."
      }
    ]
  },
  {
    id: 129,
    name: "Banaras Comfort Stay",
    address: "Varanasi, Uttar Pradesh",
    expandedAddress: "Lanka, near BHU Gate, Varanasi, Uttar Pradesh",
    availableFrom: "2026-09-02",
    availableTo: "2026-09-20",
    price: 2200,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Pool",
      "WiFi",
      "AC",
      "Restaurant"
    ],
    amenitiesIcon: [
      "fa-solid fa-person-swimming",
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-utensils"
    ],
    rating: 4.3,
    reviews: 308,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Amit Singh",
        rating: 4.3,
        comment: "Staff went out of their way to help us, truly appreciated."
      },
      {
        id: 2,
        name: "Pooja Joshi",
        rating: 4,
        comment: "Loved the location and the amenities were exactly as described."
      },
      {
        id: 3,
        name: "Suresh Pillai",
        rating: 4.5,
        comment: "Clean rooms and friendly staff made our trip memorable."
      },
      {
        id: 4,
        name: "Shreya Bose",
        rating: 4.2,
        comment: "Perfect for a short trip, everything was well maintained."
      }
    ]
  },
  {
    id: 130,
    name: "Kashi Royal Hotel",
    address: "Varanasi, Uttar Pradesh",
    expandedAddress: "Mahmoorganj, near IP Mall, Varanasi, Uttar Pradesh",
    availableFrom: "2026-09-08",
    availableTo: "2026-09-26",
    price: 3100,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "Gym",
      "AC",
      "Breakfast"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-dumbbell",
      "fa-solid fa-snowflake",
      "fa-solid fa-mug-saucer"
    ],
    rating: 3.7,
    reviews: 445,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Karan Malhotra",
        rating: 3.7,
        comment: "Room was fine but the AC was noisy at night."
      },
      {
        id: 2,
        name: "Kavita Desai",
        rating: 3.4,
        comment: "Average experience, food options were limited near the property."
      },
      {
        id: 3,
        name: "Vivek Choudhary",
        rating: 3.9,
        comment: "Comfortable enough for a short stay, nothing extraordinary though."
      },
      {
        id: 4,
        name: "Tanvi Shah",
        rating: 3.6,
        comment: "Average experience, food options were limited near the property."
      }
    ]
  },
  {
    id: 131,
    name: "Chandigarh Central",
    address: "Chandigarh, India",
    expandedAddress: "Sector 17, near Sector 17 Plaza, Chandigarh, India",
    availableFrom: "2026-09-01",
    availableTo: "2026-09-21",
    price: 3300,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Parking",
      "WiFi",
      "TV",
      "Room Service"
    ],
    amenitiesIcon: [
      "fa-solid fa-square-parking",
      "fa-solid fa-wifi",
      "fa-solid fa-tv",
      "fa-solid fa-bell-concierge"
    ],
    rating: 4.4,
    reviews: 582,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Rahul Kapoor",
        rating: 4.4,
        comment: "Great stay, staff was very courteous and the room was spotless."
      },
      {
        id: 2,
        name: "Meera Krishnan",
        rating: 4.1,
        comment: "Excellent value for money, the breakfast was a nice touch."
      },
      {
        id: 3,
        name: "Rajesh Tiwari",
        rating: 4.6,
        comment: "Smooth booking experience and the hotel exceeded expectations."
      },
      {
        id: 4,
        name: "Priya Verma",
        rating: 4.3,
        comment: "Spacious rooms and good WiFi speed throughout our stay."
      }
    ]
  },
  {
    id: 132,
    name: "Rose Garden Hotel",
    address: "Chandigarh, India",
    expandedAddress: "Sector 16, near Rose Garden, Chandigarh, India",
    availableFrom: "2026-09-03",
    availableTo: "2026-09-30",
    price: 2800,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "AC",
      "WiFi",
      "Restaurant",
      "24/7 Front Desk"
    ],
    amenitiesIcon: [
      "fa-solid fa-snowflake",
      "fa-solid fa-wifi",
      "fa-solid fa-utensils",
      "fa-solid fa-clock"
    ],
    rating: 3.8,
    reviews: 719,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Manish Yadav",
        rating: 3.8,
        comment: "Good location but service was a little slow during checkout."
      },
      {
        id: 2,
        name: "Anjali Saxena",
        rating: 3.5,
        comment: "Nice hotel for the price, just wish the WiFi was faster."
      },
      {
        id: 3,
        name: "Harish Pandey",
        rating: 4,
        comment: "Good location but service was a little slow during checkout."
      },
      {
        id: 4,
        name: "Ananya Iyer",
        rating: 3.7,
        comment: "Decent stay overall, though the room could have been a bit cleaner."
      }
    ]
  },
  {
    id: 133,
    name: "Sukhna View Inn",
    address: "Chandigarh, India",
    expandedAddress: "Sector 5, near Sukhna Lake, Chandigarh, India",
    availableFrom: "2026-09-02",
    availableTo: "2026-09-17",
    price: 3600,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "AC",
      "TV",
      "Breakfast"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-tv",
      "fa-solid fa-mug-saucer"
    ],
    rating: 4.5,
    reviews: 856,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Aditya Bhatt",
        rating: 4.5,
        comment: "Comfortable beds and quick check-in, would definitely come back."
      },
      {
        id: 2,
        name: "Isha Chopra",
        rating: 4.2,
        comment: "The view from the room was stunning, highly recommend this place."
      },
      {
        id: 3,
        name: "Amit Singh",
        rating: 4.7,
        comment: "Staff went out of their way to help us, truly appreciated."
      },
      {
        id: 4,
        name: "Pooja Joshi",
        rating: 4.4,
        comment: "Loved the location and the amenities were exactly as described."
      }
    ]
  },
  {
    id: 134,
    name: "The Chandigarh Grand",
    address: "Chandigarh, India",
    expandedAddress: "Sector 35, near Sector 35 Market, Chandigarh, India",
    availableFrom: "2026-09-05",
    availableTo: "2026-09-25",
    price: 3900,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "AC",
      "Parking",
      "Room Service"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-square-parking",
      "fa-solid fa-bell-concierge"
    ],
    rating: 3.9,
    reviews: 993,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Deepak Kumar",
        rating: 3.9,
        comment: "Room was fine but the AC was noisy at night."
      },
      {
        id: 2,
        name: "Lakshmi Menon",
        rating: 3.6,
        comment: "Decent stay overall, though the room could have been a bit cleaner."
      },
      {
        id: 3,
        name: "Karan Malhotra",
        rating: 4.1,
        comment: "Room was fine but the AC was noisy at night."
      },
      {
        id: 4,
        name: "Kavita Desai",
        rating: 3.8,
        comment: "Average experience, food options were limited near the property."
      }
    ]
  },
  {
    id: 135,
    name: "Punjab Heritage Hotel",
    address: "Chandigarh, India",
    expandedAddress: "Sector 22, near Shastri Market, Chandigarh, India",
    availableFrom: "2026-09-06",
    availableTo: "2026-09-19",
    price: 2400,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1578683010236-d716f3983a37?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f3983a37?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f3983a37?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Pool",
      "WiFi",
      "AC",
      "Restaurant"
    ],
    amenitiesIcon: [
      "fa-solid fa-person-swimming",
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-utensils"
    ],
    rating: 4.6,
    reviews: 1130,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Nikhil Bansal",
        rating: 4.6,
        comment: "Clean rooms and friendly staff made our trip memorable."
      },
      {
        id: 2,
        name: "Neha Gupta",
        rating: 4.3,
        comment: "Perfect for a short trip, everything was well maintained."
      },
      {
        id: 3,
        name: "Rahul Kapoor",
        rating: 4.8,
        comment: "Great stay, staff was very courteous and the room was spotless."
      },
      {
        id: 4,
        name: "Meera Krishnan",
        rating: 4.5,
        comment: "Excellent value for money, the breakfast was a nice touch."
      }
    ]
  },
  {
    id: 136,
    name: "Urban Chandigarh Stay",
    address: "Chandigarh, India",
    expandedAddress: "Sector 43, near ISBT Bus Stand, Chandigarh, India",
    availableFrom: "2026-09-01",
    availableTo: "2026-09-15",
    price: 2200,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "Gym",
      "AC",
      "Breakfast"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-dumbbell",
      "fa-solid fa-snowflake",
      "fa-solid fa-mug-saucer"
    ],
    rating: 4,
    reviews: 1267,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Rohan Sharma",
        rating: 4,
        comment: "Comfortable enough for a short stay, nothing extraordinary though."
      },
      {
        id: 2,
        name: "Sneha Reddy",
        rating: 3.7,
        comment: "Average experience, food options were limited near the property."
      },
      {
        id: 3,
        name: "Manish Yadav",
        rating: 4.2,
        comment: "Good location but service was a little slow during checkout."
      },
      {
        id: 4,
        name: "Anjali Saxena",
        rating: 3.9,
        comment: "Nice hotel for the price, just wish the WiFi was faster."
      }
    ]
  },
  {
    id: 137,
    name: "City Crown Chandigarh",
    address: "Chandigarh, India",
    expandedAddress: "Sector 34, near Piccadilly Square, Chandigarh, India",
    availableFrom: "2026-09-04",
    availableTo: "2026-09-28",
    price: 3100,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Parking",
      "WiFi",
      "TV",
      "Room Service"
    ],
    amenitiesIcon: [
      "fa-solid fa-square-parking",
      "fa-solid fa-wifi",
      "fa-solid fa-tv",
      "fa-solid fa-bell-concierge"
    ],
    rating: 4.7,
    reviews: 1404,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Vikram Rao",
        rating: 4.7,
        comment: "Smooth booking experience and the hotel exceeded expectations."
      },
      {
        id: 2,
        name: "Divya Menon",
        rating: 4.4,
        comment: "Spacious rooms and good WiFi speed throughout our stay."
      },
      {
        id: 3,
        name: "Aditya Bhatt",
        rating: 4.9,
        comment: "Comfortable beds and quick check-in, would definitely come back."
      },
      {
        id: 4,
        name: "Isha Chopra",
        rating: 4.6,
        comment: "The view from the room was stunning, highly recommend this place."
      }
    ]
  },
  {
    id: 138,
    name: "North Star Hotel",
    address: "Chandigarh, India",
    expandedAddress: "Sector 8, near Madhya Marg, Chandigarh, India",
    availableFrom: "2026-09-07",
    availableTo: "2026-09-23",
    price: 3500,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "AC",
      "WiFi",
      "Restaurant",
      "24/7 Front Desk"
    ],
    amenitiesIcon: [
      "fa-solid fa-snowflake",
      "fa-solid fa-wifi",
      "fa-solid fa-utensils",
      "fa-solid fa-clock"
    ],
    rating: 4.1,
    reviews: 91,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Arjun Nair",
        rating: 4.1,
        comment: "Good location but service was a little slow during checkout."
      },
      {
        id: 2,
        name: "Ritu Chawla",
        rating: 3.8,
        comment: "Decent stay overall, though the room could have been a bit cleaner."
      },
      {
        id: 3,
        name: "Deepak Kumar",
        rating: 4.3,
        comment: "Room was fine but the AC was noisy at night."
      },
      {
        id: 4,
        name: "Lakshmi Menon",
        rating: 4,
        comment: "Decent stay overall, though the room could have been a bit cleaner."
      }
    ]
  },
  {
    id: 139,
    name: "Green City Residency",
    address: "Chandigarh, India",
    expandedAddress: "Sector 20, near Market Area, Chandigarh, India",
    availableFrom: "2026-09-02",
    availableTo: "2026-09-20",
    price: 2600,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "AC",
      "TV",
      "Breakfast"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-tv",
      "fa-solid fa-mug-saucer"
    ],
    rating: 4.8,
    reviews: 228,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Sanjay Mehta",
        rating: 4.8,
        comment: "Staff went out of their way to help us, truly appreciated."
      },
      {
        id: 2,
        name: "Nisha Agarwal",
        rating: 4.5,
        comment: "Loved the location and the amenities were exactly as described."
      },
      {
        id: 3,
        name: "Nikhil Bansal",
        rating: 5,
        comment: "Clean rooms and friendly staff made our trip memorable."
      },
      {
        id: 4,
        name: "Neha Gupta",
        rating: 4.7,
        comment: "Perfect for a short trip, everything was well maintained."
      }
    ]
  },
  {
    id: 140,
    name: "Royal Chandigarh Hotel",
    address: "Chandigarh, India",
    expandedAddress: "Sector 9, near Leisure Valley, Chandigarh, India",
    availableFrom: "2026-09-08",
    availableTo: "2026-09-30",
    price: 4200,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "AC",
      "Parking",
      "Room Service"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-square-parking",
      "fa-solid fa-bell-concierge"
    ],
    rating: 4.2,
    reviews: 365,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Suresh Pillai",
        rating: 4.2,
        comment: "Spacious rooms and good WiFi speed throughout our stay."
      },
      {
        id: 2,
        name: "Shreya Bose",
        rating: 3.9,
        comment: "Comfortable beds and quick check-in, would definitely come back."
      },
      {
        id: 3,
        name: "Rohan Sharma",
        rating: 4.4,
        comment: "The view from the room was stunning, highly recommend this place."
      },
      {
        id: 4,
        name: "Sneha Reddy",
        rating: 4.1,
        comment: "Staff went out of their way to help us, truly appreciated."
      }
    ]
  },
  {
    id: 141,
    name: "Ranchi Grand Hotel",
    address: "Ranchi, Jharkhand",
    expandedAddress: "Main Road, near Firayalal Chowk, Ranchi, Jharkhand",
    availableFrom: "2026-09-01",
    availableTo: "2026-09-20",
    price: 1900,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Pool",
      "WiFi",
      "AC",
      "Restaurant"
    ],
    amenitiesIcon: [
      "fa-solid fa-person-swimming",
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-utensils"
    ],
    rating: 4.9,
    reviews: 502,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Vivek Choudhary",
        rating: 4.9,
        comment: "Great stay, staff was very courteous and the room was spotless."
      },
      {
        id: 2,
        name: "Tanvi Shah",
        rating: 4.6,
        comment: "Excellent value for money, the breakfast was a nice touch."
      },
      {
        id: 3,
        name: "Vikram Rao",
        rating: 5,
        comment: "Smooth booking experience and the hotel exceeded expectations."
      },
      {
        id: 4,
        name: "Divya Menon",
        rating: 4.8,
        comment: "Spacious rooms and good WiFi speed throughout our stay."
      }
    ]
  },
  {
    id: 142,
    name: "Ranchi Palace Inn",
    address: "Ranchi, Jharkhand",
    expandedAddress: "Lalpur, near Lalpur Chowk, Ranchi, Jharkhand",
    availableFrom: "2026-09-03",
    availableTo: "2026-09-30",
    price: 2300,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "Gym",
      "AC",
      "Breakfast"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-dumbbell",
      "fa-solid fa-snowflake",
      "fa-solid fa-mug-saucer"
    ],
    rating: 4.3,
    reviews: 639,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Rajesh Tiwari",
        rating: 4.3,
        comment: "Loved the location and the amenities were exactly as described."
      },
      {
        id: 2,
        name: "Priya Verma",
        rating: 4,
        comment: "Clean rooms and friendly staff made our trip memorable."
      },
      {
        id: 3,
        name: "Arjun Nair",
        rating: 4.5,
        comment: "Perfect for a short trip, everything was well maintained."
      },
      {
        id: 4,
        name: "Ritu Chawla",
        rating: 4.2,
        comment: "Great stay, staff was very courteous and the room was spotless."
      }
    ]
  },
  {
    id: 143,
    name: "Rock Garden Hotel",
    address: "Ranchi, Jharkhand",
    expandedAddress: "Kanke Road, near Rock Garden, Ranchi, Jharkhand",
    availableFrom: "2026-09-02",
    availableTo: "2026-09-17",
    price: 2500,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Parking",
      "WiFi",
      "TV",
      "Room Service"
    ],
    amenitiesIcon: [
      "fa-solid fa-square-parking",
      "fa-solid fa-wifi",
      "fa-solid fa-tv",
      "fa-solid fa-bell-concierge"
    ],
    rating: 3.7,
    reviews: 776,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Harish Pandey",
        rating: 3.7,
        comment: "Average experience, food options were limited near the property."
      },
      {
        id: 2,
        name: "Ananya Iyer",
        rating: 3.4,
        comment: "Comfortable enough for a short stay, nothing extraordinary though."
      },
      {
        id: 3,
        name: "Sanjay Mehta",
        rating: 3.9,
        comment: "Average experience, food options were limited near the property."
      },
      {
        id: 4,
        name: "Nisha Agarwal",
        rating: 3.6,
        comment: "Good location but service was a little slow during checkout."
      }
    ]
  },
  {
    id: 144,
    name: "Hillside Residency",
    address: "Ranchi, Jharkhand",
    expandedAddress: "Morabadi, near Tagore Hill Road, Ranchi, Jharkhand",
    availableFrom: "2026-09-05",
    availableTo: "2026-09-25",
    price: 2100,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "AC",
      "WiFi",
      "Restaurant",
      "24/7 Front Desk"
    ],
    amenitiesIcon: [
      "fa-solid fa-snowflake",
      "fa-solid fa-wifi",
      "fa-solid fa-utensils",
      "fa-solid fa-clock"
    ],
    rating: 4.4,
    reviews: 913,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Amit Singh",
        rating: 4.4,
        comment: "Excellent value for money, the breakfast was a nice touch."
      },
      {
        id: 2,
        name: "Pooja Joshi",
        rating: 4.1,
        comment: "Smooth booking experience and the hotel exceeded expectations."
      },
      {
        id: 3,
        name: "Suresh Pillai",
        rating: 4.6,
        comment: "Spacious rooms and good WiFi speed throughout our stay."
      },
      {
        id: 4,
        name: "Shreya Bose",
        rating: 4.3,
        comment: "Comfortable beds and quick check-in, would definitely come back."
      }
    ]
  },
  {
    id: 145,
    name: "The Jharkhand Grand",
    address: "Ranchi, Jharkhand",
    expandedAddress: "Doranda, near Airport Road, Ranchi, Jharkhand",
    availableFrom: "2026-09-06",
    availableTo: "2026-09-22",
    price: 2800,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1578683010236-d716f3983a37?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f3983a37?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f3983a37?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "AC",
      "TV",
      "Breakfast"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-tv",
      "fa-solid fa-mug-saucer"
    ],
    rating: 3.8,
    reviews: 1050,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Karan Malhotra",
        rating: 3.8,
        comment: "Nice hotel for the price, just wish the WiFi was faster."
      },
      {
        id: 2,
        name: "Kavita Desai",
        rating: 3.5,
        comment: "Good location but service was a little slow during checkout."
      },
      {
        id: 3,
        name: "Vivek Choudhary",
        rating: 4,
        comment: "Decent stay overall, though the room could have been a bit cleaner."
      },
      {
        id: 4,
        name: "Tanvi Shah",
        rating: 3.7,
        comment: "Room was fine but the AC was noisy at night."
      }
    ]
  },
  {
    id: 146,
    name: "City View Ranchi",
    address: "Ranchi, Jharkhand",
    expandedAddress: "Harmu Road, near Harmu Market, Ranchi, Jharkhand",
    availableFrom: "2026-09-01",
    availableTo: "2026-09-14",
    price: 1700,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "AC",
      "Parking",
      "Room Service"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-square-parking",
      "fa-solid fa-bell-concierge"
    ],
    rating: 4.5,
    reviews: 1187,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Rahul Kapoor",
        rating: 4.5,
        comment: "The view from the room was stunning, highly recommend this place."
      },
      {
        id: 2,
        name: "Meera Krishnan",
        rating: 4.2,
        comment: "Staff went out of their way to help us, truly appreciated."
      },
      {
        id: 3,
        name: "Rajesh Tiwari",
        rating: 4.7,
        comment: "Loved the location and the amenities were exactly as described."
      },
      {
        id: 4,
        name: "Priya Verma",
        rating: 4.4,
        comment: "Clean rooms and friendly staff made our trip memorable."
      }
    ]
  },
  {
    id: 147,
    name: "Forest Edge Hotel",
    address: "Ranchi, Jharkhand",
    expandedAddress: "Ratu Road, near Piska More, Ranchi, Jharkhand",
    availableFrom: "2026-09-04",
    availableTo: "2026-09-28",
    price: 2000,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Pool",
      "WiFi",
      "AC",
      "Restaurant"
    ],
    amenitiesIcon: [
      "fa-solid fa-person-swimming",
      "fa-solid fa-wifi",
      "fa-solid fa-snowflake",
      "fa-solid fa-utensils"
    ],
    rating: 3.9,
    reviews: 1324,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Manish Yadav",
        rating: 3.9,
        comment: "Decent stay overall, though the room could have been a bit cleaner."
      },
      {
        id: 2,
        name: "Anjali Saxena",
        rating: 3.6,
        comment: "Room was fine but the AC was noisy at night."
      },
      {
        id: 3,
        name: "Harish Pandey",
        rating: 4.1,
        comment: "Average experience, food options were limited near the property."
      },
      {
        id: 4,
        name: "Ananya Iyer",
        rating: 3.8,
        comment: "Comfortable enough for a short stay, nothing extraordinary though."
      }
    ]
  },
  {
    id: 148,
    name: "Red Earth Residency",
    address: "Ranchi, Jharkhand",
    expandedAddress: "Ashok Nagar, near Ashok Nagar Park, Ranchi, Jharkhand",
    availableFrom: "2026-09-07",
    availableTo: "2026-09-30",
    price: 2200,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "WiFi",
      "Gym",
      "AC",
      "Breakfast"
    ],
    amenitiesIcon: [
      "fa-solid fa-wifi",
      "fa-solid fa-dumbbell",
      "fa-solid fa-snowflake",
      "fa-solid fa-mug-saucer"
    ],
    rating: 4.6,
    reviews: 1461,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Aditya Bhatt",
        rating: 4.6,
        comment: "Perfect for a short trip, everything was well maintained."
      },
      {
        id: 2,
        name: "Isha Chopra",
        rating: 4.3,
        comment: "Great stay, staff was very courteous and the room was spotless."
      },
      {
        id: 3,
        name: "Amit Singh",
        rating: 4.8,
        comment: "Excellent value for money, the breakfast was a nice touch."
      },
      {
        id: 4,
        name: "Pooja Joshi",
        rating: 4.5,
        comment: "Smooth booking experience and the hotel exceeded expectations."
      }
    ]
  },
  {
    id: 149,
    name: "Royal Ranchi Stay",
    address: "Ranchi, Jharkhand",
    expandedAddress: "Hinoo, near Hinoo Bridge, Ranchi, Jharkhand",
    availableFrom: "2026-09-02",
    availableTo: "2026-09-21",
    price: 2400,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Parking",
      "WiFi",
      "TV",
      "Room Service"
    ],
    amenitiesIcon: [
      "fa-solid fa-square-parking",
      "fa-solid fa-wifi",
      "fa-solid fa-tv",
      "fa-solid fa-bell-concierge"
    ],
    rating: 4,
    reviews: 148,
    offer: "20% OFF",
    reviewData: [
      {
        id: 1,
        name: "Deepak Kumar",
        rating: 4,
        comment: "Average experience, food options were limited near the property."
      },
      {
        id: 2,
        name: "Lakshmi Menon",
        rating: 3.7,
        comment: "Good location but service was a little slow during checkout."
      },
      {
        id: 3,
        name: "Karan Malhotra",
        rating: 4.2,
        comment: "Nice hotel for the price, just wish the WiFi was faster."
      },
      {
        id: 4,
        name: "Kavita Desai",
        rating: 3.9,
        comment: "Good location but service was a little slow during checkout."
      }
    ]
  },
  {
    id: 150,
    name: "Capital Heights Ranchi",
    address: "Ranchi, Jharkhand",
    expandedAddress: "Kadru, near Kadru Main Road, Ranchi, Jharkhand",
    availableFrom: "2026-09-08",
    availableTo: "2026-09-26",
    price: 2600,
    room: 1,
    guests: 1,
    image: [
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "AC",
      "WiFi",
      "Restaurant",
      "24/7 Front Desk"
    ],
    amenitiesIcon: [
      "fa-solid fa-snowflake",
      "fa-solid fa-wifi",
      "fa-solid fa-utensils",
      "fa-solid fa-clock"
    ],
    rating: 4.7,
    reviews: 285,
    offer: "10% OFF",
    reviewData: [
      {
        id: 1,
        name: "Nikhil Bansal",
        rating: 4.7,
        comment: "Spacious rooms and good WiFi speed throughout our stay."
      },
      {
        id: 2,
        name: "Neha Gupta",
        rating: 4.4,
        comment: "Comfortable beds and quick check-in, would definitely come back."
      },
      {
        id: 3,
        name: "Rahul Kapoor",
        rating: 4.9,
        comment: "The view from the room was stunning, highly recommend this place."
      },
      {
        id: 4,
        name: "Meera Krishnan",
        rating: 4.6,
        comment: "Staff went out of their way to help us, truly appreciated."
      }
    ]
  }
]);
  const [fData, setFData] = useState([])
  const [text, setText] = useState("")
  const [checkInDate, setCheckInDate] = useState("")
  const [checkOutDate,setCheckOutDate]=useState("")
  // const [room, setRoom] = useState(1)
  // const [guest, setGuest] = useState(1)
  const [rmAndGuest, setRmAndGuest] = useState([
{
  id:1,
  Room:1,
  Guest:1
  },
])
  const [rmData, setRmData] = useState([
  // {
  //   id:2,
  //   Room:id,
  //   Guest:1
  // },
  // {
  //   id:3,
  //   Room:id,
  //   Guest:1
  // },
  // {
  //   id:4,
  //   Room:id,
  //   Guest:1
  // },
  // {
  //   id:5,
  //   Room:id,
  //   Guest:1
  // }
])
  
  return (
    <div>
        <ContextData.Provider value={{hotelData,setHotelData,text,setText,checkInDate,setCheckInDate,checkOutDate,setCheckOutDate,
          rmAndGuest,setRmAndGuest,fData,setFData,rmData,setRmData
        }}
        >
            {props.children}
        </ContextData.Provider>
    </div>
  )
}

export default Context
