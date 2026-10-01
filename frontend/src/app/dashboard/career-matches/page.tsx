import Link from 'next/link';

export default function CareerMatches() {
  const matches = [
    {
      title: 'Data Scientist',
      matchScore: 89,
      description: 'Analyze complex data to help make business decisions.',
      requiredSkills: ['Python', 'SQL', 'Statistics', 'Machine Learning', 'Data Visualization'],
      missingSkills: ['Data Visualization', 'Deep Learning'],
    },
    {
      title: 'Data Analyst',
      matchScore: 85,
      description: 'Interpret data and turn it into information which can offer ways to improve a business.',
      requiredSkills: ['Python', 'SQL', 'Excel', 'Data Visualization'],
      missingSkills: ['Data Visualization'],
    },
    {
      title: 'Machine Learning Engineer',
      matchScore: 78,
      description: 'Design and build machine learning systems and models.',
      requiredSkills: ['Python', 'Machine Learning', 'Deep Learning', 'MLOps', 'Cloud Computing'],
      missingSkills: ['Deep Learning', 'MLOps', 'Cloud Computing'],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 mb-6">
        <h3 className="font-bold text-lg">Profile Analyzed Successfully!</h3>
        <p className="text-sm mt-1">Here are your personalized career matches and skill gaps. Choose a career to view your learning roadmap.</p>
      </div>

      <h2 className="text-2xl font-bold text-gray-800">Step 2: Career Matches</h2>
      <p className="text-gray-600">Based on your skills, education, and interests.</p>

      <div className="space-y-6">
        {matches.map((career, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{career.title}</h3>
                  <p className="text-gray-600 mt-1">{career.description}</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className={`text-2xl font-bold ${career.matchScore >= 80 ? 'text-green-600' : 'text-blue-600'}`}>
                    {career.matchScore}%
                  </div>
                  <span className="text-xs text-gray-500 uppercase tracking-wide font-semibold mt-1">Match</span>
                </div>
              </div>

              <div className="mt-6 border-t border-gray-100 pt-4">
                <h4 className="text-sm font-semibold text-gray-800 mb-2">Required Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {career.requiredSkills.map((skill, sIdx) => {
                    const isMissing = career.missingSkills.includes(skill);
                    return (
                      <span
                        key={sIdx}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          isMissing ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-green-50 text-green-700 border border-green-200'
                        }`}
                      >
                        {skill} {isMissing && '(Missing)'}
                      </span>
                    );
                  })}
                </div>
              </div>

              {career.missingSkills.length > 0 && (
                <div className="mt-4 bg-yellow-50 rounded-lg p-4 flex items-start space-x-3">
                  <svg className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h5 className="text-sm font-semibold text-yellow-800">Skill Gap Detected</h5>
                    <p className="text-sm text-yellow-700 mt-1">
                      You are missing {career.missingSkills.length} key skills for this role. We recommend focusing on <strong>{career.missingSkills[0]}</strong> next.
                    </p>
                  </div>
                </div>
              )}

              <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
                <Link href={`/dashboard/roadmap?career=${encodeURIComponent(career.title)}`} className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium">
                  <span>View Learning Roadmap</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
