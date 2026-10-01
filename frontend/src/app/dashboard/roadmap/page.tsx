export default function LearningRoadmap() {
  const steps = [
    { title: 'Current Skills', description: 'Python, SQL, Statistics basics', completed: true },
    { title: 'Machine Learning', description: 'Scikit-learn, Model evaluation, Feature engineering', completed: true },
    { title: 'Deep Learning', description: 'Neural networks, PyTorch/TensorFlow fundamentals', completed: false, active: true },
    { title: 'Data Visualization', description: 'Tableau, Matplotlib, Seaborn', completed: false },
    { title: 'Practical Projects', description: 'End-to-end data science portfolio projects', completed: false },
    { title: 'Target Career', description: 'Junior Data Scientist', completed: false, isTarget: true }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-purple-50 border border-purple-200 text-purple-800 rounded-lg p-4 mb-6">
        <h3 className="font-bold text-lg">Your Learning Roadmap is Ready!</h3>
        <p className="text-sm mt-1">Follow these steps to bridge your skill gaps and reach your target career.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-800">Step 3: Learning Roadmap</h2>
        <p className="text-gray-600 mt-2">Your personalized path to becoming a Data Scientist.</p>
      </div>

      <div className="bg-white rounded-lg shadow p-8 border border-gray-100">
        <div className="relative border-l-2 border-gray-200 ml-4 space-y-10">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex items-start">
              {/* Timeline dot */}
              <div className={`absolute -left-[29px] flex items-center justify-center w-14 h-14 rounded-full border-4 border-white ${
                step.completed ? 'bg-green-500' : step.active ? 'bg-blue-600' : step.isTarget ? 'bg-purple-600' : 'bg-gray-300'
              }`}>
                {step.completed ? (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                ) : step.isTarget ? (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ) : (
                  <div className="w-3 h-3 bg-white rounded-full" />
                )}
              </div>
              
              <div className="ml-10">
                <h3 className={`text-lg font-bold ${
                  step.completed ? 'text-green-600' : step.active ? 'text-blue-600' : step.isTarget ? 'text-purple-600' : 'text-gray-600'
                }`}>
                  {step.title}
                  {step.active && <span className="ml-3 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full uppercase tracking-wider font-semibold">In Progress</span>}
                </h3>
                <p className="mt-2 text-gray-600">{step.description}</p>
                
                {step.active && (
                  <div className="mt-4 bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Recommended Courses</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center justify-between text-sm">
                        <span className="text-blue-600 hover:underline cursor-pointer">Neural Networks and Deep Learning</span>
                        <span className="text-gray-500">Coursera</span>
                      </li>
                      <li className="flex items-center justify-between text-sm">
                        <span className="text-blue-600 hover:underline cursor-pointer">PyTorch for Deep Learning</span>
                        <span className="text-gray-500">Udemy</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
