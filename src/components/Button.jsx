const Button = ({ label, callback }) => {
  return (
    <button
      className='bg-purple-700 text-white text-lg font-semibold px-8 py-1 rounded-3xl hover:opacity-90'
      onClick={callback}
    >
      {label}
    </button>
  );
};

export default Button;
