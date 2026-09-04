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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
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
    guests: 1
  }
]);
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
    }
  ])
  
  return (
    <div>
        <ContextData.Provider value={{hotelData,setHotelData,text,setText,checkInDate,setCheckInDate,checkOutDate,setCheckOutDate,
          rmAndGuest,setRmAndGuest
        }}
        >
            {props.children}
        </ContextData.Provider>
    </div>
  )
}

export default Context
