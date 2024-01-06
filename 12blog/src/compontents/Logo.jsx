// eslint-disable-next-line react/prop-types
const Logo = ({ width = "100%" }) => {
  return (
    <div className={` inline-block px-6 py-2 ${width}`}>
      Our<span className="text-lg font-bold">Diaries</span>
    </div>
  );
};

export default Logo;
