'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function StudentProfile() {
  const router = useRouter();

  const [profile, setProfile] = useState({
    name: 'Jane Doe',
    studentId: 'ST-2023-091',
    major: 'Computer Science',
    university: 'State University',
    gpa: '3.65',
    skills: 'Python, SQL, Statistics, Machine Learning',
    projects: 'Data Analysis, AI Project',
    interests: 'Data Science, Artificial Intelligence',
    preferredCareer: 'Data Scientist'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Move to career matches after completing profile
    router.push('/dashboard/career-matches');
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="bg-blue-50 border border-blue-200 text-blue-800 rounded-lg p-4 mb-6">
        <h3 className="font-bold text-lg">Welcome! Please complete your student profile.</h3>
        <p className="text-sm mt-1">Our AI needs this information to analyze your background and generate personalized career matches and a learning roadmap for you.</p>
      </div>

      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Step 1: Student Profile</h2>
      </div>

      <div className="bg-white rounded-lg shadow border border-gray-100 p-6">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input type="text" name="name" value={profile.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Student ID</label>
              <input type="text" name="studentId" value={profile.studentId} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Major/Program</label>
              <input type="text" name="major" value={profile.major} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">GPA</label>
              <input type="text" name="gpa" value={profile.gpa} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Technical Skills (comma separated)</label>
            <textarea name="skills" rows={2} value={profile.skills} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Projects</label>
            <textarea name="projects" rows={2} value={profile.projects} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Interests</label>
            <textarea name="interests" rows={2} value={profile.interests} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
          </div>

          <div className="pt-4 flex justify-end">
            <button type="button" onClick={handleSave} className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 font-medium transition-colors">
              Save Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
