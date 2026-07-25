// f Parent → Child communication using props


export const EventProps = () => {

  // Parent component event handler
  const handleWelcomeUser = (user) => {
    alert(`Hey, ${user}`);
  };

  // Parent component event handler
  const handleHover = () => {
    alert(`Hey, thanks for hovering me`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col gap-4">

        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Event Props
        </h1>

        {/* Parent passes event handler functions to Child */}
        <WelcomeUser
          onClick={() => handleWelcomeUser("Shrabani")}
          onMouseEnter={handleHover}
        />

      </div>

    </div>
  );
};


// Child component
const WelcomeUser = (props) => {
// destructure:
  const { onClick, onMouseEnter } = props;

  // Function defined inside child
  const handleGreeting = () => {
    alert(`Hey user, welcome`);
  };

  return (
    <div className="flex flex-col gap-4">

      {/* Function received from Parent */}
      <button
        onClick={onClick}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Click Me
      </button>

      {/* Function received from Parent */}
      <button
        onMouseEnter={onMouseEnter}
        className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
      >
        Hover Me
      </button>

      {/* Function defined inside Child */}
      <button
        onClick={handleGreeting}
        className="bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
      >
        Greeting
      </button>

    </div>
  );
};