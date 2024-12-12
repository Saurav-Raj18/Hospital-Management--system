import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { doctors } from '../assets/assets';

const Appointment = () => {
  const { docId } = useParams();
  const navigate = useNavigate();
  const filteredDoctor = doctors.filter((item) => item._id === docId);
  const relatedDoctor = doctors.filter((item) => item.speciality === filteredDoctor[0]?.speciality && item._id !== filteredDoctor[0]?._id);

  // Track the selected date and time
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  // Generate dynamic dates starting from today
  const generateDates = () => {
    const today = new Date();
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i); // Increment the date
      dates.push(date);
    }
    return dates;
  };

  // Generate time slots for each date
  const generateTimeSlots = () => {
    return ['19:30', '20:00', '20:30']; // You can expand this array to include more time slots
  };

  // Handle date selection
  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedTime(null); // Reset time when date changes
  };

  // Handle time selection
  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  // Handle booking appointment
  const handleBookAppointment = () => {
    if (selectedDate && selectedTime) {
      // Proceed with booking logic, for example, call an API or show a confirmation
      alert(`Appointment booked for ${selectedDate.toLocaleDateString()} at ${selectedTime}`);
    } else {
      alert("Please select both a date and time.");
    }
  };

  return (
    <div className="p-4">
      {filteredDoctor.length > 0 ? (
        <div>
          {filteredDoctor.map((item) => (
            <div key={item._id} className="flex flex-col md:flex-row items-center md:items-start gap-5">
              {/* Image Section */}
              <img className="bg-primary w-full sm:max-w-72 rounded-lg" src={item.image} alt={item.name} />

              {/* Content Section */}
              <div className="flex-1 border border-[#ADADAD] rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
                <h1 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h1>
                <div className="flex items-center flex-wrap gap-2 mb-4">
                  <span className="text-sm font-medium text-gray-700">{item.degree}</span>
                  <span className="text-sm font-medium text-gray-500">-</span>
                  <span className="text-sm text-gray-600">{item.speciality}</span>
                  <div className="bg-gray-50 px-3 py-1 rounded-lg shadow-inner border border-gray-10 text-sm font-medium text-blue-500">
                    {item.experience}
                  </div>
                </div>
                <p className="font-medium text-lg text-gray-700 mb-2">About</p>
                <p className="text-sm text-gray-600 mb-4">{item.about}</p>
                <p className="text-sm font-medium text-gray-800">
                  Appointment fees: <span className="text-green-500">${item.fees}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">
          No doctor available with this speciality right now.
        </p>
      )}

      <div className="sm:ml-72 sm:pl-4 mt-8 font-medium text-[#565656]">
        <p>Booking slots</p>

        {/* Display dynamic dates */}
        <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
          {generateDates().map((date, index) => (
            <div
              key={index}
              onClick={() => handleDateSelect(date)}
              className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                selectedDate && selectedDate.toDateString() === date.toDateString() ? 'bg-primary text-white' : 'border border-[#DDDDDD]'
              }`}
            >
              <p>{date.toLocaleString('default', { weekday: 'short' }).toUpperCase()}</p>
              <p>{date.getDate()}</p>
            </div>
          ))}
        </div>

        {/* Display time slots based on selected date */}
        {selectedDate && (
          <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
            {generateTimeSlots().map((time, index) => (
              <p
                key={index}
                onClick={() => handleTimeSelect(time)}
                className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                  selectedTime === time ? 'bg-primary text-white' : 'border border-[#DDDDDD]'
                }`}
              >
                {time}
              </p>
            ))}
          </div>
        )}

        {/* Book appointment button */}
        <button
          onClick={handleBookAppointment}
          className="bg-primary text-white text-sm font-light px-20 py-3 rounded-full my-6"
        >
          Book an appointment
        </button>
      </div>

      {/* Related Doctors Section */}
      <div className="flex flex-col items-center gap-4 my-16 text-[#262626]">
        <h1 className="text-3xl font-medium">Related Doctors</h1>
        <p className="sm:w-1/3 text-center text-sm">Simply browse through our extensive list of trusted doctors.</p>

        <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          {relatedDoctor.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-5px] transition-transform duration-300 shadow-md hover:shadow-lg"
            >
              {/* Doctor Image */}
              <img className="w-full h-48 sm:h-40 object-cover bg-gray-100" src={item.image} alt={item.name} />
              {/* Doctor Details */}
              <div className="p-4">
                <p className="flex items-center gap-2 text-sm text-green-500">Available</p>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appointment;
