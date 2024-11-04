"use client";

import { updateUser } from "../_lib/actions";
import SubmitButton from "./SubmitButton";

function UpdateProfileForm({ user }) {
  const { firstName, lastName, email, userId } = user;

  return (
    <form
      action={updateUser}
      className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col"
    >
      <div className="space-y-2">
        <label>First Name</label>
        <input
          disabled
          defaultValue={firstName}
          name="firstName"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label>Last Name</label>
        <input
          disabled
          defaultValue={lastName}
          name="lastName"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label>Email</label>
        <input
          disabled
          defaultValue={email}
          name="email"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="userId">
          User Id (6-12 characters - only alphanumeric)
        </label>
        <input
          defaultValue={userId}
          name="userId"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
        />
      </div>

      <div className=" flex justify-end items-center gap-6">
        <SubmitButton pendingLabel="Updating...">Update profile</SubmitButton>
      </div>
    </form>
  );
}

export default UpdateProfileForm;
