import React, { useState } from 'react';
import { assets } from '../assets/assets';

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Saurav Raj",
    image: assets.profile_pic,
    email: "saurav@gmail.com",
    phone: "1234567891",
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Church Road, London",
    },
    gender: "Male",
    dob: "2000-01-20",
  });
  const [isEdit, setIsEdit] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const toggleEdit = () => {
    if (isEdit) {
      // Show success message when toggling edit off
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
    }
    setIsEdit(!isEdit);
  };

  return (
    <div className=" max-w-lg sm:max-w-4xl mx-auto p-4 sm:p-6 bg-white shadow-lg rounded-lg mt-6">
      {/* Toast Notification */}
      {showMessage && (
        <div className="absolute top-2 right-2 bg-green-500 text-white text-sm max-w-xs px-4 py-2 rounded shadow-lg animate-slide-in">
          Profile updated successfully
        </div>
      )}

      <div className="flex flex-col items-center">
        <img
          src={userData.image}
          alt="Profile"
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-gray-200"
        />
        <div className="mt-4 w-full text-center">
          {isEdit ? (
            <input
              type="text"
              className="border border-gray-300 rounded px-2 py-1 w-full sm:max-w-xs text-center"
              value={userData.name}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          ) : (
            <p className="text-lg sm:text-xl font-semibold">{userData.name}</p>
          )}
        </div>
      </div>

      <hr className="my-4" />
      <div>
        <p className="text-base sm:text-lg font-semibold mb-2">Contact Information</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="font-medium text-sm">Email id:</p>
            <p className="text-sm text-blue-500">{userData.email}</p>
          </div>
          <div>
            <p className="font-medium text-sm">Phone:</p>
            {isEdit ? (
              <input
                type="phone"
                className="border border-gray-300 rounded px-2 py-1 w-full"
                value={userData.phone}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, phone: e.target.value }))
                }
              />
            ) : (
              <p className="text-sm">{userData.phone}</p>
            )}
          </div>
          <div className="col-span-2">
            <p className="font-medium text-sm">Address:</p>
            {isEdit ? (
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  className="border border-gray-300 rounded px-2 py-1 w-full"
                  value={userData.address.line1}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line1: e.target.value },
                    }))
                  }
                />
                <input
                  type="text"
                  className="border border-gray-300 rounded px-2 py-1 w-full"
                  value={userData.address.line2}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line2: e.target.value },
                    }))
                  }
                />
              </div>
            ) : (
              <p className="text-sm">
                {userData.address.line1} <br />
                {userData.address.line2}
              </p>
            )}
          </div>
        </div>
      </div>

      <hr className="my-4" />
      <div>
        <p className="text-base sm:text-lg font-semibold mb-2">Basic Information</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="font-medium text-sm">Gender:</p>
            {isEdit ? (
              <select
                className="border border-gray-300 rounded px-2 py-1 w-full"
                value={userData.gender}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, gender: e.target.value }))
                }
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p className="text-sm">{userData.gender}</p>
            )}
          </div>
          <div>
            <p className="font-medium text-sm">Birthday:</p>
            {isEdit ? (
              <input
                type="date"
                className="border border-gray-300 rounded px-2 py-1 w-full"
                value={userData.dob}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, dob: e.target.value }))
                }
              />
            ) : (
              <p className="text-sm">{userData.dob}</p>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-center sm:justify-end mt-6">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition"
          onClick={toggleEdit}
        >
          {isEdit ? "Save" : "Edit"}
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
