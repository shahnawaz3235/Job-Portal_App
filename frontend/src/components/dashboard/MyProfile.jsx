import React, { useState } from "react";
import { useSelector } from "react-redux";

const MyProfile = () => {
  const { user } = useSelector((state) => state.user);


  const [username] = useState(user && user.username);
  const [email] = useState(user && user.email);
  const [phone] = useState(user && user.phone);
  const [address] = useState(user && user.address);
  const [role] = useState(user && user.role);

  const [coverLetter] = useState(user && user.coverLetter);
  const [firstNiche] = useState(user && user.niches?.firstNiche);
  const [secondNiche] = useState(
    user && user.niches?.secondNiche
  );
  const [thirdNiche] = useState(user && user.niches?.thirdNiche);
 

  return (
    <div className="max-w-2xl mx-auto bg-yellow-50 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-yellow-600 mb-4">My Profile</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="username"
            value={username}
            readOnly
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            readOnly
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={address}
            readOnly
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="number"
            name="phone"
            value={phone}
            readOnly
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Role
          </label>
          <input
            type="text"
            name="role"
            value={role}
            readOnly
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        {user.role === "Job Seeker" && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Niche
              </label>
              <input
                type="text"
                name="firstNiche"
                value={firstNiche}
                readOnly
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Second Niche
              </label>
              <input
                type="text"
                name="secondNiche"
                value={secondNiche}
                readOnly
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Third Niche
              </label>
              <input
                type="text"
                name="thirdNiche"
                value={thirdNiche}
                readOnly
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
          </>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Joined On
          </label>
          <input
            type="text"
            value={new Date(user.createdAt).toLocaleDateString()}
            readOnly
            className="w-full border border-gray-300 p-2 rounded-md bg-gray-100"
          />
        </div>
      </form>
    </div>
  );
};

export default MyProfile;
