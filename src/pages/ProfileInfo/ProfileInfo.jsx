import React from "react";
import {
  Mail,
  Phone,
  Globe,
  Flag,
  Heart,
  MapPin,
  Calendar,
  Briefcase,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProfileInfo = () => {
  const user = JSON.parse(localStorage.getItem("users"));

  return (
    <div className="w-full bg-gray-900">
      <div className="max-w-6xl mx-auto bg-gray-950 rounded-xl">
        {/* Hero Section with Gradient Overlay */}
        <div className="relative h-80">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900">
            <img
              src={user.bgPhoto}
              alt="Background"
              className="w-full h-full object-cover opacity-60 rounded-t-xl"
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />

          {/* Profile Picture & Basic Info - Centered */}
          <div className="absolute bottom-0 w-full">
            <div className="flex flex-col items-center -mb-20">
              <div className="ring-4 ring-blue-500 rounded-full p-1 bg-gray-900">
                <img
                  src={user.avatar}
                  alt="Profile"
                  className="w-36 h-36 rounded-full object-cover border-4 border-gray-900"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Card */}
        <Card className="bg-gray-900 border-none shadow-2xl">
          <CardContent className="pt-24 px-8 pb-8">
            {/* Name and Title Section */}
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-white mb-2">
                {user.fname} {user.lname}
              </h2>
              <div className="flex items-center justify-center gap-2 text-blue-400">
                <MapPin className="w-4 h-4" />
                <span>{user.region}</span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors">
                <div className="text-2xl font-bold text-white">
                  {user.repositories || "0"}
                </div>
                <div className="text-gray-400 text-sm">Repositories</div>
              </div>

              <div className="text-center p-4 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors">
                <div className="text-2xl font-bold text-white">
                  {user.following || (user.following >= 0 && "0")}
                </div>
                <div className="text-gray-400 text-sm">Following</div>
              </div>

              <div className="text-center p-4 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors">
                <div className="text-2xl font-bold text-white">
                  {user.followers || "0"}
                </div>
                <div className="text-gray-400 text-sm">Followers</div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-800 my-8" />

            {/* Info Grid with Hover Effects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Contact Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg hover:bg-gray-750 transition-all">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">{user.email}</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg hover:bg-gray-750 transition-all">
                    <Phone className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">{user.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg hover:bg-gray-750 transition-all">
                    <Globe className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">{user.region}</span>
                  </div>
                </div>
              </div>

              {/* Personal Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Personal Details
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg hover:bg-gray-750 transition-all">
                    <Flag className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-300">
                      Nationality: {user.nationality}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg hover:bg-gray-750 transition-all">
                    <Heart className="w-5 h-5 text-red-400" />
                    <span className="text-gray-300">
                      Religion: {user.religion}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg hover:bg-gray-750 transition-all">
                    <Briefcase className="w-5 h-5 text-orange-400" />
                    <span className="text-gray-300">Software Engineer</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                Edit Profile
              </button>
              <button className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
                Share Profile
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfileInfo;
