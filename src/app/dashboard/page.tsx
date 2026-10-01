export default function DashboardOverview() {
  const topMatches = [
    { title: 'Data Scientist', match: 89 },
    { title: 'Data Analyst', match: 85 },
    { title: 'ML Engineer', match: 78 },
  ];

  const skillGaps = [
    { skill: 'Python', status: 'learned' },
    { skill: 'SQL', status: 'learned' },
    { skill: 'Statistics', status: 'learned' },
    { skill: 'Deep Learning', status: 'missing' },
    { skill: 'MLOps', status: 'missing' },
  ];

  const recommendations = [
    'Deep Learning Fundamentals',
    'Data Visualization with Python',
    'Cloud Computing Basics',
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Career Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Top Career Matches */}
        <div className="bg-white rounded-lg shadow p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Top Career Matches</h3>
          <div className="space-y-4">
            {topMatches.map((career, idx) => (
              <div key={idx} className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">{career.title}</span>
                <span className="text-sm font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  {career.match}%
                </span>
              </div>
            ))}
          </div>
          <button className="mt-6 w-full text-sm text-blue-600 font-medium hover:underline">
            View All Matches &rarr;
          </button>
        </div>

        {/* Skill Gap Analysis */}
        <div className="bg-white rounded-lg shadow p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Skill Gap (ML Engineer)</h3>
          <ul className="space-y-3">
            {skillGaps.map((item, idx) => (
              <li key={idx} className="flex items-center space-x-3">
                {item.status === 'learned' ? (
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
                <span className={item.status === 'learned' ? 'text-gray-700' : 'text-gray-500 line-through decoration-red-300'}>
                  {item.skill}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Recommended Learning */}
        <div className="bg-white rounded-lg shadow p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Recommended Learning</h3>
          <ul className="space-y-3">
            {recommendations.map((rec, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                </div>
                <span className="text-gray-700">{rec}</span>
              </li>
            ))}
          </ul>
          <button className="mt-6 w-full text-sm text-blue-600 font-medium hover:underline">
            View Learning Roadmap &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
