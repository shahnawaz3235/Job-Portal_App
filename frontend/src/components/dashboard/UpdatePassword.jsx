import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../store/slices/userSlice';
import { updatePassword , clearAllUpdateProfileErrors} from '../../store/slices/updateProfileSlice';
import { toast } from 'react-toastify';  // Ensure you've installed react-toastify for alerts

const UpdatePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const { user } = useSelector((state) => state.user);
  const { loading, error, isUpdated } = useSelector((state) => state.updateProfile);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdatePassword = () => {
    const formData = new FormData();
    formData.append('currentPassword', currentPassword);
    formData.append('newPassword', newPassword);
    formData.append('confirmPassword', confirmPassword);

    dispatch(updatePassword(formData));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllUpdateProfileErrors());
    }

    if (isUpdated) {
      toast.success('Password Updated!');
      dispatch(getUser());
      dispatch(clearAllUpdateProfileErrors());
    }
  }, [dispatch, loading, error, isUpdated]);

  return (
    <div className="max-w-2xl mx-auto bg-yellow-50 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-yellow-600 mb-4">Update Password</h2>
      <form className="space-y-4">
          {/* Old Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="oldPassword">Old Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="oldPassword"
              className="mt-2 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Enter your old password"
            />
          </div>

          {/* New Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="newPassword">New Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="newPassword"
              className="mt-2 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter your new password"
            />
          </div>

          {/* Confirm New Password */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700" htmlFor="confirmPassword">Confirm New Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="confirmPassword"
              className="mt-2 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your new password"
            />
          </div>

          {/* Show Password Toggle */}
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="showPassword"
              className="mr-2"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            <label htmlFor="showPassword" className="text-sm text-gray-700">Show Password</label>
          </div>

          {/* Update Button */}
          <div className="flex justify-center">
            <button
              type="button"
              onClick={handleUpdatePassword}
              className="w-full py-3 px-4 bg-yellow-500 text-white font-semibold rounded-md shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              disabled={loading || !currentPassword || !newPassword || !confirmPassword}
            >
              {loading ? 'Updating...' : 'Update Password'}
            </button>
          </div>
        </form>

        {/* Error and Success Message */}
        {error && <div className="text-center text-red-600 mt-4">{error}</div>}
        {isUpdated && !error && <div className="text-center text-green-600 mt-4">Password successfully updated!</div>}
      </div>
  );
};

export default UpdatePassword;
