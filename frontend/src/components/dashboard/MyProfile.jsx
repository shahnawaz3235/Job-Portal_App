import React from "react";
import { useSelector } from "react-redux";

const MyProfile = () => {
  const { user } = useSelector((state) => state.user);

  const fields = [
    { label: "Name", value: user?.username },
    { label: "Email", value: user?.email },
    { label: "Address", value: user?.address },
    { label: "Phone", value: user?.phone },
    { label: "Role", value: user?.role },
    ...(user?.role === "Job Seeker"
      ? [
          { label: "First Niche", value: user?.niches?.firstNiche },
          { label: "Second Niche", value: user?.niches?.secondNiche },
          { label: "Third Niche", value: user?.niches?.thirdNiche },
        ]
      : []),
    { label: "Joined On", value: new Date(user?.createdAt).toLocaleDateString() },
  ];

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-200 mt-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">My Profile</h2>
      <form className="space-y-5">
        {fields.map((field, index) => (
          <div key={index}>
            <label className="block text-sm font-medium text-gray-500 mb-1">
              {field.label}
            </label>
            <input
              type="text"
              value={field.value || ""}
              readOnly
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 px-4 py-2 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition duration-200"
            />
          </div>
        ))}
      </form>
    </div>
  );
};

export default MyProfile;
