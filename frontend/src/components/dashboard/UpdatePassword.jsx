import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../store/slices/userSlice';
import { updatePassword, clearAllUpdateProfileErrors } from '../../store/slices/updateProfileSlice';
import { toast } from 'react-toastify';

const UpdatePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const { user } = useSelector((state) => state.user);
  const { loading, error, isUpdated } = useSelector((state) => state.updateProfile);

  const dispatch = useDispatch();

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
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-200 mt-8">
      <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Update Password</h2>

      <form className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="oldPassword">
            Old Password
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="oldPassword"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="Enter your old password"
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="newPassword">
            New Password
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter your new password"
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="confirmPassword">
            Confirm New Password
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your new password"
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="showPassword"
            className="mr-2"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          <label htmlFor="showPassword" className="text-sm text-gray-700">
            Show Password
          </label>
        </div>

        <button
          type="button"
          onClick={handleUpdatePassword}
          disabled={loading || !currentPassword || !newPassword || !confirmPassword}
          className="w-full py-3 bg-yellow-400 text-white font-medium rounded-lg shadow hover:bg-yellow-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Updating...' : 'Update Password'}
        </button>
      </form>

      {error && (
        <div className="text-center text-red-500 mt-4 text-sm">{error}</div>
      )}
      {isUpdated && !error && (
        <div className="text-center text-green-500 mt-4 text-sm">
          Password successfully updated!
        </div>
      )}
    </div>
  );
};

export default UpdatePassword;
